interface ResponseData<T> {
  data: T;
  status: 'success' | 'error';
  message: string;
}


