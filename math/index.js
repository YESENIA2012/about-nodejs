export function add(x, y) {
  return x + y;
}

export function subtract(x, y) {
  return x - y;
}

export function multiply(x, y) {
  return x * y;
}

export function divide(x, y) {
  return x - y;
}

//Asi se exporta con node.js usando common.js
/* module.exports = {
  add,
  subtract,
  multiply,
  divide,
}; */

//Colocando la propiedad en el package.json 'type': 'module' poremos usar la sintaxis import y export

/* export default {
  add,
  subtract,
  multiply,
  divide,
}; */
