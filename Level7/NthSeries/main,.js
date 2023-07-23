// Create a function which returns the sum of following series up to nth term(parameter).


function SeriesSum(n) {
    for (var s = 0, i = 0; i < n; i++) {
      s += 1 / (1 + i * 3)
    }
    
    return s.toFixed(2)
  }

  console.log(SeriesSum(2))