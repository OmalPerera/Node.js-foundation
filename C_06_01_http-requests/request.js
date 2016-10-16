/*
HTTP module will be used to create wen servers & making requests, handling responses
There are 2 modules HTTP & HTTPS
HTTPS for secure servers (we have to provide security certificates)
*/


const https = require('https');
const fs = require('fs');

var options = {
  hostname : 'en.wikipedia.org',
  port : 443,
  path : '/wiki/George_Washington',
  method : "GET"
};

var req = https.request(options, function(res){
  var responseBody = "";
  console.log("Responding started");
  console.log(`Server Status : ${res.statusCode}`);
  console.log('Response Headers : %j', res.headers);

  res.setEncoding('UTF-8');
  res.once('data', function(chunk){
    console.log(chunk);
  });


  res.on('data', function(chunk){
    console.log(`--chunk-- ${chunk.length}`);
    responseBody += chunk;
  });

  res.on('end', function(){
    //console.log(responseBody);
    fs.writeFile("George_Washington.html", responseBody, function(err){
      if(err){
        console.log(err);
      }else{
        console.log("File Downloaded");
      }
    });

  });


});

req.on('error', function(err){
  console.log(`problem with the request : ${err.message}`);
});

req.end();
