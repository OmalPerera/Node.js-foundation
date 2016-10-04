var EventEmitter = require('events').EventEmitter;
var util = require('util');

var Person = function(name){
  this.name = name;
};

util.inherits(Person, EventEmitter);

module.exports = Person;

/*
These variables are local to the file (private
If we like to give those variabesto other files we can use  'exports'
*/
