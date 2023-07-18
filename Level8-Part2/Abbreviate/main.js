// Create a function that converts a name into initials
// Example Sam Harris => S.H


function abrevName(name){
    const words = name.split(' ')
    const initials = words.map(function(word){ 
    return word.charAt(0).toUpperCase()
    })
    return initials.join('.')
}
console.log(abrevName('John Doe'))
