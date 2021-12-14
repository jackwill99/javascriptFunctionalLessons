let dragons = [
  {name : 'fluffykins', element : 'lightning'},
  {name : 'noomi', element : 'lightning'},
  {name : 'karo', element : 'fire'},
  {name : 'doomer', element : 'timewarp'},
]

let lightning = dragons => dragons.filter(dragon=> dragon.element === 'lightning')

let lightningDragon =
  fn =>
    dragons =>
      fn(dragons).map(dragon => dragon.name)

console.log(lightningDragon(lightning)(dragons))
