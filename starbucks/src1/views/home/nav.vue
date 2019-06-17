<template>
  <nav class="nav">
    <div v-for="item in menu" :key="item.status" :class="['nav-item',{'active':index===item.status}]" @click="changeClass(item.status)">
      <i :class="'iconfont '+item.icon"></i>
      <span>{{item.title}}</span>
    </div>
  </nav>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {
      index: 0,
      menu: [
        {
          title: "待处理",
          icon: "icon-05",
          status: 0
        },
        {
          title: "已发起",
          icon: "icon-07",
          status: 1
        },
        {
          title: "已处理",
          icon: "icon-yibangding",
          status: 2
        }
      ]
    };
  },
  computed: {},
  methods: {
    changeClass(status) {
      this.index = status;
    }

  },
  created() {

  },
  mounted() {}
};
</script>
<style scoped lang="scss">
@import "../../static/fonts/iconfont.css";
@mixin wh($h: 100%, $w: 100%) {
  width: $w;
  height: $h;
}
$htmlFontSize: 37.5px !default;

@function rem($fontSize) {
  @return $fontSize / $htmlFontSize * 1rem;
}
.nav {
  @include wh(rem(65px));
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #ccc;
  box-shadow: 0 15px 15px 0 #eee;

  .nav-item {
    @include wh(100%, 33.3%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &.active{
        color:  rgb(27, 124, 48);
    }
  }
}
</style>