import express from "express";
import cors from "cors";
import Meting from "@meting/core";

const PORT = process.env.PORT || 3000;

// 从环境变量读取各平台 cookie
const PLATFORM_COOKIES = {
	tencent: process.env.METING_TENCENT_COOKIE || "",
	netease: process.env.METING_NETEASE_COOKIE || "",
	kugou: process.env.METING_KUGOU_COOKIE || "",
};

const app = express();
app.use(cors());

// 健康检查
app.get("/", (_req, res) => {
	const configured = Object.entries(PLATFORM_COOKIES)
		.filter(([, v]) => v)
		.map(([k]) => k);
	res.json({
		status: "ok",
		server: "firefly-meting-api",
		cookies: configured.length ? configured : "none",
	});
});

// Meting API 兼容端点
// 用法: /api?server=tencent&type=playlist&id=9722345987
app.get("/api", async (req, res) => {
	try {
		const { server, type, id } = req.query;

		if (!server || !type || !id) {
			return res.status(400).json({
				error: "缺少参数。用法: /api?server=tencent&type=playlist&id=xxx",
			});
		}

		const meting = new Meting(server);

		// 注入对应平台的 cookie（核心功能）
		const cookie = PLATFORM_COOKIES[server] || "";
		if (cookie) {
			meting.cookie(cookie);
			console.log(`[${server}] cookie 已注入 (${cookie.length} 字符)`);
		}

		// url / pic / lrc 三种类型返回原始结果
		if (["url", "pic", "lrc"].includes(type)) {
			const result = await meting[type](id);
			const data = typeof result === "string" ? JSON.parse(result) : result;
			return res.json(data);
		}

		// search 类型传额外参数
		if (type === "search") {
			const result = await meting.search(id, { page: 1, limit: 50 });
			const data = typeof result === "string" ? JSON.parse(result) : result;
			return res.json(data);
		}

		// song / playlist / album / artist
		// 不使用 format(true)，保留平台原始返回中的 url/pic/lrc
		const result = await meting[type](id);
		const data = typeof result === "string" ? JSON.parse(result) : result;
		const list = Array.isArray(data) ? data : [data];

		// 统一字段名，兼容 MusicManager 解析逻辑
		const items = list.map((item) => ({
			name: item.name || item.title || "Unknown",
			artist: item.artist || item.author || item.singer || "Unknown",
			url: item.url || "",
			pic: item.pic || item.cover || item.pic_url || "",
			lrc: item.lrc || item.lyric || "",
		}));

		res.json(items);
	} catch (e) {
		console.error("API 错误:", e.message);
		res.status(500).json({ error: e.message });
	}
});

app.listen(PORT, () => {
	console.log(`Firefly Meting API 运行在端口 ${PORT}`);
	const platforms = Object.entries(PLATFORM_COOKIES)
		.filter(([, v]) => v)
		.map(([k]) => k);
	console.log(
		`已配置 cookie 的平台: ${platforms.length ? platforms.join(", ") : "无"}`,
	);
});
