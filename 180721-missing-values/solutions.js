const missing1Values = [1, 2, 3, 4, null, 6];

function missingValue(valuesArray) {
  const expectedSum = (valuesArray.length * (valuesArray.length + 1)) / 2;
  const actualSum = valuesArray.reduce((sum, value) => sum += value, 0);
  const missingTotalValue = expectedSum - actualSum;

  // for (let missed)

  // for (let anotherMissingValue = missingTotalValue; missingTotalValue >= 1; anotherMissingValue = findAnotherFactor(missingTotalValue)) {
  //   if (!valuesArray.includes(anotherMissingValue)) {
  //     return new Set([anotherMissingValue, anotherMissingValue]);
  //   }
  // }
}
