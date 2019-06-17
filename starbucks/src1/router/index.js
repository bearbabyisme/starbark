import Vue from 'vue'
import Router from 'vue-router'
// import Home from '../views/home'

Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },{
      path:'/home',
      name:'home',
      meta:{
        title:'加班/休假'
      },
      component:()=>import('../views/home/home.vue')
      // children:[
      //   {
      //     path:'/home',
      //     redirect:'/home/notdo'
      //   },
      //   {
      //     path:'/home/notdo',
      //     name:'notdo',
      //     component:()=>import('../views/notdo.vue'),
      //     children:[
      //       {
      //         path:'/home/notdo',
      //         redirect:'/home/notdo/job'
      //       },{
      //         path:'/home/notdo/job',
      //         name:'job',
      //         component:()=>import('../views/job')
      //       },{
      //         path:'/home/notdo/holiday',
      //         name:'holiday',
      //         component:()=>import('../views/holiday')
      //       }
      //     ]
      //   },
      //   {
      //     path:'/home/doing',
      //     name:'doing',
      //     component:()=>import('../views/doing.vue')
      //   },
      //   {
      //     path:'/home/already',
      //     name:'already',
      //     component:()=>import('../views/already.vue')
      //   }
      // ]
    },{
      path:'/login',
      name:'login',
      meta:{
        title:'登陆'
      },
      component:()=>import('../views/login/login.vue')
    }
  ]
})

router.beforeEach((to,from,next)=>{
  document.title = to.meta.title;
  next()
})

export default router;
