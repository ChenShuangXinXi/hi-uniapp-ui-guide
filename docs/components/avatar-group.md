# 基础使用

通过 `list` 设置列表数据。

```vue
<hi-avatar-group :list="avatars" keyName="avatar"></hi-avatar-group>
```

<br/>

# 显示更多按钮

通过 `showMore` 设置是否显示更多按钮。

```vue
<hi-avatar-group :list="avatars" keyName="avatar" showMore></hi-avatar-group>
```

<br/>

# 开启动画

通过 `animation` 设置是否开启动画效果。
<br/>
提示：开启动画时，`list` 的数量需要大于 `count` 值。

```vue
<hi-avatar-group :list="avatars" keyName="avatar" showMore animation></hi-avatar-group>
```

<br/>

# Props

| 参数           | 说明                    | 类型      | 默认值        | 可选值 |
| -------------- | ----------------------- | --------- | ------------- | ------ |
| `list`         | 列表                    | `Array`   | `[]`          | `-`    |
| `keyName`      | 列表中图片的 `key` 名称 | `String`  | `avatar`      | `-`    |
| `count`        | 显示个数                | `Number`  | `5`           | `-`    |
| `offset`       | 头像便宜量              | `String`  | `-16rpx`      | `-`    |
| `animation`    | 是否开启动画            | `Boolean` | `false`       | `-`    |
| `delay`        | 动画间隔时间，毫秒      | `Number`  | `3000`        | `-`    |
| `mode`         | 图片裁剪模式            | `String`  | `scaleToFill` | `-`    |
| `size`         | 头像宽高                | `String`  | `40rpx`       | `-`    |
| `showMore`     | 是否显示更多按钮        | `Boolean` | `false`       | `-`    |
| `moreIconName` | 更多按钮图标名称        | `String`  | `__gengduo`   | `-`    |

<br/>

# Events

| 名称    | 说明               | 参数 |
| ------- | ------------------ | ---- |
| `@more` | 更多按钮点击时触发 | `-`  |
