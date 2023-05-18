// Create a function that takes in a number
// and gets rid of the ending 0s


function noBoringZeros(n) {
    while(n%10==0 && n!=0){n/=10;}
    return n;
  }

  console.log(noBoringZeros(123000)) // 123