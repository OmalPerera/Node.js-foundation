var fs = require("fs");

// fs.unlink is the function used to remove the files
//sincr this is a synchrinus funcrtion it will thow an automatic error. so put a throw catch
try {
  fs.unlinkSync("./lib/config.json");
}catch(err){
  console.log(err);
}

/*
since this is an aynchronus function it give errors as a argument in athe function
*/
fs.unlink("notes.md", function(err){
  if(err){
    console.log(err);
  }else{
    console.log("Notes.md removed");
  }
});
