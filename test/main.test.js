const expect = require('chai').expect
const csvUtil = require('../src/main')

// Mock Data
let csv = `brent, russ, kittyboy
ruth, russ, ryland`

/**
 * csv2array
 */
describe('# csv2array', () => {
  let fn = csvUtil.csv2array
  it('Should return an array', () => {
    expect(fn(csv)).to.be.an('array')
  })
  it('should have the first element of the array be an array', () => {
    expect(fn(csv)[0]).to.be.an('array')
  })
  it('first value of the first array should equal the first value of the csv', () => {
    expect(fn(csv)[0][0]).to.deep.equal('brent')
  })
})

/**
 * array2csv
 */
describe('# array2csv', () => {
  let fn = csvUtil.array2csv

  let array = [
    [ '1', '2', '3' ],
    [ '4', '5', '6' ]
  ]

  // use the csv string to create an array and then reverse it
  it('Should return a string', () => {
    expect(fn(array)).to.be.an('string')
  })
  it('each line should not an array', () => {
    expect(fn(array)).to.not.be.an('array')
  })
  it('each line should be a string', () => {
    expect(fn(array)).to.be.an('string')
  })
})

/**
 * switchColumnsOrder
 */
describe('# switchColumnsOrder', () => {
  let fn = csvUtil.switchColumnsOrder
  it('Should return a CSV string', () => {
    expect(fn(csv, 1, 2)).to.be.an('string')
  })
  // use the csv string to create an array and then reverse it
  it('Should switch columns 1 and 2', () => {
    expect(fn(csv, 1, 2)).to.equal(
      `russ, brent, kittyboy\nruss, ruth, ryland\n`
    )
  })
})

/**
 * sortColumns
 */
describe('# sortColumns', () => {
  let fn = csvUtil.sortColumns
  it('Should return a CSV string', () => {
    expect(fn(csv, 1, 2)).to.be.an('string')
  })
  // use the csv string to create an array and then reverse it
  it('Should order the columns', () => {
    expect(fn(csv, 1, 2)).to.equal(
      `brent, kittyboy, russ\nruss, ruth, ryland\n`
    )
  })
})

/**
 * reverseRows
 */
describe('# reverseRows', () => {
  let fn = csvUtil.reverseRows
  it('Should return a CSV string', () => {
    expect(fn(csv)).to.be.an('string')
  })
  // use the csv string to create an array and then reverse it
  it('Should reverse the order of all the rows', () => {
    expect(fn(csv)).to.equal(
      `ruth, russ, ryland\nbrent, russ, kittyboy\n`
    )
  })
})

/**
 * reverseRows
 */
describe('# avgColumns', () => {
  let fn = csvUtil.avgColumns
  let numbers = `1, 2, 3\n1, 2, 3`

  it('Should return an array', () => {
    expect(fn(csv)).to.be.an('array')
  })
  // use the csv string to create an array and then reverse it
  it('Should make an array with the averaged numbers', () => {
    expect(fn(numbers)).to.deep.equal([2, 2])
  })
})

/**
 * reverseRows
 */
describe('# appendColumns', () => {
  let fn = csvUtil.appendColumns
  let numbers = `1, 2, 3\n1, 2, 3`
  let append = [5, 6]

  it('Should return an string', () => {
    expect(fn(numbers, append)).to.be.an('string')
  })
  // use the csv string to create an array and then reverse it
  it('Should return a csv string with the array columns appended on', () => {
    expect(fn(numbers, append)).to.equal('1, 2, 3, 5\n1, 2, 3, 6\n')
  })
  it('Should return a the original csv if the arr and row count are not the same', () => {
    expect(fn(numbers, [1, 5, 6])).to.equal('1, 2, 3\n1, 2, 3')
  })
})
