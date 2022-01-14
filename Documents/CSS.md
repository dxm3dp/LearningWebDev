# CSS

**CSS 的顶层样式表由两种规则组成的规则列表构成，一种被成为 at-rule，也就是 at 规则，另一种是 qualified rule，也就是普通规则。**

## at 规则

- @charset
- @import
- @media
- @page
- @counter-style
- @keyframes
- @fontface
- @supports
- @namespace

### @charset

@charset 用于提示 CSS 文件使用的字符编码方式，它如果被使用，必须出现在最前面。此规则只在给出语法解析阶段前使用，并不影像页面上的展示效果。

```css
@charset "utf-8"
```

### import

@import 用于引入一个 CSS 文件，除了 @charset 规则不会被引入，@import 可以引入另一个文件的全部内容。

```css
@import "mystyle.css";
@import url("mystyle.css");
```

```css
@import [ <url> | <string> ]
        [ supports( [ <supports-condition> | <declaration> ] ) ]?
        <media-query-list>? ;
```

import 还支持 supports 和 media query 形式。

### @media

media 就是大名鼎鼎的 media query 使用的规则了，它能够对设备的类型进行一些判断。在 media 的区块内，是普通规则列表。

```css
@media print {
    body {front-size; 10pt}
}
```

### page

page 用于分页媒体访问网页时的表现设置，页面是一种特殊的盒模型结构，除了页面本身，还可以设置它周围的盒。

```css
@page {
    size: 8.5in 11in;
    margin: 10%;

    @top-left {
        content: "Hamlet";
    }
    @top-right {
	content: "Page" counter(page);
    }
}
```

### counter-style

counter-style 产生一种数据，用于定义列表项的表现。

```css

@counter-style triangle {
  system: cyclic;
  symbols: ‣;
  suffix: " ";
}
```

### key-frames

keyframes 产生一种数据，用于定义动画关键帧。

```css

@keyframes diagonal-slide {

  from {
    left: 0;
    top: 0;
  }

  to {
    left: 100px;
    top: 100px;
  }
}
```

### fontface

fontface 用于定义一种字体，icon font 技术就是利用这个特性来实现的。

```css
@font-face {
  font-family: Gentium;
  src: url(http://example.com/fonts/Gentium.woff);
}

p { font-family: Gentium, serif; }
```

### support

support 检查环境的特性，它与 media 比较类似。

### namespace

用于跟 XML 命名空间配合的一个规则，表示内部的 CSS 选择器全都带上特定命名空间。

### viewport

用于设置视口的一些特性，不过兼容性目前不是很好，多数时候被 HTML 的 meta 代替。

## 普通规则

qualified rule 主要是由选择器和声明区块构成。声明区块又由属性和值构成。

- 普通规则
  - 选择器
  - 声明列表
    - 属性
    - 值
      - 值的类型
      - 函数
      
### 选择器

https://time.geekbang.org/column/article/80042
