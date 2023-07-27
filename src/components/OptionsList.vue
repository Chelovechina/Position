<template>
  <option class="bg-blue-50 border" value="option.caption" v-for="option in $props.options">
    {{ option.accountNumber }}
    {{ option.caption }}
  </option>
</template>

<script setup lang="ts">
import { ICurrency, IAccountNumber, IPaymentMethod } from "./../types.ts";
interface IProps {
  options: ICurrency[] | IAccountNumber[] | IPaymentMethod[];
}

const props = defineProps<IProps>();
</script>
