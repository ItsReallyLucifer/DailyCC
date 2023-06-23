// Create a function that takes in a number and returns the negative.
// But take into account negative number parameters and also 0.



function makeNegative(num) {
    if ( num > 0 ) {
          return (num * -1);
      }
      else {
          return num;
      }
  }

  console.log(makeNegative(5))