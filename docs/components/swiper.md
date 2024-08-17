# 基础使用

基础的 `hi-swiper` 组件只是对 `uni-app swiper` 组件的简单包装，可以通过传入 `list` 数据快速创建一个轮播。
<br/>
可以将此组件和 `hi-swiper-indicator` 组件组合使用，具体效果请参考 `hi-swiper-indicator` 组件。

```vue
<hi-swiper :list="list" :autoplay="true" indicatorDots></hi-swiper>
```

<br/>

# Props

[uni-app swiper 官方文档](https://uniapp.dcloud.net.cn/component/swiper.html)

| 参数                           | 说明                                                                                             | 类型      | 默认值              | 可选值                                                       |
| ------------------------------ | ------------------------------------------------------------------------------------------------ | --------- | ------------------- | ------------------------------------------------------------ |
| `hoverClass`                   | `swiper item` 的 `hover-class`                                                                   | `String`  | `hi-hover`          | `-`                                                          |
| `width`                        | 宽度                                                                                             | `String`  | `100%`              | `-`                                                          |
| `height`                       | 高度                                                                                             | `String`  | `280rpx`            | `-`                                                          |
| `list`                         | 数据列表                                                                                         | `Array`   | `[]`                | `-`                                                          |
| `keyName`                      | `list item` 中资源字段的 `key`                                                                   | `String`  | `url`               | `-`                                                          |
| `current`                      | 激活项下标                                                                                       | `Number`  | `0`                 | `-`                                                          |
| `indicatorDots`                | 是否显示指示器                                                                                   | `Boolean` | `false`             | `-`                                                          |
| `indicatorColor`               | 指示器颜色                                                                                       | `String`  | `rgba(0, 0, 0, .3)` | `-`                                                          |
| `indicatorActiveColor`         | 激活指示器颜色                                                                                   | `String`  | `#000000`           | `-`                                                          |
| `mode`                         | 资源图片的裁剪模式                                                                               | `String`  | `aspectFill`        | `-`                                                          |
| `lazyLoad`                     | 是否懒加载                                                                                       | `Boolean` | `false`             | `-`                                                          |
| `fadeShow`                     | 图片显示动画效果                                                                                 | `Boolean` | `true`              | `-`                                                          |
| `webp`                         | 是否使用 `webp` 图片                                                                             | `Boolean` | `false`             | `-`                                                          |
| `showMenuByLongpress`          | 开启长按图片显示识别小程序码菜单                                                                 | `Boolean` | `true`              | `-`                                                          |
| `draggable`                    | 是否可拖动                                                                                       | `Boolean` | `false`             | `-`                                                          |
| `activeClass`                  | `swiper-item` 可见时的 `class`                                                                   | `String`  | `-`                 | `-`                                                          |
| `changingClass`                | `acceleration` 设置为 `true` 时且处于滑动过程中，中间若干屏处于可见时的 `class`                  | `String`  | `-`                 | `-`                                                          |
| `autoplay`                     | 是否自动播放                                                                                     | `Boolean` | `false`             | `-`                                                          |
| `currentItemId`                | 当前所在滑块的 `item-id` ，不能与 `current` 被同时指定                                           | `String`  | `-`                 | `-`                                                          |
| `interval`                     | 自动切换时间间隔                                                                                 | `Number`  | `5000`              | `-`                                                          |
| `duration`                     | 滑动动画时长                                                                                     | `Number`  | `500`               | `-`                                                          |
| `circular`                     | 是否采用衔接滑动，即播放到末尾后重新回到开头                                                     | `Boolean` | `true`              | `-`                                                          |
| `vertical`                     | 滑动方向是否为纵向                                                                               | `Boolean` | `false`             | `-`                                                          |
| `previousMargin`               | 前边距，可用于露出前一项的一小部分，接受 `px` 和 `rpx` 值                                        | `String`  | `0px`               | `-`                                                          |
| `nextMargin`                   | 后边距，可用于露出后一项的一小部分，接受 `px` 和 `rpx` 值                                        | `String`  | `0px`               | `-`                                                          |
| `acceleration`                 | 当开启时，会根据滑动速度，连续滑动多屏                                                           | `Boolean` | `false`             | `-`                                                          |
| `disableProgrammaticAnimation` | 是否禁用代码变动触发 `swiper` 切换时使用动画                                                     | `Boolean` | `true`              | `-`                                                          |
| `displayMultipleItems`         | 设置同时显示的滑块数量                                                                           | `Number`  | `1`                 | `-`                                                          |
| `skipHiddenItemLayout`         | 是否跳过未显示的滑块布局，设为 `true` 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息 | `Boolean` | `false`             | `-`                                                          |
| `disableTouch`                 | 是否禁止用户 `touch` 操作                                                                        | `Boolean` | `false`             | `-`                                                          |
| `touchable`                    | 是否监听用户的触摸事件，只在初始化时有效，不能动态变更                                           | `Boolean` | `true`              | `-`                                                          |
| `easingFunction`               | 指定 `swiper` 切换缓动动画类型                                                                   | `String`  | `default`           | `default、linear、easeInCubic、easeOutCubic、easeInOutCubic` |

<br/>

# Events

[uni-app swiper 官方文档](https://uniapp.dcloud.net.cn/component/swiper.html)

| 事件名             | 说明                                                   | 回调参数                                                      |
| ------------------ | ------------------------------------------------------ | ------------------------------------------------------------- |
| `@click`           | `swiper item` 点击时触发                               | `item`: 数据对象。 `index`: 数据下标                          |
| `@change`          | `current` 改变时会触发 `change` 事件                   | `event.detail = {current: current, source: source}`           |
| `@transition`      | `swiper-item` 的位置发生改变时会触发 `transition` 事件 | `event.detail = {dx: dx, dy: dy}，支付宝小程序暂不支持dx, dy` |
| `@animationfinish` | 动画结束时会触发 `animationfinish` 事件                | `event.detail = {current: current, source: source}`           |

# Slots

| 名称         | 说明                                         | 参数                                       |
| ------------ | -------------------------------------------- | ------------------------------------------ |
| `#default`   | 内容插槽，内容默认是 `position: absolute` 的 | `item`: 数据对象。 `index`: 数据下标       |
| `#indicator` | 指示器                                       | `current`: 当前激活的 `swiper item` 的下标 |
