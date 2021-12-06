
const Calendar = {
  namespace: true,
  state: { startDate: "", startDate2: "" },

  mutations: {
    changeStartDate(state, payload) {
      return (state.startDate = payload.startDate);
    },
    changeStartDate2(state, payload) {
      return (state.startDate2 = payload.startDate2);
    },
  },
  actions: {
    addDays(context, payload) {
      const newD = new Date(payload.date);
      newD.setDate(newD.getDate() + payload.num);
      if (payload.status === "change_startDate")
        context.commit("changeStartDate", { startDate: newD.toString() });
      else if (payload.status === "change_startDate2")
        context.commit("changeStartDate2", { startDate2: newD.toString() });
    },
  },
  getters: {
    getStartDate(state) {
      return state.startDate;
    },
    getStartDate2(state) {
      return state.startDate2;
    },
  },
};
export default Calendar;
