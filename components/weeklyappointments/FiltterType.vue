<template>
  <div class="filter">
    <FilterRadioButton
      nameData="Doctors"
      @filter-data="filter('doctors')"
      checked="checked"
    />
    <FilterRadioButton nameData="Room" @filter-data="filter('rooms')" />
    <FilterRadioButton
      nameData="Procedure"
      @filter-data="filter('procedures')"
    />
    <FilterRadioButton
      nameData="Assistants"
      @filter-data="filter('assistants')"
    />
  </div>
</template>

<script>
import FilterRadioButton from "./FilterRadioButton.vue";
export default {
  name: "FiltterType",
  methods: {
    filter(value) {
      this.$store.dispatch("getFilterData", {
        type: value,
      });
      this.$store.dispatch("getAppoinments");
    },
  },
  components: { FilterRadioButton },
};
</script>

<style></style>
