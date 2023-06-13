// Create a function that finds the next integral perfect square after the one passed as a parameter.
// If the parameter itself is not a perfect square, return -1
// In this case, the output will be 16, as 9 is a perfect square, and the next integral perfect square is 16.


function findNextSquare(sq) {
    var number = Math.sqrt(sq);
    if(Math.round(number) === number) {
      return Math.pow(++number, 2)
    }else{
     return -1;
    }
  }

  console.log(findNextSquare(9))