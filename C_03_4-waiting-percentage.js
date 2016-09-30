var waitTime = 3000;
var currentTime = 0;
var waitInterval = 500;
var percentWaited = 0;

var interval = setInterval(function () {
  currentTime += waitInterval;
  percentWaited = Math.floor((currentTime/waitTime)*100);
  writeWaitingPercent(percentWaited);
}, waitInterval);

setTimeout(function(){
  clearInterval(interval);  //clear the setInterval function
  writeWaitingPercent(100);
  console.log("\n");
}, waitTime);

function writeWaitingPercent(p){
  process.stdout.clearLine(); //clear the line
  process.stdout.cursorTo(0);  //making the cursor to the first place of the line
  process.stdout.write(`waiting ... ${p} %`);
}

process.stdout.write("\n\n")
writeWaitingPercent(percentWaited);
