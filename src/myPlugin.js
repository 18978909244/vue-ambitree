let MyPlugin = {}
import Bread from "src/components/Bread";
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
    components: {
      Bread
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