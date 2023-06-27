//Create a function that given an array of integers your solution should find the smallest integer..
//Given [34, 15, 88, 2] your solution will return 2


function findSmallestInt(nums){
 let solution = Math.min.apply(Math, nums)
 return solution
}

const numbers = [75,54,62,20]
const smallestInt = findSmallestInt(numbers)
console.log(smallestInt)