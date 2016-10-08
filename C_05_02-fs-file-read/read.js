/*
fs module

Reading the content of a file
if we reading a text file we have to specify as UTF-8
otherwise it always reads as a binary giving us a Node.js Buffer class
*/

var fs = require("fs");


/*
//reading files as a text file (UTF-8)

var content = fs.readFileSync("./lib/sayings.md", "UTF-8");
console.log(content);
*/

/*
//reading file without specifiying a file encoding will read the file as binary & gives buffer

var binaryContent = fs.readFileSync("./lib/sayings.md");
console.log(binaryContent);
*/


/*
Reading files can be done Synchronusly & Asynchronusly

fs.readFile("./lib/sayings.md", "UTF-8", function(err, content){
  if(err){
    console.log(err);
  }

  console.log(content);
});
*/


var path = require("path");

fs.readdir("./lib", function(err, files){
  if(err){
    console.log(err);
  }

  //console.log(files);
  //getting each file at once & read
  files.forEach(function(fileName){


    var file = path.join(__dirname, "lib", fileName)
    var stats = fs.statSync(file);

    if(stats.isFile() && fileName !== ".DS_Store"){
      fs.readFile(file, "UTF-8", function (err, content) {
        console.log(content);
      })
    }
  });
});
