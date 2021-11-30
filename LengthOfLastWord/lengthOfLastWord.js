// Given a string s consisting of some words separated by some number of spaces, return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only.

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.

var lengthOfLastWord = function(s) {
  let string = s.replace(/\s+/g, ' ')
  string = string.replace(/^\s+|\s+$/g, '')
  
  let array = string.split(' ')
  
  return array[array.length - 1].length
};