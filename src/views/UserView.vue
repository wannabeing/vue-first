<template>
  <div>
    <user-profile>
      <div slot="username">{{getUser.id}}</div>
      <div slot="created">{{ 'Signed: ' + getUser.created}}</div>
      <div slot="karma">{{ 'Karma: ' + getUser.karma}}</div>
    </user-profile>
    <!-- <p>id: {{userInfo.id}}</p>
    <p>created: {{userInfo.created}}</p>
    <p>karma: {{userInfo.karma}}</p> -->
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';
import {mapGetters} from 'vuex';
export default {
  created() {
    const username = this.$route.params.id; // newsview.vue 에서 받은 route.params.id 저장
    this.$store.dispatch('FETCH_USER', username); // store/actions.js - FETCH_USER 2번째 인자 (username)으로 username 넘긴다.
  },
  components: {
    UserProfile,
  },
  computed: {
    ...mapGetters([
      'getUser'
    ])
  }
}
</script>

<style>

</style>