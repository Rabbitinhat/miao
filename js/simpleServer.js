var net = require('net')

var server = net.createServer()

var port = 8080

server.on('connection', conn => {
  conn.on('data', data => {
    conn.write(
    `HTTP/1.1 200 OK
    Content-Type: text/html
    Content-Length: 5

    hello`)
    // 返回hello
  })
})

server.listen(port, () => {
  console.log('server listening on port', port)
})