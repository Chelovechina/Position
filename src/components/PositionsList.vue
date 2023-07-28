<template>
  <div class="flex flex-col items-center gap-4 p-4 rounded-lg bg-blue-200 w-[350px]"
    v-for="position in $store.state.positions">
    <h4 class="bg-blue-500 text-white font-medium px-2.5 py-1.5 rounded">
      Position {{ position._id }}
    </h4>

    <div class="flex flex-col gap-1">
      <div class="flex flex-col items-center">
        <p class="font-medium">Currency:</p>
        <p>{{ $store.getters.getCurrency(position.currencyId).caption }}</p>
      </div>
      <div class="flex flex-col items-center">
        <p class="font-medium">Amount:</p>
        <p>{{ position.amount }}</p>
      </div>
      <div class="flex flex-col items-center">
        <p class="font-medium">Account Number:</p>
        <p>
          {{
            $store.getters.getAccountNumber(position.accountNumberId)
              .accountNumber
          }}
          -
          {{
            $store.getters.getAccountNumber(position.accountNumberId).caption
          }}
        </p>
      </div>
      <div class="flex flex-col items-center">
        <p class="font-medium">Payment Method:</p>
        <p>{{ $store.getters.getPaymentMethod(position.paymentId).caption }}</p>
      </div>
      <div class="flex flex-col items-center">
        <p class="font-medium">Description:</p>
        <p>{{ position.description }}</p>
      </div>
    </div>

    <div class="flex gap-3">
      <button @click="$store.commit('deletePosition', position._id)"
        class="w-[80px] bg-red-500 rounded py-1 text-center text-white font-medium">
        Delete
      </button>
      <button @click="$store.commit('openChangingModal', position)"
        class="w-[80px] bg-blue-500 rounded py-1 text-center text-white font-medium">
        Change
      </button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
