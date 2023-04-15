// Create a function that will show you how much it will cost you to
// print your name on a billboard - each character = $30

// * added - solve without the multiplier operator


function billboard(name, price = 30){
    let cost = name.length * price
    return cost
}

console.log(billboard('Hank')) // 120


//Alt solution

function billboard(name, price = 30) {
    return name.split('').reduce((cost, letter) => cost + price, 0);
  }
  
  console.log(billboard('Hank'))