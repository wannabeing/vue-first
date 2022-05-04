export default {
  // news ==> response.data, news == actions:FETCH_NEWS에서 commit으로 넘긴 값
  // state ==> actions 위에 있는 state 속성
  SET_NEWS(state, news) {
    state.news = news;
  },
  SET_ASK(state, ask) { 
    state.ask = ask;
  },
  SET_JOBS(state, jobs) {
    state.jobs = jobs;
  },
  SET_USER(state, user) {
    state.user = user;
  },
  SET_ITEM(state, item) {
    state.item = item;
  },
  SET_LIST(state, list) {
    state.list = list;
  }
};
