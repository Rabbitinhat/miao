# 测试

1.  行内元素按照字体的 x 字符高度一半进行对齐; 行内块元素将自身的中点和 x 的高度一半进行对齐

2.  baseline font-size 区域的下边界

3.  position

    - static 默认值, 元素按照 normal flow 进行布局
    - relative 相对定位 元素原本的位置仍保留, 相对原本的位置进行偏移
    - absolute 绝对定位, 完全脱离文档流, 相对于最近的 position 属性值不为 static 的祖先元素进行偏移
    - fixed 固定定位, 相对于 viewport 进行定位

4.  border-box

5.  级联菜单

    - 将每级菜单嵌套进上一级菜单的菜单项元素中, 当鼠标 hover 菜单项时, 显示嵌套其中的下一级菜单

6.  ```html 
    <div>
      <before></before>
      <h1>The article</h1>
      <p>the quick brown fox</p>
      <after></after>
    </div>
    ```

7.  ?
8.  缓动函数
    - (x动画的运动曲线, 表示元素在整个动画中的速度变化) 指元素在渐变时的 时间-进度 曲线; 为一个起点在(0, 0), 终点在(1, 1)的曲线, 进度为progress = f(time)
    - `run-in` `ease-in` `ease-out` `ease-in-out` `linear` `steps(n, start/end)` `step-start(n)` `step-end(n)` 
    - 使用贝塞尔曲线

9.  ![Beizer](./Beizer.PNG)
10. 属性值是否以数值表示
    1.  >(一般情况下, 可渐变属性的值都为数值, 可以连续变化, 离散变化的关键字属性一般不能渐变, 例外如(z-index, visibility, background-size: contain/cover))
11. ? 
    1.  >(pointer-event: none) user-select: none(使用者无法选中)
12. 显示上没有区别
    1.  >(无doctype声明的页面会以quirk模式渲染, 具体效果为: 元素的默认盒模型为`border-box`)
13. ? 
    1.  >aria: Accessable Rich Internet Application; html及css等常用于在浏览器中实现复杂交互的软件, 其中会出现相当多传统软件中常见的视觉及交互元素; 然而, 对于读屏软件来说, 无法分辨鼠标所指位置是何种常见的交互元素, 也就无法告知需要软件的用户; role, aria-* 是用于让浏览器告诉读屏软件当前元素是何种元素, 及其状态

14. 中英互翻

- omit 忽略
- multiple 多个 乘法
- 驼峰式 camel case
- 中划线式 kabab case
- layout 布局
- typo 拼写错误
- code review 代码检查(审查)
- 半径 radius
- config 配置
- 集合 set collection
- 矩形 **rectangle**
- binary 二进制
- decimal 十进制
- 十六进制 **hexdecimal**
- 八进制 **octal**
- SEO search engine Optimization
- HTML 实体 HTML entity
- 语义化 **semantic**
- 兼容性 **compatibility**
- **quirk** 怪异的
- reference 引用 h ref
- 大小写敏感 case **sensitive**
- 别名 alias

