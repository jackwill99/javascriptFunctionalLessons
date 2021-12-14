const customFilter = (iters, checkFun)=>{
  var list = []
  for (iter of iters){
    if (checkFun(iter)){
      list.push(iter);
    }
  }
  return list
};

var animals = [
  {name: 'Fluffykins', species: 'rabbit'},
  {name: 'Caro', species: 'dog'},
  {name: 'Hamilton', species: 'dog'},
  {name: 'Harold', species: 'fish'},
  {name: 'Ursula', species: 'cat'},
  {name: 'Jimmy', species: 'fish'}
]

var check = (it)=>{
  return it.species === 'dog'
}

var test = customFilter(animals,check)
console.log(test)
