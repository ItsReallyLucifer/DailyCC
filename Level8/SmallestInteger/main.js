//Given an array of integers your solution should find the smallest integer.
//Given [34, 15, 88, 2] your solution will return 2


class SmallestIntegerFinder {
    findSmallestInt(args) {
    return Math.min.apply(Math, args);
    }
  }

  // to input the integers and console.log it... 
//   const finder = new SmallestIntegerFinder();
//   const numbers = [7, 2, 9, 1, 5];
//   console.log(finder.findSmallestInt(numbers)); // Output: 1




//solution using spread operator
// class SmallestIntegerFinder {
//   findSmallestInt(args) {
//     return Math.min(...args)
//   }
// }


  //Or, without the class of SmallestIntegerFinder
  
//   function findSmallestInt(args) {
//     return Math.min.apply(Math, args);
//   }