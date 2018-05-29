# CSV Utilities

A simple utility to manipulate and transform csv strings of data.

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

Switches the order of two columns in the csv string

`switchColumnsOrder(csvString, column1, column2)`

```javascript
csv.switchColumnsOrder(csv, 1, 4)

// outputs a csv string with the columns 1 and 4 switched
```

### sortColumns

Sorts each column in a row lowest to highest or alphabetically

```javascript
csv.sortColumns(csv)
```

### reverseRows (Top to bottom)

Reverses the order of all the rows

```javascript
csv.reverseRows(csv)
```

### avgColumns

Averages the numbers in each column in a row and creates an array

```csv
1, 2, 3
2, 1, 3
```

outputs:

```javascript
[2 , 2]
```

### appendColumns

Appends an array of columns into the csv

appending this:

```javascript
[5, 6]
```

to this:

```csv
1, 2, 4
2, 1, 3
```

outputs:

```csv
1, 2, 3, 5
2, 1, 3, 6
```

### appendRows
