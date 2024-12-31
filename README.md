# Async function with await in for loop doesn't print numbers sequentially
This repository contains a TypeScript example demonstrating an uncommon issue related to async/await within a for loop.  The code intends to print numbers sequentially with a one-second delay between each number, but instead, the output is unexpected and out of order.

The bug showcases the importance of understanding how async/await interacts with loops and the asynchronous nature of JavaScript. The solution demonstrates a corrected approach to achieve the intended sequential output.

## Bug Description
The `asyncPrintNumbers` function attempts to print numbers 1 through n with a 1-second delay between each number using `await`. However, the output is not sequential, and numbers appear in a seemingly random order.

## Bug Solution
The solution demonstrates a corrected approach using `async`/`await` to ensure the sequential output with delays. The key lies in the understanding and handling of the asynchronous operations.

## How to Reproduce
1. Clone this repository.
2. Open `bug.ts` to see the buggy implementation.
3. Open `bugSolution.ts` to see the fixed implementation.
4. Compile and run both files using a TypeScript compiler (tsc) and a Node.js runtime.
5. Observe the differences in output between the bug and the solution.