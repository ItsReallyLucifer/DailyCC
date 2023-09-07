// Create a function that takes a string input and returns a new string
//  where each letter is replaced with its position in the alphabet 
// (a=1, b=2, ..., z=26), ignoring non-letter characters.




function alphabetPosition(text) {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    
    return text.toLowerCase()
               .split('')
               .filter(t => letters.indexOf(t) > -1)
               .map(t => letters.indexOf(t)+1 || '')
               .join(' ');
  }

  const result = alphabetPosition('abc')
  console.log(result) // 123