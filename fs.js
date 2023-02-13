const fs = require("fs");

/* const first = fs.readFileSync("./data/first.txt", "utf-8"); // el 'utf-8' pasa algo a string

fs.writeFileSync("./data/third.text", "Hola Paola");
console.log(first); */

//Código asincrono se ejecuta después de cierto tiempo

fs.readFile("./data/first.txt", function (error, data) {
  if (error) {
    console.log(error);
  }

  console.log(data.toString());
});
