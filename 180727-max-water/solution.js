const input = [0, 0, 4, 0, 0, 6, 0, 0, 3, 0, 5, 0, 1, 0, 0, 0];
const expected = 26;

const tests = [
  {
    input: [0, 0, 4, 0, 0, 6, 0, 0, 3, 0, 5, 0, 1, 0, 0, 0],
    expected: 26
  },
  {
    input: [1, 0, 4, 0, 0, 6, 0, 0, 3, 0, 5, 0, 1, 0, 0, 0],
    expected: 27
  },
  {
    input: [3, 2, 1, 0, 1, 2, 3],
    expected: 9
  },
];

const allPassed = tests.every(test => getTotalValue(test.input) === test.expected);
const message = allPassed ? 'ALL PASSED' : 'SOME FAILED';
console[allPassed ? 'log' : 'error'](message);

function getTotalValue(pillars) {
  const left = totalValueAndLastPos(0, pillars.length - 1, pillars);
  const right = totalValueAndLastPos(pillars.length - 1, left.pos, pillars);
  return left.value + right.value;
}

function totalValueAndLastPos(startPos, lastPos, pillars) {
  const step = (lastPos > startPos ? 1 : -1);
  const pillarWidth = 1;
  let lastHighestPillar = { value: 0, pos: startPos };
  let totalValue = 0;
  let intermediateSteps = [];

  for (let i = startPos; (lastPos - i) * step >= 0; i += step) {
    if (pillars[i] >= lastHighestPillar.value) {
      let segmentValue = lastHighestPillar.value * (Math.abs(i - lastHighestPillar.pos) - pillarWidth);
      totalValue += segmentValue - totalIntermediateCost(intermediateSteps);
      lastHighestPillar.value = pillars[i];
      lastHighestPillar.pos = i;
      intermediateSteps = [];
    } else {
      intermediateSteps.push(pillars[i])
    }
  }

  return { value: totalValue, pos: lastHighestPillar.pos };
}

function totalIntermediateCost(intermediateSteps) {
  return intermediateSteps.reduce((totalCost, step) => totalCost + step, 0);
}
