/* 0-100 se upper pe Rs4 
101-200 Rs 6
201-400 Rs 8 
401 above 13 13
 */
let amount = 0;
let units = 700;
if (units > 400) {
  amount = (units - 400) * 13;
  units = 400;
}
if (units > 200 && units <= 400) {
  amount += (units - 200) * 8;
  units = 200;
}
if (units > 100 && units <= 200) {
  amount += (units - 100) * 6;
  units = 100;
}
if (units > 0 && units <= 100) {
  amount += units * 4;
  units = 0;
}

console.log(amount);
