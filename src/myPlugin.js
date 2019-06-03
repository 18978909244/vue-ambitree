let MyPlugin = {}
import Bread from "src/components/Bread";


MyPlugin.install = function (Vue, options) {

  // 3. 注入组件选项
  Vue.mixin({
    data() {
      return {
        dollar: 'CNY',
        exchanges: {
          CNY: {
            price: 1,
            name: '￥'
          },
          USD: {
            price: 7,
            name: '$'
          }
        }
      }
    },
    created() {
      this.$bus.on('exchange', e => {
        this.dollar = e
      })
    },
    components: {
      Bread
    },
    methods: {
      exchange: function(value){

        let rate = this.exchanges[this.dollar].price / this.exchanges["CNY"].price;
        return this.exchanges[this.dollar].name + " " + (value / rate).toFixed(2);
      },
      routerTo(route) {
        if (route === 'back') {
          this.$router.back()
        } else {
          this.$router.push(`/${route}`);
        }
      },
      loginout() {
        console.log('loginout')
      }
    },
  })
}
export default MyPlugin