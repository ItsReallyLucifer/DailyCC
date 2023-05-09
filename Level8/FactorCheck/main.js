// Create a function that tests if the Factor is a factor of Base
// return true if it is and false if not. 
// factors are numbers you can multiply together to get another number
// example: 2 * 3 = 6 (6/2 or 6/3 remainder = 0)
// you can find a factor by dividing, if remainder = 0 its a factor


function checkForFactor (base, factor) {
    let check = base % factor
    if(check === 0){
      return true
    }else
      return false
  }

console.log(checkForFactor(10,2)) // true
console.log(checkForFactor(10,3)) // false