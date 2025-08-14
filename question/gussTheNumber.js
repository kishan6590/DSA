console.log('check')
console.log('check')
console.log('check')
console.log('check')
console.log('check')
console.log('check')
console.log('check')
console.log('check')
console.log('check')
console.log('check')
console.log('check')
console.log('check')
console.log('check')
console.log('check')
console.log('check')
console.log('check')
console.log('check')
const random = Math.floor(Math.random() * 100 + 1);

let guess = 0;
while (guess != random) {
  guess = Number(prompt("Enter the number"));

  if (isNaN(guess) || guess < 1 || guess > 100) {
    console.log(guess);
    console.log("Please enter a valid number between 1 and 100");
    continue;
    console.log("gu",guess);
  }
}
