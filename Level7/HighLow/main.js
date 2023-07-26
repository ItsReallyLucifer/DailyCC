// Create a function that takes in a string of numbers (as strings) seperated by space.
// return the highest and lowest number
// Example: ("1 2 3 4 5") => returns "5 1"


function highAndLow(numbers){
    numbers = numbers.split(' ');
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
  }

  console.log(highAndLow('1 2 3 4 5'))