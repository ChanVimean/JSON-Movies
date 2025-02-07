const jsonServer = require('json-server');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const server = jsonServer.create();
const middleware = jsonServer.defaults();
const route = jsonServer.router('data.json');

const PORT = process.env.PORT || 8075;
const HOST = process.env.HOST || '127.0.0.1';

server.use(cors());
server.use(middleware);
server.use(route);

server.listen(PORT, () => {
  console.log(`✅ JSON Server is running on http://${HOST}:${PORT}`);
});
