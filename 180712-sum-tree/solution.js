class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

const tests = [
  { testArray: [26, 10, 3, 4, 6, null, 3], expected: true },
  { testArray: [20, 10, 0, 4, 6, null, null], expected: true },
  { testArray: [13, 10, 3, 4, 6, null, 3], expected: false },
  { testArray: [], expected: true },
  { testArray: [null, null, null], expected: true },
  { testArray: [9], expected: true },
  { testArray: [9, 9], expected: true },
];

const testRseult = tests.every(test => sumTree(nodeToTree(test.testArray)).isSumTree === test.expected);
console.log(testRseult ? 'All passed' : 'Some failed');

function nodeToTree(valueList, currentIndex = 0, tree = new Node(valueList[0])) {
  const leftNode = new Node(valueList[2 * currentIndex + 1]);
  const rightNode = new Node(valueList[2 * currentIndex + 2]);
  if (leftNode.data) tree.left = nodeToTree(valueList, 2 * currentIndex + 1, leftNode);
  if (rightNode.data) tree.right = nodeToTree(valueList, 2 * currentIndex + 2, rightNode);

  return tree;
}

function sumTree(tree) {
  if (!tree) return { sum: 0, isSumTree: true };
  const selfNodeValue = (tree.data || 0);
  if (!tree.left && !tree.right) return { sum: selfNodeValue, isSumTree: true };

  return {
    sum: selfNodeValue + sumTree(tree.left).sum + sumTree(tree.right).sum,
    isSumTree: (selfNodeValue === sumTree(tree.left).sum + sumTree(tree.right).sum)
      && sumTree(tree.left).isSumTree
      && sumTree(tree.right).isSumTree,
  };
}
