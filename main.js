const {
  myWebAddress,
  myName,
  myAge,
  myBirtdate,
} = require("./module/myModule");
/* console.log(myWebAddress, myName, myAge, myBirtdate); */

const myFunctions = require("./math/index");
/* console.log(myFunctions); */

console.log(myFunctions.add(10, 10));
