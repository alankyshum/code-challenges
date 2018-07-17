<!-- excerpt -->
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

<!-- /excerpt -->

Reference:
https://www.geeksforgeeks.org/check-if-a-given-binary-tree-is-sumtree/

#### Caveat
`Current Node = Sum of all nodes in its subtrees`

#### Tests

```js
const tests = [
  { testArray: [26, 10, 3, 4, 6, null, 3], expected: true },
  { testArray: [20, 10, 0, 4, 6, null, null], expected: true },
  { testArray: [13, 10, 3, 4, 6, null, 3], expected: false },
  { testArray: [], expected: true },
  { testArray: [null, null, null], expected: true },
  { testArray: [9], expected: true },
  { testArray: [9, 9], expected: true },
];
```
