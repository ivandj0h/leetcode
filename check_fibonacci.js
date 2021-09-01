// non recursive way
// const generateFibonacciNumber = (input) => {
//   if (input < 3) return 1;

//   let prevNumber = 1;
//   let currentNumber = 1;

//   for (let i = 2; i < input; i++) {
//     const nextNumber = prevNumber + currentNumber;
//     prevNumber = currentNumber;
//     currentNumber = nextNumber;
//   }
//   return currentNumber;
// };

// with recursive solution
const generateFibonacciNumber = (input) => {
  if (input < 3) return 1;

  return (
    generateFibonacciNumber(input - 1) + generateFibonacciNumber(input - 2)
  );
};

console.log(generateFibonacciNumber(7));
