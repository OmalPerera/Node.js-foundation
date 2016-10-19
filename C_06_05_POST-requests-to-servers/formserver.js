const http = require('http');
var fs = require("fs");

http.createServer(function(request, response){

  // In the fist case request is checked for thr "GET" of the request is GET it will show thr Form
  // if the request is "Post" that means it is the form results that sends as the post.
  if(request.method === "GET"){
    response.writeHead(200, {"Content-Type" : "text/html"});  //creating a read stream for the public directory
    fs.createReadStream("./public/form.html", "UTF-8").pipe(response);

  }else if (request.method === "POST") {
    var body = "";

    request.on ("data", function(chunk){
      body += chunk;
    });

    request.on("end", function(){
      response.writeHead(200, {"Content-Type" : "text/html"});
      response.end(`
        <!DOCTYPE html>
        <html>
          <head>
            <title> Form results </title>
          </head>
          <body>
            <h1>Your Form Results</h1>
            <p>${body}</p>
          </body>
        </html>
        `);
    });

  }
}).listen(3000);

console.log("Form server is listening on port 3000");
