# 基础使用

通过 `value` 设置价格值。

```vue
<hi-price value="158"></hi-price>
```

# 保留小数

通过 `decimals` 设置小数位数。值是一个用 `0` 拼成的字符串，想保留几位小数就填几个 `0`。比如：`000`: 保留 3 位小数。

默认情况下，组件会舍弃末尾为 0 的小数。比如，`158.60` 组件默认会设置最后的一个 `0` 最终显示成 `158.6`， 开启 `fixed` 可以保留固定的位数。

```vue
<hi-price value="158.60" fixed decimals="00"></hi-price>
```

# 显示删除线

通过 `showDelete` 设置是否显示删除线。

```vue
<hi-price value="158" showDelete></hi-price>
<hi-price value="-158" showDelete></hi-price>
```

# Props

| 参数         | 说明                                                  | 类型    | 默认值  | 可选值 | 版本 |
| ------------ | ----------------------------------------------------- | ------- | ------- | ------ | ---- |
| size         | 文本大小                                              | String  | -       | -      | -    |
| color        | 文本颜色                                              | String  | -       | -      | -    |
| weight       | 文本粗细                                              | String  | -       | -      | -    |
| unit         | 单位                                                  | String  | `¥`     | -      | -    |
| unitSize     | 单位大小                                              | String  | -       | -      | -    |
| unitColor    | 单位颜色                                              | String  | -       | -      | -    |
| unitWeight   | 单位粗细                                              | String  | -       | -      | -    |
| value        | 价格                                                  | String  | -       | -      | -    |
| valueSize    | 价格大小                                              | String  | -       | -      | -    |
| valueColor   | 价格颜色                                              | String  | -       | -      | -    |
| valueWeight  | 价格粗细                                              | String  | -       | -      | -    |
| decimals     | 小数位数                                              | String  | `"00"`  | -      | -    |
| thousands    | 千分位分隔符                                          | String  | `,`     | -      | -    |
| fixed        | 是否显示固定的小数位数，关闭后，小数位为 0 的则不显示 | Boolean | `false` | -      | -    |
| showDelete   | 是否显示删除线                                        | Boolean | `false` | -      | -    |
| deleteHeight | 删除线高度                                            | String  | -       | -      | -    |
| deleteWidth  | 删除线宽度                                            | String  | -       | -      | -    |
| deleteColor  | 删除线颜色                                            | String  | -       | -      | -    |

# 组件样式变量

| 变量                         | 说明                    | 默认值            | 版本 |
| ---------------------------- | ----------------------- | ----------------- | ---- |
| --hi-price-font-size         | 文字大小                | -                 | -    |
| --hi-price-color             | 文字颜色                | -                 | -    |
| --hi-price-font-weight       | 文字粗细                | `700`             | -    |
| --hi-price-line-height       | 行高                    | `1`               | -    |
| --hi-price-unit-font-size    | 单位大小                | -                 | -    |
| --hi-price-unit-color        | 单位颜色                | -                 | -    |
| --hi-price-unit-font-weight  | 单位粗细                | -                 | -    |
| --hi-price-unit-margin       | 单位间距                | `0`               | -    |
| --hi-price-value-font-size   | 价格大小                | -                 | -    |
| --hi-price-value-color       | 价格颜色                | -                 | -    |
| --hi-price-value-font-weight | 价格粗细                | -                 | -    |
| --hi-price-delete-width      | 删除线宽度              | `100%`            | -    |
| --hi-price-delete-height     | 删除线高度              | `2px`             | -    |
| --hi-price-delete-color      | 删除线颜色              | `currentColor`    | -    |
| --hi-price-delete-left       | 删除线距离左侧的距离    | `0`               | -    |
| --hi-price-delete-bottom     | 删除线距离底部的距离    | `50%`             | -    |
| --hi-price-delete-transform  | 删除线的 transform 属性 | `translateY(50%)` | -    |
