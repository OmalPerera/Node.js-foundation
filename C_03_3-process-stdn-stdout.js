process.stdout.write("Hello");
process.stdout.write("line followed by \n Hello\n\n");

var questions = [
  "your name??",
  "age ??",
  "favourite language"
];

var answers = [];

function ask(i){
  process.stdout.write(`Q${i+1}. ${questions[i]}  >  `);
}

//Listner to the listen to 'data'
process.stdin.on('data', function(data){
  //process.stdout.write('\n' + data.toString().trim() + '\n');
  answers.push(data.toString().trim()); // adding the enterd value in to the answers array
  if(questions.length == answers.length){
    process.exit();
  }else {
    ask(answers.length);
  }
});

//Listner to the 'exit' function of the process
process.on('exit', function () {
  process.stdout.write("\n*********************");
  process.stdout.write(`\n your name is ${answers[0]}`);
  process.stdout.write("\n*********************\n");
});

ask(0);
