// Create a function that determines whether a string that contains only letters is an isogram.
// example: moose = false (the letter o twice.)


function isIsogram(str){
	return new Set(str.toUpperCase()).size == str.length;
}

console.log(isIsogram('strings'))
console.log(isIsogram('string'))