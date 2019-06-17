<template>
  <div class="main-top">
    <p>
      <span v-for="(item,ind) in titleMenu" :key="ind" :class="{'active':titletext == item.type}" @click="changeTitle(item.type)">{{item.title}}</span>
    </p>
    <i class="iconfont icon-gongzuo"></i>
    <span>排序</span>
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {
        titletext:'overtime',
      titleMenu: [
        {
          title: "加班",
          type: "overtime"
        },
        {
          title: "休假",
          type: "vacation"
        }
      ]
    };
  },
  computed: {},
  methods: {
      changeTitle(type){
          this.titletext = type;
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

.main-top {
  @include wh(rem(50px));
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    @include wh(30px, 165px);
    border-radius: 30px;
    display: flex;
    overflow: hidden;
    margin-left: 30%;
    span {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;

      &.active {
        background: rgb(27, 124, 48);
      }
    }
  }

  i {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>