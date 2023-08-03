<template>
  <div class="w-full" v-for="(position, index) in positions">
    <position :key="position._id" :index="index" :position="position" />
  </div>
  <position class="w-full" isNew :index="new" :position="newPosition" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";
import Position from "./Position.vue";

export default defineComponent({
  components: { Position },
  data() {
    return {
      value: 1,
      newPosition: {
        _id: Date.now(),
        currencyId: 1,
        amount: 0,
        accountNumberId: 1,
        paymentId: 1,
        description: "",
      },
    };
  },
  computed: {
    ...mapState({
      positions: (state: any) => state.positions,
    }),
  },
});
</script>
