# 基础使用

按钮的默认宽、高 `88rpx`。

```vue
<hi-movable-button></hi-movable-button>
```

<br/>

# 按钮文字

通过 `text` 设置按钮文字。

```vue
<hi-movable-button text="主页"></hi-movable-button>
```

<br/>

# 按钮位置

通过 `position` 设置按钮位置。可选的值有 `left-top、left-center、left-bottom、right-top、right-center(默认)、right-bottom、center-top、center-center、center-bottom`

```vue
<hi-movable-button text="主页" position="left-center"></hi-movable-button>
```

<br/>

# Props

| 参数          | 说明                                                                                                 | 类型      | 默认值                   | 可选值                                                                                                                                |
| ------------- | ---------------------------------------------------------------------------------------------------- | --------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| `hoverClass`  | 按钮的 `hover-class`                                                                                 | `String`  | `hi-hover`               | `-`                                                                                                                                   |
| `iconName`    | 图标名称                                                                                             | `String`  | `__zhuye`                | `-`                                                                                                                                   |
| `text`        | 按钮文字                                                                                             | `String`  | `-`                      | `-`                                                                                                                                   |
| `scaleArea`   | 当里面的 `movable-view` 设置为支持双指缩放时，设置此值可将缩放手势生效区域修改为整个 `movable-area`  | `Boolean` | `false`                  | `-`                                                                                                                                   |
| `position`    | 位置                                                                                                 | `String`  | `right-center`           | `left-top`、`left-center`、`left-bottom`、`right-top`、`right-center`、`right-bottom`、`center-top`、`center-center`、`center-bottom` |
| `direction`   | `movable-view` 的移动方向，                                                                          | `String`  | `all`                    | 属性值有 `all`、`vertical`、` horizontal``、none `                                                                                    |
| `inertia`     | `movable-view` 是否带有惯性                                                                          | `Boolean` | `false`                  | `-`                                                                                                                                   |
| `outOfBounds` | 超过可移动区域后，`movable-view` 是否还可以移动                                                      | `Boolean` | `false`                  | `-`                                                                                                                                   |
| `damping`     | 阻尼系数，用于控制 `x` 或 `y` 改变时的动画和过界回弹的动画，值越大移动越快                           | `Number`  | `20`                     | `-`                                                                                                                                   |
| `friction`    | 摩擦系数，用于控制惯性滑动的动画，值越大摩擦力越大，滑动越快停止；必须大于 `0`，否则会被设置成默认值 | `Number`  | `2`                      | `-`                                                                                                                                   |
| `disabled`    | 是否禁用                                                                                             | `Boolean` | `false`                  | `-`                                                                                                                                   |
| `scale`       | 是否支持双指缩放，默认缩放手势生效区域是在 `movable-view` 内                                         | `Boolean` | `false`                  | `-`                                                                                                                                   |
| `scaleMin`    | 定义缩放倍数最小值                                                                                   | `Number`  | 小程序 `1.0`，其他 `0.5` | `-`                                                                                                                                   |
| `scaleMax`    | 定义缩放倍数最大值                                                                                   | `Number`  | 小程序 `1.0`，其他 `3`   | `-`                                                                                                                                   |
| `scaleValue`  | 定义缩放倍数，支持小数                                                                               | `Number`  | `1`                      | `-`                                                                                                                                   |
| `animation`   | 是否使用动画                                                                                         | `Boolean` | `true`                   | `-`                                                                                                                                   |

<br/>

# Events

| 事件名    | 说明                 | 回调参数                                                                                                                                                                                                            |
| --------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `@click`  | 点击时触发           | `-`                                                                                                                                                                                                                 |
| `@change` | 拖动过程中触发的事件 | `event.detail = {x: x, y: y, source: source}，其中source表示产生移动的原因，值可为touch（拖动）、touch-out-of-bounds（超出移动范围）、out-of-bounds（超出移动范围后的回弹）、friction（惯性）和空字符串（setData）` |
| `@scale`  | 缩放过程中触发的事件 | `event.detail = {x: x, y: y, scale: scale}`                                                                                                                                                                         |

# Slots

| 名称       | 说明               |
| ---------- | ------------------ |
| `#default` | 内容插槽           |
| `#other`   | 插入其他内容的插槽 |
