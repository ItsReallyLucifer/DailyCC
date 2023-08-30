// Create a function that takes a string as input 
// and returns an object containing the counts of each unique character-
// in the string, or an empty object if the input string is empty.





function count(string) {
    const charCount = {};
  
    for (let char of string) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
  
    return charCount;
  }

  console.log(count('aba')) // { a: 2, b: 1 }
  console.log(count('stars')) //{ s: 2, t: 1, a: 1, r: 1 }