import { fetchList, fetchNewsList, fetchAskList, fetchJobsList, fetchUserList, fetchItemList } from "../api/index";

export default {
  // FETCH_NEWS(context) { // context는 mutations에 접근할 수 있는 인자
  //   return fetchNewsList() // .api/index.js
  //     .then((response) => { // response == fetchNewsList() 반환값
  //       context.commit("SET_NEWS", response.data); // 값 변경을 위해 mutations 호출 (commit 명령어)
  //       return response;
  //     })
  //     .catch((error) => console.log(error));
  // },
  // // 1 (views/AskView.vue 에서 호출)
  // FETCH_ASK(context) {
  //   return fetchAskList()
  //     .then((response) => {
  //       context.commit("SET_ASK", response.data);
  //     })
  //     .catch((error) => console.log(error));
  // },
  // FETCH_JOBS({ commit }) { // context.commit 이라는 인자값을 사용할 것을 알기에 (destructuring 문법)
  //   return fetchJobsList()
  //     .then(({ data }) => {
  //       // response.data 이라는 인자값을 사용할 것을 알기에 (destructuring 문법)
  //       commit("SET_JOBS", data);
  //     })
  //     .catch((error) => console.log(error));
  // },
  
  async FETCH_USER({ commit }, username) {
    try {
      const response = await fetchUserList(username);
      commit("SET_USER", response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async FETCH_ITEM({ commit }, itemID) {
    try {
      const response = await fetchItemList(itemID);
      commit("SET_ITEM", response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async FETCH_LIST({ commit }, routeName) {
    try {
      const response = await fetchList(routeName);
      commit("SET_LIST", response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
};
