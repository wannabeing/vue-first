import Vue from "vue";
import VueRouter from "vue-router";

import NewsView from "../views/NewsView";
import JobsView from "../views/JobsView";
import AskView from "../views/AskView";
import ItemView from "../views/ItemView";
import UserView from "../views/UserView";

import bus from '../utils/bus';
import { store } from "../store/index";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/news",
    },
    
    {
      path: "/ask",
      component: AskView,
      name: "ask",
      beforeEnter: (to, from, next) => {
        bus.$emit("start:spinner");
        store.dispatch("FETCH_LIST", to.name) // store/index.js 참고 (vuex), to.name: 이동할 라우터 객체
          .then(() => next())
          .catch((error) => console.log(error));
      },
    },
    {
      path: "/jobs",
      component: JobsView,
      name: "jobs",
      beforeEnter: (to, from, next) => {
        bus.$emit("start:spinner");
        store.dispatch("FETCH_LIST", to.name) // store/index.js 참고 (vuex), to.name: 이동할 라우터 객체
          .then(() => next())
          .catch((error) => console.log(error));
      },
    },
    {
      path: "/news",
      component: NewsView,
      name: "news",
      beforeEnter: (to, from, next) => {
        bus.$emit("start:spinner");
        store.dispatch("FETCH_LIST", to.name) // store/index.js 참고 (vuex), to.name: 이동할 라우터 객체
          .then(() => next())
          .catch((error) => console.log(error));
      },
    },
    
    {
      path: "/user/:id",
      component: UserView,
    },
    {
      path: "/item/:id",
      component: ItemView,
    },
  ],
});