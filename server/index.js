const server = require('./server')

const port = process.evn.PORT || 3000

server.listen(port, function () {
  console.log('listening on port')
})
