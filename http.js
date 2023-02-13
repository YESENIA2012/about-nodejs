const http = require("http");

const server = http.createServer(function (request, response) {
  if (request.url === "/") {
    response.write("Welcome to the server");
    return response.end();
  }

  if (request.url === "/about") {
    response.write("Welcome to about");
    return response.end();
  }

  response.write(`<h1>Not found</h1>
    <p>Esta página no es un servidor
    <a href='/'>Volver a la pagina principal</a>
    `);
  response.end();
});

server.listen(3000);

console.log("escuchando en el puerto 3000");
