var reverseOnlyLetters = function(s) {
  const regex = /[A-Za-z]/
  const notLettersArray = []
  let reverse = ''
  
  for(let i = 0; i < s.length; i++) {
      if (!regex.test(s[i])) {
          notLettersArray.push({'index': i, 'value': s[i]})
      } else {
           reverse += s[i]
      }
  }
  
  reverse = reverse.split('').reverse()
  
  notLettersArray.forEach(x => {
      reverse.splice(x.index, 0, x.value)
  })
  
  return reverse.join('')
  
  
};