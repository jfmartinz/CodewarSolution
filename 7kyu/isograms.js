// An isogram is a word that has no repeating letters, consecutive or non-consecutive.
// Implement a function that determines whether a string that contains only letters is an isogram.
// Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

function isIsogram(string) {
  string = string.toLowerCase();

  let occurence = {};

  for (let i = 0; i < string.length; i++) {
    let letter = string[i];

    if (occurence[letter]) {
      return false;
    } else {
      occurence[letter] = true;
    }
  }

  return true;
}
