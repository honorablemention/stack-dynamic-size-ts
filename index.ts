import Stack from './stack';

// Example usage
try {
  const exampleStack = new Stack<number>();
  console.log(exampleStack.push(1)); // [1]
  console.log(exampleStack.push(2)); // [1,2]
  console.log(exampleStack.push(4)); // [1,2,4]
  console.log(exampleStack.peekTop()); // 4
  console.log(exampleStack.peekBottom()); // 1
  console.log(exampleStack.push(5)); // [1,2,4,5]
  console.log(exampleStack.peekTop()); // 5
  console.log(exampleStack.push(6)); // [1,2,4,5,6]
  console.log(exampleStack.pop()); // 6
  console.log(exampleStack.pop()); // 5
  console.log(exampleStack.pop()); // 4
  console.log(exampleStack.pop()); // 3
  console.log(exampleStack.pop()); // 2
  console.log(exampleStack.pop()); // 1
  console.log(exampleStack.pop()); // 0
} catch (e) {
  console.error(e.message);
}
