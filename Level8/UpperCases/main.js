// Convert a string and return the string with each first letter of each word capitalized.
// Example: this is an example => This Is An Example


function capitalFirst(string){
    //split the string into an array of words
    const words = string.split(' ')
    //capitalize the first letter of each word
    const capitalize = words.map(function(word){
        return word[0].toUpperCase() + word.slice(1)
        
    })
    return capitalize.join(' ')
}

const quote = "how can mirrors be real if our eyes aren't real";
console.log(capitalFirst(quote));