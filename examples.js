const csvUtil = require('./src/main')

/**
 * Convert a CSV to Array
 */
console.log(`
------------------------------------------------

# Convert a CSV to an array

let csv = \`brent, russ, kittyboy
ruth, russ, ryland\`

csvUtil.csv2array(csv)

outputs:
`)
let csv = `brent, russ, kittyboy
ruth, russ, ryland`

console.log(csvUtil.csv2array(csv))

/**
 * Convert an Array to CSV
 */
console.log(`
------------------------------------------------

# Convert an array to a CSV string

let array = [
  ['brent', 'russ', 'ryland'],
  ['ruth', 'russ', 'ryland']
]

csvUtil.array2csv(array)

outputs:
`)
let array = [
  ['brent', 'russ', 'ryland'],
  ['ruth', 'russ', 'ryland']
]
console.log(csvUtil.array2csv(array))

/**
 * switchColumnsOrders
 */
console.log(`
------------------------------------------------

# Switch the column orders with switchColumnsOrder

let csv = \`brent, russ, kittyboy
ruth, russ, ryland\`

csvUtil.switchColumnsOrder(csv, 1, 2)

outputs:
`)
console.log(csvUtil.switchColumnsOrder(csv, 1, 2))

/**
 * reverseRows
 */
console.log(`
------------------------------------------------

# Reverse rows, bottom to top

let csv = \`brent, russ, kittyboy
ruth, russ, ryland\`

csvUtil.reverseRows(csv)

outputs:
`)
console.log(csvUtil.reverseRows(csv))

/**
 * avgColumns
 */
console.log(`
------------------------------------------------

# Creates an array of each rows average

let numbers = \`1, 2, 3\n1, 2, 3\`

csvUtil.avgColumns(numbers)

outputs
`)

let numbers = `1, 2, 3\n1, 2, 3`
console.log(csvUtil.avgColumns(numbers))

/**
 * appendColumns
 */
console.log(`
------------------------------------------------

# Appends an array of columns on to the csv string

numbers = \`1, 2, 3
1, 2, 3\`

let append = [5, 6]

csvUtil.appendColumns(numbers, append)

outputs:
`
)
numbers = `1, 2, 3\n1, 2, 3`
let append = [5, 6]

console.log(csvUtil.appendColumns(numbers, append))
