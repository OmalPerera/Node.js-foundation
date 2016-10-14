/*
Streams gives us a way to asynchronusly handle continous data flows

Streams in Node js are implementations of underline abstract interface

process.stdout & process.stdin both implement the Stream interface

streams cna be readable(stdin) & writable(stdin) & duplex
*/


var questions = [
  "What is your name?",
  "What is your fav hobby?",
  "What is your preferred programming language?"
];

var answers = [];

function ask(i) {
  process.stdout.write(`\n\n\n\n ${questions[i]}`);
  process.stdout.write("  >  ");
}

process.stdin.on('data', function(data) {

	answers.push(data.toString().trim());

	if (answers.length < questions.length) {
		ask(answers.length);
	} else {
		process.exit();
	}

});

process.on('exit', function() {

	process.stdout.write("\n\n\n\n");

	process.stdout.write(`Go ${answers[1]} ${answers[0]} you can finish writing ${answers[2]} later`);

	process.stdout.write("\n\n\n\n");

});

ask(0);
