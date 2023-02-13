//Permite encontrar carpetas y archivos
const path = require("path");

//path.join permite unir rutas\

const filePath = path.join("public", "dist", "/styles", "main.js");
/* console.log(path.join("public", "dist", "/styles", "main.js")); */

console.log(path.basename(filePath));
console.log(path.dirname(filePath));
console.log(path.parse(filePath));
console.log(path.resolve("dist"));
