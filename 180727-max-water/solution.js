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
]

console.log(getTotalValue([7, 6, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 6, 7]));

const allPassed = tests.every(test => getTotalValue(test.input) === test.expected);
const message = allPassed ? 'ALL PASSED' : 'SOME FAILED';
console[allPassed ? 'log' : 'error'](message);


function getTotalValue(piles) {
  const left = totalValueAndLastPos(0, piles.length - 1, piles);
  const right = totalValueAndLastPos(piles.length - 1, left.pos, piles);
  return left.value + right.value;
}

function totalValueAndLastPos(startPos, lastPos, piles) {
  const step = (lastPos > startPos ? 1 : -1);
  const pileWidth = 1;
  let lastHighestPile = { value: 0, pos: startPos };
  let totalValue = 0;
  let intermediateSteps = [];

  for (let i = startPos; (lastPos - i) * step >= 0; i += step) {
    if (piles[i] >= lastHighestPile.value) {
      let segmentValue = lastHighestPile.value * (Math.abs(i - lastHighestPile.pos) - pileWidth);
      totalValue += segmentValue - totalIntermediateCost(intermediateSteps);
      lastHighestPile.value = piles[i];
      lastHighestPile.pos = i;
      intermediateSteps = [];
    } else {
      intermediateSteps.push(piles[i])
    }
  }

  return { value: totalValue, pos: lastHighestPile.pos };
}

function totalIntermediateCost(intermediateSteps) {
  return intermediateSteps.reduce((totalCost, step) => totalCost + step, 0);
}
