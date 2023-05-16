// Create a function that takes an array and remove every second element from the array. 
// Always keep the first element and start removing with the next element.

function removeEveryOther(arr){
    return arr.filter(function(elem, index) {
      return index % 2 === 0;
    });
  }

  console.log(removeEveryOther(['first', 'second', 'third', 'fourth'])) // first & third