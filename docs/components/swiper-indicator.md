# 基础使用

`hi-swiper-indicator` 默认 `position: absolute`。

可以结合 `hi-swiper` 或用户自定义的 `swiper` 组合使用。

```vue
<hi-swiper :list="list" :autoplay="true">
    <template #indicator="{ current }">
        <hi-swiper-indicator :count="list.length" :current="current"></hi-swiper-indicator>
    </template>
</hi-swiper>
```

# 指示器的位置

可以通过 `position` 参数设置指示器的位置。可选的值有：`bottom-center(默认)`、`bottom-left`、`bottom-right`、`left-bottom`、`left-center`、`right-cottom`、`right-center`。

```vue
<hi-swiper :list="list" :autoplay="true">
    <template #indicator="{ current }">
        <hi-swiper-indicator :count="list.length" :current="current" position="bottom-right"></hi-swiper-indicator>
    </template>
</hi-swiper>
```

# 指示器的类型

可以通过 `mode` 参数设置指示器的类型。可选的值有：`dots(默认)`、`line`。

```vue
<hi-swiper :list="list" :autoplay="true">
    <template #indicator="{ current }">
        <hi-swiper-indicator :count="list.length" :current="current" mode="line"></hi-swiper-indicator>
    </template>
</hi-swiper>
```

<hi-swiper :list="list" :autoplay="true">
    <template #indicator="{ current }">
        <hi-swiper-indicator :count="list.length" :current="current" position="bottom-left"></hi-swiper-indicator>
    </template>
</hi-swiper>

# Props

