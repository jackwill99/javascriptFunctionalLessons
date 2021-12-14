// normal function

var dragonNormal = (name, size, element) => name + ' is a ' + size + ' dragon that breathes ' + element
console.log(dragonNormal('fluffykins', 'tiny', 'lightning'))


// curry version function

var dragon =
  name =>
    size =>
      element =>
        name + ' is a ' +
        size + ' dragon that breathes ' +
        element

console.log(dragon('fluffykins')('tiny')('ice'))

// In curry version u can use variable

let fluffykinsDragon = dragon('fluffykins');
let tinyDragon = fluffykinsDragon('tiny');
let iceDragon = tinyDragon('ice');
// console.log(iceDragon)
