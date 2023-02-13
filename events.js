//Node me provee un módulo para poder crear eventos

const EventEmitter = require("events"); //Este modulo me permite crear un nuevo evento
const customEmmiter = new EventEmitter();

customEmmiter.on("response", (data, secondData) => {
  console.log("received");
  console.log(data);
  console.log(secondData);
});

customEmmiter.emit("response", "Hello world", [1, 2, 3]); //Si ejecuto me va a dar recibido y undefined, ya que no le pase segundo parametro acá, pero si le agrego el segundo parametros me imprime ese segundo parametros
