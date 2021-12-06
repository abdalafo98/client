import axios from "axios";

export const state = () => ({
  nameData: "hhhhh",
});

export const getters = {
  nameData(state) {
    return state.nameData;
  },
};
export const mutations = {
  addUsers(state, payload) {
    state.nameData = payload.type;
    console.log("payload.type", payload.type);
  },
};

export const actions = {
  async LOGIN({ commit }, payload) {
    const result = await axios.post("http://localhost:5000/login", payload);
    console.log(result);
  },
};
