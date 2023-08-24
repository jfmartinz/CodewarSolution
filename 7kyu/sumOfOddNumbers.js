// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle
// (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

function rowSumOddNumbers(n) {
  const firstNumber = (n - 1) * n + 1;

  let sum = 0;
  for (let i = 0; i < n; i++) {
    let oddNumber = firstNumber + 2 * i;
    sum += oddNumber;
  }

  return sum;
}

// shorter way:
// return n*n*n
