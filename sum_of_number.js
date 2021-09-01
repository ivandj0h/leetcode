/*
 * Sum row of number
 * example number = 3
 * 3 + 2 + 1 = 6
 *
 */

// using for loop
// function sumRowOfNumberUsingForLoop(n) {
//   let totalNumber = 0;
//   for (let i = n; i > 0; i--) {
//     totalNumber += i;
//   }
//   return totalNumber;
// }

// using recursive
function sumRowOfNumberUsingRecursive(n, totalNumber = 0) {
  if (n <= 0) {
    return totalNumber;
  }
  return sumRowOfNumberUsingRecursive(n - 1, totalNumber + n);
}

console.log(sumRowOfNumberUsingRecursive(13));
