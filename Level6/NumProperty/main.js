//Create a function digPow that takes a positive integer n and a positive integer p
// and returns an integer k such that the sum of the digits of n taken to successive
// powers of p is equal to n * k, or -1 if no such k exists.



function digPow(n, p) {
    const digits = n.toString().split('');
    let sum = 0;
  
    for (let i = 0; i < digits.length; i++) {
      sum += Math.pow(parseInt(digits[i]), p + i);
    }
  
    const k = sum / n;
  
    if (Number.isInteger(k) && k > 0) {
      return k;
    } else {
      return -1;
    }
  }
  
  console.log(digPow(89, 1)); // Output: 1
  console.log(digPow(92, 1)); // Output: -1
  console.log(digPow(695, 2)); // Output: 2
  console.log(digPow(46288, 3)); // Output: 51