# 单独使用/组合使用说明

-   单独使用：需给组件设置 `alone` 属性，并且使用 `v-model` 绑定选中状态。
-   组合使用：需将组件放到 `hi-checkbox-group` 组件内，并给组件设置 `value` 属性。

# 基础使用 - 单独使用

```vue
<hi-checkbox v-model="isChecked" alone label="选项"></hi-checkbox>
```

# 基础使用 - 组合使用

```vue
<hi-checkbox-group v-model="values">
    <hi-checkbox v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></hi-checkbox>
</hi-checkbox-group>
```

# 主题

通过 `theme` 属性设置组件的主题。

通过设置 `--hi-theme-xxx` 格式的变量来扩展 HiUi 的主题。

```vue
<hi-checkbox v-model="isChecked" label="选项" alone theme="primary"></hi-checkbox>
<hi-checkbox v-model="isChecked" label="选项" alone theme="success"></hi-checkbox>
<hi-checkbox v-model="isChecked" label="选项" alone theme="warning"></hi-checkbox>
<hi-checkbox v-model="isChecked" label="选项" alone theme="error"></hi-checkbox>
<hi-checkbox v-model="isChecked" label="选项" alone theme="info"></hi-checkbox>
```

# 镂空

通过给组件添加 `plain` 属性来将组件设置为镂空样式。

```vue
<hi-checkbox v-model="isChecked" label="选项" alone plain theme="primary"></hi-checkbox>
<hi-checkbox v-model="isChecked" label="选项" alone plain theme="success"></hi-checkbox>
<hi-checkbox v-model="isChecked" label="选项" alone plain theme="warning"></hi-checkbox>
<hi-checkbox v-model="isChecked" label="选项" alone plain theme="error"></hi-checkbox>
<hi-checkbox v-model="isChecked" label="选项" alone plain theme="info"></hi-checkbox>
```

# 禁用

通过给组件添加 `disabled` 属性来将组件禁用。

```vue
<hi-checkbox v-model="isChecked" label="选项" alone disabled theme="primary"></hi-checkbox>
```

# 异步变更

通过给组件添加 `async` 属性来开启组件的异步变更特性，此时点击组件后，组件不会变更选中状态，而是提供一个 asyncChange 事件，需要用户处理完相关逻辑后手动变更组件状态。

```vue
<hi-checkbox v-model="isChecked" label="选项" alone async theme="primary" @asyncChange="onCheckboxAsyncChange"></hi-checkbox>
```

# 圆形复选框

通过给组件添加 `circle` 属性来将复选框设置成圆形的。

```vue
<hi-checkbox v-model="isChecked" alone theme="success" label="选项" circle></hi-checkbox>
```

# Props

| 参数              | 说明                         | 类型           | 默认值        | 可选值                                                               | 版本 |
| ----------------- | ---------------------------- | -------------- | ------------- | -------------------------------------------------------------------- | ---- |
| hoverClass        | 组件点击时的类名             | String         | -             | -                                                                    | -    |
| disabled          | 是否禁用                     | Boolean        | `false`       | -                                                                    | -    |
| disabledClass     | 组件禁用时的类名             | String         | `hi-disabled` | -                                                                    | -    |
| v-model           | 单独使用时组件的选中状态     | Boolean        | `false`       | -                                                                    | -    |
| value             | 组合使用时组件的绑定值       | String, Number | -             | -                                                                    | -    |
| label             | 组件的文本                   | String         | -             | -                                                                    | -    |
| alone             | 是否单独使用组件             | Boolean        | false         | -                                                                    | -    |
| size              | 复选框的大小                 | String         | -             | -                                                                    | -    |
| color             | 复选框默认未选中时的背景     | Boolean        | -             | -                                                                    | -    |
| activeColor       | 复选框选中时的背景颜色       | String         | -             | -                                                                    | -    |
| borderColor       | 复选框默认未选中时边框的颜色 | String         | -             | -                                                                    | -    |
| activeBorderColor | 复选框选中时的边框颜色       | String         | -             | -                                                                    | -    |
| iconName          | 图标名称                     | String         | `__checked`   | -                                                                    | -    |
| iconColor         | 图标颜色                     | String         | -             | -                                                                    | -    |
| iconSize          | 图标大小                     | String         | -             | -                                                                    | -    |
| iconMode          | 图标的裁剪模式               | String         | `aspectFit`   | -                                                                    | -    |
| theme             | 组件的主题                   | String         | -             | `primary`、`success`、`warning`、`danger`、`info` 以及自己扩展的主题 | -    |
| plain             | 是否镂空                     | Boolean        | false         | -                                                                    | -    |
| radius            | 圆角值                       | String         | -             | -                                                                    | -    |
| circle            | 是否是圆形                   | Boolean        | false         | -                                                                    | -    |
| async             | 是否开启异步变更             | Boolean        | false         | -                                                                    | -    |

# Events

| 事件名       | 说明                                           | 回调参数                    | 版本 |
| ------------ | ---------------------------------------------- | --------------------------- | ---- |
| @change      | 单独使用并且未开启异步变更时选中状态变化时触发 | isChecked: 变更后的选中状态 | -    |
| @asyncChange | 单独使用并且开启异步后点击时触发               | isChecked: 当前的选中状态   | -    |

# Slots

| 名称    | 说明                   |
| ------- | ---------------------- |
| default | 默认插槽（label 区域） |

# 组件样式变量

| 变量                            | 说明                     | 默认值                                        | 版本 |
| ------------------------------- | ------------------------ | --------------------------------------------- | ---- |
| --hi-checkbox-border-width      | 复选框的边框粗细         | `0.5px`                                       | -    |
| --hi-checkbox-border-style      | 复选框的边框样式         | `solid`                                       | -    |
| --hi-checkbox-border-color      | 复选框的边框颜色         | `var(--hi-border-color)`                      | -    |
| --hi-checkbox-border-radius     | 复选框的圆角大小         | `var(--hi-radius-small)`                      | -    |
| --hi-checkbox-overflow          | 复选框的 overflow 属性值 | `hidden`                                      | -    |
| --hi-checkbox-size              | 复选框的大小             | `1.25em`                                      | -    |
| --hi-checkbox-background        | 复选框的背景             | -                                             | -    |
| --hi-checkbox-active-background | 复选框选中时的背景       | -                                             | -    |
| --hi-checkbox-gap               | 复选框与文本的间距       | `5px`                                         | -    |
| --hi-checkbox-icon-color        | 复选框的图标颜色         | -                                             | -    |
| --hi-checkbox-icon-size         | 复选框的图标大小         | `calc(var(--hi-checkbox-size, 1.25em) * 0.8)` | -    |
| --hi-checkbox-active-icon-color | 复选框选中时的图标颜色   | -                                             | -    |
