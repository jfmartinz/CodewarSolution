// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

function isAnagram(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
  
    if (str1.length !== str2.length) {
      return false;
    }
  
    const charCount = {};
  
    for (let char of str1) {
      charCount[char] = charCount[char] + 1 || 1;
    }
  
    for (let char of str2) {
      if (!charCount[char]) {
        return false;
      }
      charCount[char]--;
    }
  
    for (let count in charCount) {
      if (charCount[count] !== 0) {
        return false;
      }
    }
  
    return true;
  }