# 基础使用

使用 `show` 绑定显示状态。
<br/>
遮罩层点后后会提交一个 `close` 事件，需自行处理关闭逻辑将 `show` 设置为 `false` 以关闭遮罩层。

```vue
<hi-overlay :show="isShow"></hi-overlay>
```

<br/>

# 嵌入内容

通过默认的 `slot` 插入内容。
<br/>
通过 `align` 设置内容的位置。可选的值有：`left-top | left-center | left-bottom | center-top | center-center | center-bottom | right-top | right-center | right-bottom`
<br/>
提示：嵌入的内容需要设置 `@tap.stop` 阻止冒泡触发 `close` 事件。

```vue
<hi-overlay :show="isShow" align="center-bottom">
    <view class="content" @tap.stop></view>
</hi-overlay>
```

<br/>

# Props

| 参数    | 说明           | 类型      | 默认值          | 可选值                                                                                                                                |
| ------- | -------------- | --------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `show`  | 显示状态       | `Boolean` | `false`         | `-`                                                                                                                                   |
| `align` | 内容的布局位置 | `String`  | `center-center` | `left-top`、`left-center`、`left-bottom`、`center-top`、`center-center`、`center-bottom`、`right-top`、`right-center`、`right-bottom` |

<br/>

# Events

| 事件名   | 说明     | 回调参数 |
| -------- | -------- | -------- |
| `@close` | 关闭事件 | `-`      |

<br/>

# Slots

| 名称       | 说明     |
| ---------- | -------- |
| `#default` | 内容插槽 |
