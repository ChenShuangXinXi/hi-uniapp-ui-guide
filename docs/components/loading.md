# 基础使用

```vue
<hi-loading></hi-loading>
```

# 提示文本

通过 `text` 设置 loading 提示文本。

```vue
<hi-loading text="加载中..."></hi-loading>
```

# 布局方向

通过 `direction` 设置布局方向，可选的值有 `row` 横向和 `column` 纵向。

```vue
<hi-loading text="加载中..." direction="column"></hi-loading>
```

# Props

| 参数      | 说明         | 类型   | 默认值 | 可选值          | 版本 |
| --------- | ------------ | ------ | ------ | --------------- | ---- |
| text      | 文本         | String | -      | -               | -    |
| size      | 字体大小     | String | -      | -               | -    |
| color     | 字体颜色     | String | -      | -               | -    |
| iconName  | 图标名称     | String | -      | -               | -    |
| iconSize  | 图标大小     | String | -      | -               | -    |
| iconColor | 图标颜色     | String | -      | -               | -    |
| iconMode  | 图标裁剪模式 | String | -      | -               | -    |
| direction | 布局方向     | String | `row`  | `row`、`column` | -    |

# 组件样式变量

| 变量                        | 说明                       | 默认值                                 | 版本 |
| --------------------------- | -------------------------- | -------------------------------------- | ---- |
| --hi-loading-color          | 字体颜色                   | `var(--hi-color-light)`                | -    |
| --hi-loading-gap            | 内容之间的间距             | 横向布局时为 `5px`，纵向布局是为 `2px` | -    |
| --hi-loading-icon-color     | 图标的颜色                 | -                                      | -    |
| --hi-loading-icon-size      | 图标的大小                 | `1.2em`                                | -    |
| --hi-loading-duration       | loading 动画旋转一周的用时 | `1500ms`                               | -    |
| --hi-loading-function       | loading 动画函数           | `linear`                               | -    |
| --hi-loading-text-font-size | 提示文字的大小             | `0.8em`                                | -    |
