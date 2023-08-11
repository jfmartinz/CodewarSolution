// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

function expandedForm(num) {
    const numStr = num.toString();
      const length = numStr.length;
      let result = '';
  
      for (let i = 0; i < length; i++) {
          if (numStr[i] !== '0') {
              result += numStr[i] + '0'.repeat(length - i - 1) + ' + ';
          }
      }
  
      return result.slice(0, -3); // Remove the trailing ' + ' from the last term
  }