var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
//Creates an JavaScript object to store data
var realPerson = {
  name: '',
  favourites: []
};

rl.question("What is Your name? ", function(personName){

  rl.setPrompt(`What things ${personName} favourite to ??  `);
  rl.prompt();

  rl.on('line', function(favourites){

    if(favourites.toLowerCase().trim() === 'exit'){
      rl.close();
    }else{
      realPerson.favourites.push(favourites.trim());
      rl.setPrompt(`what else ${personName} likes ? ('exit' to leave)  `);
      rl.prompt();
    }
  });
});

rl.on('close', function(){
  console.log("%s like to %j", realPerson.name, realPerson.favourites);
  //%j is to print a Json array
  process.exit();
});
