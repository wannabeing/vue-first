<template>
  <div>
    <section>
      <!-- 사용자 정보 영역-->
      <user-profile>
        <router-link slot="username" :to="`/user/${getItem.user}`">
          {{getItem.user}}
        </router-link>
        <template slot="created">{{'Posted '+getItem.time_ago}}</template>
      </user-profile>
    </section>
    <!-- 질문 제목 영역 -->
    <section>
      <h2>{{getItem.title}}</h2>
    </section>
    <section>
      <!-- 질문 댓글 영역 -->
      <div v-html="getItem.content">
      </div>
    </section>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import UserProfile from '../components/UserProfile.vue';
export default {
  created() {
    const itemID = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', itemID);
  },
  computed: {
    ...mapGetters([
      'getItem'
    ])
  },
  components: {
    UserProfile
  }
}
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.user-description {
  padding-left: 8px;
}
.user-time-ago {
  font-size: 0.7rem;
}
.fa-user {
  font-size: 2.5rem;
}
</style>
