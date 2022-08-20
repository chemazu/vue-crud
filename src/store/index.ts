import { createStore } from "vuex";

// export default createStore({
//   state: {
//     count: 0,
//   },
//   getters: {},
//   mutations: {},
//   actions: {},
//   modules: {},
// });
export default createStore({
  state() {
    return {
      count: 2,
    };
  },
  mutations: {
    increment(state: any) {
      state.count++;
    },
  },
});
