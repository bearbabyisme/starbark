<template>
  <div class="wrap">
    <header class="header">
      <h2>欢迎来到星享俱乐部</h2>
    </header>
    <main class="main">
      <input type="text" name="user" placeholder="手机号码" v-model="user">
      <input type="text" name="pwd" placeholder="验证码" v-model="pwd">
      <button @click="login">登陆/注册</button>
    </main>
  </div>
</template>
<script>
import request from "../../until/index";
export default {
  props: {},
  components: {},
  data() {
    return {
      user: "",
      pwd: ""
    };
  },
  computed: {},
  methods: {
    login() {
      if (this.user.trim() !== "" && this.pwd.trim() !== "") {
        request
          .post("/api/login", {
            phone: this.user,
            password: this.pwd
          })
          .then(res => {
            if (res.code == 1) {
              window.localStorage.token = res.token;
              this.$router.back();
            }
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
@import "../../static/fonts/iconfont.css";
$htmlFontSize: 37.5px !default;

@function rem($fontSize) {
  @return $fontSize / $htmlFontSize * 1rem;
}

* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
}

@mixin wh($h: 100%, $w: 100%) {
  width: $w;
  height: $h;
}

.wrap {
  @include wh;
  display: flex;
  flex-direction: column;

  .header {
    @include wh(rem(80px), 92%);
    padding: 0 4%;
  }

  .main {
    flex: 1;
    @include wh;
  }
}
</style>