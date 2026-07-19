import type { CommentConfig } from "../types/commentConfig";

export const commentConfig: CommentConfig = {
	// 评论系统类型: none, twikoo, waline, giscus, disqus, artalk，默认为none，即不启用评论系统
	type: "waline",

	//twikoo评论系统配置
	twikoo: {
		envId: "https://twikoo.vercel.app",
		// 设置 Twikoo 评论系统语言
		lang: "zh-CN",
		// 是否启用文章访问量统计功能
		visitorCount: true,
		// Twikoo JS 文件地址，支持 CDN 链接
		// 中国推荐1: https://registry.npmmirror.com/twikoo/1.7.14/files/dist/twikoo.min.js
		// 中国推荐2: https://s4.zstatic.net/npm/twikoo@1.7.14/dist/twikoo.min.js
		// 国际推荐: https://cdn.jsdelivr.net/npm/twikoo@1.7.14/dist/twikoo.min.js
		jsUrl: "https://cdn.jsdelivr.net/npm/twikoo@1.7.14/dist/twikoo.min.js",
		// Twikoo 自定义 CSS 文件地址，为空则不加载
		cssUrl: "/assets/css/twikoo-custom.css",
	},

	//waline评论系统配置
	waline: {
		// waline 后端服务地址（必填）
		serverURL: "https://remark.molju.com",

		// ── 显示 ────────────────────────────────────

		// 界面语言，支持 30+ 语言
		lang: "zh-CN",
		// 深色模式：false=关闭 | true=启用 | "auto"=跟随系统 | CSS选择器
		dark: "html.dark",
		// 评论者信息字段，可选值：'nick' | 'mail' | 'link'
		meta: ["nick", "mail", "link"],
		// 必填字段，默认全部可选
		requiredMeta: [],
		// 显示页脚版权信息（true = 隐藏）
		noCopyright: false,
		// 显示 RSS 订阅链接（true = 隐藏）
		noRss: true,

		// ── 表情 ────────────────────────────────────

		// 表情包地址，支持 CDN 数组 / true=默认 / false=禁用
		// Waline 表情预设地址：weibo, bilibili, bmoji, qq, tieba, tw-emoji, alus, doge
		emoji: [
			"https://unpkg.com/@waline/emojis@1.4.0/tieba",
			"https://unpkg.com/@waline/emojis@1.4.0/bilibili",
			"https://unpkg.com/@waline/emojis@1.4.0/bmoji",
			"https://unpkg.com/@waline/emojis@1.4.0/alus",
		],
		// 表情搜索功能
		search: false,
		// 表情反应（reaction）功能
		reaction: false,

		// ── 评论控制 ─────────────────────────────────

		// 登录模式：'enable'=允许匿名+OAuth | 'force'=强制登录 | 'disable'=仅匿名
		login: "enable",
		// 评论字数限制：数字=上限 | [最小, 最大]=范围 | 0=不限制
		wordLimit: 0,
		// 每页评论数
		pageSize: 10,
		// 排序方式：'latest'=最新在前 | 'oldest'=最早在前 | 'hottest'=最热在前
		commentSorting: "latest",

		// ── 统计 ────────────────────────────────────

		// 文章访问量统计
		visitorCount: true,
		// 评论数统计
		comment: true,

		// ── 安全（需服务端同时配置） ──────────────

		// recaptchaV3Key: "",
		// turnstileKey: "",

		// ── 高级 ────────────────────────────────────

		// 自定义多语言文案，可覆盖部分或全部 Waline 界面文本
		// 详见：https://waline.js.org/reference/client/props.html#locale
		// locale: {},
	},

	// artalk评论系统配置
	artalk: {
		// artalk后端程序 API 地址
		server: "https://artalk.example.com/",
		// 设置 Artalk 语言
		locale: "zh-CN",
		// 是否启用文章访问量统计功能
		visitorCount: true,
	},

	//giscus评论系统配置
	giscus: {
		// 设置 Giscus 评论系统仓库
		repo: "CuteLeaf/Firefly",
		// 设置 Giscus 评论系统仓库ID
		repoId: "R_kgD2gfdFGd",
		// 设置 Giscus 评论系统分类
		category: "General",
		// 获取 Giscus 评论系统分类ID
		categoryId: "DIC_kwDOKy9HOc4CegmW",
		// 获取 Giscus 评论系统映射方式
		mapping: "title",
		// 获取 Giscus 评论系统严格模式
		strict: "0",
		// 获取 Giscus 评论系统反应功能
		reactionsEnabled: "1",
		// 获取 Giscus 评论系统元数据功能
		emitMetadata: "1",
		// 获取 Giscus 评论系统输入位置
		inputPosition: "top",
		// 获取 Giscus 评论系统语言
		lang: "zh-CN",
		// 获取 Giscus 评论系统加载方式
		loading: "lazy",
	},

	//disqus评论系统配置
	disqus: {
		// 获取 Disqus 评论系统
		shortname: "firefly",
	},
};
