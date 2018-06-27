const ListNode = require('./given');

module.exports = function addTwoNumbers(number1, number2) {
  const sum = new ListNode(0);
  let sumHead = sum;

  while(number1 || number2) {
    // sums current digits of 2 numbers
    const valueSum = sumHead.val + (number1 ? number1.val : 0) + (number2 ? number2.val : 0);

    sumHead.val = valueSum % 10;
    if (valueSum >= 10 || (number1 && number1.next) || (number2 && number2.next)) {
      sumHead.next = new ListNode(valueSum >= 10 ? 1 : 0);
    }

    // cursor moves to next item in the number list
    number1 = number1 ? number1.next : null;
    number2 = number2 ? number2.next : null;

    // cursor moves to next digit sum
    sumHead = sumHead.next;
  }

  return sum;
}
