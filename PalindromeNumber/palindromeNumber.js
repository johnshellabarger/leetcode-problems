// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

// Example 1:

// Input: x = 121
// Output: true

var isPalindrome = function(x) {
  let xToString = x.toString()
  let reversed = ''
  
  for(const num of xToString){
      reversed = num + reversed
  }
  
  return (xToString === reversed)
  
};