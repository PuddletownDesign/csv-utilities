# CSV Utility

## Install

```bash
npm i csv-util
```

## Usage

### csv2array

```javascript
const csv = require('csv-util')

csv.csv2array(csv)

// returns a mutlidimensional array
```

### array2CSV

```javascript
const csv = require('csv-util')

csv.array2csv(array)

// returns a csv string
```

### switchColumnsOrder

switchColumnsOrder(csvString, column1, column2)

```javascript
csv.switchColumnsOrder(csv, 1, 4)

// outputs a csv string with the columns 1 and 4 switched
```

sortColumns

reverseRows (Top to bottom)
