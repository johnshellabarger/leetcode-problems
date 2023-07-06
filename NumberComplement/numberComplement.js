// The complement of an integer is the integer you get when you flip all the 0's to 1's and all the 1's to 0's in its binary representation.

// For example, The integer 5 is "101" in binary and its complement is "010" which is the integer 2.
// Given an integer num, return its complement.


// Example 1:

// Input: num = 5
// Output: 2
// Explanation: The binary representation of 5 is 101 (no leading zero bits), 
// and its complement is 010. So you need to output 2.

function findComplement(num) {
  const binary = num.toString(2)
  let complement = ''

  for (letter of binary) {
      letter === '1' ? complement += '0' : complement += '1'
  }

  return parseInt(complement, 2)
};