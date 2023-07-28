<template>
  <option :selected="option._id === activeOption" class="bg-blue-50 border" :value="option._id" v-for="option in options">
    {{ option.accountNumber }}
    {{ option.caption }}
  </option>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import { ICurrency, IAccountNumber, IPaymentMethod } from "./../types.ts";

// import { mapMutations, mapState } from "vuex";

export default defineComponent({
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    activeOption: {
      type: Number,
    },
  },
  setup(props) {
    props.options;
    props.activeOption;
  },
});
</script>
