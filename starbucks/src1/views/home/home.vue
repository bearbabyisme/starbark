<template>
  <div class="wrap">
    <Myheader/>
    <Mynav></Mynav>
    <Mytitle></Mytitle>
    <Mylist :todolist="todolist"></Mylist>
    <div class="addTask" @click="dialog">
      <i class="iconfont icon-jia"></i>
      <span>发起任务</span>
    </div>

    <div class="mask" v-show="async" @click="closeDialog">
      <div class="dialog">
        <div class="nav-item">
          <i class="iconfont icon-05"></i>
          <span>加班</span>
        </div>
        <div class="nav-item">
          <i class="iconfont icon-05"></i>
          <span>休假</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Myheader from "../../components/header";
import "../../until/flexible";
import request from "../../until/index";
import Mynav from "./nav";
import Mytitle from "./title";
import Mylist from "./list";
export default {
  props: {},
  components: {
    Myheader,
    Mynav,
    Mytitle,
    Mylist
  },
  data() {
    return {
      async: false,
      listData:{
        page:1,
        pageSize:10,
        create_at:0,
        type:'overtime',
        status:0
      },
      todolist:[]
    };
  },
  computed: {},
  methods: {
    dialog() {
      this.async = true;
    },
    closeDialog(e) {
      if (e.target === e.currentTarget) {
        this.async = false;
      }
    },
    getTaskList(){
      request.get('/api/task/list',this.listData).then(res=>{
        console.log(res.data)
      })
    }
  },
  created() {
    request.get("/api/user/info").then(res => {
        // console.log(res);
      })
    request.get('/api/task/list',this.listData).then(res=>{
        this.todolist = res.data;
      })
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
// @import "../static/css/common.scss";
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

html,
body,
#app {
  @include wh;
  font-size: 14px;
}

.wrap {
  @include wh;
  // display: flex;
  // flex-direction: column;
  font-size: 14px;
}

.header {
  @include wh(rem(45px));
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3%;

  i {
    font-size: 26px;
  }

  span {
    font-size: 16px;
    font-weight: 600;
  }

  p {
    width: 20%;
    height: 100%;

    b {
      margin-right: 5%;
    }
  }
}

.nav-item {
  @include wh(100%, 33.3%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.addTask {
  @include wh(rem(40px), rem(120px));
  position: fixed;
  right: 5%;
  bottom: 5%;
  background: rgb(27, 124, 48);
  border-radius: rem(40px);
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #fff;
}

.mask {
  position: absolute;
  top: 0;
  left: 0;
  @include wh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 5;

  .dialog {
    position: absolute;
    left: 0;
    bottom: 0;
    @include wh(rem(77px));
    background: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .nav-item {
      @include wh(100%, 33.3%);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>