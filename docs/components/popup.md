# 基础使用

通过 `v-model` 控制组件的显示/隐藏。

通过 `title` 设置组件的标题

通过默认 `slot` 设置组件的内容。

```vue
<hi-popup v-model="isShow" title="标题">
    <view class="content">弹窗内容</view>
</hi-popup>
```

# 异步关闭

通过将 `async` 属性设置成 `true` 来开启异步关闭。此时点击遮罩或关闭按钮时不会自动关闭，而是向上提交一个 `asyncClose` 事件，需用户自行处理。

```vue
<hi-popup v-model="isShow" title="标题" async @asyncClose="handleAsyncClose">
    <view class="content">弹窗内容</view>
</hi-popup>
```

# 内容显示位置

通过 `mode`、属性设置内容的显示位置，可选的值有：`center(默认)`、`top`、`bottom`、`left`、`right`。

```vue
<hi-popup v-model="isShow" title="标题" mode="bottom">
    <view class="content">弹窗内容</view>
</hi-popup>
```

# Props

| 参数                  | 说明                                                                                                                   | 类型    | 默认值     | 可选值                                     | 版本 |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------- | ------- | ---------- | ------------------------------------------ | ---- |
| hoverClass            | 关闭点击时的 hover-class                                                                                               | String  | `hi-hover` | -                                          | -    |
| v-model               | 显示状态                                                                                                               | Boolean | `false`    | -                                          | -    |
| async                 | 是否开启异步关闭                                                                                                       | Boolean | `false`    | -                                          | -    |
| mode                  | 内容显示模式                                                                                                           | String  | `center`   | `center`、`top`、`bottom`、`left`、`right` | -    |
| duration              | 效果时长                                                                                                               | String  | -          | -                                          | -    |
| showHeader            | 是否显示 Header(标题+关闭)                                                                                             | Boolean | `true`     | -                                          | -    |
| title                 | 标题                                                                                                                   | String  | -          | -                                          | -    |
| titleColor            | 标题颜色                                                                                                               | String  | -          | -                                          | -    |
| titleSize             | 标题大小                                                                                                               | String  | -          | -                                          | -    |
| showClose             | 是否显示关闭按钮                                                                                                       | Boolean | `true`     | -                                          | -    |
| closeIconName         | 关闭图标名称                                                                                                           | String  | -          | -                                          | -    |
| closeIconColor        | 关闭图标颜色                                                                                                           | String  | -          | -                                          | -    |
| closeIconSize         | 关闭图标大小                                                                                                           | String  | -          | -                                          | -    |
| closeIconMode         | 关闭图标裁剪模式                                                                                                       | String  | -          | -                                          | -    |
| showFooter            | 是否显示 Footer                                                                                                        | Boolean | `true`     | -                                          | -    |
| height                | 内容高度                                                                                                               | String  | -          | -                                          | -    |
| max-height            | 内容最大高度                                                                                                           | String  | -          | -                                          | -    |
| width                 | 内容宽度                                                                                                               | String  | -          | -                                          | -    |
| max-width             | 内容最大宽度                                                                                                           | String  | -          | -                                          | -    |
| radius                | 内容圆角大小                                                                                                           | String  | -          | -                                          | -    |
| bg                    | 内容背景                                                                                                               | String  | -          | -                                          | -    |
| showMask              | 是否显示遮罩                                                                                                           | Boolean | `true`     | -                                          | -    |
| maskClickable         | 遮罩是否可点击                                                                                                         | Boolean | `true`     | -                                          | -    |
| maskBg                | 遮罩背景                                                                                                               | String  | -          | -                                          | -    |
| showBorder            | 是否显示 body 上、下边框                                                                                               | Boolean | `false`    | -                                          | -    |
| showBorderTop         | 是否显示 body 上边框                                                                                                   | Boolean | `false`    | -                                          | -    |
| showBorderBottom      | 是否显示 body 下边框                                                                                                   | Boolean | `false`    | -                                          | -    |
| borderColor           | body 边框颜色                                                                                                          | String  | -          | -                                          | -    |
| upperThreshold        | 距顶部/左边多远时（单位 px），触发 scrolltoupper 事件                                                                  | Number  | 50         | -                                          | -    |
| lowerThreshold        | 距底部/右边多远时（单位 px），触发 scrolltolower 事件                                                                  | Number  | 50         | -                                          | -    |
| refresherEnabled      | 开启自定义下拉刷新                                                                                                     | Boolean | false      | -                                          | -    |
| refresherThreshold    | 设置自定义下拉刷新阈值                                                                                                 | Number  | 45         | -                                          | -    |
| refresherDefaultStyle | 设置自定义下拉刷新样式                                                                                                 | String  | black      | black，white，none                         | -    |
| refresherBackground   | 设置自定义下拉刷新背景颜色                                                                                             | String  | #fff       | -                                          | -    |
| refresherTriggered    | 设置当前下拉刷新状态，true 表示下拉刷新已经被触发，false 表示下拉刷新未被触发                                          | Boolean | false      | -                                          | -    |
| scrollAnchoring       | 开启 scroll anchoring 特性，即控制滚动位置不随内容变化而抖动，仅在 iOS 下生效，安卓下可参考 CSS overflow-anchor 属性。 | Boolean | false      | -                                          | -    |

