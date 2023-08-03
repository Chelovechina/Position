import { ICurrency, IPosition } from "@/types";
import { createStore } from "vuex";
import fillingModule from "./fillingModule";

export default createStore({
  state: {
    positions: [
      {
        _id: 1,
        currencyId: 1,
        amount: 2500,
        accountNumberId: 1,
        paymentId: 1,
        description:
          "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
      },
      {
        _id: 2,
        currencyId: 2,
        amount: 3500,
        accountNumberId: 2,
        paymentId: 2,
        description:
          "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
      },
    ],
  },
  getters: {
    getTotalAmount(state: any) {
      const currencies = state.filling.currencies;

      const totalAmount = state.positions.reduce(
        (acc: number, position: IPosition) => {
          const currency = currencies.find(
            (currency: ICurrency) => currency._id === position.currencyId
          );
          acc += Number(position.amount) * currency.toEur;
          return acc;
        },
        0
      );

      return totalAmount;
    },
  },
  mutations: {
    deletePosition: (state: any, id: number) => {
      state.positions = state.positions.filter(
        (position: IPosition) => position._id !== id
      );
    },
    savePosition: (state: any, newPosition: IPosition) => {
      const index = state.positions.findIndex(
        (position: IPosition) => position._id === newPosition._id
      );
      index !== -1
        ? (state.positions[index] = newPosition)
        : state.positions.push(newPosition);
    },
  },
  actions: {},
  modules: {
    filling: fillingModule,
  },
});
