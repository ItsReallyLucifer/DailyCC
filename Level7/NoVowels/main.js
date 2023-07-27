// Create a function that takes a string and returns a new string with all vowels removed.
// log should return => 'ths s tst strng'


function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
  }

  console.log(disemvowel('This is a test string'))