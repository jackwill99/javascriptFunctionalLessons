var orders = [
  {amount: 250},
  {amount: 400},
  {amount: 100},
  {amount: 325},
  {amount: 789}
]

// reduce takes two arguments
// first is call back function and takes four arguments
  // first is previous values that returns from this function
  // second is current values that iterated array item
  // third is index number of iterable object
  // fourth is array
// second is initialObject and that is used previous values for first time call the function

/*
var test = 0;

var order = (prev, curr,indexNum, orders)=>{
  orders.push(test);
  test+=1;
  console.log(prev, curr,indexNum, orders)
  return 2
}

var sumOrders = orders.reduce(order, 0)

console.log(sumOrders)
*/

var order = (sum, order)=>{
  return sum + order.amount
}

var sumOrders = orders.reduce(order, 0);

console.log(sumOrders)
