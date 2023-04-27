





function findShort(s) {
    return s
      .split(' ')
      .sort((a, b) => a.length - b.length) 
      .shift() 
      .length;
  }

  const inputString1 = "This is example"; // shortest word is "is" = 2
  console.log(findShort(inputString1));