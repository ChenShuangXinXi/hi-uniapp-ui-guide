# 基础使用

默认高度：`500rpx`

```vue
<hi-empty></hi-empty>
```

<br/>

# 显示按钮

设置 `showBtn` 显示按钮。
<br/>
通过 `btnText` 设置按钮文字。
<br/>
通过 `btnProps` 设置按钮的其他属性。

```vue
<hi-empty showBtn></hi-empty>
```

<br/>

# Props

| 参数       | 说明         | 类型      | 默认值           | 可选值 |
| ---------- | ------------ | --------- | ---------------- | ------ |
| `iconName` | 图标名称     | `String`  | `__kongshuju`    | `-`    |
| `iconMode` | 图标裁剪模式 | `String`  | -                | `-`    |
| `tips`     | 提示         | `String`  | `Ops! 暂无数据~` | `-`    |
| `showBtn`  | 是否显示按钮 | `Boolean` | `false`          | `-`    |
| `btnText`  | 按钮文字     | String    | `继续逛逛`       | `-`    |
| `btnProps` | 按钮其他属性 | `Object`  | `参考 hi-button` | `-`    |

<br/>

# Events

| 事件名称 | 说明         | 回调参数 |
| -------- | ------------ | -------- |
| `@click` | 点击按钮触发 | `-`      |

<br/>

# Slots

| 名称     | 说明 | 参数 |
| -------- | ---- | ---- |
| `button` | 按钮 | `-`  |
