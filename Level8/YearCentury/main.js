// Create a function that takes in a year
// Return the century it is in.
// example: 1-100 = century 1 
// example: 101-200 = century 2




function century(year) {
    return Math.ceil(year / 100);
  }
  
  console.log(century(1500)) // 15
  console.log(century(1501)) // 16