# 基础使用

提示：`hi-radio` 需要放到 `hi-radio-group` 中使用。

```vue
<hi-radio-group v-model="checked">
    <hi-radio v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></hi-radio>
</hi-radio-group>
```

<br/>

# 禁用

通过给组件添加 `disabled` 属性来禁用单个单选框。

```vue
<hi-radio-group v-model="checked">
    <hi-radio v-for="item in options" :key="item.value" :label="item.label" :value="item.value" disabled></hi-radio>
</hi-radio-group>
```

# Props

| 参数         | 说明                   | 类型               | 默认值      | 可选值 |
| ------------ | ---------------------- | ------------------ | ----------- | ------ |
| `hoverClass` | 组件点击时的类名       | `String`           | `hi-hover`  | `-`    |
| `disabled`   | 是否禁用               | `Boolean`          | `false`     | -      |
| `value`      | 组合使用时组件的绑定值 | `[String, Number]` | ``          | `-`    |
| `label`      | 组件的文本             | `String`           | `-`         | `-`    |
| `iconName`   | 图标名称               | `String`           | `__checked` | `-`    |

<br/>

# Slots

| 名称       | 说明                     |
| ---------- | ------------------------ |
| `#default` | 默认插槽（`label 区域`） |
