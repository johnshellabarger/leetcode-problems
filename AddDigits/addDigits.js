// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

// Input: num = 38
// Output: 2
// Explanation: The process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2 
// Since 2 has only one digit, return it.

var addDigits = function(num) {
  num = num.toString()
  
  while (num.length !== 1){
     num = num.split('').reduce((a,b) => +a + +b).toString()
 }
  
  return num
  
};