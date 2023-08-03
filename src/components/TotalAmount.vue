<template>
  <div
    class="w-full h-[84px] flex items-center justify-center border-[1px] border-[#4A90E2] rounded-[5px] bg-[#d6e7fb] mb-[41px]">
    <h1 class="text-xl text-[#4A90E2] font-medium uppercase">
      Total Amount: {{ $store.getters.getTotalAmount }} EUR
    </h1>
  </div>
</template>

<script setup lang="ts"></script>
