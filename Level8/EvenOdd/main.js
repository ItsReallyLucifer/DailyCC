//Create a function that takes an integer as parameter and returns "Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(number) {
    if(number %2 === 0 ){
      return"Even"
    }
    else if(number %2 !== 0){
      return "Odd"
    }
  }
  console.log(evenOrOdd(10))