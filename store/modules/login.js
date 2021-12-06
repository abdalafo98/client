import axios from "axios";
const login = {
  namespace: true,
  actions: {
    async LOGIN({ commit }, payload) {
      const result = await axios.post("http://localhost:5000/login", payload);
      console.log(result);
    },
  },
  mutations: {},
  getters: {},
 
};
export default login;
