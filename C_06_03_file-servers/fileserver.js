const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer(function(request, response) {
    console.log(`${request.method} request for ${request.url}`);

    //reading the HTML file
    if (request.url === '/') {
        fs.readFile("./public/index.html", "UTF-8", function(err, html) {
            response.writeHead(200, {
                'Content-Type': 'text/html'
            });
            response.end(html);
        });

    //In the first case only the HTML file will be read & others will not be readFile
    //so we have to manually write the code to read the files with the extension of .css
    } else if (request.url.match(/.css$/)) {
        var cssPath = path.join(__dirname, 'public', request.url);
        console.log(cssPath);
        var fileStream = fs.createReadStream(cssPath, 'UTF-8');

        response.writeHead(200, {
            'Content-Type': 'text/css'
        });
        fileStream.pipe(response);

    //reading images as binaries
    } else if (request.url.match(/.jpg$/)) {
        var imgPath = path.join(__dirname, 'public', request.url);
        var imageStream = fs.createReadStream(imgPath);
        console.log(imgPath);

        response.writeHead(200, {
            'Content-Type': 'image/jpeg'
        });
        imageStream.pipe(response);

    } else {
        response.writeHead(404, {
            'Content-Type': 'text/plain'
        });
        response.end('404 File Not Found');
    }
}).listen(3000);
console.log("File server running on port 3000");
