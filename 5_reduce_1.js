// Building like map function with reduce


const arr = [1, 2, 3, 4, 5];

var animals = [
  {name: 'Fluffykins', species: 'rabbit'},
  {name: 'Caro', species: 'dog'},
  {name: 'Hamilton', species: 'dog'},
  {name: 'Harold', species: 'fish'},
  {name: 'Ursula', species: 'cat'},
  {name: 'Jimmy', species: 'fish'}
]

var mapFun = (fn, arrs) => arrs.reduce((arr,value)=>{

  arr.push(fn(value))
  return arr
  /*
  or

  return arr.concat(fn(value))

  because concat method return the concated array and push method return the length of the array
  */
},[]);

var twice = (x)=> x * 2;

var animal = (x)=> `${x.name} is ${x.species}`;

console.log(mapFun(twice, arr))
console.log(mapFun(animal, animals))
