<template>
  <div class="w-full m-auto flex flex-col items-center px-[64px] py-[48px]">
    <TotalAmount />
    <PositionsList />
  </div>
</template>

<script setup lang="ts">
import TotalAmount from "./components/TotalAmount.vue";
import PositionsList from "./components/PositionsList.vue";
</script>
