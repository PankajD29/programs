//Given an array of integers, return  indices of two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution. and you may not use the same element twice.


//Given
let nums=[11,2,15,7];
let target=9;


const twoSum = (nums,target) => {
  let storage={};
  for (let[index,num] of nums.entries()) {
    if (storage[num]!== undefined) {
      console.log(storage[num],index);
      return [storage[num],index];
    }
    console.log(target-num);
    storage[target-num]=index;
    //array[i]
  }
}

const twoSum1 = (nums,target) => {
  let storage={};
  for (let i = 0; i < nums.length; i++) {
    const temp=target-nums[i];
    if (temp in storage) {
      return[storage[temp],i];
    }
    storage[nums[i]] =i;
  }
}

console.log(twoSum(nums,target));
console.log(twoSum1(nums,target));
