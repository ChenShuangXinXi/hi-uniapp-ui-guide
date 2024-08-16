# 基础使用

默认高度：`44px`

默认背景：`pages.json -> 页面设置 -> navigationBarBackgroundColor || pages.json -> globalStyle -> navigationBarBackgroundColor`

默认标题颜色：`pages.json -> 页面设置 -> navigationBarTextStyle || pages.json -> globalStyle -> navigationBarTextStyle`

```vue
<hi-navigation-bar></hi-navigation-bar>
```

# 标题居左

标题默认剧中，设置 `align="left"` 可以让标题居左。

```vue
<hi-navigation-bar align="left"></hi-navigation-bar>
```

# 自动标题

通过 `autoTitle` 开启自动标题，默认开启。

开启后如果未设置 `title` 属性，会显示在 `pages.json` 对应页面中配置的 `style.navigationBarTitleText`，如果 `style.navigationBarTitleText` 也没有配置，则会继续寻找 `pages.json` 中配置的 `globalStyle.navigationBarTitleText`。

```vue
<hi-navigation-bar autoTitle></hi-navigation-bar>
```

# 返回按钮

通过 `showBack` 属性设置返回按钮，默认显示。

```vue
<hi-navigation-bar showBack></hi-navigation-bar>
```

# 自动返回

通过 `autoBack` 属性设置点击返回按钮后自动返回，默认开启。

```vue
<hi-navigation-bar autoBack></hi-navigation-bar>
```

# 自动返回按钮

通过 `autoShowBack` 属性设置自定判断是否显示返回按钮。判断逻辑为：当前页面是 `tabBar` 页面或 `getCurrentPages().length <= 1` 时，不显示返回按钮，否则显示

```vue
<hi-navigation-bar autoShowBack></hi-navigation-bar>
```

# 菜单按钮

通过 `leftMenu` 和 `rightMenu` 属性设置菜单按钮。数据格式如下

```js
[
    {
        show: true, // 是否显示
        style: "", // 按钮样式
        hoverClass: "", // 按钮的 hover-class
        showIcon: true, // 是否显示图标
        iconName: "", // 图标名称
        iconColor: "", // 图标颜色
        iconSize: "", // 图标大小
        iconMode: "", // 图标裁剪模式
        iconStyle: "", // 图标样式
        showText: true, // 是否显示文字
        text: "", // 文字
        textStyle: "", // 文字样式
    },
];
```

```vue
<hi-navigation-bar :leftMenu="leftMenu" :rightMenu="rightMenu"></hi-navigation-bar>
```

# Props

| 参数           | 说明                       | 类型    | 默认值     | 可选值         | 版本 |
| -------------- | -------------------------- | ------- | ---------- | -------------- | ---- |
| hoverClass     | 组件中按钮的 hover-class   | String  | `hi-hover` | -              | -    |
| size           | 内容文字大小               | String  | -          | -              | -    |
| color          | 内容文字颜色               | String  | -          | -              | -    |
| height         | 高度                       | String  | -          | -              | -    |
| weight         | 内容文字粗细               | String  | -          | -              | -    |
| title          | 标题                       | String  | -          | -              | -    |
| autoTitle      | 自动标题                   | Boolean | `true`     | -              | -    |
| align          | 标题对齐方式               | String  | `center`   | `left、center` | -    |
| titleColor     | 标题颜色                   | String  | -          | -              | -    |
| titleSize      | 标题大小                   | String  | -          | -              | -    |
| titleWeight    | 标题粗细                   | String  | -          | -              | -    |
| showBack       | 显示返回按钮               | Boolean | `true`     | -              | -    |
| autoShowBack   | 自动返回按钮               | Boolean | `true`     | -              | -    |
| backText       | 返回按钮文字               | String  | -          | -              | -    |
| backIconName   | 返回按钮图标名称           | String  | -          | -              | -    |
| backIconSize   | 返回按钮图标大小           | String  | -          | -              | -    |
| backIconColor  | 返回按钮图标颜色           | String  | -          | -              | -    |
| backIconMode   | 返回按钮图标裁剪模式       | String  | -          | -              | -    |
| backTextSize   | 返回按钮文字大小           | String  | -          | -              | -    |
| backTextColor  | 返回按钮文字颜色           | String  | -          | -              | -    |
| backTextWeight | 返回按钮文字粗细           | String  | -          | -              | -    |
| backGap        | 返回按钮中图标和文字的间距 | String  | -          | -              | -    |
| menuGap        | 菜单按钮间距               | String  | -          | -              | -    |
| menuIconColor  | 菜单按钮图标颜色           | String  | -          | -              | -    |
| menuIconSize   | 菜单按钮图标大小           | String  | -          | -              | -    |
| menuIconMode   | 菜单按钮图标裁剪模式       | String  | -          | -              | -    |
| showMenuIcon   | 是否显示菜单按钮图标       | Boolean | `true`     | -              | -    |
| showMenuText   | 是否显示菜单按钮文字       | Boolean | `false`    | -              | -    |
| menuTextSize   | 菜单按钮文字大小           | String  | -          | -              | -    |
| menuTextColor  | 菜单按钮文字颜色           | String  | -          | -              | -    |
| menuTextWeight | 菜单按钮文字粗细           | String  | -          | -              | -    |
| leftMenu       | 左侧菜单                   | Array   | -          | -              | -    |
| rightMenu      | 右侧菜单                   | Array   | -          | -              | -    |

