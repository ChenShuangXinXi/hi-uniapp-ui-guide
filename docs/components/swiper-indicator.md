# 基础使用

注意：`hi-swiper-indicator` 默认 `position: absolute`。
<br/>
可以结合 `hi-swiper` 或用户自定义的 `swiper` 组合使用。

```vue
<hi-swiper :list="list" :autoplay="true">
    <template #indicator="{ current }">
        <hi-swiper-indicator :count="list.length" :current="current"></hi-swiper-indicator>
    </template>
</hi-swiper>
```

<br/>

# 指示器的位置

可以通过 `position` 参数设置指示器的位置。可选的值有：`bottom-center(默认)`、`bottom-left`、`bottom-right`、`left-bottom`、`left-center`、`right-cottom`、`right-center`。

```vue
<hi-swiper :list="list" :autoplay="true">
    <template #indicator="{ current }">
        <hi-swiper-indicator :count="list.length" :current="current" position="bottom-right"></hi-swiper-indicator>
    </template>
</hi-swiper>
```

<br/>

# 指示器的类型

可以通过 `mode` 参数设置指示器的类型。可选的值有：`dots(默认)`、`line`。

```vue
<hi-swiper :list="list" :autoplay="true">
    <template #indicator="{ current }">
        <hi-swiper-indicator :count="list.length" :current="current" mode="line"></hi-swiper-indicator>
    </template>
</hi-swiper>
```

<br/>

# Props

[uni-app swiper 官方文档](https://uniapp.dcloud.net.cn/component/swiper.html)

| 参数       | 说明         | 类型   | 默认值          | 可选值                                                                                                       |
| ---------- | ------------ | ------ | --------------- | ------------------------------------------------------------------------------------------------------------ |
| `count`    | 数量         | Number | `0`             | `-`                                                                                                          |
| `current`  | 激活项的下标 | Number | `0`             | `-`                                                                                                          |
| `mode`     | 指示器的模式 | String | `dots`          | `dots`、`line`                                                                                               |
| `position` | 指示器的位置 | String | `bottom-center` | `bottom-center`、`bottom-left`、`bottom-right`、`left-bottom`、`left-center`、`right-cottom`、`right-center` |

<br/>

# Events

[uni-app swiper 官方文档](https://uniapp.dcloud.net.cn/component/swiper.html)

| 事件名   | 说明                     | 回调参数                              |
| -------- | ------------------------ | ------------------------------------- |
| `@click` | 指示器 `item` 点击时触发 | `index`: 被点击的指示器 `item` 的下标 |
