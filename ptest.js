// function foo(){
//   console.log("In");
//   var tmp ='one_two_three_four_five';
//   return tmp.replace(/_/g,'+');
// }
//
// console.log(foo());

// let progress = 0;
// const runInterval = () => {
//
//   process.stdout.clearLine();
//   process.stdout.cursorTo(0);
//   process.stdout.write(`तसदीबद्दल क्षमस्व काम चालू आहे....`);
//   //Math.floor((progress / X) * 100)
// };
// const timeoutDone = () => {
//   clearInterval(interval),
//   process.stdout.clearLine();
//   process.stdout.cursorTo(0);
//   process.stdout.write(`काम पूर्णे. ...`);
//   //console.log("Zala na bhai");
// };
// const interval = setInterval(runInterval, 500);
// setTimeout(timeoutDone, 2000);

const waitTime = 5000;
const waitInterval = 500;
let currentTime = 0;

const incTime = () => {
  currentTime += waitInterval;
  const p = Math.floor((currentTime / waitTime) * 100);
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`तसदीबद्दल क्षमस्व काम चालू आहे.... ${p}%`);
};

console.log(`setting a ${waitTime / 1000} second delay`);

const timerFinished = () => {
  clearInterval(interval);
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  console.log("काम पूर्णे");
};

const interval = setInterval(incTime, waitInterval);
setTimeout(timerFinished, waitTime);
