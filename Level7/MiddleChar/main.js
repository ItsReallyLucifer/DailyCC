// Create a function that takes a word (string) of any length
// and returns the middle character for odd-length words
// or the middle 2 characters for even-length words.



function getMiddle(s) {
    const length = s.length;
    const middleIndex = Math.floor(length / 2);
  
    if (length % 2 === 0) {
      // If the word's length is even, return the middle 2 characters
      return s.substring(middleIndex - 1, middleIndex + 1);
    } else {
      // If the word's length is odd, return the middle character
      return s.charAt(middleIndex);
    }
  }

  console.log(getMiddle("test")); //  "es"
  console.log(getMiddle("testing")); //  "t"