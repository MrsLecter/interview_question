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

// let matrix = [[1,2,3],[4,5,6],[7,8,9]];
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


// console.log(rotate(matrix));
// console.log(rotate(matrix2));

/*
* Given two integer arrays nums1 and nums2, return an array of their intersection.
*  Each element in the result must appear as many times as it shows in both arrays 
* and you may return the result in any order.
*/

// let nums1 = [4,9,5];
// let nums2 = [9,4,9,8,4];
/*
function intersect(nums1, nums2) {
    let temp = [];
    let maxArr = (nums1.length > nums2.length) ? nums1 : nums2;

    for(let i = 0; i < maxArr.length; i++){
      if()
    }
};
*/

// console.log(nums2.includes([9,4]));

/*
* Given an integer array nums, return true if any value 
* appears at least twice in the array, and return false if every element is distinct.
*/

// let nums = [1,1,1,3,3,4,3,2,4,2];
//true
 function containsDuplicate(nums) {
   let newArr = nums.sort();
    for(let i = 0; i < newArr.length; i++){
      if(newArr[i] === newArr[i+1]){
        return true;
      }
    }
  return false;
};

// console.log(containsDuplicate(nums));

/*
* Given an integer array nums, move all 0's to the end of it while maintaining
* the relative order of the non-zero elements.
* Note that you must do this in-place without making a copy of the array.
*/

// let nums = [0,0,1];
//[1,3,12,0,0]

function moveZeroes(nums) {
    for(let i = 0; i < nums.length; i++){
      console.log(nums[i], i)
      if(nums[i] === 0){
        nums.splice(i,1);
        nums.push(0);
      }
    }
    for(let i = 0; i < nums.length; i++){
      console.log(nums[i], i)
      if(nums[i] === 0){
        nums.splice(i,1);
        nums.push(0);
      }
    }
    return nums;
};

// console.log(moveZeroes(nums));

/*
* Given two integer arrays nums1 and nums2, return an array of their
* intersection. Each element in the result must appear as many times as
* it shows in both arrays and you may return the result in any order.
*/

let nums1 = [2,1];
let nums2 = [1,2];

let nums01 = [1,2,2,1];
let nums02 = [1,2];

function intersect(nums1, nums2) {
  let intersectionArr = [];
  let continueAdd = true;
  let iter= 2;
  
    for(let i = 0;  i < nums1.length; i++){
      for(let j = 0; j < nums2.length; j++){
          if(nums1[i] === nums2[j] || 
             nums1[i] === nums2[j-1]){
              if(nums1[i] !==  undefined){
                // console.log(nums1[i]);
                intersectionArr.push(nums1[i]);
                // console.log(nums1[i]+ ' == '  + nums2[j], nums1[i-1] + ' == ' + nums2[j+1]);
                // console.log(nums1[i] + ' == ' + nums2[j], nums1[i+1] + ' == ' + nums2[j-1]); 
                if(nums1[i] === nums2[j] && nums1[i-1] === nums2[j+1] && (nums1[i-1] !== undefined)){
                  // console.log('-1: '+nums1[i-1]);
                    intersectionArr.push(nums1[i-1]);
                    return intersectionArr;
                  
                }else if(nums1[i] === nums2[j] && nums1[i+1] === nums2[j-1] && (nums1[i+1] !== undefined) ){
                  // console.log('+1 :' +nums1[i+1]);
                        intersectionArr.push(nums1[i+1]);
                        return intersectionArr;
                    
                }
              }
            i++;    
          }
          
      }
     
    }
     return intersectionArr;
};
// console.log(Number.isNaN(undefined));
// console.log(intersect(nums01, nums02));
console.log(intersect(nums1, nums2));