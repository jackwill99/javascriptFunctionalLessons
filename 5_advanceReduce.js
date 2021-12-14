var fs = require('fs');

var out = fs.readFileSync('data.txt', 'utf8')
.trim()
.split('\n')
.map(line=> line.split(' '))
console.log(out)
out.reduce((customers, line) => {
  customers[line[0]] = customers[line[0]]||[];
  // console.log("\n" + JSON.stringify(customers, null, 1))
  customers[line[0]].push({
    name: line[1],
    price : line[2],
    quantity: line[3]
  })
  return customers;
}, {});

console.log(JSON.stringify(out, null, 2))
