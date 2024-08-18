# 基础使用

```vue
<hi-list>
    <view class="item" v-for="i in 6" :key="i">列表项</view>
</hi-list>
```

<br/>

# 设置列表

默认 `2` 列，通过 `columns` 属性设置列数。

```vue
<hi-list columns="4">
    <view class="item" v-for="i in 6" :key="i">列表项</view>
</hi-list>
```

# 设置间距

默认间距 `10rpx` 列，通过 `gap(行和列间距)`、`rowGap(行间距)`、`columnGap(列间距)` 属性设置间距。

```vue
<hi-list columns="3" gap="20rpx">
    <view class="item" v-for="i in 6" :key="i">列表项</view>
</hi-list>
```

<br/>

# Props

| 参数      | 说明      | 类型     | 默认值 | 可选值 |
| --------- | --------- | -------- | ------ | ------ |
| `columns` | 列数      | `String` | `2`    | `-`    |
| `gap`     | 行/列间距 | `String` | `-`    | `-`    |
| `rowGap`  | 行间距    | `String` | `-`    |
| `colGap`  | 列间距    | `String` | `-`    |

<br/>

# Slots

| 名称       | 说明         |
| ---------- | ------------ |
| `#default` | 列表内容插槽 |
