<template>
  <div class="overlay-container">
    <div class="overlay">
      <div class="overlay-panel overlay-left"></div>
      <div class="overlay-panel overlay-right">
        <h1>Hello, Friend!</h1>
        <p>Enter your personal details and start journey with us</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 150 140.339"
        >
          <g id="noun-cloud-4424981" transform="translate(-98.492 -21.65)">
            <path
              id="Path_1"
              data-name="Path 1"
              d="M198.594,61.115h-1.082a37.411,37.411,0,0,0-73.114,0h-1.082a37.166,37.166,0,1,0,0,74.331h14.9a11.2,11.2,0,0,1,11.221,11.16v2.7l-3.141-2.234a7.774,7.774,0,0,0-10.8,1.787,7.676,7.676,0,0,0,1.8,10.746l15.386,10.947a7.761,7.761,0,0,0,9.007,0L177.08,159.6a7.677,7.677,0,0,0,1.793-10.746,7.77,7.77,0,0,0-10.8-1.787l-3.141,2.234v-2.7a26.667,26.667,0,0,0-26.707-26.566h-14.9a21.762,21.762,0,1,1,0-43.524h8.02a7.723,7.723,0,0,0,7.744-7.7,21.876,21.876,0,0,1,43.751,0,7.722,7.722,0,0,0,7.741,7.7h8.019a21.762,21.762,0,1,1,0,43.524h-14.9a11.2,11.2,0,0,1-11.219-11.16v-6.55l3.141,2.228a7.768,7.768,0,0,0,10.8-1.784,7.676,7.676,0,0,0-1.8-10.747L169.233,81.084a7.779,7.779,0,0,0-9.011,0l-15.39,10.947a7.716,7.716,0,0,0,9.01,12.529l3.14-2.231v6.55a26.669,26.669,0,0,0,26.707,26.566h14.9a37.166,37.166,0,1,0,0-74.331Z"
              transform="translate(12.54 -10)"
              fill="#f7f7f7"
            />
          </g>
        </svg>
        <button class="ghost" id="signUp">Sign Up</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.overlay-container {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
}
.container1.right-panel-active .overlay {
  transform: translateX(50%);
}
.container1.right-panel-active .overlay-container {
  transform: translateX(-100%);
}

.overlay {
  background: #0b5efc;
  background: -webkit-linear-gradient(to right, #ff4b2b, #ff416c);
  background: linear-gradient(to right, #0b5efc, #5177ff);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #ffffff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.overlay-panel {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.overlay-left {
  transform: translateX(-20%);
}

.container1.right-panel-active .overlay-left {
  transform: translateX(0);
}

.overlay-right {
  right: 0;
  transform: translateX(0);
}

.container1.right-panel-active .overlay-right {
  transform: translateX(20%);
}
</style>
