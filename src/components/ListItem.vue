<template>
  <div>
    <ul class="view-list">
      <li v-for="viewItem in listItems" class="view-post">
        <div class="view-points">{{viewItem.points}}</div>
        <div>
          <p class="view-title">
            <!-- v-if: News/JobsView, v-else: AskView -->
            <template v-if="viewItem.domain">
                <a v-bind:href="viewItem.url">
                    {{viewItem.title}}
                </a>
            </template>
            <template v-else>
                <router-link v-bind:to="`item/${viewItem.id}`">
                    {{viewItem.title}}
                </router-link>
            </template>
          </p>
          <small class="view-user"> 
            {{viewItem.time_ago}} | 
            <router-link v-if="viewItem.user" v-bind:to="`/user/${viewItem.user}`"> {{viewItem.user}}</router-link>
            <a v-else>{{viewItem.domain}}</a>
          </small>  
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created() {
    // const routeName = this.$route.name; // routes/index.js 의 각각의 라우트 name
    // let actionName = '';

    // if(routeName === 'news'){
    //     actionName = 'FETCH_NEWS'; 
    // } 
    // else if(routeName === 'jobs'){
    //     actionName = 'FETCH_JOBS';
    // } 
    // else if(routeName === 'asks'){
    //     actionName = 'FETCH_ASK';
    // }
    // this.$store.dispatch(actionName); // store/index.js 참고 (vuex)
  },
  computed: {
    listItems() {
      return this.$store.state.list;
    }
  },
}
</script>

<style scoped>
.view-list {
  margin: 0;
  padding: 0;
}
.view-post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.view-points {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  color: red;
}
.view-title{
  margin: 0;
}
.view-title a:hover{
  color: red;
  text-decoration: underline;
}
.view-user {
  color: #34495e;
}
</style>