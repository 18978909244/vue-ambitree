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
        if(route==='back'){
          this.$router.back()
        }else{
          this.$router.push(`/${route}`);
        }
      },
      loginout(){
        console.log('loginout')
      }
    },
  })
}
export default MyPlugin