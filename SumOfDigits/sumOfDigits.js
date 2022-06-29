// You are given a string s consisting of lowercase English letters, and an integer k.

// First, convert s into an integer by replacing each letter with its position in the alphabet (i.e., replace 'a' with 1, 'b' with 2, ..., 'z' with 26). Then, transform the integer by replacing it with the sum of its digits. Repeat the transform operation k times in total.

// For example, if s = "zbax" and k = 2, then the resulting integer would be 8 by the following operations:

// Convert: "zbax" ➝ "(26)(2)(1)(24)" ➝ "262124" ➝ 262124
// Transform #1: 262124 ➝ 2 + 6 + 2 + 1 + 2 + 4 ➝ 17
// Transform #2: 17 ➝ 1 + 7 ➝ 8
// Return the resulting integer after performing the operations described above.

// Example 1:

// Input: s = "iiii", k = 1
// Output: 36
// Explanation: The operations are as follows:
// - Convert: "iiii" ➝ "(9)(9)(9)(9)" ➝ "9999" ➝ 9999
// - Transform #1: 9999 ➝ 9 + 9 + 9 + 9 ➝ 36
// Thus the resulting integer is 36.

var getLucky = function(s, k) {
  let numberString = ''
  let temp
  
  for(let i = 0; i < s.length; i++) {
      const code = s.toUpperCase().charCodeAt(i)
      if (code > 64 && code < 91) numberString += (code - 64)
  }
  
  return transformNumber(numberString, k)
  
};


const transformNumber = (number, k) => {
  let times = k
  
  if (times >= 1) {
      let sum = number.split('').map(x => Number(x)).reduce((a,b) => a + b)
      return transformNumber(sum.toString(), times - 1)
  } else {
      return number
  }
  

}