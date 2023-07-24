// Create a function that takes 2 strings which contain letters from only from a - z 
// and combines the 2 strings into a single string.
// then finds all the unique letters in the string. (if 'a' appears 5 times, it only keeps 1)
// then returns the sorted string containing the distinct letters.



function longest(s1, s2) {
    return Array.from(new Set(s1 + s2)).sort().join('');
  }

  console.log(longest('testing', 'testing'))