# 基础使用

`hi-badge` 默认使用 `absolute` 定位，需给父元素设置 `position: relative`。

默认情况下，值为 `0` 时不显示，需配置 `showZero` 为 `true` 才会显示。

```vue
<hi-badge :value="0" showZero></hi-badge>
<hi-badge :value="99"></hi-badge>
```

# 主题

通过 `theme` 属性设置主题。默认主题有 `primary`、`success`、`warning`、`danger`、`info`。

通过设置 `--hi-theme-xxx` 格式的变量来扩展 HiUi 的主题。

```vue
<hi-badge :value="99" theme="primary"></hi-badge>
<hi-badge :value="199" theme="success"></hi-badge>
<hi-badge :value="999" theme="warning"></hi-badge>
<hi-badge :value="1999" theme="error"></hi-badge>
<hi-badge :value="19999" theme="info"></hi-badge>
```

# 圆点模式

设置 `mode="dot"` 开启圆点模式。

```vue
<hi-badge mode="dot"></hi-badge>
```

# overflow 模式

设置 `mode="overflow"` 开启 `overflow` 模式。此时值大于 `max` 时显示 `${max}+`

`max` 的值默认为 `99`

```vue
<hi-badge :value="99" mode="overflow" theme="primary"></hi-badge>
<hi-badge :value="199" mode="overflow" theme="success"></hi-badge>
```

# ellipsis 模式

设置 `mode="ellipsis"` 开启 `ellipsis` 模式。此时值大于 `max` 时显示 `${max}...`

`max` 的值默认为 `99`

```vue
<hi-badge :value="99" mode="ellipsis" theme="primary"></hi-badge>
<hi-badge :value="199" mode="ellipsis" theme="success"></hi-badge>
```

# limit 模式

设置 `mode="ellipsis"` 开启 `ellipsis` 模式。此时以 `limit` 属性的值作为判断条件，值大于 `limit` 时显示 `${value / limit} + ${suffix}`

`limit` 的分割值默认为 `1000`，`limit` 分割后的后缀默认为 `k`

```vue
<hi-badge :value="1999" mode="limit"></hi-badge>
<hi-badge :value="19999" mode="limit" theme="primary"></hi-badge>
<hi-badge :value="19999" mode="limit" theme="success" suffix="千"></hi-badge>
<hi-badge :value="19999" mode="limit" theme="warning" suffix="w"></hi-badge>
<hi-badge :value="19999" mode="limit" theme="error" suffix="万"></hi-badge>
```

# Props

| 参数            | 说明                                | 类型    | 默认值 | 可选值                                                               | 版本 |
| --------------- | ----------------------------------- | ------- | ------ | -------------------------------------------------------------------- | ---- |
| theme           | 主题                                | String  | -      | `primary`、`success`、`warning`、`danger`、`info` 以及自己扩展的主题 | -    |
| value           | 值                                  | Number  | 0      | -                                                                    | -    |
| showZero        | 值为 0 时是否显示                   | Boolean | false  | -                                                                    | -    |
| mode            | 模式                                | String  | -      | `dot`、`overflow`、`ellipsis`、`limit`                               | -    |
| max             | 最大值                              | Number  | 99     | -                                                                    | -    |
| limit           | limit 分割值                        | Number  | 1000   | -                                                                    | -    |
| suffix          | limit 分割后的后缀                  | String  | `k`    | -                                                                    | -    |
| decimals        | limit 后要保留的小数位数            | Number  | 2      | -                                                                    | -    |
| discardLastZero | limit 后是否舍弃默认为 0 的小数位数 | Boolean | true   | -                                                                    |
| bg              | 背景                                | String  | -      | -                                                                    | -    |
| color           | 文字颜色                            | String  | -      |                                                                      | -    |
| size            | 文字大小                            | String  | -      | -                                                                    | -    |
| width           | 宽                                  | String  | -      | -                                                                    | -    |
| height          | 高                                  | String  | -      | -                                                                    | -    |
| radius          | 圆角大小                            | String  | -      | -                                                                    | -    |
| top             | top 值                              | String  | -      | -                                                                    | -    |
| bottom          | bottom 值                           | String  | -      | -                                                                    | -    |
| left            | left 值                             | String  | -      | -                                                                    | -    |
| right           | right 值                            | String  | -      | -                                                                    | -    |
| position        | position 值                         | String  | -      | -                                                                    | -    |
| dotSize         | 圆点大小                            | String  | -      | -                                                                    | -    |

# 组件样式变量

| 变量                     | 说明         | 默认值                    | 版本 |
| ------------------------ | ------------ | ------------------------- | ---- |
| --hi-badge-background    | 背景         | `var(--hi-theme-primary)` | -    |
| --hi-badge-color         | 文字颜色     | `#FFFFFF`                 | -    |
| --hi-badge-font-size     | 文字大小     | `0.7em`                   | -    |
| --hi-badge-font-weight   | 字重         | -                         | -    |
| --hi-badge-border-radius | 圆角大小     | `100px`                   | -    |
| --hi-badge-padding       | 内边距       | `2px 8px`                 | -    |
| --hi-badge-position      | 定位方式     | `absolute`                | -    |
| --hi-badge-left          | left 值      | -                         | -    |
| --hi-badge-right         | right 值     | `0`                       | -    |
| --hi-badge-top           | top 值       | `0`                       | -    |
| --hi-badge-bottom        | bottom 值    | -                         | -    |
| --hi-badge-index         | 层级大小     | `6`                       | -    |
| --hi-badge-transform     | transform 值 | `translate(25%, -25%)`    | -    |
| --hi-badge-dot-size      | 圆点尺寸     | `8px`                     | -    |
