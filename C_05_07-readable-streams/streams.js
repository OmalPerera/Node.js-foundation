var fs = require("fs");

/*
//this will read the file & relativlely fast
//problem is readfile waits util the entire file is red before invoking the call back
//It also buffers the entire file in one variable & this can impact on memory

fs.readFile("./chat.log", "UTF-8", function(err, chatlog){
  console.log(`File Read ${chatlog.length}`);
});

console.log("Reading File");
*/



/*
// we don't have to wait for the buffer all the data, get the data chunk by chunk
*/


var stream = fs.createReadStream("./chat.log", "UTF-8");
var data = "";


stream.once("data", function(){
  console.log("\n\n\n");
  console.log("Started reading file");
  console.log("\n\n\n");
});


stream.on("data", function(dataChunk){
  process.stdout.write(`chunks : ${dataChunk.length} |`);
  data += dataChunk;
  //console.log(data);
});


stream.on("end", function(){
  console.log("\n\n");
  console.log(`Finished Reading File ${data.length}`);
  console.log("\n\n");
});
