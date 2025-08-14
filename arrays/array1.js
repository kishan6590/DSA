// max value

let arr = [1, 22, 44, 66, 3.011, 0.33, 20000];
let max = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (max < arr[i]) {
    max = arr[i];
  }
}

console.log(max);

let arr2 = [2, 4, 5, 2, 0.1];
let min = arr2[0];

for (let i = 0; i < arr2.length; i++) {
  if (min > arr2[i]) {
    min = arr2[i];
  }
}
console.log("min=", min);
