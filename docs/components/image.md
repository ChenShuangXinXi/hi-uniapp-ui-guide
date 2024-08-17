# 基础使用

`hi-image` 组件的默认宽高为 `360rpx`。
<br/>
`hi-image` 默认开启了加载状态配置，即图片加载过程中会显示 `loading` 图标和提示文字，可以通过 `showLoading` 属性来关闭。
<br/>
`hi-image` 默认开启了错误状态配置，即图片加载失败后会显示 error 图标和提示文字，可以通过 `showError` 属性来关闭。

```vue
<hi-image src="/static/images/temp.jpeg"></hi-image>
```

<br/>

# Props

`uni-app image` 组件自带的属性说明参考 [uni-app image 组件官方文档](https://uniapp.dcloud.net.cn/component/image.html)

| 参数                  | 说明                                                                          | 类型      | 默认值          | 可选值 |
| --------------------- | ----------------------------------------------------------------------------- | --------- | --------------- | ------ |
| `width`               | 图片宽度                                                                      | `String`  | `-`             | `-`    |
| `height`              | 图片高度                                                                      | `String`  | `-`             | `-`    |
| `src`                 | 图片资源路径                                                                  | `String`  | `-`             | `-`    |
| `mode`                | 图片裁剪模式                                                                  | `String`  | `aspectFit`     | `-`    |
| `showLoading`         | 是否显示 `loading` 状态                                                       | `Boolean` | `true`          | `-`    |
| `loadingIconName`     | `loading` 图标名称                                                            | `String`  | `__loading`     | `-`    |
| `loadingText`         | `loading` 提示文本                                                            | `String`  | `-`             | `-`    |
| `showError`           | 是否显示 `error` 状态                                                         | `Boolean` | `true`          | `-`    |
| `errorIconName`       | `error` 图标名称                                                              | `String`  | `__image-error` | `-`    |
| `errorText`           | `error` 提示文本                                                              | `String`  | `-`             | `-`    |
| `lazyLoad`            | 是否开启懒加载                                                                | `Boolean` | `true`          | `-`    |
| `fadeShow`            | 是否显示动画效果                                                              | `Boolean` | `true`          | `-`    |
| `webp`                | 在系统不支持 `webp` 的情况下是否单独启用 `webp`。默认 `false`，只支持网络资源 | `Boolean` | `true`          | `-`    |
| `showMenuByLongpress` | 开启长按图片显示识别小程序码菜单                                              | `Boolean` | `true`          | `-`    |
| `draggable`           | 是否能拖动图片                                                                | `Boolean` | `false`         | `-`    |

# Events

<br/>

具体的事件说明参考 [uni-app button 组件官方文档](https://uniapp.dcloud.net.cn/component/button.html)

| 事件名   | 说明                                           | 回调参数                                                     | 版本 |
| -------- | ---------------------------------------------- | ------------------------------------------------------------ | ---- |
| `@load`  | 当图片载入完毕时，发布到 `AppService` 的事件名 | `event.detail = {height:'图片高度 px', width:'图片宽度 px'}` | `-`  |
| `@error` | 当错误发生时，发布到 `AppService` 的事件名     | `event.detail = {errMsg: 'something wrong'}`                 | `-`  |
