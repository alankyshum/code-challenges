<!-- excerpt -->
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
<!-- /excerpt -->

### Retrospective:
1. **Stay in a dark corner, curl your whole body, focus on the laptop**
    - Avoid distractions
1. Dry Run on paper
    - Is it recursive function?
        - if so, what's the **exit condition**?
        - how's the **result determined**?
    - What pattern did you observe?

### Thought process
```js
// for example, in context of this example
const magicNumber = 2;
const numbers = [1, 2, 3, 4];
```
1. Dry run on paper, draw it out
1. How's the result in the last iterations determined?
    - i.e. last number, `4`, with `sum` from previous calculations
    ```js
    const canBeCalculatedByAdd = canBeCalculated(magicNumber, numbers, sum, numberIndex + 1, 1);
    const canBeCalculatedByDeduction = canBeCalculated(magicNumber, numbers, sum, numberIndex + 1, -1);
    return (canBeCalculatedByAdd || canBeCalculatedByDeduction);
    ```
1. When to exit?
    - i.e. when last number `4` is being evaluated
    ```js
    if (numberIndex === numbers.length - 1) return sum === magicNumber;
    ```
1. You are already 80% done, now consider the parameters you need for the function `canBeCalculated(...)`.
