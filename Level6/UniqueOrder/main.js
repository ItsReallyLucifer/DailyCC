// Create a function which takes as argument a sequence
// and returns a list of items without any elements with the same value next to each other.
// while preserving the original order of elements.
// example: ('AABBCCDAABB') -> [A,B,C,D,A,B]


var uniqueInOrder = function(iterable) {
    if (typeof iterable === 'string') {
      iterable = iterable.split('');
    }
  
    return iterable.filter((item, index, arr) => {
      return item !== arr[index + 1];
    });
  };

console.log(uniqueInOrder('AAAABBBCCDAABBB'))


//   var uniqueInOrder = function(iterable) {
//     // Check if the input is a string, and convert it to an array of characters if it is
//     if (typeof iterable === 'string') {
//       iterable = iterable.split('');
//     }
  
//     // Use the filter method to create a new array with only unique items
//     // The callback function takes three arguments: item (current item), index (current index), and arr (original array)
//     return iterable.filter((item, index, arr) => {
//       // Return true if the current item is not the same as the next item in the array
//       // This ensures that only unique items are kept in the result array
//       return item !== arr[index + 1];
//     });
//   };
  