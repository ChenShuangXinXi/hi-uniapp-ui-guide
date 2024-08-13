# 基础使用

提示：`hi-radio` 需要放到 `hi-radio-group` 中使用。

```vue
<hi-radio-group v-model="checked1">
    <hi-radio v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></hi-radio>
</hi-radio-group>
```

# 主题

通过 `theme` 属性给单选框单独设置主题。

通过设置 `--hi-theme-xxx` 格式的变量来扩展 HiUi 的主题。

```vue
<hi-radio-group v-model="checked2">
    <hi-radio v-for="item in options" :key="item.value" :label="item.label" :value="item.value" :theme="item.theme"></hi-radio>
</hi-radio-group>
```

# 镂空

通过给组件添加 `plain` 属性来单选框单独设置镂空样式。

```vue
<hi-radio-group v-model="checked3">
    <hi-radio v-for="item in options" :key="item.value" :label="item.label" :value="item.value" :theme="item.theme" plain></hi-radio>
</hi-radio-group>
```

# 禁用

通过给组件添加 `disabled` 属性来将组件禁用。

```vue
<hi-radio-group v-model="checked4">
    <hi-radio v-for="item in options" :key="item.value" :label="item.label" :value="item.value" :theme="item.theme" disabled></hi-radio>
</hi-radio-group>
```

# 方形单选框

通过给组件添加 `square` 属性来将单选框设置成方形的。

```vue
<hi-radio-group v-model="checked6">
    <hi-radio v-for="item in options" :key="item.value" :label="item.label" :value="item.value" :theme="item.theme" square></hi-radio>
</hi-radio-group>
```

# Props

| 参数              | 说明                         | 类型           | 默认值        | 可选值                                                               | 版本 |
| ----------------- | ---------------------------- | -------------- | ------------- | -------------------------------------------------------------------- | ---- |
| hoverClass        | 组件点击时的类名             | String         | -             | -                                                                    | -    |
| disabled          | 是否禁用                     | Boolean        | `false`       | -                                                                    | -    |
| disabledClass     | 组件禁用时的类名             | String         | `hi-disabled` | -                                                                    | -    |
| value             | 组合使用时组件的绑定值       | String, Number | -             | -                                                                    | -    |
| label             | 组件的文本                   | String         | -             | -                                                                    | -    |
| size              | 单选框的大小                 | String         | -             | -                                                                    | -    |
| color             | 单选框默认未选中时的背景     | Boolean        | -             | -                                                                    | -    |
| activeColor       | 单选框选中时的背景颜色       | String         | -             | -                                                                    | -    |
| borderColor       | 单选框默认未选中时边框的颜色 | String         | -             | -                                                                    | -    |
| activeBorderColor | 单选框选中时的边框颜色       | String         | -             | -                                                                    | -    |
| iconName          | 图标名称                     | String         | `__checked`   | -                                                                    | -    |
| iconColor         | 图标颜色                     | String         | -             | -                                                                    | -    |
| iconSize          | 图标大小                     | String         | -             | -                                                                    | -    |
| iconMode          | 图标的裁剪模式               | String         | `aspectFit`   | -                                                                    | -    |
| theme             | 组件的主题                   | String         | -             | `primary`、`success`、`warning`、`danger`、`info` 以及自己扩展的主题 | -    |
| plain             | 是否镂空                     | Boolean        | false         | -                                                                    | -    |
| radius            | 圆角值                       | String         | -             | -                                                                    | -    |
| square            | 是否是方形                   | Boolean        | false         | -                                                                    | -    |

# Slots

| 名称    | 说明                   |
| ------- | ---------------------- |
| default | 默认插槽（label 区域） |

# 组件样式变量

| 变量                         | 说明                     | 默认值                                     | 版本 |
| ---------------------------- | ------------------------ | ------------------------------------------ | ---- |
| --hi-radio-border-width      | 单选框的边框粗细         | `0.5px`                                    | -    |
| --hi-radio-border-style      | 单选框的边框样式         | `solid`                                    | -    |
| --hi-radio-border-color      | 单选框的边框颜色         | `var(--hi-border-color)`                   | -    |
| --hi-radio-border-radius     | 单选框的圆角大小         | `50%`                                      | -    |
| --hi-radio-overflow          | 单选框的 overflow 属性值 | `hidden`                                   | -    |
| --hi-radio-size              | 单选框的大小             | `1.25em`                                   | -    |
| --hi-radio-background        | 单选框的背景             | -                                          | -    |
| --hi-radio-active-background | 单选框选中时的背景       | -                                          | -    |
| --hi-radio-gap               | 单选框与文本的间距       | `5px`                                      | -    |
| --hi-radio-icon-color        | 单选框的图标颜色         | -                                          | -    |
| --hi-radio-icon-size         | 单选框的图标大小         | `calc(var(--hi-radio-size, 1.25em) * 0.7)` | -    |
| --hi-radio-active-icon-color | 单选框选中时的图标颜色   | -                                          | -    |
