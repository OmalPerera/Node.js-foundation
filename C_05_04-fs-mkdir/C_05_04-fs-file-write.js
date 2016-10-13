var fs = require("fs");

//checking the existance of the Directory
if (fs.existsSync("lib")) {
    console.log("Directory already exist");
} else {
//creating the directory
    fs.mkdir("lib", function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Directory created");
        }
    });
}
