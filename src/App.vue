<template>
  <div id="app">
    <tool-bar></tool-bar>
    <transition name="page">
      <router-view></router-view>
    </transition>
    <spinner-component :loading="spinnerStatus"></spinner-component>
  </div>
</template>

<script>
import ToolBar from './components/ToolbarHeader.vue';
import SpinnerComponent from './components/SpinnerCompoenet.vue';
import bus from './utils/bus';

export default {
  components: {
    ToolBar,
    SpinnerComponent,
  },
  data(){
    return {
      spinnerStatus : false
    }
  },
  methods: {
    startSpinner(){
      this.spinnerStatus = true;
    },
    endSpinner(){
      this.spinnerStatus = false;
    }
  },
  created() {
    bus.$on('start:spinner', this.startSpinner);
    bus.$on('end:spinner', this.endSpinner);
  },
  beforeDestroy(){
    bus.$off('start:spinner', this.startSpinner);
    bus.$off('end:spinner', this.endSpinner);
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none;
  color: #34495e;
}
/*  */
a.router-link-exact-active {
  text-decoration: underline;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
