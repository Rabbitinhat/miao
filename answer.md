# 测试

## 计算机基础

### 为什么是二进制而不是三进制或其他进制

二进制足够使用,
二进制会使电路设计更简单,
二进制适于表达布尔逻辑

### Unicode

Unicode 是一套标准, 将全世界所有符号, 语言进行了统一的编码
每个符号都有一个唯一的编号且不重复
最主要的作用就是统一编码, 包含了多种不同语言的文字
UTF-8 实现了变长编码(即编号较小的符号存储在计算机内部时占用的字节数量也较少)

### GUI CLI

graphic user interface 图形化用户(普通用户)界面

现实中的例子: 键盘, 燃气灶, 现实设备中的图标, 按钮

command line interface 命令行界面; 现实中的命令, 指示和对话

## HTML

### HTML标签不需要闭合

根据规范能够推导出该标签已经结束

### 费兹定理

交互设计中的常见原则, 目标的可达程度与距离成反比, 与目标大小成正比

合理使用该定律可以使软件的易用性更好

### 为什么英文很重要

文档
工具(IDE 调试工具)
优秀的文章, blog

### 常见全局属性(global attribute)

id
class
style
title
lang

### PATH

路径(PATH)是一个文件夹完整路径列表, 里面按顺序存储了多个文件夹的路径
当我们在运行窗口(Windows)或命令行输入命令时, 实际上会在路径列表的文件夹中查找对应的文件来执行(全局执行)

用户也可以利用这个特性来创建常用程序的快捷方式用于快速启动

### 文本文件 二进制文件
<!-- ? -->
文本文件

* 所有内容可用常见的编码方式被解码为字符的文件
* 文件的内容可用键盘编辑
* 可以用文本编辑器编辑
* \n

二进制文件

### HTML 数学公式

tree-like

### 图片格式

jpg

* 存储适合颜色大量渐变的图片, 即现实照片

png

* 适合存储大片连续纯色区域的图片 图标, 网页截图
* 支持256透明

gif

* 有色卡, 色卡只能存储256种颜色, 即每张gif最多有256种色彩

bmp

* 具体取决于存储方式, 每个像素占用1位到24位不等 n位位图对应于2^n颜色

webp
<!-- ? -->
* 有损压缩, 用于取代jpg格式

### `data-`

存放与当前元素相关的额外信息

### `MIME-type`

Mulpurpose Internet Mail Extension

用一个特定的格式来表达文件的格式
type/subtype
image/jpeg
text/html
text/css

### target href

target

* form
* a
* base

href

* a
* base
* link

### BOM

Byte Order Mark 字节序标记; 出现在文本文件的开头, 用来表达编码时所使用的字节序; 大端序/小端序
占用两个字节, 编辑器软件默认不添加BOM头, 但记事本会添加(Notepad++替换)

### group 类型

optgroup

filedset

### SEO

search engine optimise

### 浏览器内核

gecko Mozilla Firefox

### 列表元素

ol, ul的子元素只能为li
dl

### fallback

```html
<noscript>
 browser doesn't support  javascript
</noscript>

<canvas>
<p>browser doesn't support canvas</p>
</canvas>
```

正常使用时, 内部需要放内容的标签, 就是把fallback放在该标签的外面, 正常使用时内容为空的标签, 将fallback放在标签内部

### icon

```html
<link ref="shortcut icon" href="xxxx.ico" />
```

### 可访问性

网站在不同设备上是否易用, 能否使用
网站对不同人群的易用性

aria 标注出各个标签的(语义)作用和状态
td/th通过

### ASCⅡ

a 97
A 65
0 48


### transform

coordinate 坐标
polygon 坐标
alternative 替代物
属性 attribute property
obsolate 过时了的
十进制 decimal
十六进制 hexdeciaml
deprecate 不推荐使用的
horizontal 水平的
语义 semantic
可访问性 accessibilty

### 选择器

```css
::selection {} /*被选中的元素*/
:target{} /* 选中id的值为地址栏中#后内容的元素 */
```

### 单位

em
px 代表一个物理像素, 在操作系统分辨率和物理分辨率相同时, 代表一个物理像素
vw 视口viewport宽度1%
vmax vw, vh中较大的
vmin vw, vh中较小的

### 像素

1920x1280 1280x720 110%

(1920 / 1280) * 1.1 = 1.65

1.65 * 1.65 = 2.7225

### font-size

h2 font-size: 1.5em

### 错误

font-variant: small-caps

font: 20px serif;

### 替换元素

input img iframe

没有后代元素, 往往有内在宽高(?)

### 不同媒体样式

@media print

```css
[rel~="nofollow"]
```

### 链接顺序

综合选择器的优先级和想要实现的效果
14:38

### 盒模型的理解

每个元素都会生成一个或多个盒子, 盒子的内容, 内边距, 边框, 外边距

width, 内边距, 边框不能为负

边框, 内边距, 内容区是可见及可交互的

外边距是透明的

width是内容区的宽度

box-sizing 改变默认的盒模型

content-box padding-box border-box margin-box

### height 值为百分比时

### 模拟信号, 数字信号

模拟信号 直接使用线路中的物理量, 这些物理量即为模拟信号

数字信号 将设备中物理量理解为0和1, 这些表达0, 1的信号即为数字信号
<!-- ? -->

### input type

### 自动获得焦点

autofocus

### 禁用一组输入

```html
<filedset disabled>

</filedset>
```