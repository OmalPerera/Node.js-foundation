const http = require('http');

//creating a http server
//ervery time we make a request to this web server calls this call back functoin to be triggers
//request object includes [environment headers, user information, data comes with the requesr]
//response object [we should write the response headers Ex: Content-Type]
//specify the port number to listen

var server = http.createServer(function(request, response){
  response.writeHead(200,{'Content-Type':'text/html'});
  response.end(`
    <?xml version="1.0" encoding="UTF-8" ?>
    <!DOCTYPE html
         PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
         "http://www.w3.org/TR/xhtml1/DTD/xhtml1-loose.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
    <head>
     <title>HTML Purifier All Elements Smoketest</title>
     <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
     <link rel="stylesheet" href="allElements.css" type="text/css" />
    </head>
    <body>

    <h1>Node.js Sample HTTP Server</h1>
    <br>
    <h3>These are the user request details</h3>
    <p>Request URL :${request.url} <br> Note: change the url by keeping http://localhost:3000 constantly & add /css/mycss.css & see the changes in request Url</p>
    <p>Request Type : ${request.method}</p>

    </body>
    </html>
    `);

});

//port number to listen
server.listen(3000);
console.log('Server is Listning on port 3000');
