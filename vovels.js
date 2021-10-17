const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

function countVowels(sentence) {
  let str =[...sentence];
  let newStr = str.filter(x => x!=' ').join('');
  console.log(newStr);
  let counts = 0;
  //let vovels=[]
  for(let i = 0; i < vowels.length; i++) {
    if(vowels.includes(newStr[i])) {
      console.log("In");
      counts++;
      //console.log(sentence[i]);
    }
  }
  return console.log(counts);
}

countVowels('Hi Sachin, how are you?');
//countVowels('AEeIiOoUua');
//countVowels('aaaaa');

var string = "John Doe's iPhone6 ";
console.log("output:-",string.split(" ").length-1);
