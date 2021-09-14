function myDisplayer(some) {
  setTimeout(function(){
    console.log(some)
  },3000)
  
}

myCalculator=async (num1, num2) =>{
  let sum = num1 + num2;
  let display=await myDisplayer(sum);
  console.log("Await complete......"+display);
  //return sum;
}

myCalculator(5, 5);




// let result = myDisplayer(myDisplayer)
// console.log("result:-",result);
//myDisplayer(myCalculator(5, 5));



// let object = {
// "Name": "ABC",
// "Sirname": "XYZ"
// }
// let object2 = { };
// Object.assign(object2,object);
// Object.assign(object2,{"Name":"***"});
// Object2["Name"] = "***"
//
// console.log(object)
// console.log(object2)


// let nums = [0,1,0,3,12]
// for (var i = 0; i < nums.length; i++) {
//   console.log(nums[i]);
//   if (nums[i]==0) {
//     nums.unshift(nums[i])
//   }
//   // else {
//   //   nums.unshift(nums[i])
//   // }
// }
// console.log("nums:-",nums);
//Output: [1,3,12,0,0]

//
// function pushZerosToEnd(arr, n)
// {
//     let count = 0; // Count of non-zero elements
//
//     // Traverse the array. If element encountered is non-
//     // zero, then replace the element at index 'count'
//     // with this element
//     for (let i = 0; i < n; i++)
//         if (arr[i] != 0)
//             arr[count++] = arr[i]; // here count is
//                                 // incremented
//
//     // Now all non-zero elements have been shifted to
//     // front and 'count' is set as index of first 0.
//     // Make all elements 0 from count to end.
//     while (count < n)
//         arr[count++] = 0;
// }
//
// let arr = [1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0, 9];
//     let n = arr.length;
//     pushZerosToEnd(arr, n);
//     console.log("arr:-",arr);


// movesZeros = (nums) =>{
//   let moveTozeros=0;
//   for (var i = 0; i < nums.length; i++) {
//     if (nums[i]!==0) {
//       nums[moveTozeros]=nums[i];
//       moveTozeros++;
//     }
//   }
//   while(moveTozeros<nums.length) {
//     nums[moveTozeros++]= 0;
//   }
//   return nums;
// }

// console.log(movesZeros([0,1,0,3,12,0,3,0,4,6]));
