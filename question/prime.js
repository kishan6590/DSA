// first approach
/**
let n = prompt("Enter the no.");

if (isNaN(n)) {
  console.log("Invalid input");
} else {
  if (n > 0) {
    let isPrime = true;

    for (i = 2; i < n; i++) {
      if (n % i == 0) {
        isPrime = false;
        break;
      }
    }
    console.log(isPrime);
  } else {
    console.log("Should be +ve and more than 0");
  }
}
*/

//second approach
/*
let n = prompt("Enter the no.");

if (isNaN(n)) {
  console.log("Invalid input");
} else {
  if (n > 0) {
    let isPrime = true;

    for (i = 2; i < Math.floor(n / 2); i++) {
      if (n % i == 0) {
        isPrime = false;
        break;
      }
    }
    console.log(isPrime);
  } else {
    console.log("Should be +ve and more than 0");
  }
}
*/
//third appraoch

let n = Number(prompt("Enter the no."));
console.log(typeof n);
if (isNaN(n)) {
  console.log("Invalid input");
} else {
  if (n > 0) {
    console.log(isPrime(n));
  } else {
    console.log("should be +ve and greater than 0");
  }
}

function isPrime(n) {
  if (n <= 1) return false;
  if (n == 2) return true; // 2 is the only even prime no.
  if (n % 2 === 0) return false; //chk for odd
  for (let i = 3; i <= Math.floor(Math.sqrt(n)); i += 2) {
    if (n % i == 0) return false;
  }
  return true;
}
