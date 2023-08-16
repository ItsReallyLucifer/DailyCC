// Your goal is to implement a difference function-
// which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b keeping their order.
// example: arrayDiff([1,2],[1]) == [2]  ||| arrayDiff([1,2,2,2,3],[2]) == [1,3]
// (the number in the second array gets removed from the first array)



function array_diff(a, b) {
    return a.filter(e => !b.includes(e));
  }
  console.log(array_diff([1,2,2,3,4,4,5],[3])) //[ 1, 2, 2, 4, 4, 5 ]
  console.log(array_diff([1,2,2,3,4,4,5],[4])) //[ 1, 2, 2, 3, 5 ]