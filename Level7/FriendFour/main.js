// create a function that filters a list of strings and returns a list with only your friends name in it.
// If a name has exactly 4 letters in it = friend
// Otherwise, you can be sure he's not.


function friend(friends) {
    return friends.filter(name => name.length === 4);
  }

  console.log(friend(['Jason', 'Keenan', 'Mark'])) // Mark