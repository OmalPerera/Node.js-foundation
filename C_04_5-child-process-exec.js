/*
This will show how to execute external processes found in out environment
*/

var exec = require("child_process").exec;

//opens the URL in the default browser
exec("open http://www.linkedin.com");

//open a new window of Terminal
exec("open -a Terminal .");

/*
Any data that returns as a result of executing the function will return to secind argument.
*/

exec("ls", function(err, stdout){

    if (err) {
      throw err;
    }

    console.log("listning finish");
    console.log(stdout);
});
