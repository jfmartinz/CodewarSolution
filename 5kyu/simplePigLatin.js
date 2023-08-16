// Move the first letter of each word to the end of it, 
// then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str){
    const words = str.split(' ');
   
     const pigLatinWords = words.map(word => {
       const firstChar = word[0];
       const restOfWord = word.slice(1);
       
       // Check if the first character is a letter
       if (/[a-zA-Z]/.test(firstChar)) {
         return restOfWord + firstChar + 'ay';
       } else {
         return word; // Keep punctuation marks untouched
       }
     });
   
     return pigLatinWords.join(' ');
   }