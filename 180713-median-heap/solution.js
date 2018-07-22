import { MinHeap, MaxHeap } from './heap';
const testArray = [1, 4, 2, 3, 5, 3, 5, 6, 1, 2, 4, 1, 2, 4];

console.log('Sort then get the median: ', sortThenGetMedian(testArray));
console.log('Get Median by minHeap + maxHeap: ', getMedianFromHeaps(testArray));

function getMedianFromHeaps(srcArray) {
  const minHeap = new MinHeap([]);
  const maxHeap = new MaxHeap([]);

  srcArray.forEach((value, index) => {
    if (!!(index % 2)) {
      minHeap.insert(value);
    } else {
      maxHeap.insert(value);
    }
  });

  if (minHeap.depth() === maxHeap.depth()) {
    return Math.ceil((maxHeap.extractMax() + minHeap.extractMin()) / 2);
  }

  if (minHeap.depth() > maxHeap.depth()) {
    return minHeap.extractMin();
  } else {
    return maxHeap.extractMax();
  }
}

function sortThenGetMedian(array) {
  const sortedList = array.sort((v1, v2) => v1 - v2);
  const medianIndex = (sortedList.length - 1) / 2;
  if (sortedList.length % 2) return sortedList[medianIndex];
  return (sortedList[Math.floor(medianIndex)] + sortedList[Math.floor(medianIndex) + 1]) / 2;
}
