// Write a function that returns a message determined by the number of hoops
// If number of hoopers is 10 or more, return "Great, now move on to tricks"
// If number is less that 10, return "Keep at it until you get it"

function hoopCount(n) {
    if(n >= 10){
        return "Great, now move on to tricks"
    }else{
        return "Keep at it until you get it"
    }
}

console.log(hoopCount(9)) // keep at it
console.log(hoopCount(10)) // great
console.log(hoopCount(11)) // great