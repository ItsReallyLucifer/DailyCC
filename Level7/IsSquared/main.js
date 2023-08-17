// Create a function that given a Number,
// it determines if it's a square number
// * a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.
// example: 2 * 2 = 4 || 9 * 9 = 81 ||| 4 and 81 are sqaured integers


function isSquare(n) {
    return Math.sqrt(n) % 1 === 0;
  }

  console.log(isSquare(25)) // true
  console.log(isSquare(5)) // false