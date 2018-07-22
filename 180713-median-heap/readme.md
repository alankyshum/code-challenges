<!-- excerpt -->
### Get the median of the array

(e.g.) given `[1, 4, 2, 5, 6]`, median is `4`

Possible solutions: AVL Tree, Max Heap + Min Heap, Sort then get median
<!-- /excerpt -->

#### Think Process

1. Define `Median`: Median = 50th percentile = value smaller than 50% of values, and larger than 50% of values
1. `median = min(half(givenArray))` or `median = max(half(givenArray))`
1. `minHeap` and `maxHeap` maintain these 2 data structures with ease.

#### Complexity

| Time Complexity | Space Complexity |
| --- | --- |
| * Each insertion to heap = `O(log(n))` <br/> * For all insertions `O(nlog(n))` | Maintaining 2 heaps, with each half the length of the given array = `O(n)` |
