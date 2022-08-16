var subtractProductAndSum = function(n) {
  const product = n.toString().split('').reduce((a,b) => +a * +b)
  const sum = n.toString().split('').reduce((a,b) => +a + +b)
  
  return product - sum 
};