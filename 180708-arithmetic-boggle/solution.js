/**
 * @param {int} magicNumber
 * @param {int[]} numbers
 * @return {boolean}
 */
function arithmeticBoggle(magicNumber, numbers) {
  return canBeCalculated(magicNumber, numbers)
}

function canBeCalculated(magicNumber, numbers, sum = 0, numberIndex = -1, operator = 1) {
  if (operator && numbers[numberIndex]) sum += operator * numbers[numberIndex];
  if (numberIndex === numbers.length - 1) return sum === magicNumber;
  const canBeCalculatedByAdd = canBeCalculated(magicNumber, numbers, sum, numberIndex + 1, 1);
  const canBeCalculatedByDeduction = canBeCalculated(magicNumber, numbers, sum, numberIndex + 1, -1);

  return (canBeCalculatedByAdd || canBeCalculatedByDeduction);
}

// test
const sol = arithmeticBoggle(2, [1, 2, 3, 4]);
console.log(sol);

// Don't edit the line below
exports.arithmeticBoggle = arithmeticBoggle