1.  cotain: 80 cover: 160
2.  ? 287px 189px
3.  unary + - ! ++ -- typeof binary + - * / % > < == === != !== && || ^  | & ~ >> >>>(不保留符号位) << | 三元 ? :
4.  !(!("")) ""
5.  [小米返回动画](https://codepen.io/rabbitinhat/pen/MMpWzL)
6.  清除浮动: 给当前元素添加 clear 属性, 增加其外边距, 避开浮动元素; 闭合浮动, 通过触发 BFC, 添加伪元素等形式, 使包含浮动元素的父元素能够容纳浮动元素. 联系: 解决浮动元素脱离文档流, 造成的高度塌陷问题.
7.  li 继承了默认的 font-size 和 line-height; 同时存在 list-style, 列表符号本质上是行内元素, 并且, 所以 list 的高度就为 18px; 此时 li 元素的高度+边框+外边距的总高度小于包含的 a 元素高度, 所以每行的 a 元素浮动时, 最左边仍然会遇到上一个 li 元素中浮动的 a 元素, 所以 a 就会像右移; 产生当前的渲染结果
    1.  >(每个浮动元素尽量高, 但不能高过自己的包含块的内容区的最高点; 所以每个浮动元素垂直方向上从li开始)
8.  将页面中的所有图标图片集中在一整张图片上, 使用时, 通过 background-position 进行定位; 为什么使用: 页面载入时, 每个单独的图片都会触发浏览器下载, 增加页面载入的时间. 优点: 减少浏览器下载行为; 缺点: 需要单独计算每个图片的位置
    1.  >通过使用背景图片定位及元素的大小等属性, "切"出大图中的小图; 减少网络请求次数
9.  具有块元素属性的行内元素; 可以设置宽高, 默认情况下, 行内块的下边缘和每一行的基线对齐. 行内块高度大于当前行高时, 行高会被撑大. 为行内块设置 vertical-align: middle 时, 行内块会将中点和该行的 x 字符中点进行对齐
    1.  >考虑元素自身位置时, 当成行内元素; 考虑元素的子元素时, 相当于子元素在一个block/table/flex元素中
10.  后代元素会继承 color 属性 text-decoration, border *-shadow 都会继承 color 属性值
    * >css3中currentColor可以取其他元素的color值?


11. ? em 框 字体中 x 字符的大小,不同字体大小不同; 行内框, 宽度由左右外边距, 边框, 内边距和文本宽度决定, 高度由行高决定, 行高由每行最高的行内元素, 行内块元素决定 行框由每行行高和每行宽度决定; 内容区默认由元素的包含内容确定, 默认情况下, width, height 设置的是内容区宽高, 通过改变 box-sizing, 会改变盒模型状态, 也会改变内容区宽高;
    * >em:文字框, 高度由字号确定; 内容区: 多个em框组成; inline框: 
12. ?
13. baseline: 小写字母 x 的底端; 最高点: vertical-align: top; 最低点: vertical-align: bottom
    1.  >垂直方向的margin, padding, border都对布局无效, 最多只有视觉效果; 最高点和最低点分别就是line-height的最高点和最低点
14. table{caption, thead{tr{th}}, tbody{tr{td}}, tfoot{tr{td}}}
    1.  >由高到低为: 单元格 cell; rows; rows.group; columns; columns-group
15. css:
    1.  hover 前的`:`; 伪元素无法被hover
    2.  style 标签, type="stylesheet"
    3.  opacity: 属性值为小数 结尾`;`
    4.  `opacity`
    5.  `steps`
    6.  
    7.  不要在伪类中添加影响布局的属性; (:visited 只能添加颜色属性)
    8.  a 闭合标签, href="" url
16. 45px
17. vertical-align: baseline; 行内元素按照baseline排列, 部分字母可能会超出baseline; 行内块元素底端对齐baseline
    1.  >行内元素: 与匿名文本的基本对齐; 单元格: 同一行的不同单元格的第一行内容的基线对齐
18. ?
19. 闭合浮动
    1.  使用伪元素, 并设置`clear:both`清除浮动, 这个方式会伪元素避开浮动元素; 撑起父元素的高度
    2.  父元素设置 overflow: hidden; 触发BFC, 使其可以包含浮动元素
    3.  父元素内额外添加一个元素, 设置其高度为0, `clear:both` 从而撑起父元素

20. ?
    1.  >table-layout cell-spacing caption-side border-space empty-cells
21. display: block 块元素 inline, inline-block 文本行
    1.  >常规流: 最近的块级元素; 定位: absolute: 最近的定位祖先元素(position: !(static)) fixed: viewport; relative: =normal flow; float; html元素: viewport


22. 默认情况下, 页面中元素按照从右向左, 从上到下的顺序排列; 包含块概念
    1.  元素的布局上下文
23. ?
    1. >元素正好有28张需要播放, 即28frame; 一般显示器的刷新率是60帧, 即.016s一帧; 让浏览器准备绘制它的时候, 正好移动到某一张的位置上
24. 都是以同类型元素进行查找
25. background
    1.  background-image: url(); 背景图片
    2.  background-color: 背景颜色
    3.  background-position: left top center right bottom 背景定位, 50% 指的是背景图片的50%位置和元素的50%位置对齐
    4.  background-size: contain/cover ?
    5.  background-repeat: repeat-x/repeat-y/no-repeat 背景重复, 沿x轴/y轴重复
    6.  background-attachment:
    7.  background-origin: 
    8.  background-clip: 

26. box-shadow: 0px 3px 0px 0px #333;
    1.  >使用负的扩散半径; 使阴影小于盒子本身
27. `visibility: hidden` `display: none` `opacity: 0`
    1.  `visibility: hidden` 仍然存在, 只是不可见; 后代元素如果设置visibility为visible时; 也可见
    2.  `display: none` 不存在于normal flow中
    3.  `opacity: 0` 元素透明度减少; 但仍可以交互元素内容透明度也会减少

28. `:checked` `:focus` `:validity` `:invalidity`
29. ?
30. block inline-block inline run-in flex grid flex-item
31. ??
32. `background: url(https://s01.mifile.cn/i/mi-home.png) no-repeat left 5px bottom 5px;`
33. 将该`td`元素和对应的`th`元素绑定起来;
    1.  >是一个` `分隔的列表
34. ```mkdir a, cd a, touch readme.md, mkdir foo, cd foo, mkdir c, cd.., mkdir bar, cd bar, mkdir y, touch a.txt, touch b.txt, cd y, touch a.js```
35. `https://test.example.com/path/path.css`
36. [animation实现marquee](https://codepen.io/rabbitinhat/pen/NZjNYq)
37. [多列等高(flex)](https://codepen.io/rabbitinhat/pen/XLRMaW)
38. 保留从左到右, 从上到下的边框
    1.  >hidden 没有边框; none 优先级最低; bold 粗细; 样式 double ridge solid dashed; 来源: td tr tbody col colgroup table
39. `ease ease-in ease-out ease-in-out liear` ?
40. 虚框(outline) `outline: none` tabindex: 1
41. IE hack vendor prefix 条件注释
    1.  IE hack 对于旧版本的IE浏览器, 通过条件注释等手段, 添加可以被IE浏览器兼容的CSS样式, HTML元素等. 实现
        1.  >特殊的仅能被IE特定版本识别的CSS语法
    2.  ??
        1.  >vendor prefix: 现代浏览器在css属性名/属性值/关键字前加的前缀; 为了与正常的属性区分, 区别于正式属性
    3.  `<!-if IE9-> <!-end->` 针对旧版本IE浏览器, 提高兼容性
        1.  >`<!-- if [gt IE 8] --> <!-- endif -->` 为特定浏览器加载指定HTML元素; IE10以上不支持
42. `cm` `mm` 等是绝对单位, 宽度是物理尺寸, 对于页面布局来说不够灵活;
    1.  >不够精确; 想要绝对单位精确显示在屏幕上, 浏览器需要知道操作系统分辨率和显示器分辨率和显示器的物理尺寸, 不一定能准确拿到
43. `f(n) = mul(division(pow(-1, n), factorial(add(mul(2, n), 1))), pow(x, add(mul(2, n), 1))); sigma(0, infinite,f(n))` **无穷级数**
44. 使用16进制编码表示特殊的图标
    1.  优点: 为字体, 可以接受字体相关样式, 使用灵活
    2.  缺点: 字体文件较大? 需要单独的字体文件, 可能会降低页面载入速度
    3.  >图标实际上是文字编码, 只不过符号被设计成特定图标的样子
    4.  >体积小, 图标数量多; 矢量图, 放大不失真; 颜色多变
    5.  >缺点: 图标只能是单色, 无法执行动画
45. viewport ?
    >指定页面在手机上渲染时, 初始包含块的宽度是多少css像素
    1.  不同浏览器环境?
    2.  `<meta name="viewport" content="width=1000px">` 
        1.  >最终页面显示在手机上时, 手机屏幕的宽度即为包含块; 跟手机屏幕的物理分辨率无关
    3.  `<meta name="viewport" content="width=device-width">`
    4.  > >5.0 使用rem单位, 100vw / 视觉稿宽度, 页面布局使用rem单位
    5.  > <5.0 不支持calc, vw, 无法设置viewport元素; 使用js计算
    6.  > >5.0 还原视觉稿布局, 直接将viewport设置为视觉稿宽度, 使用px开发; 和屏幕大小正相关, view width=device-width, 使用px+流式布局

46. `FOUC` `FOUT` 
    1.  > Flash of Unstyled Content : IE浏览器下: 不使用CSS的@import指令, 将首屏/首页的css样式直接写在html代码中
    2.  > Flash Of Unstyled Text 把字体文件嵌入css文件 
47.  > text-overflow: ellipsis; white-space: no-wrap;
48. `resize: none;`
49. `border-radius`
50. reflow: 回流 布局发生改变时, 浏览器会重新刷新页面, 重新载入页面
    1.  repaint: 重绘, 元素尺寸发生改变时, 浏览器发生repaint, 会产生抖动效果; reflow会触发repaint, repaint不一定会触发reflow(?)
    2.  > reflow 浏览器会重新计算页面的布局; 要重新计算, 速度相对较慢, 动画如果使用布局属性来完成的话, 可能会造成卡顿
    3.  > repaint 浏览器重新绘制页面, 不需要重新计算布局, 速度相对较快;?
    4.  > 尽量使用重绘实现, 或使用2D, 3D变换; 2D, 3D也涉及重绘, 因为变换是将布局结果**光栅化**以后再执行像素变换
    5.  > 光栅化: 将元素绘制成为一个个像素点的过程, 通常调用GPU实现
51. 具体设置之外的元素属性发生改变也会触发transition
    1.  >可能会触发布局属性的渐变, 短时间内触发多次回流, 造成页面卡顿
52. 整个动画效果分为10步完成, 每一步之间没有时间间隔(?); 每一步结束后, 跳到下一步执行
53. transition-delay<0; 表示动画已经执行了多少时间, 可以用在animation 
54. colum-span: all(?) 
55. selector
    1.  作为父元素的第一个子元素
    2.  作为父元素中唯一一个该类型的子元素
    3.  作为父元素中第一个该类型的子元素
    4.  作为父元素中最后一个该类型的子元素
    5.  作为父元素中第n个该类型的子元素
    6.  作为父元素中倒数的第n个该类型的子元素
    7.  不包括某个元素 不能出` ,+, ~,`
    8.  选中的`type=checkbox/radio`的input元素
    9.  具有disabled属性的input元素
    10. `enabled`
    11. 输入有效值的input元素
    12. 输入无效值的input元素
    13. `selection`
        1.  >鼠标选中的文字, 只能修改前景色和背景色
56. 错误
    1.  line 1 最外层`(`缺少`)`
        1.  `for(...i<10; i++)`
    2.  `3 * (`
    3.  line 1 结尾应为`;` 或第二行不加`var`
    4.  line 2 foobar undefined/ "foobar"
    5.  line 9 `>=`
    6.  line 11 `<=`
    7.  line 13 `else if`缺少判断条件
    8.  两个`else`语句

57. 
```js
  function isLeapYear(year) {
  if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0 && year % 3200 !== 0)){
    console.log("YES")
  } else {
  console.log("No")
  }
}
```
76. ??
77. NaN
78. 开头为 + - * / ( [ \` 通常为该行头部添加`\"`
79. >@fant-face 字体变量
80. >?reset: 重置一些元素的样式为开发者希望的; normalize: 让不同浏览器显示基本相同
81. `counter-increment: chapter; counter(chapter, (list-style-type))`
82. 不动点理论
89. >宽度合适 width
90. >页面中存在时间但表意不明显; `<time datatime="2019-6-23">星期二</time>`
91. >发生类型转换, 计算时, 操作数类型不符合操作符要求
92. >break for switch while do-while
93. > c++ return c+1; ++c c+1 return c;
94. 