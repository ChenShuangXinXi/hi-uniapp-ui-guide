# 基础使用

通过 `text` 属性设置按钮文字。

```vue
<hi-button text="基础使用"></hi-button>
```

# 设置主题

通过 `theme` 属性设置按钮主题。默认主题有 `primary`、`success`、`warning`、`danger`、`info`。

```vue
<hi-button text="主题按钮" theme="primary"></hi-button>
<hi-button text="主题按钮" theme="success"></hi-button>
<hi-button text="主题按钮" theme="warning"></hi-button>
<hi-button text="主题按钮" theme="error"></hi-button>
<hi-button text="主题按钮" theme="info"></hi-button>
```

# 扩展主题

通过设置 `--hi-theme-xxx` 格式的变量来扩展 HiUi 的主题。

```scss
--hi-theme-aster: #219041;
--hi-theme-bamboo: #1417ca;
--hi-theme-camellia: #a8096b;
```

```vue
<hi-button text="扩展主题" theme="aster"></hi-button>
<hi-button text="扩展主题" theme="bamboo"></hi-button>
<hi-button text="扩展主题" theme="camellia"></hi-button>
```

# 镂空按钮

添加 `plain` 属性，即可得到一个镂空按钮。

```vue
<hi-button text="镂空按钮" theme="primary" plain></hi-button>
<hi-button text="镂空按钮" theme="success" plain></hi-button>
<hi-button text="镂空按钮" theme="warning" plain></hi-button>
<hi-button text="镂空按钮" theme="error" plain></hi-button>
<hi-button text="镂空按钮" theme="info" plain></hi-button>
```

# 禁用按钮

添加 `disabled` 属性，即可得到一个禁用按钮。

```vue
<hi-button text="禁用按钮" theme="primary" disabled></hi-button>
<hi-button text="禁用按钮" theme="success" disabled></hi-button>
<hi-button text="禁用按钮" theme="warning" disabled></hi-button>
<hi-button text="禁用按钮" theme="error" disabled></hi-button>
<hi-button text="禁用按钮" theme="info" disabled></hi-button>
```

# 图标按钮

`hi-button` 组件支持设置前置（左侧）和后置（右侧）两种图标。

```vue
<hi-button text="前置图标" leftIconName="__gonggao" theme="primary"></hi-button>
<hi-button text="后置图标" rightIconName="__fuzhi" theme="success"></hi-button>
<hi-button text="前后图标" leftIconName="__gonggao" rightIconName="__fuzhi" theme="warning"></hi-button>
```

# 按钮形状

通过 `shape` 属性设置按钮形状。默认形状有 `square`、`round`、`circle`。

-   `square`：方形按钮，默认值。
-   `round`：圆角按钮。
-   `circle`：圆形按钮。此时按钮的宽度会设置成同高度一致，所以如果需要改变大小只需要设置按钮高度就可以了，另外此时按钮只显示图标不显示任何文本，此时应至少设置一个图标。

```vue
<hi-button text="圆角按钮" theme="primary" shape="round"></hi-button>
<hi-button text="圆形按钮" theme="success" shape="circle" rightIconName="__gonggao"></hi-button>
```

# loading 按钮

添加 `loading` 属性，即可得到一个加载中的按钮。

通过设置 `loadingText` 属性来设置 loading 时显示的提示。

通过设置 `loadingIconName` 属性来自定义 loading 图标。

```vue
<hi-button text="加载按钮" theme="primary" loading></hi-button>
<hi-button text="加载按钮" theme="success" loading loadingText="正在努力加载中..."></hi-button>
```

# 块状按钮

添加 `block` 属性，即可得到一个块状按钮（宽度为 `100%` 的按钮）。

```vue
<hi-button text="块级按钮" theme="error" block></hi-button>
```

# 按钮副文字

`hi-button` 支持通过 `subText` 属性设置按钮的副文字，显示在主文字的下方。

```vue
<hi-button text="带副文字的按钮" subText="我是副文字" theme="info"></hi-button>
```

# Props

