var animals = [
  {name: 'Fluffykins', species: 'rabbit'},
  {name: 'Caro', species: 'dog'},
  {name: 'Hamilton', species: 'dog'},
  {name: 'Harold', species: 'fish'},
  {name: 'Ursula', species: 'cat'},
  {name: 'Jimmy', species: 'fish'}
]

// map, filter are array transformation
// reduce is super array transformation

var dog = animals.filter(function(animal){
  return animal.species === 'dog';
})

console.log( dog)
