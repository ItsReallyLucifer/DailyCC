// Create a function that takes an array containing names of people that like an item
// it must return the display text below-
// example: []  -->  "no one likes this"
// example: ["Peter"]    -->  "Peter likes this"
// example: ["Max", "John", "Mark"] -->  "Max, John and Mark like this"
// example: ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"



function likes(names) {
    const numLikes = names.length;
  
    if (numLikes === 0) {
      return "no one likes this";
    } else if (numLikes === 1) {
      return `${names[0]} likes this`;
    } else if (numLikes === 2) {
      return `${names[0]} and ${names[1]} like this`;
    } else if (numLikes === 3) {
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    } else {
      const others = numLikes - 2;
      return `${names[0]}, ${names[1]} and ${others} others like this`;
    }
  }
  
  console.log(likes(['Jacob', 'Mark', 'Kelly', 'Robert']))