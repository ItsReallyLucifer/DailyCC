//Create a function that takes an array of integers, 
//removes the smallest value (by index if there are multiple with the same value),
// and returns a new array without mutating the original; 
//return an empty array if the input array is empty.


function removeSmallest(numbers) {
    if (numbers.length === 0) {
      return [];
    }
  
    const minIndex = numbers.indexOf(Math.min(...numbers));
    return numbers.slice(0, minIndex).concat(numbers.slice(minIndex + 1));
  }


  console.log(removeSmallest([1, 2, 3, 4, 5])); // [2, 3, 4, 5]