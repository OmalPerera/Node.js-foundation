var waitTime = 3000;
var currentTime = 0;
var waitInterval = 500;

//console.log("Wait for it ");

/*
Secondly this code added to get the function into a variable
*/
var interval = setInterval(function () {
/*
Bottom code is the first code. since it cannot be STOP the set interval, then get
them into the variable & then stop it using the command of 'clearInterval()'
*/
//setInterval(function () {
  currentTime += waitInterval;
}, waitInterval);


setTimeout(function(){
  clearInterval(interval);  //clear the setInterval function
  console.log("done");
}, waitTime);
