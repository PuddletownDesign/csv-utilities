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
   * _Sort each of the columns lowest to highest or alphabetically_
   *
   * @param {string} csv - a CSV string
   * @return {string} csv - a CSV string
   */
  sortColumns: (csv) => {
    let array = csvUtil.csv2array(csv);
    array.map(row => {
      row.sort();
    });
    csv = csvUtil.array2csv(array);
    return csv
  }
};

module.exports = csvUtil;
