# 横向滚动

默认横行滚动。

```vue
<hi-notice-bar :list="list"></hi-notice-bar>
```

# 纵向滚动

通过 `direction` 设置为 `column` 纵向滚动。

```vue
<hi-notice-bar :list="list" direction="column"></hi-notice-bar>
```

# 设置样式

通过 `bg`、`color`、`padding` 设置背景、颜色和内边距。

```vue
<hi-notice-bar :list="list" bg="#fdf6ec" color="#f9ae3d" padding="0.6em"></hi-notice-bar>
```

# 每秒移动固定距离

`hi-notice-bar` 滚动速度有两种，一种是设置 `speed(每秒移动固定距离)`，另一种是设置 `duration（默认，每个通知滚动的时长相同）`。

```vue
<hi-notice-bar :list="list" :speed="50"></hi-notice-bar>
```

# 右侧按钮

通过 `mode` 设置右侧显示的按钮，`""` 为空时不显示。`arrow`: 显示更多；`closable`: 显示关闭；`arrow closable`: 显示更多和关闭。

```vue
<hi-notice-bar :list="list" mode=""></hi-notice-bar>
<hi-notice-bar :list="list" mode="closable"></hi-notice-bar>
<hi-notice-bar :list="list" mode="arrow closable"></hi-notice-bar>
```

# 滚动间隔

组件默认滚动结束后立即开始下一条数据的滚动，设置滚动间隔后可以在当前滚动结束后间隔一段时间再开始滚动。

```vue
<hi-notice-bar :list="list" :interval="1.5"></hi-notice-bar>
```

# 步近模式

此模式时，文字滚动到左边或顶部时停止。

此模式时，文本会只显示一行，超出显示省略号。

此模式时一般需要搭配滚动间隔使用。

```vue
<hi-notice-bar :list="list" step></hi-notice-bar>
<hi-notice-bar :list="list" direction="column" step></hi-notice-bar>
```

# Props

| 参数            | 说明                                 | 类型    | 默认值  | 可选值                                      | 版本 |
| --------------- | ------------------------------------ | ------- | ------- | ------------------------------------------- | ---- |
| hoverClass      | 文字、更多、关闭点击时的 hover-class | String  | -       | -                                           | -    |
| show            | 是否显示                             | Boolean | `true`  | -                                           | -    |
| list            | 滚动数据                             | Array   | -       | -                                           | -    |
| keyName         | 数据 item 中滚动文本属性的 key       | String  | `text`  | -                                           | -    |
| showNoticeIcon  | 是否通知图标                         | Boolean | `true`  | -                                           | -    |
| noticeIconName  | 通知图标名称                         | String  | -       | -                                           | -    |
| noticeIconColor | 通知图标颜色                         | String  | -       | -                                           | -    |
| noticeIconSize  | 通知图标大小                         | String  | -       | -                                           | -    |
| noticeIconMode  | 通知图标裁剪模式                     | String  | -       | -                                           | -    |
| mode            | 滚动模式                             | String  | `""`    | `""`、`arrow`、`closable`、`arrow closable` | -    |
| arrowIconName   | 更多图标名称                         | String  | -       | -                                           | -    |
| arrowIconColor  | 更多图标颜色                         | String  | -       | -                                           | -    |
| arrowIconSize   | 更多图标大小                         | String  | -       | -                                           | -    |
| arrowIconMode   | 更多图标裁剪模式                     | String  | -       | -                                           | -    |
| closeIconName   | 关闭图标名称                         | String  | -       | -                                           | -    |
| closeIconColor  | 关闭图标颜色                         | String  | -       | -                                           | -    |
| closeIconSize   | 关闭图标大小                         | String  | -       | -                                           | -    |
| closeIconMode   | 关闭图标裁剪模式                     | String  | -       | -                                           | -    |
| direction       | 滚动方向                             | String  | `row`   | `row`、`column`                             | -    |
| duration        | 滚动时长                             | Number  | -       | -                                           | -    |
| speed           | 每秒移动距离                         | Number  | -       | -                                           | -    |
| interval        | 滚动间隔                             | Number  | 0       | -                                           | -    |
| step            | 是否开启步近模式                     | Boolean | `false` | -                                           | -    |
| bg              | 背景颜色                             | String  | -       | -                                           | -    |
| color           | 字体颜色                             | String  | -       | -                                           | -    |
| size            | 字体大小                             | String  | -       | -                                           | -    |
| height          | 滚动区域的高度                       | String  | -       | -                                           | -    |
| padding         | 组件的内边距                         | String  | -       | -                                           | -    |

