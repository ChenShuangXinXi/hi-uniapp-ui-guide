# 基础使用

通过 `v-model` 绑定省市区选中项的下标，默认为 `[0, 0, 0]`。
<br/>
由于 `region.json` 文件有点大，所以没内置到此组件中，建议自行引入 `hi-region-data` 文件。
<br/>
该组件有两种设置省市区数据的方式：

## 一：通过 `region` 属性设置数据

通过此种方式设置的省市区数据，该数据应该是一个有 `3` 级结构的数组，其中第一级为省，第二级为市，第三级为区。
<br/>
通过此种方式可以一次性设置省市区数据。
<br/>
示例：

```js
[
    {
        name: "北京市",
        code: "110000",
        children: [
            {
                name: "北京市",
                code: "110100000000",
                children: [
                    {
                        name: "东城区",
                        code: "110101000000",
                    },
                    {
                        name: "西城区",
                        code: "110102000000",
                    },
                    {
                        name: "朝阳区",
                        code: "110105000000",
                    },
                    {
                        name: "丰台区",
                        code: "110106000000",
                    },
                    {
                        name: "石景山区",
                        code: "110107000000",
                    },
                    {
                        name: "海淀区",
                        code: "110108000000",
                    },
                    {
                        name: "门头沟区",
                        code: "110109000000",
                    },
                    {
                        name: "房山区",
                        code: "110111000000",
                    },
                    {
                        name: "通州区",
                        code: "110112000000",
                    },
                    {
                        name: "顺义区",
                        code: "110113000000",
                    },
                    {
                        name: "昌平区",
                        code: "110114000000",
                    },
                    {
                        name: "大兴区",
                        code: "110115000000",
                    },
                    {
                        name: "怀柔区",
                        code: "110116000000",
                    },
                    {
                        name: "平谷区",
                        code: "110117000000",
                    },
                    {
                        name: "密云区",
                        code: "110118000000",
                    },
                    {
                        name: "延庆区",
                        code: "110119000000",
                    },
                ],
            },
        ],
    },
];
```

```vue
<hi-region-picker
    :region="region"
    v-model="values"
    title="选择地区"
    :show="isShow"
    @close="isShow = false"
    @confirm="isShow = false"
    @change="handleRegionChange"
></hi-region-picker>
```

<br/>

# 二：通过 `provinces`、`cities`、`areas` 属性设置数据

通过此种方式可以单独设置省市区数据，通过 `provinces`、`cities`、`areas` 属性设置数据。
<br/>
通过此种方式可以通过请求接口异步设置省、市、区数据。

```vue
<hi-region-picker
    :provinces="provinces"
    :cities="cities"
    :areas="areas"
    v-model="values"
    title="选择地区"
    :show="isShow"
    @close="isShow = false"
    @confirm="isShow = false"
    @changeProvince="handleChangeProvince"
    @changeCity="handleChangeCity"
    @changeArea="handleChangeArea"
    :loading="loading"
></hi-region-picker>
```

<br/>

# Props

| 参数                  | 说明                       | 类型      | 默认值      | 可选值 |
| --------------------- | -------------------------- | --------- | ----------- | ------ |
| `show`                | 显示状态                   | `Boolean` | `fale`      | `-`    |
| `v-model`             | 绑定数据                   | `Array`   | `[0, 0, 0]` | `-`    |
| `region`              | 省市区完整数据             | `Array`   | `undefined` | `-`    |
| `provinces`           | 省份数据                   | `Array`   | `[]`        | `-`    |
| `cities`              | 城市数据                   | `Array`   | `[]`        | `-`    |
| `areas`               | 地区数据                   | `Array`   | `[]`        | `-`    |
| `keyName`             | 显示字段的属性名           | `String`  | `name`      | `-`    |
| `itemHeight`          | 列表项的高度               | `String`  | `50px`      | `-`    |
| `closeOnClickOverlay` | 点击遮罩是否关闭           | `Boolean` | `true`      | `-`    |
| `loading`             | 是否显示 `loading`         | `Boolean` | `false`     | `-`    |
| `title`               | 标题                       | `String`  | `-`         | `-`    |
| `returnZero`          | 切换后是否右侧子项下标归零 | `Boolean` | `false`     | `-`    |

<br/>

# Events

| 事件名            | 说明                                     | 回调参数                                                                                             |
| ----------------- | ---------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `@change`         | 当滚动选择，value 改变时触发 change 事件 | `indexes`: 数组，表示当前选中的值的下标。 `region: {province: Object, city: Object, county: Object}` |
| `@changeProvince` | 省份切换后触发                           | `index`: 切换后的省份下标。`province`: `Object` - 切换后的省份数据                                   |
| `@changeCity`     | 城市切换后触发                           | `index`: 切换后的城市下标。`city`: `Object` - 切换后的城市数据                                       |
| `@changeArea`     | 地区切换后触发                           | `index`: 切换后的地区下标。`area`: `Object` - 切换后的地区数据                                       |
