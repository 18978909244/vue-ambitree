<template>

  <div class="container">

    <nav
      data-depth="1"
      class="breadcrumb hidden-sm-down"
    >
      <ol
        itemscope=""
        itemtype="http://schema.org/BreadcrumbList"
      >

        <li>
          <a itemprop="item">
            <span itemprop="name">Home</span>
          </a>
        </li>

      </ol>
    </nav>

    <div id="content-wrapper">

      <section id="main">

        <section
          id="content"
          class="page-home"
        >
          <div
            id="carousel"
            style="margin-bottom:20px"
          >
            <slider
              ref="slider"
              :options="options"
            >
              <!-- slideritem wrapped package with the components you need -->
              <slideritem
                v-for="(item,index) in banner"
                :key="index"
              >
                <img :src="item.pic" />
              </slideritem>
              <!-- Customizable loading -->
              <div slot="loading">loading...</div>
            </slider>
          </div>
          <section class="featured-products clearfix">
            <h2 class="h2 products-section-title text-uppercase">
              {{$t('index.popProducts')}}
            </h2>
            <Item :goodsList="productList" />
            <div
              class="all-product-link float-xs-left float-md-right h4"
              style="width:100%;text-align:center"
              @click="routerTo('category')"
            >
              {{$t('index.allproducts')}}<i class="el-icon-position"></i>
            </div>
          </section>

        </section>

        <footer class="page-footer">

          <!-- Footer content -->

        </footer>

      </section>

    </div>

  </div>

</template>
<script>
import { Home } from "../api";
import { slider, slideritem } from "vue-concise-slider";
import Item from 'src/components/Item'

export default { 
  name: "index",
  components: {
    slideritem,
    slider,
    Item
  },
  data() {
    return {
      productList: [],
      options: {
        currentPage: 0
      },
      banner: []
    };
  },
  async created() {
    try{
    let {banner,lovely,menus,hot,best} = await Home.init();
    this.banner = banner
    this.productList = hot
    }catch(e){
      console.log(e)
    }
  }
};
</script>


<style scoped lang="less">
</style>