class DataCollection<T> {
  private items: T[] = [];

  addItem(item: T): void {
    this.items.push(item);
  }

  getItem(index: number): T | undefined {
    return this.items[index];
  }

  getAllItems(): T[] {
    return this.items;
  }
}

// Пример использования:
const stringCollection = new DataCollection<string>();
stringCollection.addItem('Hello');
stringCollection.addItem('World');
console.log(stringCollection.getAllItems()); // ['Hello', 'World']

const numberCollection = new DataCollection<number>();
numberCollection.addItem(1);
numberCollection.addItem(42);
console.log(numberCollection.getAllItems()); // [1, 42]
