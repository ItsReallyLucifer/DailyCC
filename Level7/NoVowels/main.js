// Create a function that takes a string and returns a new string with all vowels removed.


function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
  }

  console.log(disemvowel('This is a test string'))