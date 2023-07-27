<template>
  <div class="w-full container m-auto flex flex-col items-center py-5">
    <TotalAmount />
    <div class="flex gap-3">
      <PositionsList />
    </div>
  </div>
</template>

<script setup lang="ts">
import TotalAmount from "./components/TotalAmount.vue";
import PositionsList from "./components/PositionsList.vue";
</script>
