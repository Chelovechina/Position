import {
  IAccountNumber,
  ICurrency,
  IFillingState,
  IPaymentMethod,
} from "@/types";

export default {
  namespace: true,

  state: {
    currencies: [
      {
        _id: 1,
        caption: "EUR",
        toEur: 1,
      },
      {
        _id: 2,
        caption: "USD",
        toEur: 0.9,
      },
      {
        _id: 3,
        caption: "TRY",
        toEur: 0.033,
      },
      {
        _id: 4,
        caption: "KGS",
        toEur: 0.01,
      },
      {
        _id: 5,
        caption: "CHY",
        toEur: 0.13,
      },
      {
        _id: 6,
        caption: "JPY",
        toEur: 0.0064,
      },
      {
        _id: 7,
        caption: "GBP",
        toEur: 1.17,
      },
      {
        _id: 8,
        caption: "CAD",
        toEur: 0.68,
      },
      {
        _id: 9,
        caption: "IDR",
        toEur: 0.00006,
      },
      {
        _id: 10,
        caption: "KZT",
        toEur: 0.002,
      },
    ],
    accounts: [
      {
        _id: 1,
        caption: "Microsoft",
        accountNumber: 25216125,
      },
      {
        _id: 2,
        caption: "Google",
        accountNumber: 76512642,
      },
      {
        _id: 3,
        caption: "Meta",
        accountNumber: 92538215,
      },
    ],
    payments: [
      {
        _id: 1,
        caption: "Credit Card",
      },
      {
        _id: 2,
        caption: "Bank Transfer",
      },
      {
        _id: 3,
        caption: "Cash",
      },
    ],
  },
  getters: {
    getCurrency: (state: IFillingState) => (id: number) => {
      return state.currencies.find(
        (currency: ICurrency) => currency._id === id
      );
    },
    getAccountNumber: (state: IFillingState) => (id: number) => {
      return state.accounts.find(
        (accountNumber: IAccountNumber) => accountNumber._id === id
      );
    },
    getPaymentMethod: (state: IFillingState) => (id: number) => {
      return state.payments.find(
        (paymentMethod: IPaymentMethod) => paymentMethod._id === id
      );
    },
  },
  mutations: {},
  actions: {},
  modules: {},
};
