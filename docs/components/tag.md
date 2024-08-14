# 基础使用

通过 `text` 设置标签文本。

```vue
<hi-tag text="标签"></hi-tag>
```

# 主题

通过 `theme` 设置主题。

通过设置 `--hi-theme-xxx` 格式的变量来扩展 HiUi 的主题。

```vue
<hi-tag text="标签" theme="primary"></hi-tag>
<hi-tag text="标签" theme="success"></hi-tag>
<hi-tag text="标签" theme="warning"></hi-tag>
<hi-tag text="标签" theme="error"></hi-tag>
<hi-tag text="标签" theme="info"></hi-tag>
```

# 镂空

通过添加 `plain` 属性设置成镂空样式。

```vue
<hi-tag text="标签" plain theme="primary"></hi-tag>
```

# 设置图标

通过 `iconName` 设置图标。

```vue
<hi-tag text="标签" theme="warning" iconName="__gouwuche"></hi-tag>
```

# 显示关闭按钮

设置 `closable` 为 `true`，可以显示关闭按钮。

```vue
<hi-tag text="标签" closable theme="warning" iconName="__gouwuche" @close="handleClose"></hi-tag>
```

# 关闭按钮的位置

设置 `closeAbsolute` 可以将关闭按钮绝对定位，显示在右上方。

```vue
<hi-tag text="标签" closable closeAbsolute theme="warning" iconName="__gouwuche" @close="handleClose"></hi-tag>
```

# 圆角标签

设置 `round` 为 `true`，可以设置成圆角标签。

```vue
<hi-tag text="标签" round theme="warning"></hi-tag>
```

# Props

| 参数             | 说明                   | 类型    | 默认值     | 可选值                                                               | 版本 |
| ---------------- | ---------------------- | ------- | ---------- | -------------------------------------------------------------------- | ---- |
| hoverClass       | 标签的 hover-class     | String  | -          | -                                                                    | -    |
| closeHoverClass  | 关闭按钮的 hover-class | String  | `hi-hover` | -                                                                    | -    |
| text             | 文本                   | String  | -          | -                                                                    | -    |
| theme            | 主题                   | String  | -          | `primary`、`success`、`warning`、`danger`、`info` 以及自己扩展的主题 | -    |
| plain            | 是否镂空               | Boolean | false      | -                                                                    | -    |
| radius           | 圆角值                 | String  | -          | -                                                                    | -    |
| width            | 宽度                   | String  | -          | -                                                                    | -    |
| height           | 高度                   | String  | -          | -                                                                    | -    |
| size             | 字体大小               | String  | -          | -                                                                    | -    |
| color            | 字体颜色               | String  | -          | -                                                                    | -    |
| border           | 是否显示边框           | Boolean | false      | -                                                                    | -    |
| round            | 是否圆角               | Boolean | false      | -                                                                    | -    |
| borderColor      | 边框颜色               | String  | -          | -                                                                    | -    |
| bg               | 背景                   | String  | -          | -                                                                    | -    |
| iconName         | 图标名称               | String  | -          | -                                                                    | -    |
| iconSize         | 图标大小               | String  | -          | -                                                                    | -    |
| iconColor        | 图标颜色               | String  | -          | -                                                                    | -    |
| iconMode         | 图标裁剪模式           | String  | -          | -                                                                    | -    |
| closable         | 是否可关闭             | Boolean | false      | -                                                                    | -    |
| closeAbsolute    | 是否显示在右上方       | Boolean | false      | -                                                                    | -    |
| colseIconName    | 关闭图标名称           | String  | -          | -                                                                    |
| closeIconSize    | 关闭图标大小           | String  | -          | -                                                                    | -    |
| closeIconColor   | 关闭图标颜色           | String  | -          | -                                                                    | -    |
| closeIconMode    | 关闭图标裁剪模式       | String  | -          | -                                                                    | -    |
| closeBg          | 关闭按钮的背景         | String  | -          | -                                                                    | -    |
| closeBorderColor | 关闭按钮的边框颜色     | String  | -          | -                                                                    | -    |
| closeTop         | 关闭按钮的 top 值      | String  | -          | -                                                                    | -    |
| closeRight       | 关闭按钮的 right 值    | String  | -          | -                                                                    | -    |
| closeWidth       | 关闭按钮的宽度         | String  | -          | -                                                                    | -    |
| closeHeight      | 关闭按钮的高度         | String  | -          | -                                                                    | -    |

# Events

| 事件名 | 说明               | 回调参数 | 版本 |
| ------ | ------------------ | -------- | ---- |
| @click | 点击时触发         | -        | -    |
| @close | 点击关闭按钮时触发 | -        | -    |

# 组件样式变量

| 变量                        | 说明               | 默认值                    | 版本 |
| --------------------------- | ------------------ | ------------------------- | ---- |
| --hi-tag-background         | 背景               | `var(--hi-theme-primary)` | -    |
| --hi-tag-width              | 宽度               | -                         | -    |
| --hi-tag-height             | 高度               | -                         | -    |
| --hi-tag-color              | 字体颜色           | `#ffffff`                 | -    |
| --hi-tag-font-size          | 字体大小           | `0.8em`                   | -    |
| --hi-tag-padding            | 内边距             | `2px 6px`                 | -    |
| --hi-tag-border-radius      | 圆角               | `var(--hi-radius-small)`  | -    |
| --hi-tag-content-gap        | 内容之间的间距     | `2px`                     | -    |
| --hi-tag-border-width       | 边框宽度           | `0`                       | -    |
| --hi-tag-border-style       | 边框样式           | `solid`                   | -    |
| --hi-tag-border-color       | 边框颜色           | `var(--hi-border-color)`  | -    |
| --hi-tag-icon-color         | 图标颜色           | -                         | -    |
| --hi-tag-icon-size          | 图标大小           | -                         | -    |
| --hi-tag-icon-image-width   | 图标宽度           | -                         | -    |
| --hi-tag-icon-image-height  | 图标高度           | -                         | -    |
| --hi-tag-close-icon-color   | 关闭图标颜色       | -                         | -    |
| --hi-tag-close-icon-size    | 关闭图标大小       | -                         | -    |
| --hi-tag-close-icon-width   | 关闭图标宽度       | -                         | -    |
| --hi-tag-close-icon-height  | 关闭图标高度       | -                         | -    |
| --hi-tag-close-top          | 关闭按钮的 top     | `-0.7em`                  | -    |
| --hi-tag-close-right        | 关闭按钮的 right   | `-0.7em`                  | -    |
| --hi-tag-close-width        | 关闭按钮的宽度     | `1.4em`                   | -    |
| --hi-tag-close-height       | 关闭按钮的高度     | `1.4em`                   | -    |
| --hi-tag-close-background   | 关闭按钮的背景     | `var(--hi-theme-error)`   | -    |
| --hi-tag-close-border-color | 关闭按钮的边框颜色 | `var(--hi-border-color)`  | -    |
| --hi-tag-close-border-width | 关闭按钮的边框粗细 | `0`                       | -    |
| --hi-tag-close-border-style | 关闭按钮的边框样式 | `solid`                   | -    |
