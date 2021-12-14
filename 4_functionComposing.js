/*
Function Composition combines two or more functions together
  To perform function composition,
  you simply have the result of each function be passed as the argument to the next

Function composition is the process of applying a function to the output of another function.


As an example we'll implement a simple function that calculates total purchase price
by taking the purchase price, applying an 8% tax, and adding $10 (shipping and handling)

*/

var calculateTotalBasic = (amount)=> (amount * 1.08) + 10;
calculateTotalBasic(100)

/*
  Now let's refactor it:
    - implement applyTax function
    - implement applyShippingAndHandling
    - compose those functions into the calculate function
*/


var applyTax = (amount)=> {
  console.log('first test '+ amount * 1.08)
  return amount * 1.08
};
var applyShippingAndHandling = (amount)=> {
  console.log('second test '+ (amount + 10))
  return amount + 10
};

var calculateTotal = (amount)=> applyShippingAndHandling(applyTax(amount))
calculateTotal(100)

// Compose function wiht reduce
var composeFun = (...fns) => x => fns.reduce((composeValue, fn)=> fn(composeValue),x)
console.log(composeFun(applyTax,applyShippingAndHandling)(100))
