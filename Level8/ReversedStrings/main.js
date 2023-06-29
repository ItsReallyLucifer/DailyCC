// Create a function that reverses the string passed into it.
// Complete the solution so that it reverses the string passed into it & console log

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function reverseString(str){
  return str.split('').reverse().join('');
}

let word = 'Hello'
let result = reverseString(word)

console.log(result)


