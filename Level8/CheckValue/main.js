// Create a function that given an array and a value,
// return true if the array contains the value, and false if not



function check(arr, val){
    if (arr.includes(val)){
        return true
    }else{
        return false
    }
}

const array = [1, 2, 3, 4, 5]
const valToCheck = 4

console.log(check(array, valToCheck)) // true