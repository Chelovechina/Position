<template>
  <div v-if="isModalOpen">
    <div @click="$store.commit('closeModal')" class="fixed top-0 left-0 h-[100vh] w-[100vw] bg-black opacity-40"></div>
    <div class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-50 rounded-lg p-5">
      <h3 class="text-center text-xl font-medium text-blue-700 mb-4">
        {{ isNew ? "Create New Position" : "Change Position" }}
      </h3>
      <div class="flex gap-4 mb-2">
        <div class="flex flex-col w-[200px]">
          <label class="text-sm text-gray-700" for="currency">Currency:</label>
          <select @change="changeCurrencyId" class="w-full bg-blue-50 border-[1px] rounded border-gray-600 p-2"
            name="currency" id="currency">
            <options-list :options="currencies" :activeOption="currentPosition.currencyId" />
          </select>
        </div>
        <div class="flex flex-col w-[200px]">
          <label class="text-sm text-gray-700" for="amount">Amount:</label>
          <input class="w-full bg-blue-50 border-[1px] rounded border-gray-600 p-1.5" name="amount" id="amount"
            type="number" :value="currentPosition.amount" @change="changeAmount" />
        </div>
      </div>
      <div class="flex gap-4 mb-2">
        <div class="flex flex-col w-[200px]">
          <label class="text-sm text-gray-700" for="account">Account Number:</label>
          <select @change="changeAccountNumberId" class="w-full bg-blue-50 border-[1px] rounded border-gray-600 p-2"
            name="account" id="account">
            <options-list :options="accounts" :activeOption="currentPosition.accountNumberId" />
          </select>
        </div>
        <div class="flex flex-col w-[200px]">
          <label class="text-sm text-gray-700" for="payment">Payment Method:</label>
          <select @change="changePaymentId" class="w-full bg-blue-50 border-[1px] rounded border-gray-600 p-2"
            name="payment" id="payment">
            <options-list :options="payments" :activeOption="currentPosition.paymentId" />
          </select>
        </div>
      </div>
      <div class="flex gap-4 mb-2">
        <div class="flex flex-col w-full">
          <label class="text-sm text-gray-700" for="description">Description:</label>
          <input @change="changeDescription" class="w-full bg-blue-50 border-[1px] rounded border-gray-600 p-1.5"
            :value="currentPosition.description" type="text" name="description" id="description" />
        </div>
      </div>
      <div class="flex justify-center gap-3 mt-4">
        <button @click="$store.commit('closeModal')"
          class="w-[80px] bg-red-500 rounded py-1 text-center text-white font-medium">
          Cancel
        </button>
        <button @click="
          $store.commit('addPosition', $store.state.creating.currentPosition)
          " class="w-[80px] bg-green-500 rounded py-1 text-center text-white font-medium">
          Save
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import store from "@/store";
import { defineComponent } from "vue";
import { mapState } from "vuex";
import OptionsList from "./OptionsList.vue";

export default defineComponent({
  components: { OptionsList },
  computed: {
    ...mapState({
      isModalOpen: (state: any) => state.creating.isModalOpen,
      isNew: (state: any) => state.creating.isNew,
      currentPosition: (state: any) => state.creating.currentPosition,
      currencies: (state: any) => state.filling.currencies,
      accounts: (state: any) => state.filling.accounts,
      payments: (state: any) => state.filling.payments,
    }),
  },
  methods: {
    changeCurrencyId(event: any) {
      store.commit("changeCurrencyId", Number(event.target.value));
    },
    changeAccountNumberId(event: any) {
      store.commit("changeAccountNumberId", Number(event.target.value));
    },
    changePaymentId(event: any) {
      store.commit("changePaymentId", Number(event.target.value));
    },
    changeAmount(event: any) {
      store.commit("changeAmount", Number(event.target.value));
    },
    changeDescription(event: any) {
      store.commit("changeDescription", event.target.value);
    },
  },
});
</script>
