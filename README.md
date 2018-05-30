# CSV Utilities

A simple utility to manipulate and transform csv strings of data.

## Install

```bash
npm i csv-utilities
```

## Usage

### Convert a CSV to an array

Probably the quickest most useful function

```javascript
let csv = `1, 2, 3
3, 2, 1`

csvUtil.csv2array(csv)

// outputs:
[ [ '1', '2', '3' ],
  [ '3', '2', '1' ] ]
```

### Convert an array to a CSV string

```javascript
let array = [
  ['1', '2', '3'],
  ['3', '2', '1']
]

csvUtil.array2csv(array)

// outputs:
1, 2, 3
3, 2, 1
```

### Switch the column orders with switchColumnsOrder

```javascript
let csv = `1, 2, 3
3, 2, 1`

// switching columns 1 with 2
csvUtil.switchColumnsOrder(csv, 1, 2)

// outputs:
2, 1, 3
2, 3, 1
```

### Reverse rows, bottom to top

```javascript
let csv = `1, 2, 3
3, 2, 1`

csvUtil.reverseRows(csv)

// outputs:
3, 2, 1
1, 2, 3
```

### Creates an array of each rows average

```javascript
let csv = `1, 2, 3
3, 2, 1`

csvUtil.avgColumns(csv)

// outputs:
[ 2, 2 ]
```

### Appends an array of columns on to the csv string

```javascript
let csv = `1, 2, 3
1, 2, 3`

let append = [5, 6]

csvUtil.appendColumns(csv, append)

// outputs:
1, 2, 3, 5
1, 2, 3, 6
```

### appendRows

```javascript
// coming in 1.0.1
```
