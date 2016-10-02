var EventEmitter = require('events').EventEmitter;
var util = require('util');

/*
In JavaScript objects are functions. So create teh constructer

Object name : Person
proprties : name
*/

var Person = function(name){
  this.name = name;
};

//person object inherits to the EventEmitter
// uses propotype design pattern
util.inherits(Person, EventEmitter);

//Creating the object & pass parameters to the constructer
var omal = new Person("Omal Perera");

//since Person is inherited to EventEmitter, Omal can listen to EventEmitter
omal.on('speak', function(said){
  console.log(`${this.name}: ${said}`); // this. says the instance of the object
});

omal.emit('speak', "Hello How are you");
