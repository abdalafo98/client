import login from "./modules/login";
import calendar from "./modules/calendar";
import Vuex from "vuex";
const createStore = () => {
  return new Vuex.Store({
    modules: {
      login,
      calendar,
    },
  });
};

export default createStore;
