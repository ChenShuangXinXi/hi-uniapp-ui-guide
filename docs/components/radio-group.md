# 基础使用

通过 `v-model` 绑定选中的值。

```vue
<hi-radio-group v-model="checked1">
    <hi-radio v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></hi-radio>
</hi-radio-group>
```

# 主题

通过 `theme` 属性给组内的单选框设置相同的主题。

通过设置 `--hi-theme-xxx` 格式的变量来扩展 HiUi 的主题。

```vue
<hi-radio-group v-model="checked2" theme="primary">
    <hi-radio v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></hi-radio>
</hi-radio-group>
```

# 镂空

通过给组件添加 `plain` 属性来将组内的所有单选框设置成镂空样式。

```vue
<hi-radio-group v-model="checked3" plain>
    <hi-radio v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></hi-radio>
</hi-radio-group>
```

# 异步变更

通过给组件添加 `async` 属性来开启组件的异步变更特性，此时点击单选框后，组件不会变更选中状态，而是提供一个 asyncChange 事件，需要用户处理完相关逻辑后手动变更组件状态。

```vue
<hi-radio-group v-model="checked4" async @asyncChange="onAsyncChange" theme="warning">
    <hi-radio v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></hi-radio>
</hi-radio-group>
```

# 方形单选框

通过给组件添加 `square` 属性来将组内的所有单选框设置成方形的。

```vue
<hi-radio-group v-model="checked" square>
    <hi-radio v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></hi-radio>
</hi-radio-group>
```

# Props

| 参数    | 说明                   | 类型    | 默认值 | 可选值                                                               | 版本 |
| ------- | ---------------------- | ------- | ------ | -------------------------------------------------------------------- | ---- |
| v-model | 选中的值               | Array   | `[]`   | -                                                                    | -    |
| gap     | 组件内 item 之间的间隔 | String  | -      | -                                                                    | -    |
| async   | 是否开启异步变更       | Boolean | false  | -                                                                    | -    |
| theme   | 组件的主题             | String  | -      | `primary`、`success`、`warning`、`danger`、`info` 以及自己扩展的主题 | -    |
| plain   | 是否镂空               | Boolean | false  | -                                                                    | -    |
| radius  | 圆角值                 | String  | -      | -                                                                    | -    |
| square  | 是否是方形             | Boolean | false  | -                                                                    | -    |

# Events

| 事件名       | 说明                               | 回调参数                | 版本 |
| ------------ | ---------------------------------- | ----------------------- | ---- |
| @change      | 未开启异步变更时选中项变化时触发   | value: 变更后的选中的值 | -    |
| @asyncChange | 开启异步后点击组件内的单选框时触发 | value: 点击的单选框的值 | -    |

# 组件样式变量

| 变量                 | 说明                   | 默认值 | 版本 |
| -------------------- | ---------------------- | ------ | ---- |
| --hi-radio-group-gap | 组件内 item 之间的间隔 | `10px` | -    |
