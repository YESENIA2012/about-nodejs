/*Event loop en node */

const http = require("http");

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.write("Welcome to the server");
    return response.end();
  }

  if (request.url === "/about") {
    //Es conocido como código bloquiante(blocking code), esto bloquea el hilo de ejecución de node
    /*  for (let counter = 0; counter < 100000; counter++) {
      console.log(Math.random() * 1);
    } */

    return response.end("about page");
  }

  response.end("not found");
});

server.listen(3000); //Con esto creo el servidor
console.log("server on port 3000");
