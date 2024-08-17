# 基础使用

通过 `v-model` 绑定步进器的值。

```vue
<hi-number-step v-model="number"></hi-number-step>
```

<br/>

# 设置最大/最小值

通过 `min` 和 `max` 属性设置最大最小值。

```vue
<hi-number-step v-model="number" :min="-10" :max="10"></hi-number-step>
```

<br/>

# 设置步进值

通过 `step` 属性设置步进值，即步进一次的大小。

```vue
<hi-number-step v-model="number" :step="2"></hi-number-step>
```

<br/>

# 禁用

通过给组件添加 `disabled` 属性来禁用整个组件。
<br/>
通过给组件添加 `disabledMinus` 属性来禁用减号按钮。
<br/>
通过给组件添加 `disabledPlus` 属性来禁用加号按钮。
<br/>
通过给组件添加 `disabledInput` 属性来禁用输入框。

```vue
<hi-number-step v-model="number" disabled></hi-number-step>
<hi-number-step v-model="number" disabledMinus></hi-number-step>
<hi-number-step v-model="number" disabledPlus></hi-number-step>
<hi-number-step v-model="number" disabledInput></hi-number-step>
```

<br/>

# 异步变更

通过给组件添加 `async` 属性来开启组件的异步变更特性，此时点击加减按钮或在输入框输入值后，组件不会更新值，而是提供一个 `asyncChange` 事件，需要用户处理完相关逻辑后手动变更组件的值。

```vue
<hi-number-step v-model="number" @asyncChange="onChange" async></hi-number-step>
```

<br/>

# Props

| 参数            | 说明                       | 类型      | 默认值      | 可选值 |
| --------------- | -------------------------- | --------- | ----------- | ------ |
| `hoverClass`    | 加、减按钮的 `hover-class` | `String`  | `hi-hover`  | `-`    |
| `v-model`       | 值                         | `Number`  | `1`         | `-`    |
| `step`          | 计步器步长                 | `Number`  | `1`         | `-`    |
| `max`           | 最大值                     | `Number`  | `Infinity`  | `-`    |
| `min`           | 最小值                     | `Number`  | `-Infinity` | `-`    |
| `minusIconName` | 减号图标的名称             | `String`  | `__jian`    | `-`    |
| `plusIconName`  | 加号图标的名称             | `String`  | `__jia`     | `-`    |
| `disabled`      | 禁用整个组件               | `Boolean` | `false`     | `-`    |
| `disabledMinus` | 禁用减号按钮               | `Boolean` | `false`     | `-`    |
| `disabledPlus`  | 禁用加号按钮               | `Boolean` | `false`     | `-`    |
| `disabledInput` | 禁用输入框                 | `Boolean` | `false`     | `-`    |
| `showMinus`     | 是否显示减号按钮           | `Boolean` | `true`      | `-`    |
| `showPlus`      | 是否显示加号按钮           | `Boolean` | `true`      | `-`    |
| `async`         | 开启异步变更               | `Boolean` | `false`     | `-`    |

<br/>

# Events

| 事件名         | 说明                         | 回调参数            |
| -------------- | ---------------------------- | ------------------- |
| `@change`      | 未开启异步变更时值变化时触发 | `value`: 变更后的值 |
| `@asyncChange` | 开启异步后值变化时触发       | `value`: 变更后的值 |
