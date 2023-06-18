// Create a function that takes a list of non-negative numbers and strings 
// But filters and returns a new list of only the numbers.



function filter_list(list) {
    return list.filter(Number.isInteger);
  }

  const inputList = [1, 'a', 2, 'b']
  const filterList = filter_list(inputList)

  console.log(filterList)