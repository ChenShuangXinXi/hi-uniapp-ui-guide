# 引入 HiUi 全局样式

在 App.vue 中引入全局样式

```vue
<style lang="scss">
    /* 引入 HiUi 主样式  */
    @import "@/uni_modules/hi-styles/index.scss";
</style>
```

# 配置扩展图标

在 `main.js` 中配置扩展图标。

```js
// 引入 HiUi 配置文件
import "@/uni_modules/hi-config";

// 配置扩展图标前缀，可以是一个字符串也可以是一个数组（多扩展图标）
uni.$hi.config.icon.prefix = ["my-app-iconfont"];
```
