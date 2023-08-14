// Create a function that will break up camel casing
// Using a space between words.
// Example: camelCasing => "camel Casing"



function solution(string) {
    return(string.replace(/([A-Z])/g, ' $1'));
  
  }

  console.log(solution('ThisIsAString'))


//   // Define a function called "solution" that takes a string as its parameter.
// function solution(string) {
//     // Use the "replace" method on the input string and provide a regular expression
//     // that matches any uppercase letter (A-Z). The "g" flag ensures that all occurrences
//     // of uppercase letters are replaced.
//     // Replace each uppercase letter with a space followed by the uppercase letter itself.
//     return string.replace(/([A-Z])/g, ' $1');
// }
