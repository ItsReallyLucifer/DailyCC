//  Create a function that takes in a number
// return it as a string in expanded form
// example: 12 returns 10 + 2
// Non 0 digits only. cannot be 10.



function expandedForm(num) {
    return String(num)
            .split("")
            .map((num, index, arr) => num + "0".repeat(arr.length - index -1 ))
            .filter((num) => Number(num) != 0)
            .join(" + ")
  }

  console.log(expandedForm(15))
  console.log(expandedForm(13))
  