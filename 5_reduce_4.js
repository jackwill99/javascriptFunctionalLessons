// TestDebugging the reducing function

const f = (x) => x + 1;
const g = (x) => x / 2;
const h = (x) => x * 3;

const composeFun = function (...fns){
  return function(x){
    return fns.reduceRight(function(value, fn){
      return fn(value)
    },x)
  }
}

const trace = function(message){
  return function(inputValue){
    console.log(`${message} : ${inputValue}`)
    return inputValue
  }
}

const composed = composeFun(
  trace('After h'),
  h,
  trace('After g'),
  g,
  trace('After f'),
  f
);
const outPut = composed(6);

console.log(outPut)
