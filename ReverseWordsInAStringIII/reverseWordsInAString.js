// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

// Example 1:

// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Example 2:

// Input: s = "God Ding"
// Output: "doG gniD"

var reverseWords = function(s) {
  const array = s.split('')
  const reversed = array.reverse().join('')
  const reversedArray = reversed.split(' ')
  let answer = []
  
  for(let i = reversedArray.length - 1; i >= 0; i--) {
      answer.push(reversedArray[i])
  }
  
  return answer.join(' ')
};