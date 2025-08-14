// Write a function that returns number of digits in a number

function countDigit(n) {
  if (n === 0) return 1;
  if (n < 0) {
    n = -n;
  }

  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }

  return count;
}

const ans = countDigit(-98);
console.log(ans);
