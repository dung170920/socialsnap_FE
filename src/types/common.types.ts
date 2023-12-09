export interface ApiResponse<T> {
  message: string;
  errors?: {
    [key: string]: string;
  };
  result?: T;
}
