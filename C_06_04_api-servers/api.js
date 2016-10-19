/*
api server - primary puroise is to serve data
we can use http server to create api sever
*/

const http = require('http');

// including JSON file
var data = require('./data/inventory');


/*
// Basic code to create an API server
// Next codes will be creates some routes to show specific JSON only
http.createServer(function(request, response){

  //identify the content that we are going to servr as JSON
  response.writeHead(200, {"Content-Type" : "text/json"});
  //converts JavaScript values to JSON String
  response.end(JSON.stringify(data));
}).listen(3000);
*/



// making some routes so that only specific JSON will be shown t the user & will be idffers according to the URL

http.createServer(function(request, response){

  if(request.url === "/"){
    response.writeHead(200, {"Content-Type" : "text/json"});
    response.end(JSON.stringify(data));
  }else if (request.url === "/instock"){
    listInStock(response);
  }else if (request.url === "/onorder") {
    listOnBackOrder(response);
  }else{
    response.writeHead(404, {"Content-Type" : "text/plain"});
    response.end("Whoops... Data Not found")
  }
}).listen(3000);


console.log("Server listening on port 3000");
console.log("type http://localhost:3000/instock & http://localhost:3000/onorder");



function listInStock(response){
  //filter the array
  //avail - it is a section in the JSON
  var inStock = data.filter(function(item){
    return item.avail === "In stock";
  });
  response.end(JSON.stringify(inStock));
}

function listOnBackOrder(response){

  var onOrder = data.filter(function(item){
    return item.avail === "On back order";
  });
  response.end(JSON.stringify(onOrder));

}


/*
sample JSON (in thd data directory)

{
  "name": "K-Eco 180",
  "sku": "KE180",
  "cost": "$162.00",
  "retail": "$315.00",
  "avail": "In stock"
},
*/
