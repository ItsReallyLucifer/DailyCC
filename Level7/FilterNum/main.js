// Retrieve the number from the text
// return the number back to its original state
// * Return a number from a string




var filterString = function(value) {
    // Use the match method with a regular expression to find all numeric characters
    const numericChars = value.match(/\d/g);
  
    // Use the join method to join the numeric characters into a string
    // Use the Number constructor to convert the string to a number
    return Number(numericChars.join(''));
  };


console.log(filterString('5few2fwef6')) // 526