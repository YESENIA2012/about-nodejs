// para usar fetch primero debe instalar y después importarse con el siguiente comando npm install node-fetch

import fetch from "node-fetch";

const url = "https://jsonplaceholder.typicode.com/posts";

/* 
Esta es una forma de hacerlo
fetch(url)
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((error) => console.log("solicitud fallida", error)); */

/* 
Esta también es otra forma de usarlo 
async function loadData() {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

loadData(); */

//ahora gracias a la propiedad "type": "module", packge.json podemos hacer solo esto

try {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
} catch (error) {
  console.log(error);
}
