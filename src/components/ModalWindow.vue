<template>
  <div class="absolute top-0 left-0 h-[100vh] w-[100vw] bg-black opacity-40"></div>
  <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-50 rounded-lg p-5">
    <h3 class="text-center text-xl font-medium text-blue-700 mb-4">
      Create New Position
    </h3>
    <div class="flex gap-4 mb-2">
      <div class="flex flex-col w-[200px]">
        <label class="text-sm text-gray-700" for="currency">Currency:</label>
        <select class="w-full bg-blue-50 border-[1px] rounded border-gray-600 p-2" name="currency" id="currency">
          <OptionsList :options="$store.state.filling.currencies" />
        </select>
      </div>
      <div class="flex flex-col w-[200px]">
        <label class="text-sm text-gray-700" for="amount">Amount:</label>
        <input class="w-full bg-blue-50 border-[1px] rounded border-gray-600 p-1.5" name="amount" id="amount"
          type="number" value="0" />
      </div>
    </div>
    <div class="flex gap-4 mb-2">
      <div class="flex flex-col w-[200px]">
        <label class="text-sm text-gray-700" for="account">Account Number:</label>
        <select class="w-full bg-blue-50 border-[1px] rounded border-gray-600 p-2" name="account" id="account">
          <OptionsList :options="$store.state.filling.accounts" />
        </select>
      </div>
      <div class="flex flex-col w-[200px]">
        <label class="text-sm text-gray-700" for="payment">Payment Method:</label>
        <select class="w-full bg-blue-50 border-[1px] rounded border-gray-600 p-2" name="payment" id="payment">
          <OptionsList :options="$store.state.filling.payments" />
        </select>
      </div>
    </div>
    <div class="flex gap-4 mb-2">
      <div class="flex flex-col w-full">
        <label class="text-sm text-gray-700" for="description">Description:</label>
        <input class="w-full bg-blue-50 border-[1px] rounded border-gray-600 p-1.5" type="text" name="description"
          id="description" />
      </div>
    </div>
    <div class="flex justify-center gap-3 mt-4">
      <button class="w-[80px] bg-red-500 rounded py-1 text-center text-white font-medium">
        Cancel
      </button>
      <button class="w-[80px] bg-green-500 rounded py-1 text-center text-white font-medium">
        Save
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import OptionsList from "./OptionsList.vue";
</script>
