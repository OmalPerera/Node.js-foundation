Callback

callback function is called at the completion of a given task.
Node uses callbacks everywhere
For example, a function to read a file may start reading a file and return the control to the execution environment immediately so that the next instruction can be executed. Once file I/O is complete, it will call the callback function while passing the callback function, the content of the file as a parameter. So there is no blocking or wait for File I/O.

example for Non-Blocking Code

var fs = require('fs');

fs.readdir('./lib', function(err, files){
  if(err){
    console.log(err);
  }else{
    console.log('successful')
  }

console.log('execution ended')


program does not wait for file reading and proceeds to print "Program Ended" and at the same time, the program without blocking continues reading the file.
