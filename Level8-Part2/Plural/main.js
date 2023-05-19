// create a function that determines if a plural is needed or not
// it should take a number and return TRUE if plural or FALSE if not.



function plural(n) {
 return n !== 1 && n !== 0
}

console.log(plural(2))