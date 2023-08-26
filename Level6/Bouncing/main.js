// Someone is playing with a ball on the nth floor of a tall building. 
// The height of this floor above ground level, h, is known.
// Person X looks out the window 1.5 meters from the ground.
// How many time will the mother see the ball pass in front of their window
// * (including with it's falling and bouncing?)
//Three conditions must be met for a valid experiment:
//Float parameter "h" in meters must be greater than 0
//Float parameter "bounce" must be greater than 0 and less than 1
//Float parameter "window" must be less than h.
//If all three conditions above are fulfilled, return a positive integer, otherwise return -1.




function bouncingBall(h,  bounce,  window) {
    if( h <= 0 || bounce >= 1 || bounce <= 0 || window >= h) return -1
    let seen = 0;
    
    while(h > window){
      seen += 1
      h *= bounce
      if(h > window) seen += 1
    }
    
    return seen;
  }

  console.log(bouncingBall(5,0.5,2)) // 3