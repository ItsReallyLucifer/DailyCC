//Create a function that reverses the string passed into it.
// test the solution by assigning a string to a variable and then console log it. 
//"Complete the solution so that it reverses the string passed into it."

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function reverseString(str){
  return str.split('').reverse().join('');
}

let word = 'Hello'
let result = reverseString(word)

console.log(result)


