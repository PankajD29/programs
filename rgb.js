function rgb(r, g, b){
  // complete this function
  let resultR = (r. toString(16)==0 || Math.sign(r. toString(16))=='-1') ? '00':r. toString(16);
  let resultG = (g. toString(16)==0 || Math.sign(g. toString(16))=='-1') ? '00':g. toString(16);
  let resultB = (b. toString(16)==0 || Math.sign(b. toString(16))=='-1') ? '00':b. toString(16);
  let finalResult = resultR+resultG+resultB;
  return finalResult;
}
//rgb(0, 0, 0)
console.log("rgb",rgb(173,255,47));


let number = 300
h = parseInt(number, 10).toString(16)

let totalSeconds = 359999;
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = totalSeconds % 60;

console.log("hours: " + hours);
console.log("minutes: " + minutes);
console.log("seconds: " + seconds);

// If you want strings with leading zeroes:
minutes = String(minutes).padStart(2, "0");
hours = String(hours).padStart(2, "0");
seconds = String(seconds).padStart(2, "0");
console.log("Result:-",hours + ":" + minutes + ":" + seconds);
// Result: "ff"
console.log("date:-",new Date(359999 * 1000).toISOString().substr(11, 8));
// Add Padding
//h = h.padStart(6, "0")

console.log("hex:-",h);


// function validParentheses(parens){
//   let parenArr = [];
//     let parenObj = {'(': ')'}
//     for (let i = 0; i < parens.length; i++) {
//         if (parens[i] === '(') {
//             parenArr.push(parens[i]);
//         }
//         else {
//             let last = parenArr.pop();
//             if (parens[i] !== parenObj[last]) {
//               return false
//             }
//         }
//     }
//     if (parenArr.length !== 0) {
//       return false
//     }
//     return true;
// }

function validParentheses(parens){
  var n = 0;
  for (var i = 0; i < parens.length; i++) {
    if (parens[i] == '(') n++;
    if (parens[i] == ')') n--;
    if (n < 0) return false;
  }

  return n == false;
}

console.log(validParentheses('()'));
