//Create a JavaScript function called diamond that takes a positive odd integer n as input
// and returns a string representing a diamond shape pattern made of asterisk characters,
// with trailing spaces removed and each line terminated by a newline character; return null if n is even or negative.



function diamond (n) {
    if (n <= 0 || n % 2 === 0) return null
    str = ''
    for (let i = 0; i < n; i++) { 
      let len = Math.abs((n-2*i-1)/2)
      str += ' '.repeat(len)
      str += '*'.repeat(n-2*len)
      str += '\n'
    }
    return str
  }

  console.log(diamond(5));