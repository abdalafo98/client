<template>
  <div>
    <div class="container1" id="container1">
      <div class="form-container sign-up-container">
        <form action="#">
          <h1>Create Account</h1>
          <span>or use your email for registration</span>

          <input type="text" v-model="fullName" placeholder="Name" />
          <input type="email" v-model="email" placeholder="Email" />
          <input type="password" v-model="password" placeholder="Password" />
          <button class="first-button">Sign Up</button>
        </form>
      </div>
      <div class="form-container sign-in-container">
        <form action="#">
          <h1>Sign in</h1>
          <div class="social-container">
            <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
            <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
          </div>
          <input type="email" v-model="email" placeholder="Email" />
          <input type="password" v-model="password" placeholder="Password" />
          <a href="#">Forgot your password?</a>
          <button @click.prevent="login" class="second-button">Sign In</button>
        </form>
      </div>
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
    </div>

    <div class="last-cont">
      <h2>Contact us</h2>
      <div class="social-media-icons">
        <div class="fb-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:serif="http://www.serif.com/"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            height="30px"
            style="
              fill-rule: evenodd;
              clip-rule: evenodd;
              stroke-linejoin: round;
              stroke-miterlimit: 2;
            "
            version="1.1"
            viewBox="0 0 512 512"
            width="30px"
            xml:space="preserve"
          >
            <path
              d="M449.446,0c34.525,0 62.554,28.03 62.554,62.554l0,386.892c0,34.524 -28.03,62.554 -62.554,62.554l-106.468,0l0,-192.915l66.6,0l12.672,-82.621l-79.272,0l0,-53.617c0,-22.603 11.073,-44.636 46.58,-44.636l36.042,0l0,-70.34c0,0 -32.71,-5.582 -63.982,-5.582c-65.288,0 -107.96,39.569 -107.96,111.204l0,62.971l-72.573,0l0,82.621l72.573,0l0,192.915l-191.104,0c-34.524,0 -62.554,-28.03 -62.554,-62.554l0,-386.892c0,-34.524 28.029,-62.554 62.554,-62.554l386.892,0Z"
              style="fill: #1777f2"
            />
          </svg>
        </div>
        <div class="insta-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:serif="http://www.serif.com/"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            height="30px"
            style="
              fill-rule: evenodd;
              clip-rule: evenodd;
              stroke-linejoin: round;
              stroke-miterlimit: 2;
            "
            version="1.1"
            viewBox="0 0 512 512"
            width="30px"
            xml:space="preserve"
          >
            <g>
              <path
                d="M256,0c-69.526,0 -78.244,0.295 -105.549,1.541c-27.248,1.243 -45.858,5.57 -62.142,11.899c-16.834,6.542 -31.111,15.296 -45.342,29.528c-14.232,14.231 -22.986,28.508 -29.528,45.342c-6.329,16.283 -10.656,34.893 -11.899,62.141c-1.246,27.305 -1.54,36.023 -1.54,105.549c0,69.524 0.294,78.242 1.54,105.547c1.243,27.248 5.57,45.858 11.899,62.141c6.542,16.834 15.296,31.111 29.528,45.344c14.231,14.231 28.508,22.985 45.342,29.527c16.284,6.328 34.894,10.656 62.142,11.899c27.305,1.245 36.023,1.54 105.549,1.54c69.524,0 78.242,-0.295 105.547,-1.54c27.248,-1.243 45.858,-5.571 62.141,-11.899c16.834,-6.542 31.111,-15.296 45.344,-29.527c14.231,-14.233 22.985,-28.51 29.527,-45.344c6.328,-16.283 10.656,-34.893 11.899,-62.141c1.245,-27.305 1.54,-36.023 1.54,-105.547c0,-69.526 -0.295,-78.244 -1.54,-105.549c-1.243,-27.248 -5.571,-45.858 -11.899,-62.141c-6.542,-16.834 -15.296,-31.111 -29.527,-45.342c-14.233,-14.232 -28.51,-22.986 -45.344,-29.528c-16.283,-6.329 -34.893,-10.656 -62.141,-11.899c-27.305,-1.246 -36.023,-1.541 -105.547,-1.541Zm0,46.127c68.354,0 76.451,0.26 103.445,1.492c24.959,1.139 38.514,5.309 47.535,8.814c11.949,4.644 20.477,10.192 29.435,19.15c8.959,8.958 14.506,17.487 19.15,29.435c3.506,9.021 7.676,22.576 8.815,47.535c1.231,26.995 1.492,35.092 1.492,103.447c0,68.354 -0.261,76.451 -1.492,103.445c-1.139,24.959 -5.309,38.514 -8.815,47.535c-4.644,11.949 -10.191,20.477 -19.15,29.435c-8.958,8.959 -17.486,14.506 -29.435,19.15c-9.021,3.506 -22.576,7.676 -47.535,8.814c-26.99,1.232 -35.086,1.493 -103.445,1.493c-68.361,0 -76.455,-0.261 -103.447,-1.493c-24.959,-1.138 -38.514,-5.308 -47.535,-8.814c-11.949,-4.644 -20.477,-10.191 -29.436,-19.15c-8.958,-8.958 -14.506,-17.486 -19.149,-29.435c-3.506,-9.021 -7.676,-22.576 -8.815,-47.535c-1.232,-26.994 -1.492,-35.091 -1.492,-103.445c0,-68.355 0.26,-76.452 1.492,-103.447c1.139,-24.959 5.309,-38.514 8.815,-47.535c4.643,-11.948 10.191,-20.477 19.149,-29.435c8.959,-8.958 17.487,-14.506 29.436,-19.15c9.021,-3.505 22.576,-7.675 47.535,-8.814c26.995,-1.232 35.092,-1.492 103.447,-1.492Z"
                style="fill: url(#_Linear1); fill-rule: nonzero"
              />
              <path
                d="M256,341.332c-47.129,0 -85.334,-38.205 -85.334,-85.332c0,-47.129 38.205,-85.334 85.334,-85.334c47.127,0 85.332,38.205 85.332,85.334c0,47.127 -38.205,85.332 -85.332,85.332Zm0,-216.792c-72.604,0 -131.46,58.856 -131.46,131.46c0,72.602 58.856,131.458 131.46,131.458c72.602,0 131.458,-58.856 131.458,-131.458c0,-72.604 -58.856,-131.46 -131.458,-131.46Z"
                style="fill: url(#_Linear2); fill-rule: nonzero"
              />
              <path
                d="M423.372,119.346c0,16.967 -13.754,30.72 -30.72,30.72c-16.966,0 -30.72,-13.753 -30.72,-30.72c0,-16.966 13.754,-30.719 30.72,-30.719c16.966,0 30.72,13.753 30.72,30.719Z"
                style="fill: url(#_Linear3); fill-rule: nonzero"
              />
            </g>
            <defs>
              <linearGradient
                gradientTransform="matrix(-149.618,494.3,-494.3,-149.618,300.81,-27.1283)"
                gradientUnits="userSpaceOnUse"
                id="_Linear1"
                x1="0"
                x2="1"
                y1="0"
                y2="0"
              >
                <stop offset="0" style="stop-color: #515bd4; stop-opacity: 1" />
                <stop
                  offset="0.26"
                  style="stop-color: #9510b8; stop-opacity: 1"
                />
                <stop
                  offset="0.66"
                  style="stop-color: #e51804; stop-opacity: 1"
                />
                <stop offset="1" style="stop-color: #feda77; stop-opacity: 1" />
              </linearGradient>
              <linearGradient
                gradientTransform="matrix(-149.618,494.3,-494.3,-149.618,300.81,-27.1283)"
                gradientUnits="userSpaceOnUse"
                id="_Linear2"
                x1="0"
                x2="1"
                y1="0"
                y2="0"
              >
                <stop offset="0" style="stop-color: #515bd4; stop-opacity: 1" />
                <stop
                  offset="0.26"
                  style="stop-color: #9510b8; stop-opacity: 1"
                />
                <stop
                  offset="0.66"
                  style="stop-color: #e51804; stop-opacity: 1"
                />
                <stop offset="1" style="stop-color: #ffbf00; stop-opacity: 1" />
              </linearGradient>
              <linearGradient
                gradientTransform="matrix(-149.618,494.3,-494.3,-149.618,300.81,-27.1283)"
                gradientUnits="userSpaceOnUse"
                id="_Linear3"
                x1="0"
                x2="1"
                y1="0"
                y2="0"
              >
                <stop offset="0" style="stop-color: #515bd4; stop-opacity: 1" />
                <stop
                  offset="0.26"
                  style="stop-color: #9510b8; stop-opacity: 1"
                />
                <stop
                  offset="0.66"
                  style="stop-color: #e51804; stop-opacity: 1"
                />
                <stop offset="1" style="stop-color: #ffbf00; stop-opacity: 1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div class="linkedin-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:serif="http://www.serif.com/"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            height="30px"
            style="
              fill-rule: evenodd;
              clip-rule: evenodd;
              stroke-linejoin: round;
              stroke-miterlimit: 2;
            "
            version="1.1"
            viewBox="0 0 512 512"
            width="30px%"
            xml:space="preserve"
          >
            <g id="g5891">
              <path
                d="M512,64c0,-35.323 -28.677,-64 -64,-64l-384,0c-35.323,0 -64,28.677 -64,64l0,384c0,35.323 28.677,64 64,64l384,0c35.323,0 64,-28.677 64,-64l0,-384Z"
                id="background"
                style="fill: #2867b2"
              />
              <g id="shapes">
                <rect
                  height="257.962"
                  id="rect11"
                  style="fill: #fff"
                  width="85.76"
                  x="61.053"
                  y="178.667"
                />
                <path
                  d="M104.512,54.28c-29.341,0 -48.512,19.29 -48.512,44.573c0,24.752 18.588,44.574 47.377,44.574l0.554,0c29.903,0 48.516,-19.822 48.516,-44.574c-0.555,-25.283 -18.611,-44.573 -47.935,-44.573Z"
                  id="path13-0"
                  style="fill: #fff; fill-rule: nonzero"
                />
                <path
                  d="M357.278,172.601c-45.49,0 -65.866,25.017 -77.276,42.589l0,-36.523l-85.738,0c1.137,24.197 0,257.961 0,257.961l85.737,0l0,-144.064c0,-7.711 0.554,-15.42 2.827,-20.931c6.188,-15.4 20.305,-31.352 43.993,-31.352c31.012,0 43.436,23.664 43.436,58.327l0,138.02l85.741,0l0,-147.93c0,-79.237 -42.305,-116.097 -98.72,-116.097Z"
                  id="path15"
                  style="fill: #fff; fill-rule: nonzero"
                />
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullName: "",
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch("LOGIN", {
          email: this.email,
          password: this.password,
        })
        .then((success) => {
          this.$router.push("/");
          console.log(success);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,800");

* {
  box-sizing: border-box;
}

body {
  font-family: "Montserrat", sans-serif;
  background-color: #f7f7f7;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

h1 {
  font-weight: bold;
  margin: 0;
}

h2 {
  text-align: center;
}

p {
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
}

span {
  font-size: 12px;
}

a {
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
}

button {
  border-radius: 20px;
  border: 1px solid #0b5efc;
  background-color: #0b5efc;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  font-family: "Montserrat";
}
.ghost {
  border-radius: 20px;
  border: 1px solid #0b5efc;
  background-color: #ffffff !important;
  color: #0b5efc;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  margin-top: 60px;
  font-family: "Montserrat";
  display: none;
}
.ghost:hover {
  background-color: aqua;
}

button:active {
  transform: scale(0.95);
}
button:hover {
  cursor: pointer;
}

button:focus {
  outline: none;
}

button.ghost {
  background-color: transparent;
  border-color: #ffffff;
}

form {
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
}

input {
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
}

.container1 {
  margin-top: 90px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0px 28px rgb(0 0 0 / 25%), 0 7px 10px rgb(0 0 0 / 22%);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;
}

.form-container {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
}

.sign-in-container {
  left: 0;
  width: 50%;
  z-index: 2;
}

.container.right-panel-active .sign-in-container {
  transform: translateX(100%);
}

.sign-up-container {
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
}

.container1.right-panel-active .sign-up-container {
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;
  animation: show 0.6s;
}

@keyframes show {
  0%,
  49.99% {
    opacity: 0;
    z-index: 1;
  }

  50%,
  100% {
    opacity: 1;
    z-index: 5;
  }
}

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

.container1.right-panel-active .overlay {
  transform: translateX(50%);
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
.social-media-icons {
  display: flex;
  gap: 15px;
  justify-content: center;
}
.fb-icon {
  display: flex;
}
.insta-icon {
  display: flex;
}
.linkedin-icon {
  display: flex;
}
</style>
