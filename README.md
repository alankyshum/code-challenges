# Code Challenges
My Personal collections of coding brain teasers 💥
## 7/21/2018 - missing values 

### Find Missing value

> You are given an array with all the numbers from 1 to N appearing exactly once, except for one number that is missing. How can you find the missing number in O(N) time and O(1) space? What if there were two numbers missing?

## 7/13/2018 - median heap 

### Get the median of the array

(e.g.) given `[1, 4, 2, 5, 6]`, median is `4`

Possible solutions: AVL Tree, Max Heap + Min Heap, Sort then get median
## 7/12/2018 - sum tree 

### Sum Tree
> Return boolean value if the tree is a sum tree

Example of sumtree
```
          26
        /   \
      10     3
    /    \     \
  4      6      3
```

## 7/8/2018 - arithmetic boggle 

### Arithmetic Boggle

> Write a function that takes a magic number and a list of numbers. It returns true if it can insert add or subtract operations in the list of numbers to get the magic number. Otherwise, it returns false.
#### For example:
```
f(10, [1,2]) = false # There's no way to add or subtract 1 and 2 to get 10.
f(2, [1,2,3,4]) = true # 1 + 2 + 3 - 4 = 2.
f(0, []) = true
f(1, []) = false
f(1, [1]) = true
f(0, [1]) = false
```
## 6/29/2018 - max partial array 

### shortest sub-sequence

```javascript
const firstArray = [1, 5, 9];
const secondArray = [7, 5, 9, 0, 2, 1, 3, 5, 7, 9, 1, 1, 5, 8, 8, 9, 7];

const solution = findShortestPathOfOverlap(firstsArray, secondArray); // [7, 10], or [9, 12]
```
## 6/26/2018 - integer to roman 

### Integer to Roman

> Generate roman representation of any integer number
## 6/22/2018 - max revenue hair dresser 

### Hair Dresser Max Income

> An array of charges for hair dressing is given, and the hair dresser cannot take 2 jobs consecutively
>
> (e.g.) Can take job 0 and job 2, but not job 0 -> job 1
>
> i.e. 30 -> 15, or 30 -> 90, but not 30 -> 45
## 6/20/2018 - sum two numbers 

### Add Two Numbers

- https://leetcode.com/problems/add-two-numbers/description/

> You are given two **non-empty** linked lists representing two non-negative integers. The digits are stored in **reverse order** and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
