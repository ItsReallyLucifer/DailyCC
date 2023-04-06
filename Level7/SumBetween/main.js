// Create a function that takes two parameters (numbers)
// Find the sum of all the numbers between and including them and return it.
// If both numbers are the same, return either or.
// Example: (-1,2) --> 2   (-1 + 0 + 1 + 2 = 2)

function getSum(a, b){
    if (a === b){
      return a
    }
    let min = Math.min(a, b)
    let max = Math.max(a, b)
  
    return (max - min + 1) * (min + max) / 2
  }

  console.log(getSum(10,45))
