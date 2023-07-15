// Create a function that takes 2 parameters that returns an array
// The array returned should run 'n' number of times, in increments of 'x'


function countBy(x, n) {
    var z = [];
    for (i = 1; i <= n; i++) {
        z.push(x * i);
    }
    return z;
}
console.log(countBy(10,20))