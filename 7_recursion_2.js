// let's try out relational database

let categories = [
  {id : 'animals' , 'parent' : null},
  {id : 'mammals' , 'parent' : 'animals'},
  {id : 'cats' , 'parent' : 'mammals'},
  {id : 'dogs' , 'parent' : 'mammals'},
  {id : 'chihuahua' , 'parent' : 'dogs'},
  {id : 'labrador' , 'parent' : 'dogs'},
  {id : 'persian' , 'parent' : 'cats'},
  {id : 'siamese' , 'parent' : 'cats'}
];

const  makeTree = (categories, parent)=>{
  let node = {};
  categories
    .filter(x=> x.parent === parent)
    .map(x => node[x.id] = makeTree(categories, x.id));

  return node
}

let output = makeTree(categories, null)
console.log(JSON.stringify(output, null, 2))
