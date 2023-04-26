//Create a JavaScript function called rowSumOddNumbers 
//that takes a positive integer n as input and calculates the sum of the numbers-
// in the nth row of a triangle of consecutive odd numbers,
// with the result being equal to n cubed (n^3).



function rowSumOddNumbers(n) {
    return Math.pow(n, 3);
  }

  console.log(rowSumOddNumbers(2)) // 3 + 5 = 8
  console.log(rowSumOddNumbers(4)) // 13 + 15 + 17 + 19 = 64