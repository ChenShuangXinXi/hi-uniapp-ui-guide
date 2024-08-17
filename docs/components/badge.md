# 基础使用

`hi-badge` 默认使用 `absolute` 定位，需给父元素设置 `position: relative`。
<br/>
默认情况下，值为 `0` 时不显示，需配置 `showZero` 为 `true` 才会显示。

```vue
<hi-badge :value="0" showZero></hi-badge>
<hi-badge :value="99"></hi-badge>
```

<br/>

# 圆点模式

设置 `mode="dot"` 开启圆点模式。

```vue
<hi-badge mode="dot"></hi-badge>
```

<br/>

# overflow 模式

设置 `mode="overflow"` 开启 `overflow` 模式。此时值大于 `max` 时显示 `${max}+`

`max` 的值默认为 `99`

```vue
<hi-badge :value="99" mode="overflow"></hi-badge>
<hi-badge :value="199" mode="overflow"></hi-badge>
```

<br/>

# ellipsis 模式

设置 `mode="ellipsis"` 开启 `ellipsis` 模式。此时值大于 `max` 时显示 `${max}...`

`max` 的值默认为 `99`

```vue
<hi-badge :value="99" mode="ellipsis"></hi-badge>
<hi-badge :value="199" mode="ellipsis"></hi-badge>
```

<br/>

# limit 模式

设置 `mode="ellipsis"` 开启 `ellipsis` 模式。此时以 `limit` 属性的值作为判断条件，值大于 `limit` 时显示 `${value / limit} + ${suffix}`
<br/>
`limit` 的分割值默认为 `1000`，`limit` 分割后的后缀默认为 `k`

```vue
<hi-badge :value="1999" mode="limit"></hi-badge>
<hi-badge :value="19999" mode="limit"></hi-badge>
<hi-badge :value="19999" mode="limit" suffix="千"></hi-badge>
<hi-badge :value="19999" mode="limit" suffix="w"></hi-badge>
<hi-badge :value="19999" mode="limit" suffix="万"></hi-badge>
```

<br/>

# Props

| 参数              | 说明                                    | 类型      | 默认值  | 可选值                                 |
| ----------------- | --------------------------------------- | --------- | ------- | -------------------------------------- |
| `value`           | 值                                      | `Number`  | `0`     | `-`                                    |
| `showZero`        | 值为 `0` 时是否显示                     | `Boolean` | `false` | `-`                                    |
| `mode`            | 模式                                    | `String`  | `-`     | `dot`、`overflow`、`ellipsis`、`limit` |
| `max`             | 最大值                                  | `Number`  | `99`    | `-`                                    |
| `limit`           | `limit` 分割值                          | `Number`  | `1000`  | `-`                                    |
| `suffix`          | `limit` 分割后的后缀                    | `String`  | `k`     | `-`                                    |
| `decimals`        | `limit` 后要保留的小数位数              | `Number`  | `2`     | `-`                                    |
| `discardLastZero` | `limit` 后是否舍弃默认为 `0` 的小数位数 | `Boolean` | `true`  | `-`                                    |
