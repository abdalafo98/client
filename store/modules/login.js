import axios from "axios";

const login = {
  namespace: true,
  actions: {
    async LOGIN({ commit }, payload) {
      const result = await axios.post(
        "https://services.agentsoncloud.com/login",
        payload
      );
      console.log(result);
    },
  },
  mutations: {},
  getters: {},
};
export default login;
