// You are given coordinates, a string that represents the coordinates of a square of the chessboard. Below is a chessboard for your reference.

// Return true if the square is white, and false if the square is black.

// The coordinate will always represent a valid chessboard square. The coordinate will always have the letter first, and the number second.


var squareIsWhite = function(coordinates) {
  const letter = coordinates.split('')[0]
  const number = +coordinates.split('')[1]
  
  switch(letter) {
      case "a":
      case "c":
      case "e":
      case "g":
          if (number % 2 === 0) return true
          break;
      case "b":
      case "d":
      case "f":
      case "h":
          if (number % 2 != 0) return true
  }
  
  return false

};