// Create a function that gives a personalized greeting.
// The function has 2 parameters. Name and owner
// if name equals owner return hello boss - otherwise - hello guest.


function greet (name, owner) {
    if(name === owner){
      return 'Hello boss'
    }else{
      return 'Hello guest'
    }
   }

   console.log(greet('Bob', 'Bob'))