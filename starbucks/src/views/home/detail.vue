<template>
  <div class="wrapper" v-if="detailData">
    <Header :title="type==='overtime'?'办公室加班申请':'办公室休假申请'"/>
    <div class="title">
      <img :src="detailData.avatar" alt>
      <p>
        <span>申请人姓名</span>
        <span>直接主管</span>
        <span>申请单号</span>
        <span>发起时间</span>
      </p>
      <p>
        <span>{{detailData.nickname}}</span>
        <span>秦义超</span>
        <span>{{detailData.applicationNumber}}</span>
        <span>{{detailData.startTime.slice(0,10)}}</span>
      </p>
      <p>
        <i>></i>
      </p>
    </div>
    <main>
      <div class="message">
        <p>申请信息</p>
        <ul>
          <li>
            <span>加班日期</span>
            <span>{{detailData.startTime.slice(0,10)}}</span>
          </li>
          <li>
            <span>加班类型</span>
            <span>周{{detailData.type}}加班</span>
          </li>
          <li>
            <span>加班起始时间</span>
            <span>{{detailData.startTime.slice(0,10)}}</span>
          </li>
          <li>
            <span>加班截止时间</span>
            <span>{{detailData.endTime.slice(0,10)}}</span>
          </li>
          <li>
            <span>共计实数</span>
            <span>24</span>
          </li>
        </ul>
      </div>
      <div class="why">
        <p>加班事由</p>
        <div>{{detailData.describes}}</div>
      </div>
      <div class="more" v-if="detailData.annex.length">
        <ul>
          <li v-for="item in detailData.annex" :key="item.applicationNumber">
            <img :src="'http://localhost:3000'+item" alt>
          </li>
        </ul>
      </div>
    </main>
    <footer>
        <span>审批历史</span>
        <span @click="backHome">退回</span>
        <span>同意</span>
    </footer>
  </div>
</template>
<script>
import api from '../../api'
import { mapActions } from "vuex";
export default {
  props: {
    type: String,
    id: String
  },
  components: {},
  data() {
    return {
      detailData: {}
    };
  },
  computed: {},
  methods: {
    ...mapActions("user", ["getUserInfo"]),
    backHome(){
      this.$router.back()
    }
  },
  created() {
    this.getUserInfo();
    api[this.type +'Detail']({ applicationNumber: this.id })
      .then(res => {
        this.detailData = res.data.data;
        console.log(res.data.data);
      });
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
@import "../../static/css/_minix.scss";
@import "../../static/css/common.scss";

.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #eee;

  .title {
    width: 100%;
    height: pxTorem(160px);
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: green;

    p {
      display: flex;
      flex-direction: column;
    }
  }
    main{
        width: 90%;
        margin-top: -10%;
        margin-left: 5%;   
        

        .message {
            width: 100%;
            height: 500px;
            border-radius: 10px;  
            margin-top: 5%; 
            background: #fff;

            p{
                height: 80px;
                width: 100%;
                border-bottom: 1px solid #ccc;
                line-height: 80px;
                font-size: 28px;
                padding-left: 5%;
            }
            
            ul{
                width: 100%;
                height: 100%;
                

                li{
                    padding: 0 5%;
                    height: 80px;
                    line-height: 80px;
                    display: flex;
                    font-size: 28px;
                    justify-content: space-between;
                    align-items: center;
                }
            }
        } 

        .why{
            width: 100%;
            height: 250px;
            margin-top: 3%; 
            background: #fff;
            border-radius: 10px;   

            p{
                height: 80px;
                width: 100%;
                border-bottom: 1px solid #ccc;
                line-height: 80px;
                font-size: 28px;
                padding-left: 5%;
            }

            div{
                width: 100%;
                height:180px;
                padding-left: 5%;
                font-size: 28px;
            }
        }

        .more{
            width: 100%;
            height: 160px;
            margin-top: 3%; 
            background: #fff;

            ul{
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: flex-start;
                align-items: center;

                li{
                    width: 20%;
                    height: 80%;

                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }

        }
    }

    footer{
        width: 100%;
        height:pxTorem(50px);
        display: flex;

        span{
            display: flex;
            justify-content: center;
            align-items: center;

            &:nth-child(1){
                flex: 3;
                background: #fff;
                color: #ccc;
            }
            &:nth-child(2){
                flex: 4;
                background: #666;
                color: #fff;
            }
            &:nth-child(3){
                flex: 4;
                background: green;
                color: #fff;
            }
        }
    }
  
}
</style>