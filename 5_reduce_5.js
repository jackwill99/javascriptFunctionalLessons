// If you’re chaining, you’re composing.
const list = [1, 2, 3, 4, 5];

const person = [
  {name: 'AungAung', age: 18},
  {name: 'SuSu', age: 23},
  {name: 'ToeAg', age: 15},
  {name: 'PoeMg', age: 36},
  {name: 'AyeAye', age: 10},
]

/*
const sumEvenNumbers = list => {
  return list
    .filter(n => n % 2 == 0)
    .map(n => n * 2)
    .reduce((previous, current) => previous + current);
};

console.log(sumEvenNumbers(list));
*/

const over18 = people => {
  return person
    .filter(x => x.age >= 18)
    .map(x => x.name)
    .reduce((prev,curr)=> prev.concat(curr), [])
}

console.log(over18(person))