# Events

具体事件说明请参考：[uni-app scroll-view 官方文档](https://uniapp.dcloud.net.cn/component/scroll-view.html)

| 事件名            | 说明               | 回调参数 | 版本 |
| ----------------- | ------------------ | -------- | ---- |
| @close            | 关闭时触发         | -        | -    |
| @asyncClose       | 异步关闭时触发     | -        | -    |
| @scrolltoupper    | 滚动到顶部时触发   | -        | -    |
| @scrolltolower    | 滚动到底部时触发   | -        | -    |
| @scroll           | 滚动时触发         | -        | -    |
| @refresherpulling | 下拉刷新时触发     | -        | -    |
| @refresherrefresh | 开始下拉刷新时触发 | -        | -    |
| @refresherrestore | 释放后刷新时触发   | -        | -    |
| @refresherabort   | 刷新被中止时触发   | -        | -    |

# Slot

| slot    | 说明     | 版本 |
| ------- | -------- | ---- |
| header  | 顶部内容 | -    |
| footer  | 底部内容 | -    |
| default | 默认内容 | -    |
| title   | 标题内容 | -    |
| close   | 关闭按钮 | -    |

# 组件样式变量

| 变量                                | 说明                | 默认值                                                                                                                                                                                                                                                                                                     | 版本 |
| ----------------------------------- | ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---- |
| --hi-popup-mask-background          | 遮罩背景            | `var(--hi-background-overlay)`                                                                                                                                                                                                                                                                             | -    |
| --hi-popup-mask-index               | 遮罩层级            | `var(--hi-index-big)`                                                                                                                                                                                                                                                                                      | -    |
| --hi-popup-width                    | 宽度                | `center` 时 `80%`，其他时 `100%`                                                                                                                                                                                                                                                                           | -    |
| --hi-popup-max-width                | 最大宽度            | `center、top、bottom` 时 `100%`，`left、right`时 `80%`                                                                                                                                                                                                                                                     | -    |
| --hi-popup-height                   | 高度                | `center、top、bottom` 时 `-`，`left、right`时 `100%`                                                                                                                                                                                                                                                       | -    |
| --hi-popup-max-height               | 最大高度            | `center、top、bottom` 时 `50%`，`left、right`时 `100%`                                                                                                                                                                                                                                                     | -    |
| --hi-popup-background               | 背景                | `#ffffff`                                                                                                                                                                                                                                                                                                  | -    |
| --hi-popup-border-radius            | 圆角                | `center`: `var(--hi-radius-default)`; `top`: `0 0 var(--hi-radius-default) var(--hi-radius-default)`; `bottom`: `var(--hi-radius-default) var(--hi-radius-default) 0 0`; `left`: `0 var(--hi-radius-default) var(--hi-radius-default) 0`; `right`: `var(--hi-radius-default) 0 0 var(--hi-radius-default)` | -    |
| --hi-popup-padding                  | 内边距              | -                                                                                                                                                                                                                                                                                                          | -    |
| --hi-popup-overflow                 | 溢出                | `hidden`                                                                                                                                                                                                                                                                                                   | -    |
| --hi-popup-left                     | left 值             | `center`: `50%`; `left`: `0`; `right`: `auto`; `top`: `50%`; `bottom`: `50%`                                                                                                                                                                                                                               | -    |
| --hi-popup-top                      | top 值              | `center`: `50%`; `left`: `50%`; `right`: `50%`; `top`: `0`; `bottom`: `auto`                                                                                                                                                                                                                               | -    |
| --hi-popup-right                    | right 值            | `center`: `auto`; `left`: `auto`; `right`: `0`; `top`: `auto`; `bottom`: `auto`                                                                                                                                                                                                                            | -    |
| --hi-popup-bottom                   | bottom 值           | `center`: `auto`; `left`: `auto`; `right`: `auto`; `top`: `auto`; `bottom`: `0`                                                                                                                                                                                                                            | -    |
| --hi-popup-transform                | transform 值        | `translate(-50%, -50%)`;                                                                                                                                                                                                                                                                                   | -    |
| --hi-popup-index                    | 层级                | `var(--hi-index-big)`                                                                                                                                                                                                                                                                                      | -    |
| --hi-popup-header-padding           | header 内边距       | `6px 15px`                                                                                                                                                                                                                                                                                                 | -    |
| --hi-popup-header-text-align        | header 文本对齐方式 | `center`                                                                                                                                                                                                                                                                                                   |
| --hi-popup-header-font-size         | header 字体大小     | `1.25em`                                                                                                                                                                                                                                                                                                   | -    |
| --hi-popup-header-font-weight       | header 字体粗细     | `700`                                                                                                                                                                                                                                                                                                      | -    |
| --hi-popup-header-color             | header 字体颜色     | -                                                                                                                                                                                                                                                                                                          | -    |
| --hi-popup-title-font-size          | title 字体大小      | `inherit`                                                                                                                                                                                                                                                                                                  | -    |
| --hi-popup-title-font-weight        | title 字体粗细      | `inherit`                                                                                                                                                                                                                                                                                                  | -    |
| --hi-popup-title-color              | title 字体颜色      | `inherit`                                                                                                                                                                                                                                                                                                  | -    |
| --hi-popup-title-text-align         | title 文本对齐方式  | `inherit`                                                                                                                                                                                                                                                                                                  | -    |
| --hi-popup-title-padding            | title 内边距        | -                                                                                                                                                                                                                                                                                                          | -    |
| --hi-popup-close-color              | close 颜色          | -                                                                                                                                                                                                                                                                                                          | -    |
| --hi-popup-close-size               | close 大小          | -                                                                                                                                                                                                                                                                                                          | -    |
| --hi-popup-body-background          | body 背景           | -                                                                                                                                                                                                                                                                                                          | -    |
| --hi-popup-body-border-style        | body 边框样式       | -                                                                                                                                                                                                                                                                                                          | -    |
| --hi-popup-body-border-color        | body 边框颜色       | -                                                                                                                                                                                                                                                                                                          | -    |
| --hi-popup-body-border-top-width    | body 上边框宽度     | -                                                                                                                                                                                                                                                                                                          | -    |
| --hi-popup-body-border-right-width  | body 右边框宽度     | -                                                                                                                                                                                                                                                                                                          | -    |
| --hi-popup-body-border-bottom-width | body 下边框宽度     | -                                                                                                                                                                                                                                                                                                          | -    |
| --hi-popup-body-border-left-width   | body 左边框宽度     | -                                                                                                                                                                                                                                                                                                          | -    |
| --hi-popup-duration                 | 动画时长            | `500ms`                                                                                                                                                                                                                                                                                                    | -    |
| --hi-popup-timing-function          | 动画曲线            | `linear`                                                                                                                                                                                                                                                                                                   | -    |
