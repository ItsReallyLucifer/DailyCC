// Write a function that takes in a string 
// split the string and convert it into an array of individual words. ['word1', 'word2', 'word3']

function stringToArray(string){
    words = string.split(' ')
    return words
}
 console.log (stringToArray('did it work'))

 // or just 
 //return string.split(' ')