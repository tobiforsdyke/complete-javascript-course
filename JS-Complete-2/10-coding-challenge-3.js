/***********************************
* Coding Challenge 3
*/

/*
John and his family went on holiday and went to 3 different restaurants. The bills were £124, £48 and £268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than £50, 15% when the bill is between £50 and £200, and 10% if the bill is more than £200.

In the end John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip)

NOTE: to calculate 20% of a value, multiply it with 20/100 = 0.2)
*/

function tipCalculator(bill) {
  if (bill < 50) {
    return bill * 0.2;
  } else if (bill >= 50 && bill < 200) {
    return bill * 0.15;
  } else {
    return bill * 0.1;
  }
}

console.log(tipCalculator(124));
console.log(tipCalculator(48));
console.log(tipCalculator(268));

var bill1 = 124;
var bill2 = 48;
var bill3 = 268;

console.log(tipCalculator(bill1));
console.log(tipCalculator(bill2));
console.log(tipCalculator(bill3));


var arrayOfTips = [tipCalculator(bill1), tipCalculator(bill2), tipCalculator(bill3)];
var arrayOfBillTotals = [(tipCalculator(bill1) + bill1), (tipCalculator(bill2) + bill2),(tipCalculator(bill3) + bill3)];
console.log(arrayOfTips);
console.log(arrayOfBillTotals);
