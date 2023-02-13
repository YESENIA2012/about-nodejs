//streams permiten dividir un archivo grande en multiples partes

/* const { writeFile } = require("fs/promises");
//Lo use para crear un archivo
const createBigFile = async () => {
  await writeFile("./data/bigFile.txt", "Hello Yesenia".repeat(10000));
};

createBigFile(); */

const { createReadStream } = require("fs");

const stream = createReadStream("./data/bigFile.txt", "utf-8");

stream.on("data", function (chunk) {
  console.log(chunk);
});

//Esto lo que hace es mostrar el archivo por partes, cuando tenemos un archivo grande el servidor lo puede leer por partes

stream.on("end", () => {
  console.log("Ya terminé de leer el archivo");
});

stream.on("error", (error) => {
  console.log(error);
});
