<template>
  <div @click="decreaseValue" class="arrow1">
    <a
      ><i class="arrow-icon"></i
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        role="img"
        width="35"
        height="35"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
      >
        <g transform="rotate(180 12 12)">
          <path
            fill="#6f9df2"
            d="M10.46 18a2.23 2.23 0 0 1-.91-.2a1.76 1.76 0 0 1-1.05-1.59V7.79A1.76 1.76 0 0 1 9.55 6.2a2.1 2.1 0 0 1 2.21.26l5.1 4.21a1.7 1.7 0 0 1 0 2.66l-5.1 4.21a2.06 2.06 0 0 1-1.3.46z"
          />
        </g></svg
    ></a>
  </div>
</template>

<script>
export default {
  name: "IconsArrowLeft",

  methods: {
    decreaseValue() {
      this.$store.dispatch("addDays", {
        date: this.$store.getters.getStartDate,
        num: -7,
        status:"change_startDate"

      });
    },
  },
};
</script>

<style></style>
