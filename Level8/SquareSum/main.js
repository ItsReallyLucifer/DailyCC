//Create a function that squares each number passed into it and then sums the results together.
//example: [1, 2, 2] should return 9 .. because 1^2 + 2^2 + 2^2 = 9


function squaredSum(numbers){
    return numbers.reduce(function(sum, n){
        return (n*n) + sum
    }, 0)
}
let numbers = [1, 2, 3, 4, 5]
const result = squaredSum(numbers)
console.log(result)