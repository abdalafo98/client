import login from "./modules/login";
import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    modules: {
      login,
    },
  });
};

export default createStore;
