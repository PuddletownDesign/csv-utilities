const csvUtil = require('../src/main')

let csv = `brent, russ, kittyboy
ruth, russ, ryland`

// Convert a CSV to Array
console.log('------------------------------------------------')
console.log('Convert a CSV to an array\n')
console.log(csvUtil.csv2array(csv))

// Convert an Array to CSV
console.log('------------------------------------------------')
let array = csvUtil.csv2array(csv)
console.log('Convert an array to a CSV string\n')
console.log(csvUtil.array2csv(array))

// switchColumnsOrders
console.log('------------------------------------------------')
console.log('Switch the column orders with switchColumnsOrder\n')
console.log(csvUtil.switchColumnsOrder(csv, 1, 2))
