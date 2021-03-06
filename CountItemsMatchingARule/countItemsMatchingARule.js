// You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, and name of the ith item. You are also given a rule represented by two strings, ruleKey and ruleValue.

// The ith item is said to match the rule if one of the following is true:

// ruleKey == "type" and ruleValue == typei.
// ruleKey == "color" and ruleValue == colori.
// ruleKey == "name" and ruleValue == namei.
// Return the number of items that match the given rule.

// Input: items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], ruleKey = "color", ruleValue = "silver"
// Output: 1
// Explanation: There is only one item matching the given rule, which is ["computer","silver","lenovo"].

var countMatches = function(items, ruleKey, ruleValue) {
  let ruleKeyValue
  let count = 0
  
  if (ruleKey === 'type') ruleKeyValue = 0 
  if (ruleKey === 'color') ruleKeyValue = 1
  if (ruleKey === 'name') ruleKeyValue = 2   
  
  for(let i = 0; i < items.length; i++) {
      if (items[i][ruleKeyValue] === ruleValue) {
          count++
      }
      
  }
  
  return count 
};