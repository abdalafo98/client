<template>
  <div>
    <table id="calendar">
      <TableHeaderDate />
      <TableRow />
    </table>
  </div>
</template>

<script>
import TableRow from "./TableRow.vue";
import TableHeaderDate from "./TableHeaderDate.vue";

export default { components: { TableHeaderDate, TableRow } };
</script>

<style></style>
