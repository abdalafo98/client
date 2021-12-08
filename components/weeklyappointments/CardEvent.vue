<template>
  <div>
    <div class="event2">
      <div class="event-desc">
        {{ userName }}
      </div>
      <div class="event-time">
        {{ appointmentTimeFrom }}
        to
        {{ appointmentTimeTo }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardEvent",
  props: {
    userName: String,
    appointmentTimeFrom: String,
    appointmentTimeTo: String,
  },
};
</script>

<style></style>
