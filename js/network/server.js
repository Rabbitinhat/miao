var net = require('net')
var server = net.createServer(conn => {
  console.log('Someone got a connection', conn.remoteAddress, conn.remotePort)
  conn.on('data', data => {
    console.log(conn.remoteAddress, 'says:', data.toString())
    conn.write(data.toString().toUpperCase())
  })

  conn.on('error', () => {

  })
})

server.listen(9090)