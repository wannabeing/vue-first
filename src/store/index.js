import Vuex from "vuex";
import Vue from "vue";

// actions, mutations 모듈화
import mutations from "./mutations"; 
import actions from "./actions";

Vue.use(Vuex);

// actions(views에서 호출) - mutations(값 변경) - getters(views에서 사용)
export const store = new Vuex.Store({
  state: {
    news: [],
    ask: [],
    jobs: [],
    user: {},
    item: {},
    list: [],
  },
  actions: actions,
  mutations: mutations,
  
  // vue에서 mapGetters 로 사용 가능!
  getters: {
    getAsk(state) {
      return state.ask;
    },
    getNews(state) {
      return state.news;
    },
    getJobs(state) {
      return state.jobs;
    },
    getUser(state) {
      return state.user;
    },
    getItem(state) {
      return state.item;
    }
  },
});
