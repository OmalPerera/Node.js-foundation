var fs = require("fs");

/*
//moving a Directory
fs.renameSync("./assets/logs", "./logs");
console.log("Directory moved");

NOTE : since "assets" folder is empty, you can delete it.
bu t if it is not enmpty you have to delete all the files inside it before deleting the file
*/

fs.rmdir("./assets", function(err){
  if (err){
    throw err;
  }
  console.log("assets Directory removed");
});


/*
When removing a directory first all the files inside that directory should be removed... if not an error will be thrown
*/
/*
fs.rmdir("./logs", function(err){
  if(err){
    throw  err;
  }
  console.log("Logs directory removed");
});
*/

//getting files in to a foreach loop
fs.readirSync("./logs").forEach(function(fileName){
  fs.unlinkSync("./logs/" + fileName);
});

fs.rmdir("./logs", function(err){
  if(err){
    throw  err;
  }
  console.log("Logs directory removed");
});
