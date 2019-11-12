import Vue from 'vue'
import Router from 'vue-router'

// 懒加载方式
const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const login = r => require.ensure([], () => r(require('../page/login/login')), 'login')
const ChattelFinance = r => require.ensure([], () => r(require('../components/left/ChattelFinance/ChattelFinance')), 'ChattelFinance')
const FuturesTrading = r => require.ensure([], () => r(require('../components/left/FuturesTrading/FuturesTrading')), 'FuturesTrading')
const goodsInfo = r => require.ensure([], () => r(require('../components/left/goodsInfo/goodsInfo')), 'goodsInfo')
const insuranceSup = r => require.ensure([], () => r(require('../components/left/insuranceSup/insuranceSup')), 'insuranceSup')
const left = r => require.ensure([], () => r(require('../components/left/left')), 'left')
const land = r => require.ensure([], () => r(require('../components/left/landInfo/land')), 'land')
const orderInfo = r => require.ensure([], () => r(require('../components/left/orderInfo/orderInfo')), 'orderInfo')
const senor = r => require.ensure([], () => r(require('../components/left/sensor/senor')), 'senor')

Vue.use(Router)

const router = new Router({
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
  } else {
    if (from.meta.keepAlive) {
      from.meta.savedPosition = document.body.scrollTop;
    }
      return { x: 0, y: to.meta.savedPosition || 0 }
  }
},
  routes: [
    {
    path:"/home",
      component: home,
      children:[
        {
          path:"/left",
          component: left,
          children:[
            {
              path:"/land",
              component: land
            }
            ,{
              path:"/senor",
              component: senor
            }
            ,{
              path:"/orderInfo",
              component: orderInfo
            }
            ,{
              path:"/ChattelFinance",
              component: ChattelFinance
            }
            ,{
              path:"/FuturesTrading",
              component: FuturesTrading
            }
            ,{
              path:"/goodsInfo",
              component: goodsInfo
            }
            ,{
              path:"/insuranceSup",
              component: insuranceSup
            }
          ]
        }
      ]
    },{
      path:"/",
      component: login
    }
  ]
})
// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     var jj  =false;
//     if (jj==true) {
//       next({
//         path: '/left',
//         query: { redirect: to.fullPath }
//       })
//     } else {
//       next({ path: '/left/robot'})
//     }
//   } else {
//     next() // 确保一定要调用 next()
//   }
// })

// beforeEnter:(to, from, next) => {
//   var jj  =true;
//   console.log(localStorage.getItem("lll"))
//   if (jj) {
//     console.log("000")
//     next({
//       path: '/right'
//     })
//   } else {
//     next(false) // 确保一定要调用 next()
//     console.log("11")
//   }
// }
export default router