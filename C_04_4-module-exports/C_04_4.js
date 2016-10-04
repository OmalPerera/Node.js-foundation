var Person = require("./lib/Person")

var omal = new Person("Omal");
var perera = new Person("Perera");

omal.on('speak', function(said){
  console.log(`${this.name} -> ${said}`);
});

perera.on('speak', function(said){
  console.log(`${this.name}: ${said}`);
});

omal.emit('speak', "You may delay, but time will not.");
perera.emit('speak', "Hello Hello");

/*
have reused the person object
*/
