<template>
  <div>
    <Header />
    <section id="wrapper">
      <router-view></router-view>
    </section>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
export default {
  name: "root",
  components: {
    Header,
    Footer
  },
  data() {
    return {};
  }
};
</script>

<style lang="less">
// @import "~less/base.less";

button:focus {
  outline: 0;
}
#app {
  font-weight: 300;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2b2b2b;
  background: #fff;
}
</style>
