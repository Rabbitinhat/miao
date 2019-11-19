# Cookie

## Cookie是什么

## Cookie位置

Response Header中 Set-Cookie 中存储cookie

## 设置头部

Node.js

```js
res.setHeader('Set-Cookie', 'nameid=a'/['nameid=a', 'name=b'])
```
session cookie

未设置有效事件时, 浏览器关闭后, cookie才 会消失

### 为什么使用cookie, 需求

HTTP协议 无状态协议

- 前一次请求和后一次请求无关, 不存在长时间链接, 经常性地断开, 重新连接
- 由于重新连接, 双方无法确定每次连接是否是同一用户发送
- 使用cookie解决该问题
  - 第一次连接后每次连接都携带cookie进行状态确认

### Cookie option

cookie
- expiress=' + new Date(0).toGMTString()
  - 过期会自动删除
  - 设置过去的时间时, 该条会立刻删除
- HTTPOnly 避免使用JS读取到cookie
- domain 显示该cookie对应的域名
- Max-Age: 设置后经过的秒数
- Expires: 到期时间

### 设置Cookie过程

```http
coustom-req1

//发送请求
POST /login HTTP/1.1
name=foo&ps=123
---------------------
server-resp1

//response携带响应头部Set-Cookie, 浏览器会将其保存, 在Application中可以查看
HTTP/1.1 200 OK
Set-Cookie: user=foo
---------------------
coustom-req2
//浏览器发送时, 为该request添加HTTP Header Cookie
//发送其他request时, 携带该cookie
GET / HTTP/1.1
Cookie: user=foo
```

浏览器是会为所有请求发送cookie

### express中使用cookie-parser

使用cookie-parser包

```js
const cookieParser = require('cookie-parser')
// sercet string 用于签名加密, 赋值给req.sercet中
app.use(cookieParser('sercet string'))

app.router(() => {
  res.clearCookie('userid') //清除cookie
})

res.cookie('user', '122', {
  signed: true
})
```
cookie-parser


## CORS


机制

### 什么是CORS, CORS的概念

运行在一个domain(origin)上的web应用 通过HTTP Header
协议 域名 端口

### 限制跨域请求, 同源策略

浏览器

即限制跨域请求的发起, 也会拦截已发送的跨域请求

### 跨域请求的功能

对于可能对服务器数据产生副作用的请求(GET以外请求), 会先发送一个预检请求(preflight request, OPTIONS)

### 跨域请求具体实现

简单请求
- GET
- POST
- 不会触发预检请求的请求


`Access-Control-Allow-Origin: https://www.github.com`

预检请求
什么是预检请求, 作用

为了防止服务端数据遭到意外影响, 会先发送预检请求, 通知服务器之后要发送的请求信息. 浏览器接受后(200 OK), 在继续发送实际请求

哪些请求会触发预检请求


预检请求特点(preflight)

预检请求为 OPTIONS方法
Request Header中会携带以下字段
`Access-Control-Request-Method: POST` 实际请求的方法
`Access-Control-Request-Headers` REVIEW 实际请求携带的自定义头部

浏览器响应预检请求时, 返回相应头部响应, 表示接受实际请求
`Access-Control-Allow-Method: POST`
`Access-Control-Allow-Headers: `

`Access-Control-Max-Age: 86400` 要小于浏览器最大有效时间


NOTE 附带身份凭证的信息(cookie, sessionId?)注意点

- 只有当服务器针对携带cookie的Access-Control的请求返回`Access-Control-Allow-Credentials:true`时, 才会返回响应内容
- 当发送携带cookie的请求时, 浏览器返回的响应中`Access-Control-Allow-Origin:`头部不能为`*`, 否则请求会失败, 应设置为请求来源所在域

content-type

axios 会发送json数据, 会触发预检请求(Content-Type不包含)

对于简单请求 Access-Control-Allow-Origin: * 即可访问

request.credentials 表示浏览器是否为来自其他域的请求添加cookie(身份信息时), 此项为true时, 
应设置`Access-Control-Allow-Credentials:true`
