// Create a function that takes a boolean value and return "yes" string for true, or "no" string for false.


function boolToWord(bool) {
    if (bool === true){
        return "yes"
    }else{
        return "no"
    }
}

console.log(boolToWord(true))
console.log(boolToWord(false))