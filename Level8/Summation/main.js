//Create a function that finds the summation of every number from 1 to a num. 
//The number will always be a positive integer greater than 0.
//example: 5 --> 1 + 2 + 3 + 4 + 5 = 15


 function summation(num){
        return (num * (num + 1)) / 2
    }

    console.log(summation(5))