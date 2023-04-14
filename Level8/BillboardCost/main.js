// Create a function that will show you how much it will cost you to
// print your name on a billboard - each character = $30




function billboard(name, price = 30){
    let cost = name.length * price
    return cost
}

console.log(billboard('Hank')) // 120