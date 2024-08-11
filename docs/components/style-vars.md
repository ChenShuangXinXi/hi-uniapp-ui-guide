# HiUi 内置的全局样式变量

HiUi 内置了简单的全局样式变量，可以满足大部分的场景，当然你也可以自定义自己的样式变量或在自己的文件中重写 HiUi 的样式变量。

```scss
page {
    // 主题
    --hi-theme-primary: #409eff; // 主要
    --hi-theme-success: #67c23a; // 成功
    --hi-theme-warning: #e6a23c; // 警告
    --hi-theme-error: #f56c6c; // 错误
    --hi-theme-info: #909399; // 信息

    // 背景
    --hi-background-overlay: rgba(0, 0, 0, 0.5); // 遮罩

    /* 文本颜色 */
    --hi-color-main: #333333; // 主文本色
    --hi-color-middle: #666666; // 中间文本色
    --hi-color-light: #999999; // 浅色文本
    --hi-color-placeholder: #c4c4c4; // 占位文本

    /* 透明度 */
    --hi-opacity-hover: 0.8; // 点击状态时元素的透明度，使用透明度实现元素点击态效果
    --hi-opacity-disabled: 0.5; // 禁用状态时元素的透明度，使用透明度实现元素禁用态效果

    // 圆角
    --hi-radius-big: 20rpx; // 大圆角
    --hi-radius-default: 10rpx; // 默认圆角
    --hi-radius-small: 5rpx; // 小圆角

    // 边框
    --hi-border-color: #ebedf0; // 默认边框色

    // 层级
    --hi-index-default: 666; // 默认层级，比如状态栏、导航栏、底部导航栏等
    --hi-index-big: 998; // 高层级，比如遮罩、弹窗等，因为 uni-app 的 loading 等层级为 999，所以这里设置小 1 可以让 HiUi 的遮罩等元素不遮挡 uni-app 的弹出元素
}
```
