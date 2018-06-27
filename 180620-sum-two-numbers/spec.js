const addTwoNumbers = require('./solution');
const ListNode = require('./given');

runTest();

function runTest() {
  const tests = [
    { lists: [[2, 4, 3], [5, 6]], expected: [7, 0, 4] },
    { lists: [[9, 9], [9]], expected: [8, 0, 1] },
    { lists: [[9, 9, 9], [9, 9, 9]], expected: [8, 9, 9, 1] },
    { lists: [[0], [0]], expected: [0] },
    { lists: [[9], [1]], expected: [0, 1] },
    { lists: [[0], [7, 3]], expected: [7, 3] },
  ];

  tests.forEach((test, testIndex) => {
    const l1 = numberToLinkedList(test.lists[0]);
    const l2 = numberToLinkedList(test.lists[1]);
    const passed = compareArray(test.expected, listToArray(addTwoNumbers(l1, l2)));
    console.log(`${testIndex} test ${passed ? 'passed' : 'failed'}`);

    return passed;
  });
}

function compareArray(arr1, arr2) {
  return arr1.every((arr1Item, arr1Index) => arr1Item === arr2[arr1Index]);
}

function numberToLinkedList(srcArray) {
  const list = new ListNode(0);
  let listHead = list;

  srcArray.forEach((number, i) => {
    listHead.val = number;
    if (i < srcArray.length - 1) {
      listHead.next = new ListNode(0);
      listHead = listHead.next;
    }
  });

  return list;
}

function listToArray(list) {
  let listHead = list;
  const returnArray = [listHead.val];

  while (listHead.next) {
    listHead = listHead.next;
    returnArray.push(listHead.val);
  }

  return returnArray;
}
