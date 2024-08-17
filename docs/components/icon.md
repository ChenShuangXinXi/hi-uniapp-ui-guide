# 内置图标

通过设置以双下划线开头的 `name` 属性，即可使用内置的图标。

```vue
<hi-icon name="__gongao"></hi-icon>
```

<br/>

# 图片图标

如果使用图片图标，则需要设置 `name` 属性为图片图标的资源路径。默认 `hi-icon` 会检测传入的 `name` 属性是否包含斜杠 `/`，如果包含则认为传入的是图片图标资源路径。
<br/>
注意：如果使用的是本地资源，请注意路径的正确性。

```vue
<hi-icon name="/static/images/icons/gonggao.png"></hi-icon>
```

<br/>

# 扩展图标

1. 在 `main.js` 中注册扩展图标的前缀名称。

```js
// 引入 HiUi 配置文件
import "@/uni_modules/hi-config";

// 配置扩展图标前缀，可以是一个字符串也可以是一个数组（多扩展图标）
uni.$hi.config.icon.prefix = ["my-app-iconfont"];
```

2. 使用扩展图标。

```vue
<hi-icon name="my-extend-icon-name"></hi-icon>
```

# Props

| 参数   | 说明                       | 类型     | 默认值      | 可选值 |
| ------ | -------------------------- | -------- | ----------- | ------ |
| `name` | 图标名称或图片图标资源路径 | `String` | `-`         | `-`    |
| `mode` | 图片图标的裁剪、缩放模式   | `String` | `aspectFit` | `-`    |
