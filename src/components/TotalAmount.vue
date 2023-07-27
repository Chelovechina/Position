<template>
  <div class="flex items-center gap-6 mb-5">
    <h1 class="bg-blue-600 px-5 py-3 font-medium uppercase text-white text-2xl rounded-lg text-lg color-white">
      Total Amount: {{ $store.state.totalAmount }} EUR
    </h1>
    <button @click="$store.commit('openModal')"
      class="bg-green-600 w-[40px] h-[40px] font-medium uppercase text-white text-2xl rounded-lg">
      +
    </button>
  </div>
</template>

<script setup lang="ts" />
