function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

// Пример использования:
const person = { name: 'John' };
const details = { age: 30, city: 'New York' };

const merged = mergeObjects(person, details);
// merged будет содержать { name: 'John', age: 30, city: 'New York' }
