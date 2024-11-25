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

