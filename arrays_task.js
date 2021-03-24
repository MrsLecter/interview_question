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
// let arr = [8, 9, 9, 9];
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


/*
* Given an array of integers nums and an integer target, 
* return indices of the two numbers such that they add up to target.
*/

// let arr = [-1,-2,-3,-4,-5];
// let target = -8;


function twoSum(nums, target) {
  
  let tempArr = nums.filter(numb => numb <= target);
  let tempNumb = nums[0];

  console.log("tempNumb: " + tempNumb);
  let difference = target - tempNumb;
  console.log("difference: " + difference, "\nnums.indexOf: " + nums.indexOf(difference, 1));
  for(let i = 1; i < nums.length; i++){

    if(!(nums.indexOf(difference, i)  < 0 )){
      return new Array(i-1, nums.indexOf(difference, i));
    }
    difference = target - nums[i];
    // console.log("not found. new difference: " + difference);
    
  }

}
  // console.log('[0, 3, -3, 4, -1], target -1', "answ: " + twoSum([0, 3, -3, 4, -1], -1), '[0,4]');
  // console.log('[-3, 4, 3, 90], target 0', "answ: " + twoSum([-3, 4, 3, 90], 0), '[0,2]');
  // console.log('[-1,-2,-3,-4,-5], target -8', "answ: " + twoSum([-1,-2,-3,-4,-5], -8), '[2,4]');
  // console.log('[3,3], target 6 ', "answ: " + twoSum([3,3], 6), '[0,1]');


/*
* You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
*/

let matrix = [[1,2,3],[4,5,6],[7,8,9]];
// let matrix2 = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]];

function  rotate(matrix) {
  let n = matrix.length;
  for (let i = 0; i < n; i++) {
      for (let j = i; j < n; j++) {
          let tmp = matrix[j][i];
          matrix[j][i] = matrix[i][j];
          matrix[i][j] = tmp;
      }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n / 2; j++) {
        let tmp = matrix[i][j];
        matrix[i][j] = matrix[i][n - j - 1];
        matrix[i][n - j - 1] = tmp;
    }
}
  return matrix;
}


console.log(rotate(matrix));
// console.log(rotate(matrix2));

