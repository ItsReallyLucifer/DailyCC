// Create a function that squares every digit of a number and concatenate them
// example: 9119 returns 811181 - 9^2 is 81, 1^2 is 1 then 9^2 again
// result 81 1 1 81 => 811181


function squareDigits(num){
   return Number((num + '').split("").map(c => c *c).join(""));

}

console.log(squareDigits(9119))