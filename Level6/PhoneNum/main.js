// Write a function that accepts an array of 10 integers (between 0 and 9)
// that returns a string of those numbers in the form of a phone number.



function createPhoneNumber(numbers){
    let format = "(xxx) xxx-xxxx";
    
    for(let i = 0; i < numbers.length; i++)
    {
      format = format.replace('x', numbers[i]);
    }
    
    return format;
  }

  console.log(createPhoneNumber([5,5,5,1,2,3,4,5,6,7])) // (555) 123-4567