// Create a function that returns true if the first parameter(string) passed in ends with the 2nd parameter(also string)
// example ('abc', 'bc') = true
// example ('abc', 'd') = false

function solution(str, ending) {
    return str.endsWith(ending)
}

console.log(solution('abc','bc')) // true
console.log(solution('abc', 'acc')) // false