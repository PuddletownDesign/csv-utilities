'use strict';

const csvUtil = {
  /**
   * Create an array from a CSV string
   *
   * @param {string} - a csv string
   * @return {array} - a multidimensional array from the csv string
   */
  csv2array: (csv) => {
    return csv
      .split('\n')
      .map(row => row.split(', '))
  },

  /**
   * Create an CSV string from a multidimensional array
   *
   * @param {array} - a multidimensional array
   * @return {string} - a csv string
   */
  array2csv: (array) => {
    return array
      .map(row => row.join(', ') + '\n')
      .join('')
  },

  /**
   * Reorder the columns in a CSV string
   *
   * @param {string} - csvString
   * @return {string} - csvString
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
  }
};

module.exports = csvUtil;
