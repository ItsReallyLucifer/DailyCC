// Can you find the needle in the haystack?

// Write a function findNeedle() / parameter of haystack, that takes an array string full of 'hay' but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position x" (the index# it found the needle).
// Example: ["hay", "hay", "needle", "hay"] --> "found the needle at position 2"


function findNeedle(haystack){
  let whereneedle = haystack.indexOf('needle')
  return ('found needle at position ') + whereneedle
}

let haystack = ['hay', 'hay', 'needle', 'hay']
console.log(findNeedle(haystack)); // Output: found the needle at position 2