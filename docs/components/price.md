# 基础使用

通过 `value` 设置价格值。

```vue
<hi-price value="158"></hi-price>
```

<br/>

# 保留小数

通过 `decimals` 设置小数位数。值是一个用 `0` 拼成的字符串，想保留几位小数就填几个 `0`。比如：`000`: 保留 3 位小数。

默认情况下，组件会舍弃末尾为 0 的小数。比如，`158.60` 组件默认会设置最后的一个 `0` 最终显示成 `158.6`， 开启 `fixed` 可以保留固定的位数。

```vue
<hi-price value="158.60" fixed decimals="00"></hi-price>
```

<br/>

# 显示删除线

通过 `showDelete` 设置是否显示删除线。

```vue
<hi-price value="158" showDelete></hi-price>
<hi-price value="-158" showDelete></hi-price>
```

<br/>

# Props

| 参数         | 说明                                                    | 类型               | 默认值  | 可选值 | 版本 |
| ------------ | ------------------------------------------------------- | ------------------ | ------- | ------ | ---- |
| `unit`       | 单位                                                    | `String`           | `¥`     | -      | -    |
| `value`      | 值                                                      | `[String, Number]` | `0`     | -      | -    |
| `decimals`   | 小数位数                                                | `String`           | `"00"`  | -      | -    |
| `thousands`  | 千分位分隔符                                            | `String`           | `,`     | -      | -    |
| `fixed`      | 是否显示固定的小数位数，关闭后，小数位为 `0` 的则不显示 | `Boolean`          | `false` | -      | -    |
| `showDelete` | 是否显示删除线                                          | `Boolean`          | `false` | -      | -    |
