export interface IPosition {
  _id: number;
  currencyId: number;
  amount: number;
  accountNumberId: number;
  paymentId: number;
  description: string;
}

export interface ICurrency {
  _id: number;
  caption: string;
  toEur: number;
}

export interface IAccountNumber {
  _id: number;
  caption: string;
  accountNumber: number;
}

export interface IPaymentMethod {
  _id: number;
  caption: string;
}

export interface IFillingState {
  currency: ICurrency[];
  accountNumber: IAccountNumber[];
  paymentMethod: IPaymentMethod[];
}
