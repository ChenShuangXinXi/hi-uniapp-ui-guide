# 基础使用

通过设置一个结束日期对象 `endDate` 开启一个倒计时。

```vue
<hi-countdown :endDate="endDate"></hi-countdown>
```

<br/>

# 设置展示的数据

通过 `mode` 设置展示的数据。`mode` 为一个数组，可选的值有：`dd`、`d`、`hh`、`h`、`mm`、`m`、`ss`、`s`。其中双字母表示补零，单字母不补零。

```vue
<hi-countdown :endDate="endDate" :mode="['dd', 'hh', 'mm', 'ss']"></hi-countdown>
<hi-countdown :endDate="endDate" :mode="['d', 'h', 'm', 's']"></hi-countdown>
```

<br/>

# 自定义分隔符

通过 `separator` 设置分隔符。`separator` 是一个对象，其属性为: `days`、`hours`、`minutes`、`seconds`

```vue
<hi-countdown :endDate="endDate" :separator="{ days: '日', hours: '小时', minutes: '分钟', seconds: '秒' }"></hi-countdown>
```

<br/>

# 结束提示

可以通过 `endText` 设置倒计时结束后的提示。不设置时，倒计时结束后会显示 `00天00时00分00秒` 这样的文本。

```vue
<hi-countdown :endDate="new Date()" endText="活动已结束~"></hi-countdown>
```

<br/>

# Props

| 参数        | 说明                   | 类型     | 默认值                                                      | 可选值 |
| ----------- | ---------------------- | -------- | ----------------------------------------------------------- | ------ |
| `mode`      | 显示的数据模式         | `Array`  | `["dd", "hh", "mm", "ss"]`                                  | `-`    |
| `endText`   | 倒计时结束后的提示文本 | `String` | `-`                                                         | `-`    |
| `endDate`   | 结束日期               | `date`   | `new Date()`                                                | `-`    |
| `separator` | 分隔符                 | `Object` | `{ days: "天", hours: "时", minutes: "分", seconds: "秒" }` | `-`    |

<br/>

# Events

| 名称      | 说明             | 参数                                                                                   |
| --------- | ---------------- | -------------------------------------------------------------------------------------- |
| `@change` | 倒计时改变时触发 | `countdown: Object - 倒计时数据，其中包括剩余的天数、小时数、分钟数、秒数、是否结束等` |
| `@end`    | 倒计时结束时触发 | `-`                                                                                    |

<br/>

# Slots

| 名称                | 说明       | 参数                             |
| ------------------- | ---------- | -------------------------------- |
| `#days`             | 天         | `days: Number - 剩余天数;`       |
| `#hours`            | 小时       | `hours: Number - 剩余小时数;`    |
| `#minutes`          | 分钟       | `minutes: Number - 剩余分钟数;`  |
| `#seconds`          | 秒         | `seconds: Number - 剩余秒数;`    |
| `#daysSeparator`    | 天分隔符   | `separator: String - 天分隔符`   |
| `#hoursSeparator`   | 小时分隔符 | `separator: String - 小时分隔符` |
| `#minutesSeparator` | 分钟分隔符 | `separator: String - 分钟分隔符` |
| `#secondsSeparator` | 秒分隔符   | `separator: String - 秒分隔符`   |
