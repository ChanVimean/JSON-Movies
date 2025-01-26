const jsonServer = require('json-server')
const server = jsonServer.create()
const middleware = jsonServer.defaults()
const route = jsonServer.router('data.json')
const { config } = require('dotenv')
const cors = require('cors')

config()

server.use(cors())
server.use(middleware)
server.use(route)

const Port = process.env.PORT || 8075
const Host = process.env.HOST || '127.0.01'

server.listen(Port, () => console.log(`Server is running on http://${Host}:${Port}`))