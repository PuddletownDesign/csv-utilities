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
  let fn = csvUtil.sortRow
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
