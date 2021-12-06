<template>
  <div>
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
        num: 7,
        status: "change_startDate2",
      });

      let to = this.$store.getters.getStartDate2
        .toString()
        .split(" ")
        .slice(1, 4);
      return `${from} - ${to}`;
    },
  },
  created() {},
};
</script>

<style></style>
