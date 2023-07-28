import { ICreatingState, IPosition } from "@/types";

export default {
  namespace: true,

  state: {
    isModalOpen: false,
    isNew: true,
    currentPosition: {
      _id: Date.now(),
      currencyId: 1,
      amount: 0,
      accountNumberId: 1,
      paymentId: 1,
      description: "",
    },
  },
  getters: {},
  mutations: {
    closeModal: (state: ICreatingState) => {
      state.isModalOpen = false;
    },
    openCreatingModal: (state: ICreatingState) => {
      const newPosition = {
        _id: Date.now(),
        currencyId: 1,
        amount: 0,
        accountNumberId: 1,
        paymentId: 1,
        description: "",
      };

      state.currentPosition = newPosition;
      state.isModalOpen = true;
      state.isNew = true;
    },
    openChangingModal: (state: ICreatingState, position: IPosition) => {
      state.currentPosition = position;
      state.isModalOpen = true;
      state.isNew = false;
    },
    changeCurrencyId: (state: ICreatingState, id: number) => {
      state.currentPosition.currencyId = id;
    },
    changeAccountNumberId: (state: ICreatingState, id: number) => {
      state.currentPosition.accountNumberId = id;
    },
    changePaymentId: (state: ICreatingState, id: number) => {
      state.currentPosition.paymentId = id;
    },
    changeDescription: (state: ICreatingState, description: string) => {
      state.currentPosition.description = description;
    },
    changeAmount: (state: ICreatingState, amount: number) => {
      state.currentPosition.amount = amount;
    },
  },
  actions: {},
  modules: {},
};
