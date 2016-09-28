console.log(process.argv);
/*
Result
[ '/usr/local/bin/node',
  '/Volumes/MacHDD/Disk D/Projects/Node.js-foundation/Ch03/03_2-process.js' ]

Description
- gives the process information
- bin - path to node & bin file
*/



/*
INPUT
$ node 03_2-process.js --user Omal --greeting "Good Day"

RESULT
[ '/usr/local/bin/node',
  '/Volumes/MacHDD/Disk D/Projects/Node.js-foundation/Ch03/03_2-process.js',
  '--user',
  'Omal',
  '--greeting',
  'Good Day' ]

DESCRIPTION
- can send values from the terminal
*/



function grab(flag){
  var index = process.argv.indexOf(flag);
  return (index === -1) ? null : process.argv[index+1];
}

var greeting = grab('--greeting');
var user = grab('--user');

//console.log(greeting);
//console.log(user);

if (!user || !greeting){
  console.log("Hellow normal User!");
}else {
  console.log(`Welcome ${user}, ${greeting}`);
}


/*
INPUT
$ node 03_2-process.js"

RESULT
Hellow normal User!

DESCRIPTION
- [index+1] gives the value next to the --user & --greeting
- when no parametes are passed, result will welcome a normal user

----------------------------------------------------------------------

INPUT
$ node 03_2-process.js --user Omal --greeting "Good Day Hello"

RESULT
Welcome Omal, Good Day Hello

DESCRIPTION
- when are passed, result will welcome the specific user 

*/
