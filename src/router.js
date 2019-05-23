import VueRouter from 'vue-router'
// import {
//   User
// } from './api'

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
        requireAuth: false
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
        requireAuth: false
      }
    }, {
      path: 'search',
      name: 'search',
      component: () => import('./pages/Search'),
      meta: {
        requireAuth: false
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
  next()
  // if (to.matched.some(r => r.meta.requireAuth)) {
  //   try {
  //     await User.CheckToken()
  //     console.log('正常')
  //     next()
  //   } catch (e) {
  //     console.log('错误', e)
  //     // todo 清空本地缓存
  //     next('/login');
  //   }
  //   console.log(to);
  // } else {
  //   next();
  // }
});

export default router
