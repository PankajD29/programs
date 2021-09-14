// var fullWordList = ['1','2','3','4','5'];
// var wordsToRemove = ['1','2','3'];

// var filteredKeywords = fullWordList.filter((word) => wordsToRemove.includes(word));

// console.log(filteredKeywords);


// let str = "pankaj";
// let str1 = [...str].reverse().join("");
// console.log(str1);

// let obj={
//     fname:"Pankaj",
//     lName:"Dhumal"
// }

// obj={
//     ...obj,
//     mobile:9423906818
// }

// console.log(obj);
// function test(){
//     console.log(this);
// }

//test();

// {
//     var i=10;
//     console.log(this);
// }

// console.log(i);

// const restFunction =(...a)=>{
//     console.log(a);
// }
// // test =()=>console.log(this);
// restFunction(2,3,4,5);

//test();


let arr=[2,3,4];
let [a,b,c]=arr;
console.log(a,b,c);

let obj={
    fname:"pankaj",
    lname:"Dhumal"
}

let {fname,lname}=obj;
console.log(fname);