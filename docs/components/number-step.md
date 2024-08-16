# 基础使用

通过 `v-model` 绑定步进器的值。

```vue
<hi-number-step v-model="number"></hi-number-step>
```

# 设置最大/最小值

通过 `min` 和 `max 属性设置最大最小值。

```vue
<hi-number-step v-model="number" :min="-10" :max="10"></hi-number-step>
```

# 设置步进值

通过 `step` 属性设置步近值，即步近一次大大小。

```vue
<hi-number-step v-model="number" :step="2"></hi-number-step>
```

# 禁用

通过给组件添加 `disabled` 属性来禁用整个组件。

通过给组件添加 `disabledMinus` 属性来禁用减号按钮。

通过给组件添加 `disabledPlus` 属性来禁用加号按钮。

通过给组件添加 `disabledInput` 属性来禁用输入框。

```vue
<hi-number-step v-model="number" disabled></hi-number-step>
<hi-number-step v-model="number" disabledMinus></hi-number-step>
<hi-number-step v-model="number" disabledPlus></hi-number-step>
<hi-number-step v-model="number" disabledInput></hi-number-step>
```

# 异步变更

通过给组件添加 `async` 属性来开启组件的异步变更特性，此时点击加减按钮或在输入框输入值后，组件不会更新值，而是提供一个 asyncChange 事件，需要用户处理完相关逻辑后手动变更组件的值。

```vue
<hi-number-step v-model="number" @asyncChange="onChange" async></hi-number-step>
```

# Props

| 参数             | 说明                     | 类型    | 默认值      | 可选值 | 版本 |
| ---------------- | ------------------------ | ------- | ----------- | ------ | ---- |
| hoverClass       | 加、减按钮的 hover-class | String  | `hi-hover`  | -      | -    |
| v-model          | 值                       | Number  | `1`         | -      | -    |
| step             | 计步器步长               | Number  | `1`         | -      | -    |
| max              | 最大值                   | Number  | `Infinity`  | -      | -    |
| min              | 最小值                   | Number  | `-Infinity` | -      | -    |
| iconSize         | 加、减按钮图标的大小     | String  | -           | -      | -    |
| iconColor        | 加、减按钮图标的颜色     | String  | -           | -      | -    |
| iconMode         | 加、减按钮图标的裁剪模式 | String  | -           | -      | -    |
| minusIconName    | 减号图标的名称           | String  | `__jian`    | -      | -    |
| minusIconColor   | 减号图标的颜色           | String  | -           | -      | -    |
| minusIconSize    | 减号图标的大小           | String  | -           | -      | -    |
| minusIconMode    | 减号图标的裁剪模式       | String  | -           | -      | -    |
| plusIconName     | 加号图标的名称           | String  | `__jia`     | -      | -    |
| plusIconColor    | 加号图标的颜色           | String  | -           | -      | -    |
| plusIconSize     | 加号图标的大小           | String  | -           | -      | -    |
| plusIconMode     | 加号图标的裁剪模式       | String  | -           | -      | -    |
| disabled         | 禁用整个组件             | Boolean | `false`     | -      | -    |
| disabledMinus    | 禁用减号按钮             | Boolean | `false`     | -      | -    |
| disabledPlus     | 禁用加号按钮             | Boolean | `false`     | -      | -    |
| disabledInput    | 禁用输入框               | Boolean | `false`     | -      | -    |
| showMinus        | 是否显示减号按钮         | Boolean | `true`      | -      | -    |
| showPlus         | 是否显示加号按钮         | Boolean | `true`      | -      | -    |
| async            | 开启异步变更             | Boolean | `false`     | -      | -    |
| size             | 组件内容的字体大小       | String  | -           | -      | -    |
| color            | 组件内容的字体颜色       | String  | -           | -      | -    |
| bg               | 组件背景                 | String  | -           | -      | -    |
| radius           | 组件圆角                 | String  | -           | -      | -    |
| showBorder       | 是否显示边框             | Boolean | `false`     | -      | -    |
| borderColor      | 组件边框颜色             | String  | -           | -      | -    |
| focusBorderColor | 组件聚焦时边框颜色       | String  | -           | -      | -    |
| width            | 组件宽度                 | String  | -           | -      | -    |
| height           | 组件高度                 | String  | -           | -      | -    |
| btnWidth         | 按钮宽度                 | String  | -           | -      | -    |
| inputWidth       | 输入框宽度               | String  | -           | -      | -    |
| inputSize        | 输入框字体大小           | String  | -           | -      | -    |
| inputColor       | 输入框字体颜色           | String  | -           | -      | -    |
| inputBg          | 输入框背景               | String  | -           | -      | -    |

# Events

| 事件名       | 说明                         | 回调参数          | 版本 |
| ------------ | ---------------------------- | ----------------- | ---- |
| @change      | 未开启异步变更时值变化时触发 | value: 变更后的值 | -    |
| @asyncChange | 开启异步后值变化时触发       | value: 变更后的值 | -    |

# 组件样式变量

| 变量                                       | 说明           | 默认值                                    | 版本 |
| ------------------------------------------ | -------------- | ----------------------------------------- | ---- |
| --hi-number-step-width                     | 组件宽度       | -                                         | -    |
| --hi-number-step-height                    | 组件高度       | `2em`                                     | -    |
| --hi-number-step-border-width              | 组件边框宽度   | 有边框时为：`0.5px`，没有边框时为：`0`    | -    |
| --hi-number-step-border-style              | 组件边框样式   | `solid`                                   | -    |
| --hi-number-step-border-color              | 组件边框颜色   | `var(--hi-border-color)`                  | -    |
| --hi-number-step-border-radius             | 组件圆角       | `var(--hi-radius-small)`                  | -    |
| --hi-number-step-background                | 组件背景       | `#ffffff`                                 | -    |
| --hi-number-step-font-size                 | 组件字体大小   | -                                         | -    |
| --hi-number-step-color                     | 组件字体颜色   | -                                         | -    |
| --hi-number-step-button-color              | 按钮颜色       | -                                         | -    |
| --hi-number-step-button-size               | 按钮大小       | -                                         | -    |
| --hi-number-step-button-width              | 按钮宽度       | `2em`                                     | -    |
| --hi-number-step-button-background         | 按钮背景       | -                                         | -    |
| --hi-number-step-minus-button-color        | 减号按钮颜色   | `var(--hi-number-step-button-color)`      | -    |
| --hi-number-step-minus-button-size         | 减号按钮大小   | `var(--hi-number-step-button-size)`       | -    |
| --hi-number-step-minus-button-background   | 减号按钮背景   | `var(--hi-number-step-button-background)` | -    |
| --hi-number-step-minus-button-width        | 减号按钮宽度   | `var(--hi-number-step-button-width, 2em)` | -    |
| --hi-number-step-plus-button-color         | 加号按钮颜色   | `var(--hi-number-step-button-color)`      | -    |
| --hi-number-step-plus-button-size          | 加号按钮大小   | `var(--hi-number-step-button-size)`       | -    |
| --hi-number-step-plus-button-background    | 加号按钮背景   | `var(--hi-number-step-button-background)` | -    |
| --hi-number-step-plus-button-width         | 加号按钮宽度   | `var(--hi-number-step-button-width, 2em)` | -    |
| --hi-number-step-input-border-style        | 输入框边框样式 | `inherit`                                 | -    |
| --hi-number-step-input-border-color        | 输入框边框颜色 | `inherit`                                 | -    |
| --hi-number-step-input-border-left-width   | 输入框边框宽度 | `0`                                       | -    |
| --hi-number-step-input-border-right-width  | 输入框边框宽度 | `0`                                       | -    |
| --hi-number-step-input-border-top-width    | 输入框边框宽度 | `0`                                       | -    |
| --hi-number-step-input-border-bottom-width | 输入框边框宽度 | `0`                                       | -    |
| --hi-number-step-input-text-align          | 输入框对齐方式 | `center`                                  | -    |
| --hi-number-step-input-padding             | 输入框内边距   | -                                         | -    |
| --hi-number-step-input-margin              | 输入框外边距   | -                                         | -    |
| --hi-number-step-input-width               | 输入框宽度     | `3em`                                     | -    |
| --hi-number-step-input-font-size           | 输入框字体大小 | `inherit`                                 | -    |
| --hi-number-step-input-color               | 输入框字体颜色 | `inherit`                                 | -    |
| --hi-number-step-input-border-radius       | 输入框圆角     | `0`                                       | -    |
| --hi-number-step-input-background          | 输入框背景     | -                                         | -    |
