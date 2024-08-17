# 基础使用

通过 `status` 设置 loading 状态，可选的值有 `loadmore(加载更多)`、`loading(加载中)`、`nomore(没有更多)`。

```vue
<hi-loadmore :status="loadStatus"></hi-loadmore>
```

<br/>

# 提示文本

通过 `loadmoreText` 设置 `loadmore` 状态时的提示文本，默认为 `加载更多`。
<br/>
通过 `loadingText` 设置 `loading` 状态时的提示文本，默认为 `正在加载...`。
<br/>
通过 `nomoreText` 设置 `nomore` 状态时的提示文本，默认为 `— 没有更多了 —`。

```vue
<hi-loadmore :status="loadStatus" loadmoreText="上拉加载" loadingText="加载中..." nomoreText="已加载全部数据"></hi-loadmore>
```

<br/>

# Props

| 参数           | 说明                        | 类型     | 默认值           | 可选值                          |
| -------------- | --------------------------- | -------- | ---------------- | ------------------------------- |
| `hoverClass`   | 点击时的类名                | `String` | `hi-hover`       | `-`                             |
| `status`       | 状态                        | `String` | `loadmore`       | `loadmore`、`loading`、`nomore` |
| `iconName`     | `loading` 图标名称          | `String` | `__loading`      | `-`                             |
| `loadmoreText` | `loadmore` 状态时的提示文本 | `String` | `加载更多`       | `-`                             |
| `loadingText`  | `loading` 状态时的提示文本  | `String` | `加载中...`      | `-`                             |
| `nomoreText`   | `nomore` 状态时的提示文本   | `String` | `— 没有更多了 —` | `-`                             |

<br/>

# Events

| 事件名  | 说明                         | 回调参数 |
| ------- | ---------------------------- | -------- |
| `@more` | 状态为 `loadmore` 时点击触发 | `-`      |
