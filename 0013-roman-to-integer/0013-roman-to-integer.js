/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  return s.split('').reduce((total, currentChar, index, arr) => {
    const currentVal = romanNumerals[currentChar];
    const nextVal = romanNumerals[arr[index + 1]];

    if (nextVal && currentVal < nextVal) {
      // If the current value is less than the next value, subtract the current value from the total
      return total - currentVal;
    } else {
      // Otherwise, add the current value to the total
      return total + currentVal;
    }
  }, 0);
};