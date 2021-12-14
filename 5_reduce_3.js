// Building a compose(ပေါင်းစပ်ဖွဲ့စည်း) function with reduce

// u can test `reduceRight` insted of `reduce`
// reduceRight iterate the decending array
// that means evalute h, g and f although composeFun(f,g,h) 
var composeFun = function(...fns){
  return function(x){
    return fns.reduce(function(value,fn){
      return fn(value)
    },x)
  }
};

/* with arrow function

var composeFun = (...fns) => x => fns.reduce((value,fn) => fn(value),x);

*/

const f = (x) => x + 1;
const g = (x) => x / 2;
const h = (x) => x * 3;

var composed = composeFun(f,g,h);
console.log(composed(6));

/*
or u can use curry

var composed = composeFun(f,g,h)(5);
console.log(composed)

*/
