import VueRouter from 'vue-router'
import Cookies from 'js-cookie';

const routes = [
  {
    path: '/',
    name: 'root',
    component: () => import('./pages/Root'),
    children: [{
      path: '',
      name: 'index',
      component: () => import('./pages/Index'),
      meta: {
        requireAuth: false
      }
    }, {
      path: 'login',
      name: 'login',
      component: () => import('./pages/Login'),
      meta: {
        requireAuth: false
      }
    },{
      path: 'register',
      name: 'register',
      component: () => import('./pages/Register'),
      meta: {
        requireAuth: false
      }
    }, {
      path: 'cart',
      name: 'cart',
      component: () => import('./pages/Cart'),
      meta: {
        requireAuth: true
      }
    }, {
      path: 'category',
      name: 'category',
      component: () => import('./pages/Category'),
      meta: {
        requireAuth: false
      }
    }, {
      path: 'detail',
      name: 'detail',
      component: () => import('./pages/Detail'),
      meta: {
        requireAuth: false
      }
    }, {
      path: 'contact',
      name: 'contact',
      component: () => import('./pages/Contact'),
      meta: {
        requireAuth: true
      }
    }, {
      path: 'search',
      name: 'search',
      component: () => import('./pages/Search'),
      meta: {
        requireAuth: false
      }
    }, {
      path: 'question',
      name: 'question',
      component: () => import('./pages/Question'),
      meta: {
        requireAuth: false
      }
    }, {
      path: 'checkShip',
      name: 'checkShip',
      component: () => import('./pages/CheckShip'),
      meta: {
        requireAuth: true
      }
    }, {
      path: 'myAccount',
      name: 'myAccount',
      component: () => import('./pages/MyAccount'),
      meta: {
        requireAuth: true
      }
    }]
  },
  // {
  //   path: '/login',
  //   component: require('./pages/Login').default
  // }
]

const router = new VueRouter({
  routes
})

router.beforeEach(async (to, from, next) => {
  console.log(to)
  let token = Cookies.get("is_login")
  console.log(`token,${token}`)
  if (!to.meta.requireAuth) {
    console.log('here',to)
    //路由元信息requireAuth:true，或者homePages:true，则不做登录校验
    next()
  } else {
    if (token=='1') { //判断用户是否登录
      next()
    } else {
      if (to.path === "/login") {
        next()
      } else {
        next({
          path: "/login",
          query: {
            redirect: to.fullPath
          } //将目的路由地址存入login的query中
        })
      }
    }
  }
  return
});

export default router
