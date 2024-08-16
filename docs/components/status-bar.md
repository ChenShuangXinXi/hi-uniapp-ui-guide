# 基础使用

默认高度：`${uni.getSystemInfoSync().statusBarHeight}px`

默认背景：`pages.json -> 页面设置 -> navigationBarBackgroundColor || pages.json -> globalStyle -> navigationBarBackgroundColor`

```vue
<hi-status-bar></hi-status-bar>
```

# Props

| 参数   | 说明 | 类型   | 默认值 | 可选值 | 版本 |
| ------ | ---- | ------ | ------ | ------ | ---- |
| bg     | 背景 | String | -      | -      | -    |
| height | 高度 | String | -      | -      | -    |

# 组件样式变量

| 变量                       | 说明 | 默认值                                                                                                                | 版本 |
| -------------------------- | ---- | --------------------------------------------------------------------------------------------------------------------- | ---- |
| --hi-status-bar-height     | 高度 | `${uni.getSystemInfoSync().statusBarHeight}px`                                                                        | -    |
| --hi-status-bar-background | 背景 | `pages.json -> 页面设置 -> navigationBarBackgroundColor 或 pages.json -> globalStyle -> navigationBarBackgroundColor` | -    |