# Events

| 事件名 | 说明           | 回调参数                        | 版本 |
| ------ | -------------- | ------------------------------- | ---- |
| @click | 点击图标时触发 | item: 数据对象；index: 数据索引 | -    |
| @arrow | 点击更多时触发 | index: 数据索引                 | -    |
| @close | 点击关闭时触发 | -                               | -    |

# 组件样式变量

| 变量                                     | 说明               | 默认值                                                                     | 版本 |
| ---------------------------------------- | ------------------ | -------------------------------------------------------------------------- | ---- |
| --hi-notice-bar-background               | 背景               | -                                                                          | -    |
| --hi-notice-bar-color                    | 字体颜色           | -                                                                          | -    |
| --hi-notice-bar-font-size                | 字体大小           | -                                                                          | -    |
| --hi-notice-bar-padding                  | 内边距             | -                                                                          | -    |
| --hi-notice-bar-line-height              | 行高               | -                                                                          | -    |
| --hi-notice-bar-content-height           | 滚动内容区域高度   | `1.5em`                                                                    | -    |
| --hi-notice-bar-content-margin           | 滚动内容区域外边距 | `0 5px`                                                                    | -    |
| --hi-notice-bar-icon-size                | 图标大小           | -                                                                          | -    |
| --hi-notice-bar-icon-color               | 图标颜色           | -                                                                          | -    |
| --hi-notice-bar-icon-image-width         | 图片图标宽度       | -                                                                          | -    |
| --hi-notice-bar-icon-image-height        | 图片图标高度       | -                                                                          | -    |
| --hi-notice-bar-notice-icon-size         | 通知图标大小       | `var(--hi-notice-bar-icon-size)`                                           | -    |
| --hi-notice-bar-notice-icon-color        | 通知图标颜色       | `var(--hi-notice-bar-icon-color)`                                          | -    |
| --hi-notice-bar-notice-icon-image-width  | 通知图标宽度       | `var(--hi-notice-bar-icon-image-width)`                                    | -    |
| --hi-notice-bar-notice-icon-image-height | 通知图标高度       | `var(--hi-notice-bar-icon-image-height)`                                   | -    |
| --hi-notice-bar-arrow-icon-size          | 更多图标大小       | `var(--hi-notice-bar-icon-size)`                                           | -    |
| --hi-notice-bar-arrow-icon-color         | 更多图标颜色       | `var(--hi-notice-bar-icon-color)`                                          | -    |
| --hi-notice-bar-arrow-icon-image-width   | 更多图标宽度       | `var(--hi-notice-bar-icon-image-width)`                                    | -    |
| --hi-notice-bar-arrow-icon-image-height  | 更多图标高度       | `var(--hi-notice-bar-icon-image-height)`                                   | -    |
| --hi-notice-bar-close-icon-size          | 关闭图标大小       | `var(--hi-notice-bar-icon-size)`                                           | -    |
| --hi-notice-bar-close-icon-color         | 关闭图标颜色       | `var(--hi-notice-bar-icon-color)`                                          | -    |
| --hi-notice-bar-close-icon-image-width   | 关闭图标宽度       | `var(--hi-notice-bar-icon-image-width)`                                    | -    |
| --hi-notice-bar-close-icon-image-height  | 关闭图标高度       | `var(--hi-notice-bar-icon-image-height)`                                   | -    |
| --hi-notice-bar-duration                 | 滚动时长           | 水平滚动: `5s`; 垂直滚动: `2.5s`; 步近水平滚动: `1s`; 步近垂直滚动: `0.5s` | -    |
