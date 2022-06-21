// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

var majorityElement = function(nums) {
    
  let obj = {}
  
  for (let i = 0; i < nums.length; i++) {
      if (Object.keys(obj).includes(`${nums[i]}`)) {
          obj[`${nums[i]}`] = obj[`${nums[i]}`] + 1
      } else {
          obj[`${nums[i]}`] = 1
      }
  }
  
  const values = Object.values(obj)
  const marjorityValue = Math.max(...values)
  
  return Object.keys(obj).find(x => obj[x] === marjorityValue)

};