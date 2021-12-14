const arr = [1, 2, 3, 4, 5];

let curry = function(fn){
  return arr => arr.map(fn)
}

let isEven = x => x % 2 === 0 ? 'light' : 'dark';
console.log(curry(isEven)(arr))

let double = x => x * 2;
console.log(curry(double)(arr))
