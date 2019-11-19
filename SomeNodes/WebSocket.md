# 服务端推送技术

Q: 需求
A: 想要服务器主动向浏览器/客户端发送消息, 以便数据变化时, 浏览器能够即时响应

## WebSocket

## long polling & WebSocket

问题
- HTTP连接在一次通信后就会断开, server 也无法主动向 client 发送信息
- 想要 client 和 server 保持长时间连接
- 页面希望得到server的实时数据

Comet技术
- 非标准化实现

长轮询
- server接收到client请求后, 尽可能长地保持连接, 数据可用后(?)或等待最大时间值后再发送响应(等待最大时间后, 只发送简单的响应作为填充), 接收到响应后, client重新发送请求, 等待下一次响应





创建websocket
- wss(https)
- 二进制数据
- client, server建立一个TCP通信(ws), 通过websocket协议保持连接
- clinet 发送包含请求将连接升级为websocket协议的HTTP request `upgrade`

```js
var some = new Websocket('wss://url')
```
websocket
- 本质上是tcp连接
  - 为什么不直接使用tcp连接
    - tcp较为底层, 功能简单( REVIEW 无法主动将大量数据分段处理,进行区分)
- req
  - connection: upgarde
  - upgrade: websocket
- res
  - upgrade
  - 101 switching protocols
- 默认情况下, websocket不限制跨域操作(设置CSP(Content Security Plicy 内容安全策略)的情况除外)

ws module
- 支持websocket
- 在http/https server中处理 ws 协议

nodejs http模块event: upgrade
```js
server.on('upgrade', (req, socket, head) => {

})
```
广播

socket.io ws的封装
- 提供广播, 房间, 远程事件
- server, client通过自定义事件交换特定数据
- 自动编码解码数据
- 对特定频道(房间)的所有client发送消息



`emmit`方法 触发事件, 发送消息

将相同投票页面的客户端分配为一个房间
