# ChimeePlayer

这是基于 [chimee](https://github.com/Chimeejs/chimee)集成的一套您可以直接使用的 HTML5 播放器 ， 提供了默认样式，此时要避免 CSS 中给 video 写死宽高值，以避免全屏不能正常使用。

> 注意：当前文档适用于 PC 端 ， 如果是移动端使用 Chimee ， 您可以参考 [Chimee-mobile-player](https://github.com/Chimeejs/chimee-mobile-player/blob/master/README.md) 文档，移动端插件开发和注意事项可以参考 [Chimee 移动端插件开发](https://github.com/Chimeejs/chimee-mobile-player/blob/master/doc/dev.md) 这篇文章。

## 安装引用

鉴于大家各自的业务构建场景的不同，可以从以下两种引用方式中选择适合自己的方案：

> 注意：在 1.4.0 版本（包括）以上，css 与 js 分开打包了，此时需要单独引入 css 文件 lib/chimee-player.brower.css

1. 使用公共 CDN 上的 JS ，或者将 lib 目录下适合的打包文件放入业务目录中，直接引用 JS ：

```html
<!-- 注意：这里的 CDN 资源链接可能不是最新版，具体可访问：https://cdn.baomitu.com/chimee-player -->
<script src="https://lib.baomitu.com/chimee-player/1.4.8/chimee-player.browser.js"></script>
<script>
new ChimeePlayer({
  wrapper: '#wrapper',  // video dom容器
  src: 'http://chimee.org/vod/1.mp4',
  controls: true
});
</script>
```

2. 如果项目是基于 nodejs 环境构建的话，可以先在项目目录下执行命令安装依赖包：

```bash
npm install chimee-player --save
```

然后再按照自己的使用习惯，将依赖 import 或 require 到业务代码中使用：

```bash
import ChimeePlayer from 'chimee-player';
```

## 基本用法

http://chimee.org/docs/chimee_player.html