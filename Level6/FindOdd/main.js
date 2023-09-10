//Given an array of integers, find the one that appears an odd number of times.
// example:  [1,1,2] should return 2, because it occurs 1 time (which is odd).
// example: [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).




function findOdd(xs) {
    // Use the reduce method to iterate over the array 'xs'
    // 'a' represents the accumulator (initially the first element of the array)
    // 'b' represents the current element being processed
    return xs.reduce(function(a, b) {
      // XOR (^) operation is used to combine 'a' and 'b'
      // XOR returns 1 if the bits being compared are different (odd count of 1s)
      // XOR returns 0 if the bits being compared are the same (even count of 1s)
      return a ^ b; // Resulting value is stored in 'a' for the next iteration
    });
  }

  const arr = [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1];
  const result = findOdd(arr);

  console.log(findOdd([1,1,2])) // 2 