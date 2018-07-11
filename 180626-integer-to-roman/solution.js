const ROMAN = [
  { 1: 'I', 5: 'V' },
  { 1: 'X', 5: 'L' },
  { 1: 'C', 5: 'D' },
  { 1: 'M' },
];

const tests = {
  58: 'LVIII',
  2018: 'MMXVIII',
  1994: 'MCMXCIV',
  1494: 'MCDXCIV'
}

const testResult = Object.entries(tests)
  .every(testSet => testSet[1] === pureNumberToRoman(testSet[0], ROMAN));

console.log(`Result of the test: ${testResult ? 'ALL PASSED' : 'SOME FAILED'}`);

function pureNumberToRoman(number, ROMAN, romanString = '', currentDigit = 0) {
  const currentNumber = getCurrentNumber(number, currentDigit);
  if (isNaN(currentNumber)) { return romanString; }

  if (currentDigit >= 3) {
    const currentRomanString = ROMAN[3][1].repeat(currentNumber);
    return currentRomanString + romanString;
  }

  let currentRomanString = '';

  switch (currentNumber) {
    case 9: currentRomanString = ROMAN[currentDigit][1] + ROMAN[currentDigit + 1][1]; break;
    case 8:
    case 7:
    case 6:
    case 5: currentRomanString = ROMAN[currentDigit][5] + ROMAN[currentDigit][1].repeat(currentNumber - 5); break;
    case 4: currentRomanString = ROMAN[currentDigit][1] + ROMAN[currentDigit][5]; break;
    default: currentRomanString = ROMAN[currentDigit][1].repeat(currentNumber); break;
  }

  return pureNumberToRoman(number, ROMAN, currentRomanString + romanString, currentDigit + 1);
}

function getCurrentNumber(number, currentDigit) {
  const numberLength = String(number).length;
  const currentNumber = String(number).slice(numberLength - 1 - currentDigit, numberLength - currentDigit);
  return parseInt(currentNumber);
}

// function numberToRoman(number) {
//   const numberString = number.toString();
//   const lastPos = numberString.length - 1;
//   let returnRomanString = "";
//   let pos = 0;
//   while (pos <= lastPos) {
//     let partialRoman = "";
//     const currentDigit = numberString[lastPos - pos];
//     if (pos > 3) {
//       partialRoman = 'M'.repeat(parseInt(numberString.slice(0, lastPos - 3 + 1)));
//       pos = lastPos;
//     } else {
//       switch (currentDigit) {
//         case '4':
//           partialRoman = ROMAN[pos][1] + ROMAN[pos][5];
//           break;
//         case '9':
//           partialRoman = ROMAN[pos][1] + ROMAN[pos + 1][1];
//           break;
//         default:
//           const currentNumberDigit = parseInt(currentDigit);
//           if (currentDigit > 5) {
//             partialRoman = ROMAN[pos][5] + ROMAN[pos][1].repeat(currentNumberDigit - 5)
//           } else {
//             partialRoman = ROMAN[pos][1].repeat(currentNumberDigit)
//           }
//       }
//     }

//     pos++;
//     returnRomanString = partialRoman + returnRomanString;
//   }
//   return returnRomanString;
// }

// console.log(numberToRoman(20001));
