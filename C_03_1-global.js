console.log('First Hello');

global.console.log('second hello');

var sayHello = 'third hello';
console.log(sayHello);

console.log(__dirname);
console.log(__filename);

var path = require("path");
console.log(`Rock on World from ${path.basename(__filename)}`);
