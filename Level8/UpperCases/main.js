// Create a function that takes in a string.
// Convert the string and return the string with each first letter of each word capitalized.
// Example: this is an example => This Is An Example


function capitalFirst(string){
    
    const words = string.split(' ') //split the string into an array of words
    
    const capitalize = words.map(function(word){
        return word[0].toUpperCase() + word.slice(1) //capitalize the first letter of each word
        
    })
    return capitalize.join(' ')
}

const quote = "how can mirrors be real if our eyes aren't real";
console.log(capitalFirst(quote));