<!-- excerpt -->
### Transform wordA to wordB

> Given two words of equal length that are in a dictionary, write a method to transform one word into another word by changing only one letter at a time. The new word you get in each step must be in the dictionary.

```
Input: DAMP, LIKE
Output: DAMP -> LAMP -> LIMP -> LIME -> LIKE
```
<!-- /excerpt -->

#### Ideas

**Brute Force Solution**
    - Try out all possible combinations, and check from dictionary

(e.g.)
```
                                  +--->
                                  |
                                  +--->
                                  |
                                  |
                    +---> 1: LIMP +   +--->
                    |                 |
                    +---> 2: LAKP +---+--->          +--->
                    |                                |
                    +---> 3: LAME +------------------+--->
     +----> 0: LAMP +
     |                                +---+--->
     +----> 1: DIMP +----+--> 0: LIMP +   |
DAMP |                   |                +--->
     +----> 2: DAKP      +--> 2: DIKP
     |                   |
     +----> 3: DAME +    +--> 3: DIME
                    |
                    |
                    +----+--> 0: LAME
                         |
                         +--> 1: DIME
                         |
                         +--> 2: DAKE
```

```
n = word.length
```

#### Complexity Analysis

Space Complexity: `O()`
- Caching Referenced Words: `O(2 ^ n)`
- Caching Sequence: `O(2 ^ n)`
    - Total number of distinct combinations = `2 ^ n - 1`
    - `[0], [1], [2], [3], [0, 1], [0, 2], [1, 2], [0, 1, 2]`

Time Complexity: `O(n2^n)`
- Looking for a word from a dictionary with all words having the same width using binary search:
    - Total number of items in the dictionary = `26 ^ n`
    - Binary search time = `log(26 ^ n) = nlog(26)`
- For all word search: `(2 ^ n - 1) * nlog(26) = O(n * 2 ^ n)`
