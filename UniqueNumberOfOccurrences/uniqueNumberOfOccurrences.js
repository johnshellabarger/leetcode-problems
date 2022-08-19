// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique, or false otherwise.

// Example 1:

// Input: arr = [1,2,2,1,1,3]
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.

var uniqueOccurrences = function(arr) {
  const occMap = new Map()
  
  for (let i = 0; i < arr.length; i++) {
      if (occMap.get(arr[i])) {
          occMap.set(arr[i], occMap.get(arr[i]) + 1)

      } else {
          occMap.set(arr[i], 1)
      }
  }
  
  const unique = []
  
  occMap.forEach(x => {
      if (!unique.includes(x)){
          unique.push(x)
      }
  })

  return occMap.size === unique.length
};