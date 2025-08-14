// let arr = [1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0];
//move 0 to left side
// let i = 0;
// let j = 0;
// let temp = -1;

//i ka kaam h check krna ki bhai 0 ya h one bus
// while (i < arr.length) {
//   if (arr[i] == 0) {
//     temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     j++;
//     i++;
//   } else {
//     i++;
//   }
// }

//move o to right side
/** 
j = arr.length - 1;
while (i <= j) {
  if (arr[i] == 0) {
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    j--;
  } else {
    i++;
  }
}
console.log(arr);
*/

// move 0 to right side second method
/*let i = 0;
let j = 0;
let temp = -1;
while (i < arr.length) {
  if (arr[i] == 1) {
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j++;
  } else {
    i++;
  }
}
console.log("->", arr);
*/
// move all -ve no's in left side and +ve no's in right side
let arr2 = [-1, 2, 3, 4, -5, 6, -7, 8, 9];
let i = 0;
let j = 0;
let temp = 0;

while (i < arr2.length) {
  if (arr2[i] < 0) {
    temp = arr2[i];
    arr2[i] = arr2[j];
    arr2[j] = temp;
    i++;
    j++;
  } else {
    i++;
  }
}

console.log("arr2->", arr2);
