<template>
  <div class="header">
    <i class="iconfont icon-arrow-left arrow-right" @click="backFn"></i>
    <span>{{title}}</span>
    
    <div>
        <slot></slot>
    </div>
    
  </div>
</template>
<script>
export default {
  props: ["title"],
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
    backFn(){
       this.$router.back() 
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
@import "../static/css/_minix.scss";
@import "../static/css/common.scss";
.header {
  @include width(90%);
  @include height(pxTorem(45px));
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
  span {
    font-size: pxTorem(16px);
    margin-left: 3%;
  }
  i {
    font-size: pxTorem(20px);
  }
  p {
    width: 20%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    i {
      margin-right: 20px;
      font-size: pxTorem(17px);
    }
  }
}
</style>