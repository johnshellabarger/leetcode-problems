function addAV(string){
  let vowels = {
    "a" : "a",
    "e" :  "e",
    "i" :  "i",
    "o" : "o",
    "u" : "u",
  }
  
  let newString =[]

  let arrayFromString = string.split('')

  for(let i = 0; i < arrayFromString.length; i++){
    if(vowels[arrayFromString[i]] && vowels[arrayFromString[i + 1]]){
      newString.push('av' + arrayFromString[i] + arrayFromString[i + 1])
      i++
    } else if (vowels[arrayFromString[i]]){
      newString.push(arrayFromString[i] + 'av')
    } else {
      newString.push(arrayFromString[i])
    }
  }

  console.log(newString.join(''))

}

addAV("You rock!")