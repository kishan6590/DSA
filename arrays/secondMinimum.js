let arr = [1, 30, 5, 40, 40, 49];

/**
let min = Number.MAX_SAFE_INTEGER;
let secondMin = Number.MAX_SAFE_INTEGER;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
  }
}
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < secondMin && arr[i] > min) secondMin = arr[i];
}
console.log("min", min);
console.log("secondMin", secondMin);
 */

let min = Number.MAX_SAFE_INTEGER;
let secondMin = Number.MAX_SAFE_INTEGER;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < min) {
    secondMin = min;
    min = arr[i];
  } else if (arr[i] < secondMin && arr[i] != min) {
    secondMin = arr[i];
  }
}
console.log("minki", min);
console.log("secondMin", secondMin);
