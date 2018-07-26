const missing1Values = [1, 2, 3, 4, null, 6];
const missing2Values = [1, null, 3, 4, null, 6];

console.log(missingValue(missing1Values));
console.log(missingValue(missing2Values));

function missingValue(valuesArray) {
  const expectedSum = (valuesArray.length * (valuesArray.length + 1)) / 2;
  const actualSum = valuesArray.reduce((sum, value) => sum += value, 0);
  const xAndY = expectedSum - actualSum;
  if (!valuesArray.includes(xAndY) && xAndY <= valuesArray.length) return xAndY;

  // 2 missing values
  const xy = factorial(valuesArray.length) / productAllValues(valuesArray);
  return quadraticEquation(1, -1 * xAndY, xy);
}

function quadraticEquation(a, b, c) {
  debugger;
  const sqrt = Math.sqrt(b ** 2 - 4 * a * c);
  return [((-1 * b) + sqrt) / 2, ((-1 * b) - sqrt) / 2]
}

function productAllValues(valueArray) {
  return valueArray.reduce((product, value) => product *= (value || 1), 1);
}

function factorial(number) {
  let sum = 1;
  for (let i = 1; i <= number; sum *= i, i++);
  return sum;
}
