import Vue from 'vue';
import VueBus from 'vue-bus'
import APP from './App'
import VueRouter from 'vue-router'
import router from './router'
import MyPlugin from './myPlugin'

import ElementUI from 'element-ui'
import VueI18n from 'vue-i18n'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(VueI18n);
Vue.use(VueBus)
Vue.use(MyPlugin);

const i18n = new VueI18n({
  locale: 'cn',    // 语言标识
  //this.$i18n.locale // 通过切换locale的值来实现语言切换
  messages: {
    'cn': require('./common/lang/cn'),
    'en': require('./common/lang/en'),
    'hk': require('./common/lang/hk')
  }
})



new Vue({
  render: h => h(APP),
  router,
  i18n
}).$mount('#app');
