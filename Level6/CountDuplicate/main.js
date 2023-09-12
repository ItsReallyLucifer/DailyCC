// create a function called duplicateCount that takes a text input 
//and returns the count of distinct case-insensitive alphanumeric characters 
//that occur more than once in the input string.
// example: "aabbcde" -> 2 # 'a' and 'b'
// example: "ABBA" -> 2 # 'A' and 'B' each occur twice



function duplicateCount(text) {
    // Convert the input string to lowercase to make it case-insensitive
    var lower = text.toLowerCase();
    
    // Initialize a variable 'count' to keep track of the count of duplicates
    var count = 0;
    
    // Initialize an array 'used' to keep track of characters that have been checked
    var used = [];
    
    // Split the lowercase string into an array of characters and iterate over it
    lower.split('').forEach(function(letter) {
      // Check if the character 'letter' has not been processed before (not in 'used')
      // and if it occurs more than once in the input string
      if (!used.includes(letter) && (lower.split(letter).length - 1) > 1) {
        // Increment the 'count' of duplicates
        count++;
        // Add the character to the 'used' array to mark it as processed
        used.push(letter);
      }
    });
    
    // Return the count of distinct case-insensitive alphabetic characters and numeric
    // digits that occur more than once in the input string
    return count;
  }

  console.log(duplicateCount("aabbccde")) // 3
  console.log(duplicateCount("aabbccdee")) // 4 
  