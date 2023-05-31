import { Product } from './Product';

type Status = 200 | 201 | 400 | 401 | 404 | 500;

export type OrderRequest = {
  userId: number,
  productIds: number[]
};

type ServiceResponseSuccess = {
  status: Status;
  data: Product | string | OrderRequest;
  message: 'OK'
};

type ServiceResponseError = {
  status: Status;
  data: null,
  message: string
};

export type ServiceResponse = ServiceResponseSuccess | ServiceResponseError;