<template>
  <div class="home">
    <h3 v-if="$store.state.islogin">已经登录！</h3>
    <h3 v-else>尚未登录，请前往登录
      <router-link to="/login">Login</router-link>
    </h3>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    count:{{ $store.state.count }}
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
};
</script>
