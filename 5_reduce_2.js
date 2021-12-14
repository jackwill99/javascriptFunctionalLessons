// Building like filter method with reduce

let filterFun = (fn, arrs) =>{
  return arrs.reduce((acc, arr)=>{
    return fn(arr) ? acc.concat(arr) : acc
  }, [])
}


const arr = [1, 2, 3, 4, 5];
var animals = [
  {name: 'Fluffykins', species: 'rabbit'},
  {name: 'Caro', species: 'dog'},
  {name: 'Hamilton', species: 'dog'},
  {name: 'Harold', species: 'fish'},
  {name: 'Ursula', species: 'cat'},
  {name: 'Jimmy', species: 'fish'}
]

let animal = (x)=> x.species === 'dog';
let moreThan3 = (x)=> x > 3;

console.log(filterFun(animal, animals))
console.log(filterFun(moreThan3, arr))
