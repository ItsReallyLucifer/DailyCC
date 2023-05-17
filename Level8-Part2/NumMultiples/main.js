//  Create a program that takes a value(integer) and returns a list of its multiples up to another value.
// Example: (2, 6) = function returns [2, 4, 6] because start and multiples = 2 and its up to 6.





function findMultiples(int,limit){
    let result = []
    
    for (let i = int; i<=limit ; i+=int)
      result.push(i)
      
    return result
  }
  
  console.log(findMultiples(5,32)) // returns [5, 10, 15, 20, 25, 30]