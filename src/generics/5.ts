function getLastElement<T>(arr: T[]): T | undefined {
  return arr[arr.length - 1];
}

// Пример использования:
const numbers = [1, 2, 3];
const lastNumber = getLastElement(numbers); // 3

const words = ['apple', 'banana', 'cherry'];
const lastWord = getLastElement(words); // 'cherry'
