// to check given a no. is palindrome or not
//e.g 121 and the reverse of 121 is 121 and both are equal so 121 is palindrome
function checkPalindrome(n) {
  if (n === 0) return "palindrome";
  if (n < 0) return "not palindrome";

  let temp = n;
  let rev = 0;

  while (n > 0) {
    let rem = n % 10;
    n = Math.floor(n / 10);
    rev = rev * 10 + rem;
  }

  if (rev === temp) {
    return "palindrome";
  } else {
    return "not palindrome";
  }
}

let ans = checkPalindrome(121);
console.log(ans);
