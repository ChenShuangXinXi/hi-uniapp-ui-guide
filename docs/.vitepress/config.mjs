import { defineConfig } from "vitepress";

export default defineConfig({
    // 站点的标题。使用默认主题时，这将显示在导航栏中。
    title: "HiUi",

    // 站点的描述。这将呈现为页面 HTML 中的 <meta> 标签。
    description: "基于 uni-app 和 Vue3 的轻量组件库",

    // 站点将部署到的 base URL。
    base: "/hi-uniapp-ui-guide/",

    themeConfig: {
        layout: {
            width: "100%",
        },
        nav: [
            { text: "首页", link: "/" },
            { text: "组件", link: "/components/icon" },
        ],

        sidebar: {
            "/components/": [
                {
                    items: [
                        { text: "起步", items: [{ text: "配置", link: "/components/setting" }] },
                        {
                            text: "组件",
                            items: [{ text: "Icon 图标", link: "/components/icon" }],
                        },
                    ],
                },
            ],
        },

        socialLinks: [{ icon: "github", link: "https://github.com/ChenShuangXinXi/hi-uniapp-ui" }],
    },
});
