'use strict';

const csvUtil = {
  /**
   * _Create an array from a CSV string_
   *
   * @param {string} csv - a csv string
   * @return {array} csv - a multidimensional array from the csv string
   */
  csv2array: (csv) => {
    return csv
      .split('\n')
      .map(row => row.split(', '))
  },

  /**
   * _Create an CSV string from a multidimensional array_
   *
   * @param {array} array - a multidimensional array
   * @return {string} array - a csv string
   */
  array2csv: (array) => {
    return array
      .map(row => row.join(', ') + '\n')
      .join('')
  },

  /**
   * _Reorder 2 columns in a CSV string_
   *
   * Converts a CSV into an array to perform operation and then converts back into a CSV
   *
   * @param {string}  csv - a csv string
   * @param {number} c1 - the first column to switch with the second
   * @param {number} c2 - the second column to switch with the first
   * @return {string} processed - a csv string
   */
  switchColumnsOrder: (csv, c1, c2) => {
    c1--;
    c2--;
    const processed = [];
    csvUtil.csv2array(csv)
      .map((row, i) => {
        let temp = row[c2];
        row[c2] = row[c1];
        row[c1] = temp;
        processed[i] = row;
      });
    return csvUtil.array2csv(processed)
  },

  /**
   * _Sort each of the rows lowest to highest or alphabetically_
   *
   * @param {string} csv - a CSV string
   * @return {string} csv - a CSV string
   */
  sortColumns: (csv) => {
    let array = csvUtil.csv2array(csv);
    array.map(row => {
      row.sort();
    });
    return csvUtil.array2csv(array)
  },

  /**
   * _Reverse each of the rows top to bottom_
   *
   * @param {string} csv - a CSV string
   * @return {string} csv - a CSV string
   */
  reverseRows: (csv) => {
    let array = csvUtil.csv2array(csv).reverse();
    return csvUtil.array2csv(array)
  },

  /**
   * _Averages the columns of each row and creates an array_
   *
   * __note: that all columns and rows in csv must be numeric__
   *
   * @param {string} csv - a CSV string
   * @return {array} array - an array of the averaged column values
   */
  avgColumns: (csv) => {
    let array = csvUtil.csv2array(csv);

    let averages = [];
    array.map((row) => {
      let sum = 0;
      let rowLength = row.length;
      row.map((column, i) => {
        sum += parseInt(column, 10);
      });
      let avg = sum / rowLength;
      averages.push(avg);
    });
    return averages
  },

  /**
   * _Appends an array of columns into the csv_
   *
   * @param {string} csv - a csv string
   * @param {array} array - an array of values equal in length to the csv rows
   * @return {string} csv - a csv string with the values appended on each row
   */
  appendColumns: (csv, append) => {
    let array = csvUtil.csv2array(csv);

    if (array.length !== append.length) {
      return csv
    }

    array.map((row, i) => {
      row.push(append[i]);
    });
    csv = csvUtil.array2csv(array);
    return csv
  }
};

module.exports = csvUtil;
