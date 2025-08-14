//reverse a no. e.g 1234-> 4321

let n = Number(prompt("Enter the number"));

if (isNaN(n)) {
  console.log("Invaid input");
} else {
  if (n > 0) {
    let rev = 0;
    while (n > 0) {
      let rem = n % 10;

      rev = rev * 10 + rem;
      n = Math.floor(n / 10);
    }
    console.log(rev);
  } else {
    console.log("Number should be greater than 0 ");
  }
}
