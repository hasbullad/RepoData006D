const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("almacen.Json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 1000;

server.use(middlewares)
server.use(router)
server.listen(port)