# 横向滚动

默认横行滚动。

```vue
<hi-notice-bar :list="list"></hi-notice-bar>
```

<br/>

# 纵向滚动

通过设置 `vertical` 设为纵向滚动。

```vue
<hi-notice-bar :list="list" vertical></hi-notice-bar>
```

<br/>

# 每秒移动固定距离

`hi-notice-bar` 滚动速度有两种，一种是设置 `speed(每秒移动固定距离)`，另一种是设置 `duration（默认，每个通知滚动的时长相同）`。

```vue
<hi-notice-bar :list="list" :speed="50"></hi-notice-bar>
```

# 图标和按钮的显示状态

通过 `showIcon` 设置左侧通知图标的显示状态，默认显示。
<br/>
通过 `showClose` 设置右侧关闭按钮的显示状态。
<br/>
通过 `showArrow` 设置右侧箭头按钮的显示状态。

```vue
<hi-notice-bar :list="list" showIcon></hi-notice-bar>
<hi-notice-bar :list="list" showClose></hi-notice-bar>
<hi-notice-bar :list="list" showArrow></hi-notice-bar>
```

<br/>

# 滚动间隔

组件默认滚动结束后立即开始下一条数据的滚动，设置滚动间隔后可以在当前滚动结束后间隔一段时间再开始滚动。

```vue
<hi-notice-bar :list="list" :interval="1.5"></hi-notice-bar>
```

# 步近模式

此模式时，文字滚动到左边或顶部时停止。
<br/>
此模式时，文本会只显示一行，超出显示省略号。
<br/>
此模式时，一般需要搭配滚动间隔使用。

```vue
<hi-notice-bar :list="list" step></hi-notice-bar>
<hi-notice-bar :list="list" vertical step></hi-notice-bar>
```

<br/>

# Props

| 参数            | 说明                                   | 类型      | 默认值      | 可选值 |
| --------------- | -------------------------------------- | --------- | ----------- | ------ |
| `hoverClass`    | 文字、更多、关闭点击时的 `hover-class` | `String`  | `hi-hover`  | `-`    |
| `show`          | 是否显示                               | `Boolean` | `true`      | `-`    |
| `list`          | 滚动数据                               | `Array`   | `-`         | `-`    |
| `keyName`       | 数据 `item` 中滚动文本属性的 `key`     | `String`  | `text`      | `-`    |
| `showIcon`      | 是否通知图标                           | `Boolean` | `true`      | `-`    |
| `iconName`      | 通知图标名称                           | `String`  | `__gonggao` | `-`    |
| `showArrow`     | 是否显示箭头按钮                       | `Boolean` | `false`     | `-`    |
| `showClose`     | 是否显示关闭按钮                       | `Boolean` | `false`     | `-`    |
| `arrowIconName` | 箭头图标名称                           | `String`  | `__you`     | `-`    |
| `closeIconName` | 关闭图标名称                           | `String`  | `__shanchu` | `-`    |
| `vertical`      | 是否纵向滚动                           | `Boolean` | `false`     | `-`    |
| `duration`      | 滚动时长                               | `Number`  | `null`      | `-`    |
| `speed`         | 每秒移动距离                           | `Number`  | `null`      | `-`    |
| `interval`      | 滚动间隔                               | `Number`  | `0`         | `-`    |
| `step`          | 是否开启步近模式                       | `Boolean` | `false`     | `-`    |

<br/>

# Events

| 事件名   | 说明           | 回调参数                            |
| -------- | -------------- | ----------------------------------- |
| `@click` | 点击图标时触发 | `item`: 数据对象；`index`: 数据索引 |
| `@arrow` | 点击箭头时触发 | `index`: 数据索引                   |
| `@close` | 点击关闭时触发 | `-`                                 |
