# 基础使用

默认高度：`44px`
<br/>
默认背景：`pages.json -> 页面设置 -> navigationBarBackgroundColor || pages.json -> globalStyle -> navigationBarBackgroundColor`
<br/>
默认标题颜色：`pages.json -> 页面设置 -> navigationBarTextStyle || pages.json -> globalStyle -> navigationBarTextStyle`

```vue
<hi-navigation-bar></hi-navigation-bar>
```

<br/>

# 标题居左

标题默认剧中，设置 `align="left"` 可以让标题居左。

```vue
<hi-navigation-bar align="left"></hi-navigation-bar>
```

<br/>

# 自动标题

通过 `autoTitle` 开启自动标题，默认开启。
<br/>
开启后如果未设置 `title` 属性，会显示在 `pages.json` 对应页面中配置的 `style.navigationBarTitleText`，如果 `style.navigationBarTitleText` 也没有配置，则会继续寻找 `pages.json` 中配置的 `globalStyle.navigationBarTitleText`。

```vue
<hi-navigation-bar autoTitle></hi-navigation-bar>
```

<br/>

# 返回按钮

通过 `showBack` 属性设置返回按钮，默认显示。

```vue
<hi-navigation-bar showBack></hi-navigation-bar>
```

<br/>

# 自动返回

通过 `autoBack` 属性设置点击返回按钮后自动返回，默认开启。

```vue
<hi-navigation-bar autoBack></hi-navigation-bar>
```

<br/>

# 自动返回按钮

通过 `autoShowBack` 属性设置自定判断是否显示返回按钮。判断逻辑为：当前页面是 `tabBar` 页面或 `getCurrentPages().length <= 1` 时，不显示返回按钮，否则显示

```vue
<hi-navigation-bar autoShowBack></hi-navigation-bar>
```

<br/>

# 菜单按钮

通过 `leftMenu` 和 `rightMenu` 属性设置菜单按钮。数据格式如下

```js
[
    {
        class: "", // 按钮的 class"
        style: "", // 按钮样式
        hoverClass: "", // 按钮的 hover-class
        iconName: "", // 图标名称
        text: "", // 文字
    },
];
```

```vue
<hi-navigation-bar :leftMenu="leftMenu" :rightMenu="rightMenu"></hi-navigation-bar>
```

<br/>

# Props

| 参数           | 说明                       | 类型      | 默认值     | 可选值         |
| -------------- | -------------------------- | --------- | ---------- | -------------- |
| `hoverClass`   | 组件中按钮的 `hover-class` | `String`  | `hi-hover` | `-`            |
| `title`        | 标题                       | `String`  | -          | `-`            |
| `autoTitle`    | 自动标题                   | `Boolean` | `true`     | `-`            |
| `align`        | 标题对齐方式               | `String`  | `center`   | `left、center` |
| `showBack`     | 显示返回按钮               | `Boolean` | `true`     | `-`            |
| `autoShowBack` | 自动返回按钮               | `Boolean` | `true`     | `-`            |
| `backText`     | 返回按钮文字               | `String`  | `-`        | `-`            |
| `backIconName` | 返回按钮图标名称           | `String`  | `__zuo`    | `-`            |
| `leftMenu`     | 左侧菜单                   | `Array`   | `[]`       | `-`            |
| `rightMenu`    | 右侧菜单                   | `Array`   | `[]`       | `-`            |

<br/>

# Events

| 事件名称          | 说明             | 回调参数                                                                              |
| ----------------- | ---------------- | ------------------------------------------------------------------------------------- |
| `@back`           | 点击返回按钮触发 | `-`                                                                                   |
| `@menuClick`      | 点击菜单按钮触发 | `menu`: 菜单按钮数据； `index`: 菜单按钮下标；`type`: 菜单按钮位置，`left` 或 `right` |
| `@leftMenuClick`  | 点击左侧菜单触发 | `menu`: 菜单按钮数据； `index`: 菜单按钮下标；                                        |
| `@rightMenuClick` | 点击右侧菜单触发 | `menu`: 菜单按钮数据； `index`: 菜单按钮下标；                                        |

<br/>

# Slots

| 名称     | 说明         | 参数          |
| -------- | ------------ | ------------- |
| `#back`  | 返回按钮插槽 | `-`           |
| `#left`  | 左侧菜单插槽 | `-`           |
| `#right` | 右侧菜单插槽 | `-`           |
| `#title` | 标题插槽     | `title`: 标题 |
