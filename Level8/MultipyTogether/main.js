// Given a non-empty array of integers, 
// return the result of multiplying the values together in order. 
// example: [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24





function grow(x){
    return x.reduce((accumulator, currentVal) => accumulator * currentVal, 1);
  }

console.log(grow([1,2,3,4])) // 24