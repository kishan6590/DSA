// with extra space

/**
let arr = [10, 50, 0, 90, 100];
let temp = new Array(arr.length);
let j = 0;
for (let i = arr.length - 1; i >= 0; i--) {
  temp[j] = arr[i];
  j++;
}
console.log(temp);
console.log(arr)
 */

let i = 0;
let arr = [10, 50, 0, 90, 100, 90];

let j = arr.length - 1;
let temp = 0;
while (i < j) {
  temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  j--;
  i++;
}

console.log("reverse ", arr);
