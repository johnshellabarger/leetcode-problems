// You are given two strings s and t.
// String t is generated by random shuffling string s and then add one more letter at a random position.
// Return the letter that was added to t.

// Example 1:

// Input: s = "abcd", t = "abcde"
// Output: "e"
// Explanation: 'e' is the letter that was added.

var findTheDifference = function(s, t) {
  let sArray = s.split('')
  let tArray = t.split('')
  
  for (let i = 0; i < sArray.length; i++) {
      let index = tArray.indexOf(sArray[i])
      tArray.splice(index, 1)
  }
  
  return tArray.toString()
};