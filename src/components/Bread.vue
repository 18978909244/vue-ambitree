<template>
  <div class="breadcrumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
      <el-breadcrumb-item>{{name}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script>
export default {
  name: "bread",
  components: {},
  props: {
    current: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    }
  }
  // computed: {
  //   list(){
  //     console.log(this.$t("footer.list"))
  //     return this.$t("footer.list");
  //   }
  // }
};
</script>


<style scoped lang="less">
// .breadcrumb{
//   padding-bottom: 20px;
// }
</style>