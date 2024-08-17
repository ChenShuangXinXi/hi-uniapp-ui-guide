# 基础使用

提示：此组件只是简单的使用 `swiper` 实现的左右联动。实现逻辑很简单。后续会考虑实现真正的类似美团的联动效果。
<br/>
通过 `list` 设置列表数据。数据结构如下：

```js
[
    {
        text: "", // 左侧 item 文字
        disabled: false, // 是否禁用
    },
];
```

由于右侧内容没有一个固定的样式，所以需要通过 `#rightItem` 插槽来自行实现右侧内容的展现。

```vue
<hi-elevator :list="list">
    <template #rightItem="{ item, index }">
        <view class="list" v-if="!item?.disabled">
            <view class="list-item" v-for="(_item, _current) in lists[index]" :key="_current">
                <image class="list-item-image" :src="_item.image" mode="widthFix" />
            </view>
        </view>
        <view class="list-disabled" v-else>啊欧，您没有权限查看此分类下的数据！</view>
    </template>
</hi-elevator>
```

<br/>

# Props

| 参数      | 说明             | 类型     | 默认值 | 可选值 | 版本 |
| --------- | ---------------- | -------- | ------ | ------ | ---- |
| `list`    | 数据列表         | `Array`  | `[]`   | -      | -    |
| `current` | 默认选中项的下标 | `Number` | `0`    | -      | -    |

<br/>

# Events

| 名称             | 说明                 | 参数                              |
| ---------------- | -------------------- | --------------------------------- |
| `@change`        | 切换时触发           | `index: Number - 切换后的下标;`   |
| `@scrolltolower` | 右侧内容滚动触底事件 | `index: Number - 右侧内容的下标;` |
| `@scroll`        | 右侧内容滚动事件     | `index: Number - 右侧内容的下标;` |

<br/>

# Slots

| 名称         | 说明        | 参数                                                   |
| ------------ | ----------- | ------------------------------------------------------ |
| `#leftItem`  | 左侧 `item` | `item: Object - item 数据; index: Number - item 下标;` |
| `#rightItem` | 右侧 `item` | `item: Object - item 数据; index: Number - item 下标;` |
