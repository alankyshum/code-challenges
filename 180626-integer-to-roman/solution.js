const romanDigits = [
  { 1: 'I', 5: 'V' },
  { 1: 'X', 5: 'L' },
  { 1: 'C', 5: 'D' },
  { 1: 'M' },
];

function numberToRoman(number) {
  const numberString = number.toString();
  const lastPos = numberString.length - 1;
  let returnRomanString = "";
  let pos = 0;
  while (pos <= lastPos) {
    let partialRoman = "";
    const currentDigit = numberString[lastPos - pos];
    if (pos > 3) {
      partialRoman = 'M'.repeat(parseInt(numberString.slice(0, lastPos - 3 + 1)));
      pos = lastPos;
    } else {
      switch (currentDigit) {
        case '4':
          partialRoman = romanDigits[pos][1] + romanDigits[pos][5];
          break;
        case '9':
          partialRoman = romanDigits[pos][1] + romanDigits[pos + 1][1];
          break;
        default:
          const currentNumberDigit = parseInt(currentDigit);
          if (currentDigit > 5) {
            partialRoman = romanDigits[pos][5] + romanDigits[pos][1].repeat(currentNumberDigit - 5)
          } else {
            partialRoman = romanDigits[pos][1].repeat(currentNumberDigit)
          }
      }
    }

    pos++;
    returnRomanString = partialRoman + returnRomanString;
  }
  return returnRomanString;
}

console.log(numberToRoman(20001));
