<!-- excerpt -->
### Find Missing value

> You are given an array with all the numbers from 1 to N appearing exactly once, except for one number that is missing. How can you find the missing number in O(N) time and O(1) space? What if there were two numbers missing?
<!-- /excerpt -->

#### Solutions
- given an array from 1 to n, there are immediately 2 equality comes in mind
- Sum of all number (1) and Product of all numbers (2)
- Meaning that you can solve 2 unknowns among all those numbers

(1) Sum of all numbers = `n(n+1)/2`
(2) Product of all numbers = `n!`

#### Step 2 - assume 2 unknowns, `x`, and `y`

- let `A = sum all known numbers`, `A + x + y = (1)`
    - `x + y = (1) - A`

- let `B = product of all known numbesr`, `A * x * y = (2)`
    - `x * y = (2) / B`
