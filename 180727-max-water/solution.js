const input = [0, 0, 4, 0, 0, 6, 0, 0, 3, 0, 5, 0, 1, 0, 0, 0];
const expected = 36;

console.log(getTotalValue(input));

function getTotalValue(piles) {
  const left = totalValueAndLastPos(0, piles.length - 1, piles);
  const right = totalValueAndLastPos(piles.length - 1, left.pos, piles);
  return left.value + right.value;
}

function totalValueAndLastPos(startPos, lastPos, piles) {
  let lastHighestPile = { value: 0, pos: startPos };
  let totalValue = 0;
  let intermediateSteps = [];
  const step = (lastPos > startPos ? 1 : -1);

  for (let i = startPos; (lastPos - i) * step >= 0; i += step) {
    if (piles[i] >= lastHighestPile.value) {
      totalValue += lastHighestPile.value * Math.abs(i - lastHighestPile.pos) - totalIntermediateCost(intermediateSteps);
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
