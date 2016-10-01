var path = require('path')
var util = require('util');
var v8 = require('v8')

console.log(path.basename(__filename));
var dirUpload =  path.join(__dirname, 'www', 'file', 'upload');
console.log(dirUpload);


util.log(path.basename(__filename));
util.log(dirUpload);

util.log(v8.getHeapStatistics());


/*
requre function is used to load functions in to modules
Many other modules that needs to import are stored in the npm registary & needs to be install first

path module
    - The path module provides utilities for working with file and directory paths.

util module
    - is primarily designed to support the needs of Node.js' own internal APIs. However, many of the utilities are useful for application and module developers as well.

v8 module
    - The v8 module exposes APIs that are specific to the version of V8 built into the Node.js binary
    - information about memory (Node js is built on thr google's V8 module )

*/
