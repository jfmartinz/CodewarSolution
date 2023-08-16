// Complete the solution so that it splits the string into pairs of two characters.
//  If the string contains an odd number of characters then it should replace the missing second 
//  character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str){
    const pairs = str.match(/.{1,2}/g) || []; // Split into pairs using regex
   
   if (str.length % 2 === 1) {
     pairs[pairs.length - 1] += '_'; // Add underscore to last pair if odd length
   }
   
   return pairs;
 }