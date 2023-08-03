<template>
  <div class="mb-[21px]">
    <h4 class="mb-[12px] uppercase text-[#4A90E2] font-medium">
      Position {{ _index }}
    </h4>
    <div class="w-full flex justify-between">
      <div class="w-[1633px] flex gap-[12px]">
        <v-responsive class="overflow-visible" max-width="135">
          <v-select v-model="_position.currencyId" color="info" variant="outlined" :items="currencies"
            item-title="caption" item-value="_id" label="Currency"></v-select>
        </v-responsive>
        <v-responsive class="overflow-visible" max-width="175">
          <v-text-field v-model="_position.amount" color="info" variant="outlined" type="number"
            label="Amount"></v-text-field>
        </v-responsive>
        <v-responsive class="overflow-visible" max-width="350">
          <v-select v-model="_position.accountNumberId" color="info" variant="outlined" :items="accounts"
            item-title="caption" item-value="_id" label="Accounts"></v-select>
        </v-responsive>
        <v-responsive class="overflow-visible" max-width="195">
          <v-select v-model="_position.paymentId" color="info" variant="outlined" :items="payments" item-title="caption"
            item-value="_id" label="Payments"></v-select>
        </v-responsive>
        <v-responsive class="overflow-visible" max-width="730">
          <v-text-field v-model="_position.description" color="info" variant="outlined"
            label="Description"></v-text-field>
        </v-responsive>
      </div>
      <v-divider class="h-[56px]" style="border-color: black" :thickness="1" vertical></v-divider>

      <div class="w-[112px] h-[56px] flex">
        <btn-group :deletePosition="deletePosition" :savePosition="savePosition" />
      </div>
    </div>

    <v-divider class="border-gray" style="border-color: black" :thickness="1"></v-divider>
  </div>
</template>

<script lang="ts">
import store from "@/store";
import { defineComponent } from "vue";
import { mapState } from "vuex";
import BtnGroup from "./BtnGroup.vue";

export default defineComponent({
  components: { BtnGroup },
  data() {
    return {
      _index: Number(this.index) + 1,
      _position: JSON.parse(JSON.stringify(this.position)),
    };
  },
  props: {
    position: Object,
    index: Number,
    isNew: Boolean,
  },
  methods: {
    deletePosition() {
      store.commit("deletePosition", this._position._id);
    },
    savePosition() {
      store.commit("savePosition", this._position);
      if (this.isNew)
        this._position = {
          ...this.position,
          _id: Date.now(),
        };
    },
  },
  computed: {
    ...mapState({
      currencies: (state: any) => state.filling.currencies,
      accounts: (state: any) => state.filling.accounts,
      payments: (state: any) => state.filling.payments,
    }),
  },
});
</script>

<style lang="scss" scoped></style>
