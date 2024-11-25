interface Pair<T, U> {
  key: T;
  value: U;
}

const pair1: Pair<string, number> = { key: 'age', value: 25 };
const pair2: Pair<number, string> = { key: 1, value: 'one' };
