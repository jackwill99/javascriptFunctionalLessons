const posts = [
  { id: '0001', title: 'Title 0001' },
  { id: '0002', title: 'Title 0002' },
  { id: '0003', title: 'Title 0003' },
  { id: '0004', title: 'Title 0004' }
]


const getFrom = (field) => (list) => (value) =>{
  var index = list.map(el => el[field]).indexOf(value);
  return list[index];
}

const getById = getFrom('id');
const getByTitle = getFrom('title');
//
// selected = getById(posts)('0003');
// console.log(selected);

selected = getByTitle(posts)('Title 0004');
console.log(selected);
