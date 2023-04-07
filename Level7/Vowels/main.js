// Create a function that takes in a string.
// Return the number (count) of vowels in the given string.
// Consider a,e,i,o,u but not y

function getCount(str) {
    return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
}

    let str = "hello world";
    let vowelCount = getCount(str);
    console.log(vowelCount); // Output: 3