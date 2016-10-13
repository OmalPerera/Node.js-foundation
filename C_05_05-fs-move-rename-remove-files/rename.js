var fs = require("fs");

//rename the js file to Json
fs.renameSync("./lib/project-config.js", "./lib/config.json");
console.log("config json file renamed");

//moving notes.md file from the lib to the parent folder
fs.rename("./lib/notes.md", "./notes.md", function(err){
  if(err){
    console.log(err);
  }else{
    console.log("Notes.md moved successfully");
  }
});
