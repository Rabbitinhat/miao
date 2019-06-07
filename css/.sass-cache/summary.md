# First Week

## 效率

### 快捷键 shortcut

* win10系统
  * win + R 打开运行窗口
    * path
* Alt + Tab
  * 切换当前窗口
* win + D
  * 显示桌面

* Vscode
  * 选中
    * shift + `<-`/`->`
    * shift + Ctrl + `<-`/`->`
  * 切换标签页
    * ctrl + tab
  * 打开命令行
    * Ctrl + Shift + P
    * F1
  * 粘贴复制整行
    * 不选中字符情况下 Ctrl+C Ctrl+V
  * 快速选择文件
    * Ctrl + P
  * 打开文件
    * Ctrl + O
  * 打开文件夹
    * Ctrl + K Ctrl + O
  * 保存文件
    * Ctrl + S

* 浏览器 browser
  * 打开新标签页
    * Ctrl + T
  * 切换标签页
    * Ctrl + Tab
    * Ctrl + number
    * Ctrl + 0 跳转到最后的标签页
  * 关闭当前窗口
    * Ctrl + F4
  * 刷新当前窗口
    * F5
  * 跳转到前后历史页面
    * Alt + `<-`/`->`

### 软件

* Chocolatey
  * windows 下包管理器
  * [Chocolatey](https://chocolatey.org/)
  * 同类别 Scoop

* Vultr + Xshell + SSTap
  * 翻墙
  * [教程](https://medium.com/@flyzy2005/%E6%89%8B%E6%8A%8A%E6%89%8B%E6%95%99%E4%BD%A0%E7%94%A8vultr%E6%90%AD%E5%BB%BA-shadowsocks-%E7%A7%91%E5%AD%A6%E4%B8%8A%E7%BD%91-%E6%90%AD%E5%BB%BA-ss-%E7%BF%BB%E5%A2%99-3775ef7b733c)

* Listary
  * 快速查找文件

* Vscode
  * IED

* Node

## 数学 Mathematic

### 基础数学知识

* 数学基础
  * 离散(离散数学与应用)
    * 集合
    * 数列
    * 函数
    * 映射
    * 导数, 导函数
  * 线性/非线性
  * 多项式/非多项式
  * 三角函数
  * 坐标系(笛卡尔坐标系, 极坐标系)
  * 指数 对数
  
* 二进制计算(CSAPP)
  * 整数计算
    * 进制转换
      * 根据除数奇偶进行判断
    * 移位
  * 小数计算
    * 将小数部分`*`2 结果大于1时, 保留小数部`*`2; 直到小数部分为0或达到所需精度
  
## 通识(computer concepts)

### 计算机系统

* 软件 Software
* 操作系统
  * 分类
  * 作用(CSAPP)
    * 硬件和软件沟通

* 浏览器 Browser
  * 内核
    * Webkit
      * Safari
      * Opera
      * Edge
      * **Blink**
        * Chrome
    * Gecko
      * Firefox
    * Trigent
      * IE

### 二进制 Binary (Code 编码)

* 数字信号 & 模拟信号

* 使用二进制的原因

### 图片格式

* jpg/jpeg
  * 有损压缩
  * 体积小, 质量较差

* png(portable network graphic)
  * 无损压缩
  * 体积较大
  * 有透明通道(Alpha)
    * 每个像素点由4bytes组成
      * rgba(Red Green Blue Alpha)

* gif<!-- ? -->
  * 颜色数量少, 在图片颜色数量内是无损压缩
  * 常用于保存动图

* bmp
  * 无压缩, 文件体积大
  * 每个像素点占3bytes(rgb)

* psd
  * photoshop
  * 图层

* 图片颜色深度

## Command Line

* GUI(graphic user interface) vs CLI(command line interface)
* VPS
* API
  * application programming inteface

* CLI 种类
  * cmd
  * bash
  * powershell
  * ...

* wsl Windows Subsystem for Linux

* 虚拟机(?)

## Command

* 提示符 prompt `$`

* 目录
  * 绝对路径 `http://www.google.com` `file://c/homework`
  * 相对路径 `./homework` `../image.png`

* 命令格式 command format
  * command `<arg1> <arg2> <arg3> ...`
  
  * 包含选项, 参数
    * `git commit -m "commit message"`
    * `ls -f`
    * `node --version`

* 命令简写设置<!-- ? -->

* 重定向
  * 输出命令结果至文件
    * echo command > input.txt
    * 追加结果
      * echo def >> input.txt
  * 管道 pipe
    * 前一个命令输出作为后一个命令的输入
    * `|`

### 常用命令

### 字符编码(?)

* ASCII
* UTF-8
* GB2312

### 文件类型

* 文本文件
* 二进制文件

### Git



## 标记语言 Markup Language

### Markdown

### HTML

* Hyper Text Markup Language

* 树形结构 Tree Structure
  * 图论
  * 嵌套
  * 递归
  * 自相似
    * 分形
  * 类似结构
    * 数学公式
    * 书籍目录

* 标签 Tag
  * 普通标签
  * 自闭合标签 self closing Tag
  * 空标签 element tag

### **语义化**

* 用合适语义的标签标记相关内容

### 属性 attribute

* 全局属性 global attr
    * tabindex
    * data-* 自定义属性

### 转义字符 escape char

* \t \n ...

* HTML实体 html entity

* emoji

### HTML文档忽略空白符

* 默认情况下, 浏览器忽略文字间多余一个的空白字符, 忽略全部的换行符

### HTML Element

element | explain
:--|--
`<!doctype html>`|文档声明 告诉`user agent`文档是什么类型
`<html>` |root element
`<head>` | 存放文档的元信息meta information
`<meta>` | 标记文档的元信息
`<title>` | 标题元素,标记内容显示在标签页中
`<style rel="stylesheet">` | 标记CSS样式
`<link href="url">` | 链接外部资源, 常用于链接外部样式表或标签页icon(favicon.ico)
`<script src="url">` | 标记js脚本
`<base href="url">` | href内容为页面中所有相对路径的基准路径
`<body>`|包含显示在浏览器viewport中的内容<!-- ? -->
`<h*>` | 标题, 默认样式存在margin
`<p>` | paragraph 段落
`<a href="url" title="" target="">` | archor 锚 表示一个链接
`<img src="" alt="">`|表示图片资源
