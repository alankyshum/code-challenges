export default class Cache {
  static cacheStorage = {};

  static cache(availableIndex, sequence) {
    // space complexity: O(nC1 + nC2 + nC3 + ... + nCn = 2**n)
    Cache.cacheStorage[Cache.calculateCacheKey(availableIndex)] = sequence;
  }

  static getCache(availableIndex) {
    return Cache.cacheStorage[Cache.calculateCacheKey(availableIndex)];
  }

  static cacheWord(word, result) {
    Cache.cacheStorage[word] = result;
  }

  static getCachedWord(word) {
    return Cache.cacheStorage[word];
  }

  static calculateCacheKey(availableIndex) {
    /*
      | index                 | value  |
      | [0]                   | 1      |
      | [0, 1]                | 2      |
      | [0, 2]                | 3      |
      | [1, 2]                | 4      |
    */
    return availableIndex.reduce((summedValue, index) => summedValue + index + 1, 0);
  }
}
