// Create a function that removes all explamation marks from a given string.




function removeExclamationMarks(s) {
    return s.split('!').join('');
  }

  console.log(removeExclamationMarks('hello! How are you?!'))