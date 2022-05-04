import axios from "axios";

// 1. HTTP Request & Response 관련 기본 설정
const config = {
  baseUrl: "https://api.hnpwa.com/v0/"
};

// 2. API 함수 정리
function fetchList(routeName) {
    return axios.get(`${config.baseUrl}${routeName}/1.json`);
}
function fetchNewsList() {
    return axios.get(`${config.baseUrl}news/1.json`);
}
function fetchJobsList() {
    return axios.get(`${config.baseUrl}jobs/1.json`);
}
function fetchAskList() {
    return axios.get(`${config.baseUrl}ask/1.json`);
}
function fetchUserList(username) {
    return axios.get(`${config.baseUrl}user/${username}.json`);
}
function fetchItemList(itemID) {
    return axios.get(`${config.baseUrl}item/${itemID}.json`);
}
export {
    fetchList, fetchNewsList, fetchJobsList, fetchAskList, fetchUserList, fetchItemList
}
