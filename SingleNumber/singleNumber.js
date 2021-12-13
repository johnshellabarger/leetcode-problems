// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1:
// Input: nums = [2,2,1]
// Output: 1


var singleNumber = function(nums) {
  let numMap = new Map()
  let count = 1
  
  nums.forEach(num => {
      if(!numMap.has(num)){
          numMap.set(num, count)
      } else {
          numMap.set(num, count + 1)
      }
  })
  
 for(const [k, v] of numMap){
     if (v === 1) return k 
 }
      
};