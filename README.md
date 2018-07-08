# code-challenges
My Personal collections of coding brain teasers 💥
## 180620 sum two numbers 

### Add Two Numbers

- https://leetcode.com/problems/add-two-numbers/description/

> You are given two **non-empty** linked lists representing two non-negative integers. The digits are stored in **reverse order** and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
## 180622 max revenue hair dresser 

### Hair Dresser Max Income

> An array of charges for hair dressing is given, and the hair dresser cannot take 2 jobs consecutively
>
> (e.g.) Can take job 0 and job 2, but not job 0 -> job 1
>
> i.e. 30 -> 15, or 30 -> 90, but not 30 -> 45
## 180626 integer to roman 

### Integer to Roman

> Generate roman representation of any integer number
## 180629 max partial array 

### shortest sub-sequence

```javascript
const firstArray = [1, 5, 9];
const secondArray = [7, 5, 9, 0, 2, 1, 3, 5, 7, 9, 1, 1, 5, 8, 8, 9, 7];

const solution = findShortestPathOfOverlap(firstsArray, secondArray); // [7, 10], or [9, 12]
```
## 180708 arithmetic boggle 

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
