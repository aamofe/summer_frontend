<template>
  <div class='about'>
    <h1>This is an login page</h1>
    islogin:{{ $store.state.islogin }}
    <div v-if='isLogin'>
      <el-row class="mb-4">
        <el-button type="success" @click="logout">退出登录</el-button>
      </el-row>
    </div>
    <div v-else>
      <el-button type="primary" @click="login">登录</el-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    increment() {
      this.$store.commit('increment');
    },
    login() {
      this.$store.commit('login');
      this.isLogin = true;
    },
    logout() {
      this.$store.commit('logout');
      this.isLogin = false;
    }
  }
};
</script>
