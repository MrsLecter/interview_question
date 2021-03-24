/*
* Write a function that reverses a string. The input string is given as an array of characters s.
*/

function reverseString(s) {
    return s.reverse();
};

/*
* Given a string, find the first non-repeating character in it
* and return its index. If it doesn't exist, return -1.
*/

// let str = "loveleetcode";


function firstUniqChar(str) {
  let arr = str.split('');
  let duplicates = {};
  let prop = null;
  for(let i = 0; i < arr.length; i++){
   prop = arr[i];
    duplicates[prop] = (duplicates[prop] == undefined) ? 1 : duplicates[prop]+1;
  }
  console.log( duplicates);
  for(item in duplicates){
    // console.log(duplicates[item]);
    if(duplicates[item] == 1){
      return arr.indexOf(item);
    }
  }
  return -1;
};

/*
* Given a signed 32-bit integer x, return x with its digits reversed. If reversing x 
* causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
*/

 function reverse(x) {
  let answ = 0;
    if(x > 0){
    answ = +('' + x).split('').reverse().join('')
     return (answ > Math.pow(2, 31)) ? 0 : answ;  
   }else if(x  < 0){
     x = x * (-1);
     answ = +('' + x).split('').reverse().join('');
       
     return (answ > Math.pow(2, 31)) ? 0 : answ *(-1);  
   }else if(x === 0){
       return 0;
   }
};

/*
* Given two strings s and t, return true if t is an anagram of s, and false otherwise.
*/

function isAnagram(s, t) {
    let str = s.split('').sort().join('');
    let templ = t.split('').sort().join('');
    console.log(str, templ);
    return (str == templ);
};
