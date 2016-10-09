var fs = require("fs");

var md = `

Sample Title
=================

sample subtitle
----------------

* point
* point
* point
`;

fs.writeFile("sample.md", md.trim(), function(err){
  if(err){
    console.log(err);
  }else{
    console.log("File Created");
  }
});
