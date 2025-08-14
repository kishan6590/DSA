//second largest no. in an array
/*
let arr = [40, 40, 40, 20, 30, 80];
let sMax = Number.MIN_SAFE_INTEGER;
let max = Number.MIN_SAFE_INTEGER;
// let sMax = arr[1];

let n = arr.length;

for (let i = 0; i < n; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
 
}
 for (let i = 0; i < n; i++) {
   if (arr[i] > sMax && arr[i] < max) {
     sMax = arr[i];
   }
 }

if (sMax === Number.MIN_SAFE_INTEGER) {
  sMax = -1;
}

console.log("second max", sMax);

*/
// another approach

let arr = [20, 0, 40, 40, 60, 50];
let n = arr.length;

// let max = Math.max(arr[0], arr[1]);
// let max = arr[0];
// let sMax = arr[0];
// let sMax = Math.min(arr[0], arr[1]);
let max = Number.MIN_SAFE_INTEGER;
let sMax = Number.MIN_SAFE_INTEGER;
for (let i = 0; i < n; i++) {
  if (arr[i] > max) {
    sMax = max;
    max = arr[i];
  } else if (arr[i] > sMax && arr[i] != max) {
    sMax = arr[i];
  }
}
if (sMax === Number.MIN_SAFE_INTEGER) {
  sMax = -1; // Or any placeholder for "no second max"
}



console.log("smax-", sMax);
