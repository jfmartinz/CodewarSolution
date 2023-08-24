// Write a function that takes in a string of one or more words, and returns the same string,
//  but with all five or more letter words reversed (Just like the name of this Kata).
//  Strings passed in will consist of only letters and spaces. Spaces will be included only
//   when more than one word is present.

// Examples:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
// spinWords( "This is a test") => returns "This is a test"
// spinWords( "This is another test" )=> returns "This is rehtona test"

function spinWords(string) {
  const words = string.split(" ");
  const reversedWords = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= 5) {
      reversedWords.push(words[i].split("").reverse().join(""));
    } else {
      reversedWords.push(words[i]);
    }
  }

  return reversedWords.join(" ");
}
