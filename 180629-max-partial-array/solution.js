const firstArray = [1, 5, 9];
const secondArray = [7, 5, 9, 0, 2, 1, 3, 5, 7, 9, 1, 1, 5, 8, 8, 9, 7];

console.log(main(firstArray, secondArray));

function main(targetItemList, srcItemList) {
  const purifiedSrcItemList = filterList(targetItemList, srcItemList);
  const allOccurrencePositions = purifiedSrcItemList.map((value, position) => value ? position : null).filter(position => position);
  let minCost = srcItemList.length;
  let optimalRange = [];

  allOccurrencePositions.forEach(position => {
    const valueOfPosition = srcItemList[position];
    const positionsRange = adjacentPositions(valueOfPosition, position, targetItemList, purifiedSrcItemList);
    const range = [Math.min(...positionsRange), Math.max(...positionsRange)];
    if ((range[1] - range[0]) < minCost) {
      minCost = range[1] - range[0];
      optimalRange = range;
    }
  });

  return optimalRange;
}

function filterList(targetItemList, srcItemList) {
  return srcItemList.map(srcItem => targetItemList.includes(srcItem) ? srcItem : null);
}

function adjacentPositions(targetValue, position, targetItemList, purifiedSrcItemList) {
  const foundPositions = {};
  let foundAllOthers = false;
  let left = position;
  let right = position;

  while (!foundAllOthers && !(left === 0 && right == purifiedSrcItemList.length - 1)) {
    left = Math.max(--left, 0);
    right = Math.min(++right, purifiedSrcItemList.length - 1);

    if (purifiedSrcItemList[left] && !foundPositions[left]) {
      foundPositions[purifiedSrcItemList[left]] = left;
    }

    if (purifiedSrcItemList[right] && !foundPositions[right]) {
      foundPositions[purifiedSrcItemList[right]] = right;
    }

    if (foundPositions[targetValue]) delete foundPositions[targetValue];
    foundAllOthers = Object.keys(foundPositions).length === targetItemList.length - 1;
  }

  return [...Object.values(foundPositions), position];
}
