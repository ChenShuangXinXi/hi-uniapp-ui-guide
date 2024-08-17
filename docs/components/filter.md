# 基础使用

提示：该组件只实现了样式，具体的切换逻辑需自己实现。
<br/>
因为在正常开发中，筛选过滤并不是简单的点击切换。比如：按价格筛选时就需要升序、降序、按价格区间等。
<br/>
通过 `list` 设置过滤项列表数据。数据格式如下：

```js
[
    {
        calss: "", // 类名
        style: "", // 样式
        iconName: "", // 图标名称
        checkedIconName: "", // 选中时的图标名称
        text: "", // 文字
        disabled: false, // 是否禁用
    },
];
```

通过 `current` 设置当前激活项。

```vue
<hi-filter :list="items" :current="current"></hi-filter>
```

<br/>

# Props

| 参数            | 说明                           | 类型      | 默认值       | 可选值 |
| --------------- | ------------------------------ | --------- | ------------ | ------ |
| `hoverClass`    | 过滤项和右侧按钮的 hover-class | `String`  | `hi-hover`   | `-`    |
| `list`          | 过滤项列表                     | `String`  | `-`          | `-`    |
| `current`       | 激活项下标                     | `Number`  | `0`          | `-`    |
| `showRight`     | 是否显示右侧内容               | `Boolean` | `true`       | `-`    |
| `rightIconName` | 右侧按钮的图标名称             | `String`  | `__shaixuan` | `-`    |
| `rightText`     | 右侧按钮文字                   | `String`  | `筛选`       | `-`    |

<br/>

# Events

| 名称          | 说明                 | 参数                                                     |
| ------------- | -------------------- | -------------------------------------------------------- |
| `@itemClick`  | 筛选项被点击时触发   | `item: Object - 筛选项数据; index: Number - 筛选项下标;` |
| `@rightClick` | 右侧按钮被点击时触发 | `-`                                                      |

<br/>

# Slots

| 名称     | 说明     | 参数                                                     |
| -------- | -------- | -------------------------------------------------------- |
| `#item`  | 筛选项   | `item: Object - 筛选项数据; index: Number - 筛选项下标;` |
| `#right` | 右侧内容 | `-`                                                      |
