//Create a function that squares each number passed into it and then sums the results together.
//example: [1, 2, 2] should return 9 .. because 1^2 + 2^2 + 3^2 = 14


function squaredSum(numbers){

    let equation = numbers.reduce((sum, n) => (n*n) + sum, 0)
     return equation
}
let numbers = [1, 2, 3]
let result = squaredSum(numbers)

console.log(result)