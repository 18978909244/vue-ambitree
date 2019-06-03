<template>
  <div
    class="products row"
    style=""
  >

    <article
      v-for="(item,index) in goodsList"
      :key="index"
      class="product-miniature js-product-miniature"
      @click="routerTo(`detail?id=${item.id}`)"
    >
      <div class="thumbnail-container">

        <a
          href="javascript:;"
          class="thumbnail product-thumbnail"
        >
          <img :src="item.image">
        </a>

        <div class="product-description">

          <h2
            class="h3 product-title"
            itemprop="name"
          >{{item.store_name}}</h2>

          <div class="product-price-and-shipping">

            <span class="sr-only">价格</span>
            <span
              itemprop="price"
              class="price"
            >{{exchange(item.price)}}</span>

          </div>

        </div>

        <div class="highlighted-informations no-variants hidden-sm-down">

          <a
            class="quick-view"
            href="javascript:;"
            data-link-action="quickview"
          >
            <i class="el-icon-position"></i>{{$t('index.quickView')}}
          </a>

        </div>

      </div>
    </article>

  </div>
</template>
<script>
import Cookies from "js-cookie";
import { Common } from "../api";

export default {
  name: "item",
  components: {},
  props: {
    goodsList: {
      type: Array,
      default: []
    }
  }
};
</script>


<style scoped lang="less">
.right-nav {
  .el-dropdown,
  .el-button {
    margin-left: 20px;
  }
}
.top-nav {
  margin-left: 5px;
  margin-right: 5px;
  font-size: 14px;
}
</style>