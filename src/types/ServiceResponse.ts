import { Product } from './Product';

type Status = 200 | 201 | 400 | 401 | 404 | 500;

type ServiceResponseSuccess = {
  status: Status;
  data: Product | string;
  message: 'OK'
};

type ServiceResponseError = {
  status: Status;
  data: null,
  message: string
};

export type ServiceResponse = ServiceResponseSuccess | ServiceResponseError;