// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000

function past(hours, minutes, seconds){
  
    const timeToMiliseconds = (hours * 3600000) // 1 hour is equal to 3600000. 
    // so we need to multiply it to the number of hours same as with minutes and seconds 
    + (minutes * 60000) + (seconds * 1000); 
  return timeToMiliseconds; // return the result 
  }

