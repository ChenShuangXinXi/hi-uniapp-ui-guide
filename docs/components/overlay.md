# 基础使用

使用 `v-model` 绑定显示状态。

```vue
<hi-overlay v-model="isShow"></hi-overlay>
```

# 异步关闭

通过将 `async` 设置为 `true` 来开启异步关闭特性。

异步关闭时，点击遮罩后会触发 `asyncClose` 事件。

```vue
<hi-overlay v-model="isShow" @asyncClose="onAsyncClose" async></hi-overlay>
```

# 嵌入内容

通过默认的 `slot` 插入内容。

通过 `align` 设置内容的位置。可选的值有：`left-top | left-center | left-bottom | center-top | center-center | center-bottom | right-top | right-center | right-bottom`

提示：嵌入的内容需要设置 `@tap.stop` 阻止冒泡。

```vue
<hi-overlay v-model="isShow" align="center-bottom">
    <view class="content" @tap.stop></view>
</hi-overlay>
```

# Props

| 参数     | 说明             | 类型    | 默认值          | 可选值                                                                                                                                | 版本 |
| -------- | ---------------- | ------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ---- |
| v-model  | 显示状态         | Boolean | false           | -                                                                                                                                     | -    |
| async    | 是否开启异步关闭 | Boolean | false           | -                                                                                                                                     | -    |
| align    | 内容的布局位置   | String  | `center-center` | `left-top`、`left-center`、`left-bottom`、`center-top`、`center-center`、`center-bottom`、`right-top`、`right-center`、`right-bottom` |
| duration | 过渡效果持续时间 | String  | -               | -                                                                                                                                     | -    |
| bg       | 背景             | String  | -               | -                                                                                                                                     | -    |

# Events

| 事件名      | 说明           | 回调参数 | 版本 |
| ----------- | -------------- | -------- | ---- |
| @close      | 关闭时触发     | -        | -    |
| @asyncClose | 异步关闭时触发 | -        | -    |

# Slots

| 名称    | 说明     |
| ------- | -------- |
| default | 内容插槽 |

# 组件样式变量

| 变量                    | 说明         | 默认值                         | 版本 |
| ----------------------- | ------------ | ------------------------------ | ---- |
| --hi-overlay-background | 背景         | `var(--hi-background-overlay)` | -    |
| --hi-overlay-index      | 层级         | `var(--hi-index-big)`          | -    |
| --hi-overlay-duration   | 过渡效果时长 | `300ms`                        | -    |
| --hi-overlay-function   | 过渡效果函数 | `ease-in-out`                  | -    |
