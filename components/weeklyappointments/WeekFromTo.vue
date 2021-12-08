<template>
  <div class="week-from-to">
    {{ weekFromTo }}
  </div>
</template>

<script>
export default {
  name: "WeekFromTo",
  computed: {
    weekFromTo() {
      let from = this.$store.getters.getStartDate
        .toString()
        .split(" ")
        .slice(1, 4);

      this.$store.dispatch("addDays", {
        date: this.$store.getters.getStartDate,
        num: 6,
        status: "change_startDate2",
      });

      let to = this.$store.getters.getStartDate2
        .toString()
        .split(" ")
        .slice(1, 4);
      return `${from} - ${to}`;
    },
  },
};
</script>

<style>
.week-from-to {
  color: #949191;
  font-size: 18px;
  font-weight: 100;
  padding-top: 9px;
}
</style>
