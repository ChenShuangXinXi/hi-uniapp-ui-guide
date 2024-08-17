# 基础使用

通过 `show` 属性控制组件的显示/隐藏。
<br/>
弹出层点后后会提交一个 `close` 事件，需自行处理关闭逻辑将 `show` 设置为 `false` 以关闭弹出层。
<br/>
通过 `title` 设置组件的标题
<br/>
通过默认 `slot` 设置组件的内容。

```vue
<hi-popup :show="isShow" title="标题">
    <view class="content">弹窗内容</view>
</hi-popup>
```

<br/>

# 内容显示位置

通过 `mode`、属性设置内容的显示位置，可选的值有：`center(默认)`、`top`、`bottom`、`left`、`right`。

```vue
<hi-popup :show="isShow" title="标题" mode="bottom">
    <view class="content">弹窗内容</view>
</hi-popup>
```

<br/>

# Props

| 参数            | 说明                         | 类型      | 默认值      | 可选值                                     |
| --------------- | ---------------------------- | --------- | ----------- | ------------------------------------------ |
| `hoverClass`    | 关闭点击时的 `hover-class`   | `String`  | `hi-hover`  | `-`                                        |
| `show`          | 显示状态                     | `Boolean` | `false`     | `-`                                        |
| `mode`          | 内容显示模式                 | `String`  | `center`    | `center`、`top`、`bottom`、`left`、`right` |
| `showHeader`    | 是否显示 `Header(标题+关闭)` | `Boolean` | `true`      | `-`                                        |
| `title`         | 标题                         | `String`  | `-`         | `-`                                        |
| `showClose`     | 是否显示关闭按钮             | `Boolean` | `true`      | `-`                                        |
| `closeIconName` | 关闭图标名称                 | `String`  | `__shanchu` | `-`                                        |
| `showFooter`    | 是否显示 `Footer`            | `Boolean` | `true`      | `-`                                        |
| `height`        | 内容高度                     | `String`  | `-`         | `-`                                        |
| `maxHeight`     | 内容最大高度                 | `String`  | `-`         | `-`                                        |
| `width`         | 内容宽度                     | `String`  | `-`         | `-`                                        |
| `maxWidth`      | 内容最大宽度                 | `String`  | `-`         | `-`                                        |
| `showMask`      | 是否显示遮罩                 | `Boolean` | `true`      | `-`                                        |
| `maskClickable` | 遮罩是否可点击               | `Boolean` | `false`     | `-`                                        |

<br/>

# Events

具体事件说明请参考：[uni-app scroll-view 官方文档](https://uniapp.dcloud.net.cn/component/scroll-view.html)

| 事件名           | 说明             | 回调参数 |
| ---------------- | ---------------- | -------- |
| `@close `        | 关闭事件         | `-`      |
| `@scrolltolower` | 滚动到底部时触发 | `-`      |
| `@scroll`        | 滚动时触发       | `-`      |

<br/>

# Slot

| slot       | 说明     |
| ---------- | -------- |
| `#header`  | 顶部内容 |
| `#footer`  | 底部内容 |
| `#default` | 默认内容 |
| `#title`   | 标题内容 |
| `#close`   | 关闭按钮 |
