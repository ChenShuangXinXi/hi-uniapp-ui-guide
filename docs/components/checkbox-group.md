# 基础使用

通过 `v-model` 绑定选中的值。

```vue
<hi-checkbox-group v-model="values">
    <hi-checkbox v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></hi-checkbox>
</hi-checkbox-group>
```

<br/>

# 异步变更

通过给组件添加 `async` 属性来开启组件内全部复选框的异步变更特性，此时点击复选框后，组件不会变更选中状态，而是提供一个 `asyncChange` 事件，需要用户处理完相关逻辑后手动变更组件状态。

```vue
<hi-checkbox-group v-model="values" async @asyncChange="onAsyncChange">
    <hi-checkbox v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></hi-checkbox>
</hi-checkbox-group>
```

<br/>

# Props

| 参数      | 说明             | 类型      | 默认值  | 可选值 |
| --------- | ---------------- | --------- | ------- | ------ |
| `v-model` | 选中的值         | `Array`   | `[]`    | `-`    |
| `async`   | 是否开启异步变更 | `Boolean` | `false` | `-`    |

<br/>

# Events

| 事件名         | 说明                               | 回调参数                                                           |
| -------------- | ---------------------------------- | ------------------------------------------------------------------ |
| `@change `     | 未开启异步变更时选中项变化时触发   | `newValues`: 变更后的选中选中项的值                                |
| `@asyncChange` | 开启异步后点击组件内的复选框时触发 | `value`: 点击的复选框的值；`isChecked`: 点击的复选框当前的选中状态 |
