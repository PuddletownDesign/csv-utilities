const csvUtil = {
  /**
   * Create an array from a CSV string
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
   * Create an CSV string from a multidimensional array
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
   * Reorder 2 columns in a CSV string
   *
   * @param {string}  csv - a csv string
   * @param {number} c1 - the first column to switch with the second
   * @param {number} c2 - the second column to switch with the first
   * @return {string} processed - a csv string
   */
  switchColumnsOrder: (csv, c1, c2) => {
    c1--
    c2--
    const processed = []
    csvUtil.csv2array(csv)
      .map((row, i) => {
        let temp = row[c2]
        row[c2] = row[c1]
        row[c1] = temp
        processed[i] = row
      })
    return csvUtil.array2csv(processed)
  }
}

module.exports = csvUtil
