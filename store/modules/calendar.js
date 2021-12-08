import axios from "axios";

const Calendar = {
  namespace: true,
  state: {
    startDate: "",
    startDate2: "",
    weeklyHeaderDays: "",
    list: [],
    type: "doctors",
  },

  mutations: {
    changeStartDate(state, payload) {
      return (state.startDate = payload.startDate);
    },
    changeStartDate2(state, payload) {
      return (state.startDate2 = payload.startDate2);
    },
    changeWeeklyHeaderDays(state, payload) {
      return (state.weeklyHeaderDays = payload.weeklyHeaderDays);
    },
    changeList(state, payload) {
      return (state.list = payload.list);
    },
    filterUsers(state, payload) {
      return (state.type = payload.type);
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
      else if (payload.status === "change_weeklyHeaderDays")
        context.commit("changeWeeklyHeaderDays", {
          weeklyHeaderDays: newD.toString(),
        });
    },

    getAppoinments(context) {
      axios
        .get(
          `http://localhost:5000/weeklyAppointments/${context.state.type}/${context.state.startDate}`
        )
        .then((res) => {
          context.commit("changeList", { list: res.data.Users });
          console.log("hiiiiiii", res.data.Users);
        });
    },
    getFilterData(context, payload) {
      context.commit("filterUsers", { type: payload.type });
    },
  },
  getters: {
    getStartDate(state) {
      return state.startDate;
    },
    getStartDate2(state) {
      return state.startDate2;
    },
    getWeeklyHeaderDays(state) {
      return state.weeklyHeaderDays;
    },
    getAppoinment(state) {
      return state.list;
    },
    getFilterData(state) {
      return state.type;
    },
  },
};
export default Calendar;
