/*let a = 12;
let b = '13'; 
console.log(typeof(a+b), a+b);//stringj, 1213 
//Rule1-number + string --> string and this process is knwn as concatination
*/

/*
// type coercion
let a = 10;
let b = 20;

console.log("sum of 10 and 20 is " + a + b); // sum of 10 and 20 is 1020
console.log("sum of 10 and 20 is " + (a + b)); // sum of 10 and 20 is 30
console.log("sum of 10 and 20 is ", a + b); // sum of 10 and 20 is 30
console.log(a + b + "is sum of 10 and 20"); // 30  is sum of 10 and 20 

console.log(typeof(NaN))

 */

// swaping two no's
// let a = 10;
// let b = 20;
//method 1
/*
let c;
c = a;
a = b;
b = c;
console.log("a->", a, " b->", b);
*/

/*
// method 2 withour extra variale

a = a + b; //30
b = a - b; //10
a = a - b; // 20
console.log("a->", a, " b->", b);*/

// method 3with array destrucing
// [a,b]=[b,a]
// console.log("a->", a, " b->", b);

//pre and post increment
let i = 11;
i = i++ + ++i; //24;
console.log(i);
