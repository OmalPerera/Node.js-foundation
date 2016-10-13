/*
            fs module
allows to
# list file lists
# Create files
# stream files
# write files# modify files

*/

var fs = require("fs");

/*
Just read the file names of the particular folder that is given inside the parameter in the "readdirSync()" & log in the Terminal

Sync will hold all other process until the result of the command is give out
You can drop sync in readdirSync to make ir async


var files = fs.readdirSync('./lib');
console.log(files);

// or

console.log(fs.readdirSync('./lib'));
*/



fs.readdir('./lib', function(error, files){
  if (error) {
    throw error;
  }
  console.log(files);
});
console.log("Reading files ...");
