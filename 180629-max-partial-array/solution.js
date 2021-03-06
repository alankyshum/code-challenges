const firstArray = [1, 5, 9];
const secondArray = [7, 5, 9, 0, 2, 1, 3, 5, 7, 9, 1, 1, 5, 8, 8, 9, 7];

console.log(main(firstArray, secondArray));

function main(targetItemList, srcItemList) {
  const purifiedSrcItemList = filterList(targetItemList, srcItemList);
  let minCost = srcItemList.length;
  let optimalRange = [];

  const rarestItemPositions = rarestItemOccurrence(targetItemList, srcItemList);
  // O(number of occurrence of the rarest item of target item list in source item list)
  rarestItemPositions.forEach(position => {
    const valueOfPosition = srcItemList[position];
    // O(number of itmes in source item list)
    const positionsRange = adjacentPositions(valueOfPosition, position, targetItemList, purifiedSrcItemList);
    const range = [Math.min(...positionsRange), Math.max(...positionsRange)];
    if ((range[1] - range[0]) < minCost) {
      minCost = range[1] - range[0];
      optimalRange = range;
    }
  });

  return optimalRange;
}

function rarestItemOccurrence(targetItemList, srcItemList) {
  const occurencePositions = {};

  srcItemList.forEach((srcItem, position) => {
    if (targetItemList.includes(srcItem)) {
      occurencePositions[srcItem] = occurencePositions[srcItem] || [];
      occurencePositions[srcItem].push(position);
    }
  });

  let minCost = srcItemList.length;
  let rarestItemPositions = [];

  Object.values(occurencePositions).forEach(positions => {
    if (positions.length < minCost) {
      minCost = positions.length;
      rarestItemPositions = positions;
    }
  });

  return rarestItemPositions;
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
