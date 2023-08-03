<template>
  <button :disabled="isNew" class="btn flex justify-center w-[55px] rounded-[3px]" @click="deletePosition">
    <svg xmlns="http://www.w3.org/2000/svg" height="56" viewBox="0 0 24 24" width="24">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
    </svg>
  </button>

  <button class="btn flex justify-center w-[55px] rounded-[3px]" @click="savePosition">
    <svg xmlns="http://www.w3.org/2000/svg" height="56" viewBox="0 0 24 24" width="24">
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z" />
    </svg>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    deletePosition: Function,
    savePosition: Function,
  },
});
</script>
