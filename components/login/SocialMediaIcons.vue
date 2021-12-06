<template>
  <div class="last-cont">
    <h2>Contact us</h2>
    <div class="social-media-icons">
      <FbIcon />
      <InstagramIcon />
      <LinkedinIcon />
    </div>
  </div>
</template>

<script>
import FbIcon from "./FbIcon.vue";
import InstagramIcon from "./InstagramIcon.vue";
import LinkedinIcon from "./LinkedinIcon.vue";
export default {
  components: { FbIcon, InstagramIcon, LinkedinIcon },
};
</script>

<style scoped>
.social-media-icons {
  display: flex;
  gap: 15px;
  justify-content: center;
}
</style>
