let MyPlugin = {}

MyPlugin.install = function (Vue, options) {
  // 3. 注入组件选项
  Vue.mixin({
    data(){
      return {
        query:null
      }
    },
    created(){
    },
    methods: {
      routerTo(route) {
        console.log(route);
        this.$router.push(`/${route}`);
      },
      loginout(){
        console.log('loginout')
      }
    },
  })
}
export default MyPlugin