/*
Spawn are made for longer on going processes, where always talking & deal with large amount of data

'execute' are made foe asynchronusly synchronus process
*/

//setup spawn function
var spawn = require("child_process").spawn;

//argument 1 : command sent first
//argument 2 : command after the node command
var cp = spawn("node", ["alwaysTalking"]);

//getting the data to an argument 'function(data)'
cp.stdout.on("data", function(data){
  console.log(`STDOUT: ${data.toString()}`);
});

cp.on("close", function(){
  console.log("child process has ended");
  process.exit();
});

//setting up a timeout of 4 seconds
setTimeout(function(){
  cp.stdin.write("stop");
}, 4000);
