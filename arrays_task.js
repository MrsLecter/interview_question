/*
* Given an array, rotate the 
* array to the right by k steps, where k is non-negative.
*/

// let arr = [1,2,3,4,5,6,7];
// let k = 3;

function rotate(nums, k) {
  let temp = 0;
    for(let i = 0; i < k;i++){
      console.log(i);
      temp = nums.pop();
      nums.unshift(temp);
    }
  return nums;
}

/*
* Given a non-empty array of integers nums, every element
* appears twice except for one. Find that single one.
*/

// let arr =[2,2,1];

function singleNumber(nums) {
  let max = nums.length;
  let arr  = nums.sort();
  let temp = 0;
  for(let i = 0;  i <= max; i= i+2){
    temp = arr[i];
    if(arr[i+1] === undefined){
      return arr[i]
    }else if(!(temp === arr[i+1])){
      return temp;
    }
  }


};

/*
* Given a non-empty array of decimal digits representing a non-negative integer,
* increment one to the integer. The digits are stored such that the most
* significant digit is at the head of the list, and each element in the array contains a single digit.
* You may assume the integer does not contain any leading zero, except the number 0 itself
*/
let arr = [8, 9, 9, 9];
function plusOne(digits) {
  let aim = digits[digits.length-1];
  let  newDigits = digits.map((item, index) =>{
    if(item === aim){
      if(!index && (aim+1 === 10)){
        return [1,0];
      }else if(item+1 == 10){
        return 0;
      }else{
        return ++item;
      }
    }else{
        return item;
    }
  });
  return newDigits.flat();
}

console.log(plusOne(arr));