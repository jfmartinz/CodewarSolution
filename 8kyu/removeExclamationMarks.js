
// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
    return s.replace(/!/g, "");
}
// If the g flag is not included, the replace() method 
// will only replace the first occurrence of the exclamation mark in the string.