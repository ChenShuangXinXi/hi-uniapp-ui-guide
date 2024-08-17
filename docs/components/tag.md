# 基础使用

通过 `text` 设置标签文本。

```vue
<hi-tag text="标签"></hi-tag>
```

<br/>

# 设置图标

通过 `iconName` 设置图标。

```vue
<hi-tag text="标签" iconName="douyin"></hi-tag>
```

# 显示关闭按钮

设置 `showClose` 为 `true`，可以显示关闭按钮。

```vue
<hi-tag text="标签" showClose></hi-tag>
```

<br/>

# Props

| 参数            | 说明                           | 类型      | 默认值      | 可选值 |
| --------------- | ------------------------------ | --------- | ----------- | ------ |
| `hoverClass`    | 标签和关闭按钮的 `hover-class` | `String`  | `hi-hover`  | `-`    |
| `text`          | 标签文本                       | `String`  | `-`         | `-`    |
| `iconName`      | 图标名称                       | `String`  | `-`         | `-`    |
| `showClose`     | 是否可关闭                     | `Boolean` | `false`     | `-`    |
| `colseIconName` | 关闭图标名称                   | `String`  | `__shanchu` | `-`    |

# Events

| 事件名   | 说明               | 回调参数 |
| -------- | ------------------ | -------- |
| `@close` | 点击关闭按钮时触发 | `-`      |
