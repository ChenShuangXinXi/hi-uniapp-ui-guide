# 基础使用

通过 `v-model` 绑定选中的值。

```vue
<hi-radio-group v-model="checked">
    <hi-radio v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></hi-radio>
</hi-radio-group>
```

<br/>

# 异步变更

通过给组件添加 `async` 属性来开启组件的异步变更特性，此时点击单选框后，组件不会变更选中状态，而是提供一个 `asyncChange` 事件，需要用户处理完相关逻辑后手动变更组件状态。

```vue
<hi-radio-group v-model="checked" async @asyncChange="onAsyncChange" theme="warning">
    <hi-radio v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></hi-radio>
</hi-radio-group>
```

<br/>

# Props

| 参数      | 说明             | 类型               | 默认值  | 可选值 |
| --------- | ---------------- | ------------------ | ------- | ------ |
| `v-model` | 选中的值         | `[Number, String]` | ``      | `-`    |
| `async`   | 是否开启异步变更 | `Boolean`          | `false` | `-`    |

<br/>

# Events

| 事件名         | 说明                               | 回调参数                  |
| -------------- | ---------------------------------- | ------------------------- |
| `@change`      | 未开启异步变更时选中项变化时触发   | `value`: 变更后的选中的值 |
| `@asyncChange` | 开启异步后点击组件内的单选框时触发 | `value`: 点击的单选框的值 |