`uni-app buttom` 组件自带的属性说明参考 [uni-app button 组件官方文档](https://uniapp.dcloud.net.cn/component/button.html)

| 参数                 | 说明                                                                                                                                                                | 类型    | 默认值        | 可选值                                                               | 版本 |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | ------------- | -------------------------------------------------------------------- | ---- |
| hoverClass           | 按钮点击时的类名                                                                                                                                                    | String  | `hi-hover`    | -                                                                    | -    |
| disabled             | 是否禁用                                                                                                                                                            | Boolean | false         | -                                                                    | -    |
| disabledClass        | 图标禁用时的类名                                                                                                                                                    | String  | `hi-disabled` | -                                                                    | -    |
| text                 | 按钮主文字                                                                                                                                                          | String  | -             | -                                                                    | -    |
| subText              | 按钮副文字                                                                                                                                                          | String  | -             | -                                                                    | -    |
| theme                | 按钮主题                                                                                                                                                            | String  | -             | `primary`、`success`、`warning`、`danger`、`info` 以及自己扩展的主题 | -    |
| plain                | 是否镂空                                                                                                                                                            | Boolean | false         | -                                                                    | -    |
| block                | 是否块状按钮                                                                                                                                                        | Boolean | false         | -                                                                    | -    |
| shape                | 按钮形状                                                                                                                                                            | String  | `square`      | `square`、`round`、`circle`                                          | -    |
| size                 | 按钮内容文字大小                                                                                                                                                    | String  | -             |                                                                      | -    |
| color                | 按钮内容文字颜色                                                                                                                                                    | String  | -             | -                                                                    | -    |
| subSize              | 按钮副文字大小                                                                                                                                                      | String  | -             | -                                                                    | -    |
| subColor             | 按钮副文字颜色                                                                                                                                                      | String  | -             | -                                                                    | -    |
| bg                   | 按钮背景                                                                                                                                                            | String  | -             | -                                                                    | -    |
| radius               | 按钮圆角大小                                                                                                                                                        | String  | -             | -                                                                    | -    |
| width                | 按钮宽度                                                                                                                                                            | String  | -             | -                                                                    | -    |
| height               | 按钮高度                                                                                                                                                            | String  | -             | -                                                                    | -    |
| borderColor          | 按钮边框颜色                                                                                                                                                        | String  | -             | -                                                                    | -    |
| iconSize             | 按钮中图标的大小，包括左侧图标、右侧图标和 loading 图标                                                                                                             | String  | -             | -                                                                    | -    |
| iconColor            | 按钮中图标的颜色，包括左侧图标、右侧图标和 loading 图标                                                                                                             | String  | -             | -                                                                    | -    |
| iconMode             | 按钮中图标的裁剪模式，包括左侧图标、右侧图标和 loading 图标                                                                                                         | String  | -             | -                                                                    | -    |
| loading              | 是否显示 loading                                                                                                                                                    | Boolean | -             | -                                                                    | -    |
| loadingText          | loading 时显示的提示                                                                                                                                                | String  | -             | -                                                                    | -    |
| loadingIconName      | loading 图标名称                                                                                                                                                    | String  | `__loading`   | -                                                                    | -    |
| loadingIconColor     | loading 图标颜色                                                                                                                                                    | String  | -             | -                                                                    | -    |
| loadingIconSize      | loading 图标大小                                                                                                                                                    | String  | -             | -                                                                    | -    |
| loadingIconMode      | loading 图标的裁剪模式                                                                                                                                              | String  | -             | -                                                                    | -    |
| leftIconName         | 左侧图标的名称                                                                                                                                                      | String  | -             | -                                                                    | -    |
| leftIconColor        | 左侧图标的颜色                                                                                                                                                      | String  | -             | -                                                                    | -    |
| leftIconSize         | 左侧图标的大小                                                                                                                                                      | String  | -             | -                                                                    | -    |
| leftIconMode         | 左侧图标的裁剪模式                                                                                                                                                  | String  | -             | -                                                                    | -    |
| rightIconName        | 右侧图标的名称                                                                                                                                                      | String  | -             | -                                                                    | -    |
| rightIconColor       | 右侧图标的颜色                                                                                                                                                      | String  | -             | -                                                                    | -    |
| rightIconSize        | 右侧图标的大小                                                                                                                                                      | String  | -             | -                                                                    | -    |
| rightIconMode        | 右侧图标的裁剪模式                                                                                                                                                  | String  | -             | -                                                                    | -    |
| formType             | 用于 `<form>` 组件，点击分别会触发 `<form>` 组件的 `submit/reset` 事件                                                                                              | String  | -             | -                                                                    | -    |
| openType             | 开放能力                                                                                                                                                            | String  | -             | -                                                                    | -    |
| hoverStartTime       | 按住后多久出现点击态，单位毫秒                                                                                                                                      | Number  | 20            | -                                                                    | -    |
| hoverStayTime        | 手指松开后点击态保留时间，单位毫秒                                                                                                                                  | Number  | 70            | -                                                                    | -    |
| appParameter         | 打开 `APP` 时，向 `APP` 传递的参数，`open-type=launchApp` 时有效                                                                                                    | String  | -             | -                                                                    | -    |
| hoverStopPropagation | 指定是否阻止本节点的祖先节点出现点击态                                                                                                                              | Boolean | false         | -                                                                    | -    |
| lang                 | 指定返回用户信息的语言，`zh_CN` 简体中文，`zh_TW` 繁体中文，`en` 英文。                                                                                             | String  | -             | -                                                                    | -    |
| sessionFrom          | 会话来源，`open-type="contact"` 时有效                                                                                                                              | String  | -             | -                                                                    | -    |
| sendMessageTitle     | 会话内消息卡片标题，`open-type="contact"` 时有效                                                                                                                    | String  | -             | -                                                                    | -    |
| sendMessagePath      | 会话内消息卡片点击跳转小程序路径，`open-type="contact"` 时有效                                                                                                      | String  | -             | -                                                                    | -    |
| sendMessageImg       | 会话内消息卡片图片，`open-type="contact"` 时有效                                                                                                                    | String  | -             | -                                                                    | -    |
| showMessageCard      | 是否显示会话内消息卡片，设置此参数为 `true`，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，用户点击后可以快速发送小程序消息，`open-type="contact"` 时有效 | Boolean | false         | -                                                                    | -    |
| groupId              | 打开群资料卡时，传递的群号                                                                                                                                          | String  | -             | -                                                                    | -    |
| guildId              | 打开频道页面时，传递的频道号                                                                                                                                        | String  | -             | -                                                                    | -    |
| publicId             | 打开公众号资料卡时，传递的号码                                                                                                                                      | String  | -             | -                                                                    | -    |
| dataImId             | 客服的抖音号                                                                                                                                                        | String  | -             | -                                                                    | -    |
| dataImType           | `IM` 卡片类型                                                                                                                                                       | String  | -             | -                                                                    | -    |
| dataGoodsId          | 商品的 `id`，仅支持泛知识课程库和生活服务商品库中的商品                                                                                                             | String  | -             | -                                                                    | -    |
| dataOrderId          | 订单的 `id`，仅支持交易 `2.0` 订单                                                                                                                                  | String  | -             | -                                                                    | -    |
| dataBizLine          | 商品类型，`“1”` 代表生活服务，`“2”` 代表泛知识。                                                                                                                    | String  | -             | -                                                                    | -    |

# Events

具体的事件说明参考 [uni-app button 组件官方文档](https://uniapp.dcloud.net.cn/component/button.html)

| 事件名                     | 说明                                                                                             | 回调参数 | 版本 |
| -------------------------- | ------------------------------------------------------------------------------------------------ | -------- | ---- |
| @click                     | 点击按钮时触发                                                                                   | -        | -    |
| @getphonenumber            | 获取用户手机号回调                                                                               | -        | -    |
| @getuserinfo               | 用户点击该按钮时，会返回获取到的用户信息，从返回参数的 `detail` 中获取到的值同 `uni.getUserInfo` | -        | -    |
| @error                     | 当使用开放能力时，发生错误的回调                                                                 | -        | -    |
| @open-setting              | 在打开授权设置页并关闭后回调                                                                     | -        | -    |
| @launchapp                 | 从小程序打开 `App` 成功的回调                                                                    | -        | -    |
| @contact                   | 客服消息回调                                                                                     | -        | -    |
| @chooseavatar              | 获取用户头像回调                                                                                 | -        | -    |
| @agreeprivacyauthorization | 用户同意隐私协议事件回调，`open-type="agreePrivacyAuthorization"` 时有效                         | -        | -    |
| @addgroupapp               | 添加群应用的回调                                                                                 | -        | -    |
| @chooseaddress             | 调起用户编辑并选择收货地址的回调                                                                 | -        | -    |
| @chooseinvoicetitle        | 用户选择发票抬头的回调                                                                           | -        | -    |
| @subscribe                 | 订阅消息授权回调                                                                                 | -        | -    |
| @login                     | 登录回调                                                                                         | -        | -    |
| @im                        | 监听跳转 `IM` 的成功回调                                                                         | -        | -    |

# Slots

| 名称    | 说明               |
| ------- | ------------------ |
| default | 按钮文本内容插槽， |

# 组件样式变量

| 变量                           | 说明                                                    | 默认值                               | 版本 |
| ------------------------------ | ------------------------------------------------------- | ------------------------------------ | ---- |
| --hi-button-display            | 按钮布局方式                                            | `inline-flex`                        | -    |
| --hi-button-font-size          | 按钮内容文字大小                                        | `inherit`                            | -    |
| --hi-button-color              | 按钮内容文字颜色                                        | `inherit`                            | -    |
| --hi-button-width              | 按钮的宽度                                              | `auto`                               | -    |
| --hi-icon-image-height         | 按钮的高度                                              | `80rpx`                              | -    |
| --hi-button-border-wdith       | 按钮边框粗细                                            | `0.5px`                              | -    |
| --hi-button-border-style       | 按钮边框样式                                            | `solid`                              | -    |
| --hi-button-border-color       | 按钮边框颜色                                            | `var(--hi-border-color)`             | -    |
| --hi-button-border-radius      | 按钮圆角                                                | `var(--hi-radius-small)`             | -    |
| --hi-button-background         | 按钮背景                                                | -                                    | -    |
| --hi-button-padding            | 按钮内边距                                              | `0 20rpx`                            | -    |
| --hi-button-margin             | 按钮外边距                                              | `0`                                  | -    |
| --hi-button-line-height        | 按钮内容行高                                            | `1.25`                               | -    |
| --hi-button-gap                | 按钮内容之间的间距                                      | `3px`                                | -    |
| --hi-button-loading-duration   | `loading` 转动一圈的用时                                | `1500ms`                             | -    |
| --hi-button-loading-function   | `loading` 动画函数                                      | `linear`                             | -    |
| --hi-button-text-margin        | 按钮文字内容的外边距                                    | -                                    | -    |
| --hi-button-text-gap           | 按钮主文字与副文字之间的间距                            | -                                    | -    |
| --hi-button-sub-text-font-size | 按钮副文字的大小                                        | `0.7em`                              | -    |
| --hi-button-sub-text-color     | 按钮副文字颜色                                          | -                                    | -    |
| --hi-button-icon-size          | 按钮图标的大小，包括左侧图标、右侧图标和 `loading` 图标 | `1.15em`                             | -    |
| --hi-button-icon-color         | 按钮图标的颜色，包括左侧图标、右侧图标和 `loading` 图标 | -                                    | -    |
| --hi-button-left-icon-size     | 按钮左侧图标的大小                                      | `var(--hi-button-icon-size, 1.15em)` | -    |
| --hi-button-left-icon-color    | 按钮左侧图标颜色                                        | `var(--hi-button-icon-color)`        | -    |
| --hi-button-right-icon-size    | 按钮右侧图标的大小                                      | `var(--hi-button-icon-size, 1.15em)` | -    |
| --hi-button-right-icon-color   | 按钮右侧图标颜色                                        | `var(--hi-button-icon-color)`        | -    |
| --hi-button-loading-icon-size  | 按钮 `loading` 图标的大小                               | `var(--hi-button-icon-size, 1.15em)` | -    |
| --hi-button-loading-icon-color | 按钮 `loading` 图标颜色                                 | `var(--hi-button-icon-color)`        | -    |
