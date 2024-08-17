# 单独使用/组合使用说明

-   单独使用：需给组件设置 `alone` 属性，并且使用 `v-model` 绑定选中状态。
-   组合使用：需将组件放到 `hi-checkbox-group` 组件内，并给组件设置 `value` 属性。

<br/>

# 基础使用 - 单独使用

```vue
<hi-checkbox v-model="isChecked" alone label="选项"></hi-checkbox>
```

<br/>

# 基础使用 - 组合使用

```vue
<hi-checkbox-group v-model="values">
    <hi-checkbox v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></hi-checkbox>
</hi-checkbox-group>
```

<br/>

# 禁用

通过给组件添加 `disabled` 属性来将组件禁用。

```vue
<hi-checkbox v-model="isChecked" label="选项" alone disabled></hi-checkbox>
```

# 异步变更

通过给组件添加 `async` 属性来开启组件的异步变更特性，此时点击组件后，组件不会变更选中状态，而是提供一个 `asyncChange` 事件，需要用户处理完相关逻辑后手动变更组件状态。

```vue
<hi-checkbox v-model="isChecked" label="选项" alone async @asyncChange="onCheckboxAsyncChange"></hi-checkbox>
```

<br/>

# Props

| 参数         | 说明                     | 类型               | 默认值      | 可选值 |
| ------------ | ------------------------ | ------------------ | ----------- | ------ |
| `hoverClass` | 组件点击时的类名         | `String`           | `hi-hover`  | `-`    |
| `disabled`   | 是否禁用                 | `Boolean`          | `false`     | `-`    |
| `v-model`    | 单独使用时组件的选中状态 | `Boolean`          | `false`     | `-`    |
| `value`      | 组合使用时组件的绑定值   | `[String, Number]` | `-`         | `-`    |
| `label`      | 组件的文本               | `String`           | `-`         | `-`    |
| `alone`      | 是否单独使用组件         | `Boolean`          | `false`     | `-`    |
| `iconName`   | 图标名称                 | `String`           | `__checked` | `-`    |
| `async`      | 是否开启异步变更         | `Boolean`          | `false`     | `-`    |

<br/>

# Events

| 事件名         | 说明                                           | 回调参数                      |
| -------------- | ---------------------------------------------- | ----------------------------- |
| `@change`      | 单独使用并且未开启异步变更时选中状态变化时触发 | `isChecked`: 变更后的选中状态 |
| `@asyncChange` | 单独使用并且开启异步后点击时触发               | `isChecked`: 当前的选中状态   |

# Slots

| 名称       | 说明                     |
| ---------- | ------------------------ |
| `#default` | 默认插槽（`label 区域`） |
