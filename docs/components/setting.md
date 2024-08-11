# 引入 HiUi 全局样式（必需）

在 App.vue 中引入全局样式

```vue
<style lang="scss">
        // 引入 HiUi 主样式
        @import "@/uni_modules/hi-styles/index.scss";
</style>
```

# 引入 HiUi 配置文件（必需）

在 `main.js` 中引入配置文件。

```js
// 引入 HiUi 配置文件
import "@/uni_modules/hi-config";
```

## 所有配置

```js
uni.$hi = {
    // 配置
    config: {
        // 组件公共配置属性
        componentsOptions: {
            // 在组件定义时的选项中启动多 slot 支持
            multipleSlots: true,

            // 将自定义节点设置成虚拟的，更加接近 Vue 组件的表现。
            virtualHost: true,
            
            // [组件样式隔离方式](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/wxml-wxss.html#%E7%BB%84%E4%BB%B6%E6%A0%B7%E5%BC%8F%E9%9A%94%E7%A6%BB)
            // - isolated 表示启用样式隔离，在自定义组件内外，使用 class 指定的样式将不会相互影响（一般情况下的默认值）；
            // - apply-shared 表示页面 wxss 样式将影响到自定义组件，但自定义组件 wxss 中指定的样式不会影响页面；
            // - shared 表示页面 wxss 样式将影响到自定义组件，自定义组件 wxss 中指定的样式也会影响页面和其他设置了 apply-shared 或 shared 的自定义组件。（这个选项在插件中不可用。）
            // 微信小程序在组件 options 中配置，支付宝小程序在 manifest.json -> mp-alipay 中配置
            styleIsolation: "shared"
        },

        // 图标组件配置
        icon: {
            // 扩展图标的类名前缀，如果想扩展多个图标库，将值设置为数组就可以
            // 例如：["app-iconfont", "my-iconfont"]
            prefix: ""
        },

        // webview 配置
        webview: {
            // 默认的 webview 页面路径
            defaultPagePath: "/pages/webview/webview"
        }
    }
};
```

# 配置扩展图标（可选）

在 `main.js` 中配置扩展图标。

```js
// 配置扩展图标前缀，可以是一个字符串也可以是一个数组（多扩展图标）
uni.$hi.config.icon.prefix = ["my-app-iconfont"];
```
