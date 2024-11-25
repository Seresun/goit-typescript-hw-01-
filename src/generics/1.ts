function getValue<T>(value: T): T {
  return value;
}

// Пример использования:
const numberValue = getValue<number>(42); // Вернет 42
const stringValue = getValue<string>('Hello'); // Вернет 'Hello'
