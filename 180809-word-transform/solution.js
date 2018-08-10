const WORD_LIST = getWordList();
const givenWord = {
  srcWord: "DAMP",
  targetWord: "LIKE",
  output: ["DAMP", "LAMP", "LIMP", "LIME", "LIKE"]
};

const CACHE = {};
const sequence = getSequence(
  givenWord.srcWord,
  getAvailableIndex(givenWord.srcWord.length - 1),
  givenWord.targetWord
);

console.log(sequence);

function getSequence(word, availableIndex, targetWord) {
  if (!doesWordExist(word)) return false;
  if (!availableIndex.length) return [word];

  const cachedSequence = getCache(availableIndex);
  if (typeof cachedSequence !== "undefined")
    return cachedSequence ? [word, ...cachedSequence] : false;

  for (let i = 0; i < availableIndex.length; i++) {
    const testIndex = availableIndex[i];
    const newWord = replaceAt(word, testIndex, targetWord[testIndex]);
    const remainingIndex = removeItem(availableIndex, testIndex);
    const nextSequence = getSequence(newWord, remainingIndex, targetWord);
    cache(remainingIndex, nextSequence);
    if (nextSequence) return [word, ...nextSequence];
  }

  return false;
}

function cache(availableIndex, sequence) {
  // space complexity: O(nC1 + nC2 + nC3 + ... + nCn = 2**n)
  CACHE[calculateCacheKey(availableIndex)] = sequence;
}

function getCache(availableIndex) {
  return CACHE[calculateCacheKey(availableIndex)];
}

function calculateCacheKey(availableIndex) {
  /*
    | index                 | value  |
    | [0]                   | 1      |
    | [0, 1]                | 2      |
    | [0, 2]                | 3      |
    | [1, 2]                | 4      |
  */
  return availableIndex.reduce(
    (summedValue, index) => summedValue + index + 1,
    0
  );
}

function getAvailableIndex(maxIndex) {
  const returnIndex = [];
  for (let i = 0; i <= maxIndex; returnIndex.push(i++));
  return returnIndex;
}

function removeItem(originalItemList, itemToBeDeleted) {
  const originalSet = new Set(originalItemList);
  originalSet.delete(itemToBeDeleted);
  return Array.from(originalSet);
}

function doesWordExist(word) {
  return binaryIndexOf.bind(WORD_LIST)(word.toLowerCase()) !== -1;
}

function binaryIndexOf(searchElement) {
  let minIndex = 0;
  let maxIndex = this.length - 1;
  let currentIndex;
  let currentElement;

  while (minIndex <= maxIndex) {
    currentIndex = ((minIndex + maxIndex) / 2) | 0;
    currentElement = this[currentIndex];

    if (currentElement < searchElement) {
      minIndex = currentIndex + 1;
    } else if (currentElement > searchElement) {
      maxIndex = currentIndex - 1;
    } else {
      return currentIndex;
    }
  }

  return -1;
}

function getWordList() {
  const wordListPath = require("word-list");
  const fs = require("fs");
  return fs.readFileSync(wordListPath, "utf8").split("\n");
}

function replaceAt(word, index, replacement) {
  return (
    word.substr(0, index) +
    replacement +
    word.substr(index + replacement.length)
  );
}