# Events

| 事件名称        | 说明             | 回调参数                                                                              |
| --------------- | ---------------- | ------------------------------------------------------------------------------------- |
| @back           | 点击返回按钮触发 | -                                                                                     |
| @menuClick      | 点击菜单按钮触发 | `menu`: 菜单按钮数据； `index`: 菜单按钮下标；`type`: 菜单按钮位置，`left` 或 `right` |
| @leftMenuClick  | 点击左侧菜单触发 | `menu`: 菜单按钮数据； `index`: 菜单按钮下标；                                        |
| @rightMenuClick | 点击右侧菜单触发 | `menu`: 菜单按钮数据； `index`: 菜单按钮下标；                                        |

# Slots

| 名称  | 说明         | 参数        |
| ----- | ------------ | ----------- |
| back  | 返回按钮插槽 | -           |
| left  | 左侧菜单插槽 | -           |
| right | 右侧菜单插槽 | -           |
| title | 标题插槽     | title: 标题 |

# 组件样式变量

| 变量                                      | 说明                     | 默认值                                                                                                                | 版本 |
| ----------------------------------------- | ------------------------ | --------------------------------------------------------------------------------------------------------------------- | ---- |
| --hi-navigation-bar-height                | 高度                     | `44px`                                                                                                                | -    |
| --hi-navigation-bar-background            | 背景                     | `pages.json -> 页面设置 -> navigationBarBackgroundColor 或 pages.json -> globalStyle -> navigationBarBackgroundColor` | -    |
| --hi-navigation-bar-color                 | 颜色                     | `pages.json -> 页面设置 -> navigationBarTextStyle 或 pages.json -> globalStyle -> navigationBarTextStyle`             | -    |
| --hi-navigation-bar-padding               | 内边距                   | `0 8px`                                                                                                               | -    |
| --hi-navigation-bar-font-size             | 字体大小                 | -                                                                                                                     | -    |
| --hi-navigation-bar-font-weight           | 字体粗细                 | -                                                                                                                     | -    |
| --hi-navigation-bar-back-font-size        | 返回内容字体大小         | -                                                                                                                     | -    |
| --hi-navigation-bar-back-color            | 返回内容颜色             | -                                                                                                                     | -    |
| --hi-navigation-bar-back-font-weight      | 返回内容粗细             | -                                                                                                                     | -    |
| --hi-navigation-bar-back-gap              | 返回内容间距             | `2px`                                                                                                                 | -    |
| --hi-navigation-bar-back-icon-size        | 返回图标大小             | `22px`                                                                                                                | -    |
| --hi-navigation-bar-back-icon-color       | 返回图标颜色             | `inherit`                                                                                                             | -    |
| --hi-navigation-bar-back-text-font-size   | 返回文字大小             | `14px`                                                                                                                | -    |
| --hi-navigation-bar-back-text-color       | 返回文字颜色             | `inherit`                                                                                                             | -    |
| --hi-navigation-bar-back-text-font-weight | 返回文字粗细             | `inherit`                                                                                                             | -    |
| --hi-navigation-bar-title-font-size       | 标题字体大小             | `16px`                                                                                                                | -    |
| --hi-navigation-bar-title-color           | 标题字体颜色             | `inherit`                                                                                                             | -    |
| --hi-navigation-bar-title-font-weight     | 标题字体粗细             | `600`                                                                                                                 | -    |
| --hi-navigation-bar-title-padding         | 标题内边距               | `0 5px`                                                                                                               | -    |
| --hi-navigation-bar-menu-font-size        | 菜单字体大小             | `18px`                                                                                                                | -    |
| --hi-navigation-bar-menu-color            | 菜单字体颜色             | `inherit`                                                                                                             | -    |
| --hi-navigation-bar-menu-font-weight      | 菜单字体粗细             | `500`                                                                                                                 | -    |
| --hi-navigation-bar-menu-line-height      | 菜单行高                 | `1`                                                                                                                   | -    |
| --hi-navigation-bar-menu-gap              | 菜单内容间距             | `8px`                                                                                                                 | -    |
| --hi-navigation-bar-buttons-padding       | 按钮按钮容器内边距       | `0 5px`                                                                                                               | -    |
| --hi-navigation-bar-menu-direction        | 菜单按钮排列方向         | `column`                                                                                                              | -    |
| --hi-navigation-bar-menu-gap              | 菜单按钮图标与文字的间距 | -                                                                                                                     | -    |
| --hi-navigation-bar-menu-text-font-size   | 菜单按钮文字大小         | `10px`                                                                                                                | -    |
| --hi-navigation-bar-menu-text-color       | 菜单按钮文字颜色         | `inherit`                                                                                                             | -    |
| --hi-navigation-bar-menu-text-font-weight | 菜单按钮文字粗细         | `inherit`                                                                                                             | -    |
