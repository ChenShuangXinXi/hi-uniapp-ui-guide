# 基础使用

`hi-image` 组件的默认宽高为 `360rpx`。

`hi-image` 默认开启了加载状态配置，即图片加载过程中会显示 loading 图标和提示文字，可以通过 `closeLoading` 属性来关闭。

`hi-image` 默认开启了错误状态配置，即图片加载失败后会显示 error 图标和提示文字，可以通过 `closeError` 属性来关闭。

```vue
<hi-image src="/static/images/temp.jpeg"></hi-image>
```

# 圆形图片

可以通过 `circle` 属性来设置圆形图片。

```vue
<hi-image src="/static/images/temp.jpeg" circle></hi-image>
```

# 撑满

通过设置 `fill` 属性可以快速将组件的宽高设置成 `100%` 以撑满整个父元素。

```vue
<hi-image src="/static/images/temp.jpeg" fill></hi-image>
```

# 开启预览

可以通过开启 `preview` 属性来开启图片的点击预览功能。

```vue
<hi-image src="/static/images/temp.jpeg" preview></hi-image>
```

# Props

`uni-app image` 组件自带的属性说明参考 [uni-app image 组件官方文档](https://uniapp.dcloud.net.cn/component/image.html)

| 参数                | 说明                                                                    | 类型    | 默认值          | 可选值 | 版本 |
| ------------------- | ----------------------------------------------------------------------- | ------- | --------------- | ------ | ---- |
| hoverClass          | 图片点击时的类名                                                        | String  | `hi-hover`      | -      | -    |
| preview             | 是否开启点击预览功能                                                    | Boolean | false           | -      | -    |
| width               | 图片宽度                                                                | String  | -               | -      | -    |
| height              | 图片高度                                                                | String  | -               | -      | -    |
| src                 | 图片资源路径                                                            | String  | -               | -      | -    |
| mode                | 图片裁剪模式                                                            | String  | `aspectFit`     | -      | -    |
| closeLoading        | 是否关闭 loading                                                        | Boolean | false           | -      | -    |
| loadingIconName     | loading 图标名称                                                        | String  | `__loading`     | -      | -    |
| loadingIconSize     | loading 图标大小                                                        | String  | -               | -      | -    |
| loadingIconColor    | loading 图标颜色                                                        | String  | -               |        | -    |
| loadingIconMode     | loading 图标裁剪模式                                                    | String  | -               | -      | -    |
| loadingText         | loading 提示文本                                                        | String  | -               | -      | -    |
| closeError          | 是否关闭 error                                                          | Boolean | false           | -      | -    |
| errorIconName       | error 图标名称                                                          | String  | `__image-error` | -      | -    |
| errorIconSize       | error 图标大小                                                          | String  | -               | -      | -    |
| errorIconColor      | error 图标颜色                                                          | String  | -               | -      | -    |
| errorIconMode       | error 图标裁剪模式                                                      | String  | -               | -      | -    |
| errorText           | error 提示文本                                                          | String  | -               | -      | -    |
| radius              | 圆角值                                                                  | String  | -               | -      | -    |
| circle              | 是否是圆形图片                                                          | Boolean | false           | -      | -    |
| fill                | 是否宽高撑满整个父元素，即宽高为 `100%`                                 | Boolean | false           | -      | -    |
| lazyLoad            | 是否开启懒加载                                                          | Boolean | true            | -      | -    |
| fadeShow            | 是否显示动画效果                                                        | Boolean | true            | -      | -    |
| webp                | 在系统不支持 webp 的情况下是否单独启用 webp。默认 false，只支持网络资源 | Boolean | true            | -      | -    |
| showMenuByLongpress | 开启长按图片显示识别小程序码菜单                                        | Boolean | true            | -      | -    |
| draggable           | 是否能拖动图片                                                          | Boolean | false           | -      | -    |

# Events

具体的事件说明参考 [uni-app button 组件官方文档](https://uniapp.dcloud.net.cn/component/button.html)

| 事件名 | 说明                                                                                                                | 回调参数 | 版本 |
| ------ | ------------------------------------------------------------------------------------------------------------------- | -------- | ---- |
| @click | 点击时触发                                                                                                          | -        | -    |
| @load  | 当图片载入完毕时，发布到 AppService 的事件名，事件对象 `event.detail = {height:'图片高度 px', width:'图片宽度 px'}` | -        | -    |
| @error | 当错误发生时，发布到 AppService 的事件名，事件对象 event.detail = {errMsg: 'something wrong'}                       | -        | -    |

# 组件样式变量

| 变量                              | 说明                     | 默认值                                                     | 版本 |
| --------------------------------- | ------------------------ | ---------------------------------------------------------- | ---- |
| --hi-image-width                  | 图片宽度                 | `360rpx`                                                   | -    |
| --hi-image-height                 | 图片高度                 | `360rpx`                                                   | -    |
| --hi-image-border-radius          | 圆角大小                 | -                                                          | -    |
| --hi-image-status-gap             | 状态图标和文本之间的间距 | `2px`                                                      | -    |
| --hi-image-status-icon-size       | 状态图标的大小           | `1.5em`                                                    | -    |
| --hi-image-status-icon-color      | 状态图标的颜色           | `var(--hi-color-light)`                                    | -    |
| --hi-image-loading-icon-size      | loading 图标的大小       | `var(--hi-image-status-icon-size, 1.5em)`                  | -    |
| --hi-image-loading-icon-color     | loading 图标的颜色       | `var(--hi-image-status-icon-color, var(--hi-color-light))` | -    |
| --hi-image-loading-duration       | loading 转一圈的用时     | `1500ms`                                                   | -    |
| --hi-image-loading-function       | loading 动画函数         | `linear`                                                   | -    |
| --hi-image-error-icon-size        | error 图标的大小         | `var(--hi-image-status-icon-size, 1.5em)`                  | -    |
| --hi-image-error-icon-color       | error 图标的颜色         | `var(--hi-image-status-icon-color, var(--hi-color-light))` | -    |
| --hi-image-status-text-font-size  | 状态文本的大小           | `0.75em`                                                   | -    |
| --hi-image-status-text-color      | 状态文本的颜色           | `var(--hi-color-light)`                                    | -    |
| --hi-image-loading-text-font-size | loading 文本的大小       | `var(--hi-image-status-text-font-size, 0.75em)`            | -    |
| --hi-image-loading-text-color     | loading 文本的颜色       | `var(--hi-image-status-text-color, var(--hi-color-light))` | -    |
| --hi-image-error-text-font-size   | error 文本的大小         | `var(--hi-image-status-text-font-size, 0.75em)`            | -    |
| --hi-image-error-text-color       | error 文本的颜色         | `var(--hi-image-status-text-color, var(--hi-color-light))` | -    |
