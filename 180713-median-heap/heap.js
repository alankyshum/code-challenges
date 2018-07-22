class Heap {
  constructor(srcArray, heapType) {
    this.heapType = heapType;
    this.heap = this.heapify(Array.from(srcArray));
  }

  depth() {
    this.heap.length;
  }

  extract() {
    return this.heap[0];
  }

  insert(value) {
    this.heap = this.heapify([...this.heap, value]);
  }

  heapify(valueList) {
    const vsParentFactor = this.heapType === 'max' ? 1 : -1;

    valueList.forEach((value, index) => {
      let parentIndex = this.parentIndex(index);

      while ((value - valueList[parentIndex]) * vsParentFactor > 0) {
        valueList[index] = valueList[parentIndex];
        valueList[parentIndex] = value;
        index = parentIndex;
        parentIndex = this.parentIndex(index);
      }
    });

    return valueList;
  }

  parentIndex(index) {
    const isLeftNode = !!(index % 2);
    return Math.max(0, (index - (isLeftNode ? 1 : 2))) / 2;
  }
}

export class MinHeap extends Heap {
  constructor(srcArray) {
    super(srcArray, 'min');
  }

  extractMin() { return this.extract(); }
}

export class MaxHeap extends Heap {
  constructor(srcArray) {
    super(srcArray, 'max');
  }

  extractMax() { return this.extract(); }
}
