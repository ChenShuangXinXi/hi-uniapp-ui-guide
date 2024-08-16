# 基础使用

默认高度：`460rpx`

```vue
<hi-empty></hi-empty>
```

# 显示按钮

设置 `showBtn` 显示按钮。

按钮配置属性有：`btnTheme`、`btnText`、`btnIconColor`、`btnIconSize`、`btnIconName`、`btnIconMode`，除这几个属性被重命名外，按钮均支持 `hi-button` 组件的其它原生属性。

```vue
<hi-empty showBtn></hi-empty>
```

# Props

| 参数      | 说明         | 类型    | 默认值           | 可选值 | 版本 |
| --------- | ------------ | ------- | ---------------- | ------ | ---- |
| height    | 高度         | String  | -                | -      | -    |
| bg        | 背景         | String  | -                | -      | -    |
| radius    | 圆角         | String  | -                | -      | -    |
| iconName  | 图标名称     | String  | `__kongshuju`    | -      | -    |
| iconColor | 图标颜色     | String  | -                | -      | -    |
| iconSize  | 图标大小     | String  | -                | -      | -    |
| iconMode  | 图标裁剪模式 | String  | -                | -      | -    |
| tips      | 提示         | String  | `Ops! 暂无数据~` | -      | -    |
| tipsSize  | 提示字体大小 | String  | -                | -      | -    |
| tipsColor | 提示字体颜色 | String  | -                | -      | -    |
| showBtn   | 是否显示按钮 | Boolean | `false`          | -      | -    |
| btnTheme  | 按钮主题     | String  | `primary`        | -      | -    |
| btnText   | 按钮文字     | String  | `继续逛逛`       | -      | -    |

# Events

| 事件名称 | 说明         | 回调参数 |
| -------- | ------------ | -------- |
| @bclick  | 点击按钮触发 | -        |

# Slots

| 名称   | 说明     | 参数 |
| ------ | -------- | ---- |
| button | 按钮插槽 | -    |

# 组件样式变量

| 变量                      | 说明         | 默认值                     | 版本 |
| ------------------------- | ------------ | -------------------------- | ---- |
| --hi-empty-color          | 内容文字颜色 | `var(--hi-color-light)`    | -    |
| --hi-empty-height         | 内容高度     | `460rpx`                   | -    |
| --hi-empty-background     | 背景         | -                          | -    |
| --hi-empty-border-radius  | 圆角         | `var(--hi-radius-default)` | -    |
| --hi-empty-icon-color     | 图标颜色     | `inherit`                  | -    |
| --hi-empty-icon-size      | 图标大小     | `100rpx`                   | -    |
| --hi-empty-tips-color     | 提示文字颜色 | `inherit`                  | -    |
| --hi-empty-tips-font-size | 提示文字大小 | `24rpx`                    | -    |
| --hi-empty-button-size    | 按钮文字大小 | `24rpx`                    | -    |
| --hi-empty-button-height  | 按钮高度     | `60rpx`                    | -    |
| --hi-empty-button-padding | 按钮内边距   | `0 24rpx`                  | -    |
| --hi-empty-button-margin  | 按钮外边距   | `30rpx 0 0 0`              | -    |
