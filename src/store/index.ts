import { IPosition } from "@/types";
import { createStore } from "vuex";
import fillingModule from "./fillingModule";

export default createStore({
  state: {
    isModalOpen: false,
    totalAmount: 253252.0,
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
  getters: {},
  mutations: {
    deletePosition: (state, id: number) => {
      state.positions = state.positions.filter(
        (position: IPosition) => position._id !== id
      );
    },
    closeModal: (state) => {
      console.log('close')
      state.isModalOpen = false;
    },
    openModal: (state) => {
      console.log('open')
      state.isModalOpen = true;
    },
  },
  actions: {},
  modules: {
    filling: fillingModule,
  },
});
