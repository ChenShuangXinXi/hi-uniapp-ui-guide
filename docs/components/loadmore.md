# 基础使用

通过 `status` 设置 loading 状态，可选的值有 `loadmore(加载更多)`、`loading(加载中)`、`nomore(没有更多)`。

```vue
<hi-loadmore :status="loadStatus"></hi-loadmore>
```

# 提示文本

通过 `loadmoreText` 设置 `loadmore` 状态时的提示文本，默认为 `加载更多`。

通过 `loadingText` 设置 `loading` 状态时的提示文本，默认为 `正在加载...`。

通过 `nomoreText` 设置 `nomore` 状态时的提示文本，默认为 `— 没有更多了 —`。

```vue
<hi-loadmore :status="loadStatus" loadmoreText="上拉加载" loadingText="加载中..." nomoreText="已加载全部数据"></hi-loadmore>
```

# 布局方向

通过 `direction` 设置布局方向，可选的值有 `row` 横向和 `column` 纵向。

```vue
<hi-loadmore :status="loadStatus" direction="column"></hi-loadmore>
```

# Props

| 参数         | 说明                      | 类型   | 默认值           | 可选值                          | 版本 |
| ------------ | ------------------------- | ------ | ---------------- | ------------------------------- | ---- |
| hoverClass   | 点击时的类名              | String | -                | -                               | -    |
| size         | 字体大小                  | String | -                | -                               | -    |
| color        | 字体颜色                  | String | -                | -                               | -    |
| status       | 状态                      | String | -                | `loadmore`、`loading`、`nomore` | -    |
| iconName     | loading 图标名称          | String | -                | -                               | -    |
| iconSize     | loading 图标大小          | String | -                | -                               | -    |
| iconColor    | loading 图标颜色          | String | -                | -                               | -    |
| iconMode     | loading 图标裁剪模式      | String | -                | -                               | -    |
| direction    | 布局方向                  | String | `row`            | `row`、`column`                 | -    |
| loadmoreText | loadmore 状态时的提示文本 | String | `加载更多`       | -                               | -    |
| loadingText  | loading 状态时的提示文本  | String | `加载中...`      | -                               | -    |
| nomoreText   | nomore 状态时的提示文本   | String | `— 没有更多了 —` | -                               | -    |

# 组件样式变量

| 变量                     | 说明                       | 默认值                                 | 版本 |
| ------------------------ | -------------------------- | -------------------------------------- | ---- |
| --hi-loadmore-color      | 字体颜色                   | `var(--hi-color-light)`                | -    |
| --hi-loadmore-font-size  | 字体大小                   | `0.8em`                                | -    |
| --hi-loadmore-padding    | 内容的内边距               | `0 10px`                               | -    |
| --hi-loadmore-gap        | 内容之间的间距             | 横向布局时为 `5px`，纵向布局是为 `2px` | -    |
| --hi-loadmore-icon-color | 图标的颜色                 | -                                      | -    |
| --hi-loadmore-icon-size  | 图标的大小                 | `1.25em`                               | -    |
| --hi-loadmore-duration   | loading 动画旋转一周的用时 | `1500ms`                               | -    |
| --hi-loadmore-function   | loading 动画函数           | `linear`                               | -    |
