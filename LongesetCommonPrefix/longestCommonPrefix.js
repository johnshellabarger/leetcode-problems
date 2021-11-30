// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

var longestCommonPrefix = function(strs) { 
  let i = 0 
  let sorted = strs.sort()
  
  while(i < sorted[0].length && sorted[0].charAt(i) === sorted[sorted.length - 1].charAt(i)){
      i++
  }
  return sorted[0].substring(0 , i)
};
