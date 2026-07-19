export type CommentConfig = {
	/**
	 * 当前启用的评论系统类型
	 * "none" | "twikoo" | "waline" | "giscus" | "disqus" | 'artalk'
	 */
	type: "none" | "twikoo" | "waline" | "giscus" | "disqus" | "artalk";
	twikoo?: {
		envId: string;
		region?: string;
		lang?: string;
		visitorCount?: boolean;
		/**
		 * Twikoo JS 文件地址，支持 CDN 链接
		 * 国内推荐: https://registry.npmmirror.com/twikoo/1.7.9/files/dist/twikoo.min.js
		 * 国际推荐: https://cdn.jsdelivr.net/npm/twikoo@1.7.9/dist/twikoo.min.js
		 */
		jsUrl?: string;
		/**
		 * Twikoo 自定义 CSS 文件地址，为空则不加载
		 */
		cssUrl?: string;
	};
	waline?: {
		/** Waline 后端服务地址（必填） */
		serverURL: string;
		/**
		 * 界面语言
		 * @default "zh-CN"
		 */
		lang?: string;
		/**
		 * 表情包配置
		 * - 字符串数组：CDN 表情包地址
		 * - false：禁用表情
		 * - true：使用默认表情
		 */
		emoji?:
			| (
					| string
					| { name: string; folder: string; icon?: string; items: string[] }
			  )[]
			| boolean;
		/**
		 * 登录模式
		 * - "enable"：允许匿名和第三方 OAuth 登录（默认）
		 * - "force"：强制登录后才能评论
		 * - "disable"：禁止所有登录，仅允许匿名评论
		 * @default "enable"
		 */
		login?: "enable" | "force" | "disable";
		/** 是否启用文章访问量统计 @default false */
		visitorCount?: boolean;
		/** 评论数统计，设为 false 可关闭 @default true */
		comment?: boolean;
		/**
		 * 深色模式支持
		 * - false：禁用
		 * - true：启用
		 * - "auto"：跟随系统
		 * - CSS 选择器字符串：跟随指定元素的 class（如 "html.dark"）
		 * @default "html.dark"
		 */
		dark?: string | boolean;
		/**
		 * 评论者信息字段，可包含 'nick' | 'mail' | 'link'
		 * @default ["nick", "mail", "link"]
		 */
		meta?: Array<"nick" | "mail" | "link">;
		/**
		 * 必填的评论者信息字段
		 * @default []（全部可选）
		 */
		requiredMeta?: Array<"nick" | "mail" | "link">;
		/**
		 * 评论字数限制
		 * - 数字：设置最大字数上限
		 * - [最小, 最大]：设置字数范围
		 * - 0：不限制
		 * @default [2, 300]
		 */
		wordLimit?: number | [number, number];
		/**
		 * 每页评论条数
		 * @default 10
		 */
		pageSize?: number;
		/**
		 * 评论排序方式
		 * - "latest"：最新在前（默认）
		 * - "oldest"：最早在前
		 * - "hottest"：最热在前
		 * @default "latest"
		 */
		commentSorting?: "latest" | "oldest" | "hottest";
		/** 表情搜索功能 @default false */
		search?: boolean;
		/**
		 * 表情反应（reaction）功能
		 * - true：启用默认反应
		 * - false：关闭
		 * @default false
		 */
		reaction?: boolean;
		/** 是否隐藏页脚版权信息（true = 隐藏） @default false */
		noCopyright?: boolean;
		/** 是否隐藏 RSS 订阅链接（true = 隐藏） @default false */
		noRss?: boolean;
		/** reCAPTCHA v3 客户端 Key（需服务端同时配置） */
		recaptchaV3Key?: string;
		/** Turnstile 客户端 Key（需服务端同时配置，用于人机验证） */
		turnstileKey?: string;
		/**
		 * 自定义多语言文案
		 * 可覆盖部分或全部 Waline 界面文本
		 */
		locale?: Record<string, string>;
	};
	artalk?: {
		// 后端程序 API 地址
		server: string;
		/**
		 * 语言，支持语言如下：
		 * - "en" (English)
		 * - "zh-CN" (简体中文)
		 * - "zh-TW" (繁体中文)
		 * - "ja" (日本語)
		 * - "ko" (한국어)
		 * - "fr" (Français)
		 * - "ru" (Русский)
		 * */
		locale: string | "auto";
		// 是否统计访问量，true 启用访问量，false 关闭
		visitorCount?: boolean;
	};
	giscus?: {
		repo: string;
		repoId: string;
		category: string;
		categoryId: string;
		mapping: string;
		strict: string;
		reactionsEnabled: string;
		emitMetadata: string;
		inputPosition: string;
		lang: string;
		loading: string;
	};
	disqus?: {
		shortname: string;
	};
};
