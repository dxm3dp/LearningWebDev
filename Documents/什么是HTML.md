# 什么是 HTML

HTML 是用来描述网页的一种语言。

- HTML 指的是超文本标记语言 （**H**yper **T**ext **M**arkup **L**anguage）
- HTML 不是一种编程语言 ， 而是一种**标记语言** （markup language)
- 标记语言是一套**标记标签** （markup tag)
- HTML 使用**标记标签**来描述网页

## HTML 文档 = 网页

- HTML 文档**描述网页**
- HTML 文档**包含 HTML 标签**和纯文本
- HTML 文档也被称为**网页**

Web 浏览器的作用是读取 HTML 文档 ， 并以网页的形式显示它们 。 浏览器不会显示 HTML 标签 ， 而是使用标签来解释页面的内容 ：

```html
<html>
<body>

<h1>我的第一个标题</h1>

<p>我的第一个段落。</p>

</body>
</html>
```

## HTML 基础

### HTML 标题

HTML 标题（Heading）通过 &lt;h1&gt; - &lt;h6&gt; 等标签进行定义。

```html
<h1>This is a heading</h1>
<h2>This is a heading</h2>
<h3>This is a heading</h3>
```

### HTML 段落

HTML 段落通过 &lt;p&gt; 标签进行定义。

```html
<p>This is a paragraph.</p>
<p>This is another paragraph.</p>
```

### HTML 链接

HTML 链接通过 &lt;a&gt; 标签进行定义

```html
<a href="Http://www.w3cschool.com.cn">This is a link</a>
```

注释：在 href 属性中指定链接的地址。

### HTML 图像

HTML 图像通过 &lt;img&gt; 标记进行定义。

```html
<img src="w3school.jpg" width="104" height="142" />
```

注释：图像的名称和尺寸是以属性的形式提供的。

### &lt;html&gt; 元素

&lt;html&gt; 元素定义了整个 HTML 文档。

### &lt;body&gt; 元素

&lt;body&gt; 元素定义了 HTML 文档的主体。

### 空的 HTML 元素

没有内容的 HTML 元素被称为空元素。空元素是在开始标签中关闭的。
&lt;br&gt; 就是没有关闭标签的空元素 （&lt;br&gt; 标签定义换行）。
在 XHTML 、XML 以及未来版本的 HTML 中 ， 所有元素都必须被关闭。
在开始标签中添加斜杠，比如 &lt;br /&gt; ，是关闭空元素的正确方法，HTML、XHTML 和 XML 都接受这种方式。
即使 &lt;br&gt; 在所有浏览器中都是有效的，但使用 &lt;br /&gt; 其实是更长远的保障。

### HTML 属性

属性为 HTML 元素提供附加信息。

属性总是以名称/值对的形式出现，比如：**name="value"**。
属性总是在 HTML 元素的**开始标签**中规定。

#### 更多 HTML 属性实例

```html
<h1 align="center"> 拥有关于对齐方式的附加信息。 

<body bgcolor="yellow"> 拥有关于背景颜色的附加信息。

<table border="1"> 拥有关于表格边框的附加信息。
```

#### 适用于大多数 HTML 元素的属性

| 属性  | 值                 | 描述                                     |
| :---- | :----------------- | :--------------------------------------- |
| class | *classname*        | 规定元素的类名（classname）              |
| id    | *id*               | 规定元素的唯一 id                        |
| style | *style_definition* | 规定元素的行内样式（inline style）       |
| title | *text*             | 规定元素的额外信息（可在工具提示中显示） |

### HTML 块

可以通过 &lt;div&gt; 和 &lt;span&gt; 将 HTML 元素组合起来。

#### HTML 块元素

大多数 HTML 元素被定义为块级元素或内联元素。

块级元素在浏览器显示时，通常会以新行来开始（和结束）。

例子：&lt;h1&gt; , &lt;p&gt; , &lt;ul&gt; , &lt;table&gt;

#### HTML 内联元素

内联元素在显示时通常不会以新行开始。

例子：&lt;b&gt; , &lt;td&gt; , &lt;a&gt; , &lt;img&gt;

#### HTML &lt;div&gt; 元素

HTML &lt;div&gt; 元素是块级元素，它是可用于组合其他 HTML 元素的容器。

&lt;div&gt; 元素没有特别的含义。除此之外，由于它属于块级元素，浏览器会在其前后显示拆行。

如果与 CSS 一同使用，&lt;div&gt; 元素可用于对大的内容块设置样式属性。

&lt;div&gt; 元素的另一个常见的用途是文档布局。它取代了使用表格定义布局的老式方法。

#### HTML &lt;span&gt; 元素

HTML &lt;span&gt; 元素是内联元素，可用作文本的容器。

&lt;span&gt; 元素也没有特定的含义。

当与 CSS 一同使用时，&lt;span&gt; 元素可用于为部分文本设置样式属性。