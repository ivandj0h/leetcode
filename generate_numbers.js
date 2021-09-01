// using for loop
function countDownForLoop(n) {
  const num = [];
  for (let i = n; i > 0; i--) {
    num.push(i);
  }
  return num;
}

console.log(countDownForLoop(13));
