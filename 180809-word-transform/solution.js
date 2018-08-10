const WORD_LIST = getWordList();
const givenWord = {
  srcWord: 'DAMP',
  targetWord: 'LIKE',
  output: ['DAMP', 'LAMP', 'LIMP', 'LIME', 'LIKE'],
}

const sequence = getSequence(givenWord.srcWord, getAvailableIndex(givenWord.srcWord.length - 1), givenWord.targetWord);
console.log(sequence);

function getSequence(word, availableIndex, targetWord) {
  if (!doesWordExist(word)) return false;
  if (!availableIndex.length) return [word];

  for (let i = 0; i < availableIndex.length; i++) {
    const testIndex = availableIndex[i];
    const newWord = replaceAt(word, testIndex, targetWord[testIndex]);
    const remainingIndex = removeItem(availableIndex, testIndex);
    const nextSequence = getSequence(newWord, remainingIndex, targetWord);
    if (nextSequence) return [word, ...nextSequence];
  }

  return false;
}

function getAvailableIndex(maxIndex) {
  const returnIndex = [];
  for(let i = 0; i <= maxIndex; returnIndex.push(i++));
  return returnIndex;
}

function removeItem(originalItemList, itemToBeDeleted) {
  const originalSet = new Set(originalItemList);
  originalSet.delete(itemToBeDeleted);
  return Array.from(originalSet);
}

function doesWordExist(word) {
  return WORD_LIST.includes(word.toLowerCase());
}

function getWordList() {
  const wordListPath = require('word-list');
  const fs = require('fs');
  return fs.readFileSync(wordListPath, 'utf8').split('\n');
}

function replaceAt(word, index, replacement) {
  return word.substr(0, index) + replacement+ word.substr(index + replacement.length);
}
