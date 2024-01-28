/**
 * Basic generic/template Stack implementation with a few caveats:
 *  1. Uses JS Array with dynamic size
 *  2. Provides two peek functions:
 *     a. peekTop - get the top item of the stack
 *     b. peekBottom - get the bottom item of the stack
 *  3. Throws error on pop, peekTop, peekBottom if Stack is empty
 *  4. Returns the Stack on push(...) to chain push operations
 */

class Stack<T> {
  private data: T[] = [];

  private isEmpty(): boolean {
    return this.data.length === 0;
  }

  public push(data: T): Stack<T> {
    this.data.push(data);
    return this;
  }

  public pop(): T {
    if (this.isEmpty()) throw new Error('Stack is empty');
    return this.data.pop();
  }

  public peekTop(): T {
    if (this.isEmpty()) throw new Error('Stack is empty');
    return this.data[this.data.length - 1];
  }

  public peekBottom(): T {
    if (this.isEmpty()) throw new Error('Stack is empty');
    return this.data[0];
  }
}

export default Stack;
