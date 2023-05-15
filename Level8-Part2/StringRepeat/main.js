//Write a function that accepts an integer(n) and a string(s) as parameters,
// and returns the string of (s) repeated exactly (n) times.

function repeatStr(n,s){
    return s.repeat(n)
}

console.log(repeatStr(10, ' hello'))