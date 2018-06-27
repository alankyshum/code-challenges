const test1 = [30, 45, 15, 90, 75]; // 135
const test2 = [90, 15, 15, 120, 15]; // 210

const stressTest = [5679, 3567, 2013, 9013, 6084, 2745, 3946, 7334, 3008, 4765, 8423, 3143, 4882, 6788, 4981, 5011, 89, 170, 1841, 7337, 4599, 2423, 7907, 8134, 4978, 2938, 6967, 8975, 6696, 8319, 3458, 3449, 3558, 4619, 1193, 2659, 6957, 2524, 5561];

// test
console.log(getMaxValue(test1));
console.log(getMaxValue(test2));
console.log(getMaxValue(stressTest));

function getMaxValue(srcList, index = -2, storedKnowledge = {}) {
  const maxIndex = srcList.length - 1;

  if (index === maxIndex || index === maxIndex - 1) {
    return srcList[index];
  }

  if (index > maxIndex) { return 0; }

  if (!storedKnowledge[index]) {
    storedKnowledge[index] = Math.max(
      getMaxValue(srcList, index + 2, storedKnowledge),
      getMaxValue(srcList, index + 3, storedKnowledge)
    );
  }
  const maxValue = storedKnowledge[index];

  return (srcList[index] || 0) + maxValue;
}