[uni-app swiper 官方文档](https://uniapp.dcloud.net.cn/component/swiper.html)

| 参数            | 说明                        | 类型   | 默认值          | 可选值                                                                                                       | 版本 |
| --------------- | --------------------------- | ------ | --------------- | ------------------------------------------------------------------------------------------------------------ | ---- |
| count           | 数量                        | Number | `0`             | -                                                                                                            | -    |
| current         | 激活项的下标                | Number | `0`             | -                                                                                                            | -    |
| mode            | 指示器的模式                | String | `dots`          | `dots`、`line`                                                                                               | -    |
| position        | 指示器的位置                | String | `bottom-center` | `bottom-center`、`bottom-left`、`bottom-right`、`left-bottom`、`left-center`、`right-cottom`、`right-center` | -    |
| top             | 指示器距离顶部的距离        | String | -               | -                                                                                                            | -    |
| bottom          | 指示器距离底部的距离        | String | -               | -                                                                                                            | -    |
| left            | 指示器距离左侧的距离        | String | -               | -                                                                                                            | -    |
| right           | 指示器距离右侧的距离        | String | -               | -                                                                                                            | -    |
| dotColor        | dots 指示器的颜色           | String | -               | -                                                                                                            | -    |
| activeDotColor  | dots 指示器激活时的颜色     | String | -               | -                                                                                                            | -    |
| dotWidth        | dots 指示器的宽度           | String | -               | -                                                                                                            | -    |
| activeDotWidth  | dots 指示器激活时的宽度     | String | -               | -                                                                                                            | -    |
| dotHeight       | dots 指示器的高度           | String | -               | -                                                                                                            | -    |
| activeDotHeight | dots 指示器激活时的高度     | String | -               | -                                                                                                            | -    |
| dotRedius       | dots 指示器的圆角大小       | String | -               | -                                                                                                            | -    |
| activeDotRedius | dots 指示器激活时的圆角大小 | String | -               | -                                                                                                            | -    |
| dotGap          | dots 指示器的间距           | String | -               | -                                                                                                            | -    |
| lineWidth       | line 指示器的宽度           | String | -               | -                                                                                                            | -    |
| lineHeight      | line 指示器的高度           | String | -               | -                                                                                                            | -    |
| lineColor       | line 指示器的颜色           | String | -               | -                                                                                                            | -    |
| lineBarColor    | line 指示器滑块的颜色       | String | -               | -                                                                                                            | -    |
| lineRedius      | line 指示器滑块的圆角大小   | String | -               | -                                                                                                            | -    |

# Events

[uni-app swiper 官方文档](https://uniapp.dcloud.net.cn/component/swiper.html)

| 事件名 | 说明                   | 回调参数                          | 版本 |
| ------ | ---------------------- | --------------------------------- | ---- |
| @click | 指示器 item 点击时触发 | index: 被惦记的指示器 item 的下标 | -    |

# 组件样式变量

| 变量                                           | 说明                        | 默认值                                                                                                                                                                | 版本 |
| ---------------------------------------------- | --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---- |
| --hi-swiper-indicator-top                      | 指示器距离顶部的距离        | `bottom-center、bottom-left、bottom-right、left-bottom、right-bottom` 时为 `auto`。`left-center、right-center` 时为 `50%`                                             | -    |
| --hi-swiper-indicator-bottom                   | 指示器距离底部的距离        | `bottom-center、bottom-left、bottom-right、left-bottom、right-bottom` 时为 `10px`。`left-center、right-center` 时为 `auto`                                            | -    |
| --hi-swiper-indicator-left                     | 指示器距离左侧的距离        | `bottom-center` 时为 `50%`。`bottom-left、left-bottom、left-center` 时为 `10px`。`bottom-right、right-bottom、right-center` 时为 `auto`                               | -    |
| --hi-swiper-indicator-right                    | 指示器距离右侧的距离        | `bottom-center、bottom-left、left-bottom、left-center` 时为 `auto`。`bottom-right、right-bottom、right-center` 时为 `10px`                                            | -    |
| --hi-swiper-indicator-transform                | 指示器位置变换              | `bottom-center`: `translate(-50%, 0)`。 `bottom-left、bottom-right、left-bottom、right-bottom`: `translate(0, 0)`。 `left-center、right-center`: `translate(0, -50%)` | -    |
| --hi-swiper-indicator-transition               | 指示器的过渡效果            | `all 500ms`                                                                                                                                                           | -    |
| --hi-swiper-indicator-dot-gap                  | dots 指示器 item 的间距     | `10rpx`                                                                                                                                                               | -    |
| --hi-swiper-indicator-dot-width                | dots 指示器 item 的宽度     | `bottom-center、bottom-left、bottom-right` 时为 `16rpx`。`left-bottom、left-center、right-bottom、right-center` 时为 `8rpx`                                           | -    |
| --hi-swiper-indicator-dot-height               | dots 指示器 item 的高度     | `bottom-center、bottom-left、bottom-right` 时为 `8rpx`。`left-bottom、left-center、right-bottom、right-center` 时为 `16rpx`                                           | -    |
| --hi-swiper-indicator-dot-border-redius        | dots 指示器 item 的圆角大小 | `8rpx`                                                                                                                                                                | -    |
| --hi-swiper-indicator-dot-color                | dots 指示器 item 的颜色     | `#ffffff`                                                                                                                                                             | -    |
| --hi-swiper-indicator-active-dot-width         | dots 指示器激活时的宽度     | `bottom-center、bottom-left、bottom-right` 时为 `32rpx`。`left-bottom、left-center、right-bottom、right-center` 时为 `8rpx`                                           | -    |
| --hi-swiper-indicator-active-dot-height        | dots 指示器激活时的高度     | `bottom-center、bottom-left、bottom-right` 时为 `8rpx`。`left-bottom、left-center、right-bottom、right-center` 时为 `32rpx`                                           | -    |
| --hi-swiper-indicator-active-dot-border-redius | dots 指示器激活时的圆角大小 | `8rpx`                                                                                                                                                                | -    |
| --hi-swiper-indicator-active-dot-color         | dots 指示器激活时的颜色     | `var(--hi-theme-primary)`                                                                                                                                             | -    |
| --hi-swiper-indicator-line-width               | line 指示器的宽度           | `bottom-center、bottom-left、bottom-right` 时为 `calc(var(--hi-swiper-indicator-count) * 32rpx)`。`left-bottom、left-center、right-bottom、right-center` 时为 `8rpx`  | -    |
| --hi-swiper-indicator-line-height              | line 指示器的高度           | `bottom-center、bottom-left、bottom-right` 时为 `8rpx`。`left-bottom、left-center、right-bottom、right-center` 时为 `calc(var(--hi-swiper-indicator-count) * 32rpx)`  | -    |
| --hi-swiper-indicator-line-border-redius       | line 指示器的圆角大小       | `8rpx`                                                                                                                                                                | -    |
| --hi-swiper-indicator-line-color               | line 指示器的颜色           | `#ffffff`                                                                                                                                                             | -    |
| --hi-swiper-indicator-line-bar-color           | line 指示器滑块的颜色       | `var(--hi-theme-primary)`                                                                                                                                             | -    |
