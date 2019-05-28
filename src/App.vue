<template>
  <!-- <router-view name="login"></router-view> -->
  <div id="app" class="lang-zh country-cn currency-usd layout-full-width page-index tax-display-disabled">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "app"
  };
</script>

<style lang="less">
a:hover{
  cursor:pointer
}
  // @import "~less/base.less";
</style>
