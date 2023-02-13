//Promise en js
/* const { readFile } = require("fs"); */

// new Promise, espera a que se ejecute un código después de cierto tiempo, el codigo asincrono lo podemos anidar dentro de promesas

//esta es una promesa
/* new Promise(function (resolve, reject) {
  readFile("./data/first.txt", "utf-8", (error, data) => {
    if (error) {
      reject(error);
    }
    resolve(data);
  });
}); */

//Promise me permite escribir la siguiente sintaxis

/* function getText(pathFile) {
  return new Promise(function (resolve, reject) {
    readFile(pathFile, "utf-8", (error, data) => {
      if (error) {
        reject(error);
      }
      resolve(data);
    });
  });
} */

/* getText("./data/first.txt")
  .then((result) => console.log(result))
  .catch((error) => console.log(error)); */

//.them => cuando todo esto termine bien voy a recibirlo, que debe hacer en caso de que se resuelva la promesa
//.catch => cuando todo esto termine mal lo voy a estar recibiendo, que debe hacer en caso de que no se resuelva

//async y await => async indica que una función es asincrona, await indica que esperamos que se resuelva algo

/* async function read() {
  //Esto pasa si todo sale bien
  try {
    /* throw new Error("Ocurrio algo que no se esperaba"); 
    const result = await getText("./data/first.txt");
    const result2 = await getText("./data/second.txt");
    const result3 = await getText("./data/third.txt");
    console.log(result);
    console.log(result2);
    console.log(result3);
  } catch (error) {
    //esto pasa si algo sale mal
    console.log(error);
  }
}

read(); */

//promisify me permite convertir un collback en un promessa sin necedidad de hacer el return de la linea 19;

/* const { promisify } = require("util");

const readFilePromise = promisify(readFile); //Con esto ya tenemos una promesa, con eso ya tenemos el return de la linea 19

//En este voy a cambiar la function getText por readFilePromise

async function read() {
  //Esto pasa si todo sale bien
  try {
    /* throw new Error("Ocurrio algo que no se esperaba"); 
    const result = await readFilePromise("./data/first.txt", "utf-8");
    const result2 = await readFilePromise("./data/second.txt", "utf-8");
    const result3 = await readFilePromise("./data/third.txt", "utf-8");
    console.log(result);
    console.log(result2);
    console.log(result3);
  } catch (error) {
    //esto pasa si algo sale mal
    console.log(error);
  }
}

read(); */

const { readFile } = require("fs/promises"); // si hago esto no tengo necesidad de hacer lo de la linea60, ya que el código viene de una vez transformado en una promesa

async function read() {
  //Esto pasa si todo sale bien
  try {
    /* throw new Error("Ocurrio algo que no se esperaba"); */
    const result = await readFile("./data/first.txt", "utf-8");
    const result2 = await readFile("./data/second.txt", "utf-8");
    const result3 = await readFile("./data/third.txt", "utf-8");
    console.log(result);
    console.log(result2);
    console.log(result3);
  } catch (error) {
    //esto pasa si algo sale mal
    console.log(error);
  }
}

read();
