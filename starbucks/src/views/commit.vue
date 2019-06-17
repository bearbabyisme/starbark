<template>
  <div class="wrap">
    <Header :title="type==='overtime'?'加班申请表':'休假申请表'" backgrounds="#0b6242" colors="#fff"/>
    <main class="main">
      <div class="main_head">
        <dl>
          <dt>
            <!-- <imsrc= alt> -->
          </dt>
          <dd>
            <div class="left">
              <p>
                <span class="title">申请人姓名</span>
                <span>{{detailData.nickname?detailData.nickname:null}}</span>
              </p>
              <p>
                <span class="title">直接主管</span>
                <span>秦义超</span>
              </p>
            </div>
            <div class="right">
              <p>
                <i class="iconfont icon-chevron-thin-right"></i>
              </p>
            </div>
          </dd>
        </dl>
      </div>
      <div class="context">
        <div class="title">
          <span>申请信息</span>
        </div>
        <ul>
          <li>
            <span class="con">
              加班日期
              <i>*</i>
            </span>
            <span>
              <el-date-picker/>
            </span>
          </li>
          <li>
            <span class="con">加班类型</span>
            <span>双休日加班</span>
          </li>
          <li>
            <span class="con">
              加班起始时间
              <i>*</i>
            </span>
            <span>
              <el-time-picker v-model="startTime" format="HH:mm" @change="startTimeFn"/>
            </span>
          </li>
          <li>
            <span class="con">
              加班截止时间
              <i>*</i>
            </span>
            <span>
              <el-time-picker v-model="endTime" format="HH:mm" @change="endTimeFn"/>
            </span>
          </li>
          <li>
            <span class="con">共计时数</span>
            <span v-show="flag">{{time}}</span>
          </li>
        </ul>
      </div>
      <div class="justly">
        <div class="title">
          <span>
            加班事由
            <i>*</i>
          </span>
        </div>
        <div class="cont">
          <p></p>
        </div>
      </div>
      <div class="photo">
        <div class="title">
          <span>
            <i class="iconfont icon-faxiandingdan"></i>
            附件
          </span>
          <span class="num">共 个 ></span>
        </div>

        <div class="img">
          <input type="file" @change="sendImg">
          <div>
            <img v-for="(item,ind) in add" :key="ind" :src="'http://localhost:3000'+item" alt>
          </div>
        </div>
      </div>
    </main>
    <footer class="footer">
      <button class="back" @click="$router.back()">退回</button>
      <button class="consent" @click="submit">提交</button>
    </footer>
  </div>
</template>
<script>
import api from '../api/index';
import Isfile from '../utils/isfile'
export default {
  props: {
    type: String
  },
  components: {},
  data() {
    return {
      startTime: "",
      endTime: "",
      describe: "",
      pciType: "默认选择类型",
      flag: false,
      times:'0',
      overtimeTypes:[{
            title:'双休日加班',
            id:1,
        },{
            title:'节假日加班',
            id:2
        },{
            title:'工作日加班',
            id:3
        }],
         vacationTypes:[{
            title:'年假',
            id:1,
        },{
            title:'调休',
            id:2
        }],
        detailData:'',
        loading:true,
        add:[]
    };
  },
  computed: {
    time() {
      const time = new Date(this.endTime) * 1 - new Date(this.startTime);
      return ((time / 1000 / 3600) % 24).toFixed(2);
    },
    title(){
      return this.type === 'overtime'?'加班':'休假'
    }
  },
  methods: {
    startTimeFn() {
      this.flag = false;
    },
    endTimeFn() {
      this.flag = true;
    },
    sendImg(e) {
      let userfile =  e.target.files[0];
        let isCheck = new Isfile(userfile,{
          type:['jpg','png','gif','jpeg'],
          size:3
        })
        if(isCheck.isType()&&isCheck.isSize()){
           const formdata = new FormData();
           formdata.append('file',userfile)
           api.commitFile(formdata).then(res=>{
             this.add.push(res.data.url)
           })
        }else{
          alert('文件格式不正确')
        }

      // let file = e.target.files[0];
      // let reader = new FileReader();
      // //这个this指向的是vue
      // reader.vue = this;
      // reader.readAsDataURL(file);
      // //在reader的load内部，this的指向是reader，所以使用自己的数据或者封装的vue方法，请使用this.vue.XXX
      // reader.onload = function() {
      //   file.src = this.result;
      //   this.vue.headimg = file.src;
      //   //上传图片
      //   let params = new FormData();
      //   //formdata对象只能用append
      //   params.append("myfile", file);
      //   console.log(params.get("myfile"));
      // }
    },
    submit(){
      let options = {
            annex:this.add,
            describe:this.describe,
            endTime:this.endTime,
            startTime:this.startTime,
            type:this.pciType
        }
        if((options.describe&&options.endTime&&options.startTime)!==''){
            api[this.type+'Submit'](options).then(res=>{
          if(res.data.msg === '提交成功'){
            this.$router.back()
          }else{
            this.$alert(res.data.msg)
          }
        })
        }else{
          this.$alert('请完整填写申请内容')
        }
    }
  },
  created(){
    api.islogin().then(res=>{
        this.detailData = res.data.data
        this.loading = false
        console.log(this.detailData)
      }) 
  }
};
</script>
<style scoped lang="scss">
@import "../static/css/detail_common";
</style>
