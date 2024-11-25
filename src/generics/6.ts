interface ResponseData<T> {
  data: T;
  status: 'success' | 'error';
  message: string;
}

// Пример использования:
const userResponse: ResponseData<{ id: number; name: string }> = {
  data: { id: 1, name: 'John' },
  status: 'success',
  message: 'User fetched successfully',
};

const errorResponse: ResponseData<null> = {
  data: null,
  status: 'error',
  message: 'Failed to fetch user',
};
