# 基础使用

通过 `text` 属性设置按钮文字。

```vue
<hi-button text="基础使用"></hi-button>
```

<br/>

# 禁用按钮

添加 `disabled` 属性，即可得到一个禁用按钮。

```vue
<hi-button text="禁用按钮" disabled></hi-button>
```

<br/>

# 图标按钮

`hi-button` 组件支持设置前置（左侧）和后置（右侧）两种图标。

```vue
<hi-button text="前置图标" leftIconName="__gonggao"></hi-button>
<hi-button text="后置图标" rightIconName="__fuzhi"></hi-button>
<hi-button text="前后图标" leftIconName="__gonggao" rightIconName="__fuzhi"></hi-button>
```

<br/>

# loading 按钮

添加 `loading` 属性，即可得到一个加载中的按钮。
<br/>
通过设置 `loadingText` 属性来设置 `loading` 时显示的提示。
<br/>
通过设置 `loadingIconName` 属性来自定义 `loading` 图标。

```vue
<hi-button text="加载按钮" theme="primary" loading></hi-button>
<hi-button text="加载按钮" theme="success" loading loadingText="正在努力加载中..."></hi-button>
```

<br/>

# 按钮副文字

`hi-button` 支持通过 `subText` 属性设置按钮的副文字，显示在主文字的下方。

```vue
<hi-button text="带副文字的按钮" subText="我是副文字"></hi-button>
```

<br/>

# Props

`uni-app buttom` 组件自带的属性说明参考 [uni-app button 组件官方文档](https://uniapp.dcloud.net.cn/component/button.html)

| 参数                   | 说明                                                                                                                                                                | 类型      | 默认值      | 可选值 |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ----------- | ------ |
| `hoverClass`           | 按钮点击时的类名                                                                                                                                                    | `String`  | `hi-hover`  | `-`    |
| `disabled`             | 是否禁用                                                                                                                                                            | `Boolean` | `false`     | -      |
| `text`                 | 按钮主文字                                                                                                                                                          | `String`  | `-`         | `-`    |
| `subText`              | 按钮副文字                                                                                                                                                          | `String`  | `-`         | `-`    |
| `loading`              | 是否显示 `loading`                                                                                                                                                  | `Boolean` | `-`         | `-`    |
| `loadingText`          | `loading` 时显示的提示                                                                                                                                              | `String`  | `加载中...` | `-`    |
| `loadingIconName`      | `loading` 图标名称                                                                                                                                                  | `String`  | `__loading` | `-`    |
| `leftIconName`         | 左侧图标的名称                                                                                                                                                      | `String`  | `-`         | `-`    |
| `rightIconName`        | 右侧图标的名称                                                                                                                                                      | `String`  | `-`         | `-`    |
| `formType`             | 用于 `<form>` 组件，点击分别会触发 `<form>` 组件的 `submit/reset` 事件                                                                                              | `String`  | `-`         | `-`    |
| `openType`             | 开放能力                                                                                                                                                            | `String`  | `-`         | `-`    |
| `hoverStartTime`       | 按住后多久出现点击态，单位毫秒                                                                                                                                      | `Number`  | `20`        | `-`    |
| `hoverStayTime`        | 手指松开后点击态保留时间，单位毫秒                                                                                                                                  | `Number`  | `70`        | `-`    |
| `appParameter`         | 打开 `APP` 时，向 `APP` 传递的参数，`open-type=launchApp` 时有效                                                                                                    | `String`  | `-`         | `-`    |
| `hoverStopPropagation` | 指定是否阻止本节点的祖先节点出现点击态                                                                                                                              | `Boolean` | `false`     | `-`    |
| `lang`                 | 指定返回用户信息的语言，`zh_CN` 简体中文，`zh_TW` 繁体中文，`en` 英文。                                                                                             | `String`  | `zh_CN`     | `-`    |
| `sessionFrom`          | 会话来源，`open-type="contact"` 时有效                                                                                                                              | `String`  | `-`         | `-`    |
| `sendMessageTitle`     | 会话内消息卡片标题，`open-type="contact"` 时有效                                                                                                                    | `String`  | `-`         | `-`    |
| `sendMessagePath`      | 会话内消息卡片点击跳转小程序路径，`open-type="contact"` 时有效                                                                                                      | `String`  | `-`         | `-`    |
| `sendMessageImg`       | 会话内消息卡片图片，`open-type="contact"` 时有效                                                                                                                    | `String`  | `-`         | `-`    |
| `showMessageCard`      | 是否显示会话内消息卡片，设置此参数为 `true`，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，用户点击后可以快速发送小程序消息，`open-type="contact"` 时有效 | `Boolean` | `false`     | `-`    |
| `groupId`              | 打开群资料卡时，传递的群号                                                                                                                                          | `String`  | `-`         | `-`    |
| `guildId`              | 打开频道页面时，传递的频道号                                                                                                                                        | `String`  | `-`         | `-`    |
| `publicId`             | 打开公众号资料卡时，传递的号码                                                                                                                                      | `String`  | `-`         | `-`    |
| `dataImId`             | 客服的抖音号                                                                                                                                                        | `String`  | `-`         | `-`    |
| `dataImType`           | `IM` 卡片类型                                                                                                                                                       | `String`  | `-`         | `-`    |
| `dataGoodsId`          | 商品的 `id`，仅支持泛知识课程库和生活服务商品库中的商品                                                                                                             | `String`  | `-`         | `-`    |
| `dataOrderId`          | 订单的 `id`，仅支持交易 `2.0` 订单                                                                                                                                  | `String`  | `-`         | `-`    |
| `dataBizLine`          | 商品类型，`“1”` 代表生活服务，`“2”` 代表泛知识。                                                                                                                    | `String`  | `-`         | `-`    |

<br/>

# Events

具体的事件说明参考 [uni-app button 组件官方文档](https://uniapp.dcloud.net.cn/component/button.html)

| 事件名                       | 说明                                                                                             | 回调参数 |
| ---------------------------- | ------------------------------------------------------------------------------------------------ | -------- |
| `@getphonenumber`            | 获取用户手机号回调                                                                               | `-`      |
| `@getuserinfo`               | 用户点击该按钮时，会返回获取到的用户信息，从返回参数的 `detail` 中获取到的值同 `uni.getUserInfo` | `-`      |
| `@error`                     | 当使用开放能力时，发生错误的回调                                                                 | `-`      |
| `@open-setting`              | 在打开授权设置页并关闭后回调                                                                     | `-`      |
| `@launchapp`                 | 从小程序打开 `App` 成功的回调                                                                    | `-`      |
| `@contact`                   | 客服消息回调                                                                                     | `-`      |
| `@chooseavatar`              | 获取用户头像回调                                                                                 | `-`      |
| `@agreeprivacyauthorization` | 用户同意隐私协议事件回调，`open-type="agreePrivacyAuthorization"` 时有效                         | `-`      |
| `@addgroupapp`               | 添加群应用的回调                                                                                 | `-`      |
| `@chooseaddress`             | 调起用户编辑并选择收货地址的回调                                                                 | `-`      |
| `@chooseinvoicetitle`        | 用户选择发票抬头的回调                                                                           | `-`      |
| `@subscribe`                 | 订阅消息授权回调                                                                                 | `-`      |
| `@login`                     | 登录回调                                                                                         | `-`      |
| `@im`                        | 监听跳转 `IM` 的成功回调                                                                         | `-`      |

<br/>

# Slots

| 名称       | 说明               |
| ---------- | ------------------ |
| `#default` | 按钮文本内容插槽， |
