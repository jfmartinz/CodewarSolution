// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s) {

    const words = s.split(' ');
  
    let shortestLength = Infinity;
  
  
    for (const word of words) {
      const wordLength = word.length;
      if (wordLength < shortestLength) {
        shortestLength = wordLength;
      }
    }
  
  return shortestLength;
  }