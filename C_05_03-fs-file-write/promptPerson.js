var readline = require('readline');
var fs = require('fs');

var rl = readline.createInterface(process.stdin, process.stdout);
//Creates an JavaScript object to store data
var realPerson = {
    name: '',
    favourites: []
};

rl.question("What is Your name? ", function(personName) {
  realPerson.name = personName;
    // creating the File
    fs.writeFileSync(realPerson.name + ".md", `${realPerson.name} \n======================== \n\n`);

    rl.setPrompt(`What things ${personName} favourite to ??  `);
    rl.prompt();

    rl.on('line', function(favourites) {

        if (favourites.toLowerCase().trim() === 'exit') {
            rl.close();
        } else {
            realPerson.favourites.push(favourites.trim());

            fs.appendFile(realPerson.name + ".md", favourites.trim() + "\n");
            rl.setPrompt(`what else ${personName} likes ? ('exit' to leave)  `);
            rl.prompt();
        }
    });
});

rl.on('close', function() {
    console.log("Thank You!");
    process.exit();
});
