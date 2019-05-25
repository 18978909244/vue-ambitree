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
          <div id="carousel" style="margin-bottom:20px">
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
            <div class="products" style="justify-content:space-around">
              <article
                v-for="(item,index) in productList"
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

                    <h3 class="h3 product-title"><a href="javscript:;">{{item.store_name}}</a></h3>

                    <div class="product-price-and-shipping">

                      <!-- <span class="sr-only">正常价格</span>
                      <span class="regular-price">{{item.price}}</span> -->
                      <!-- <span
                        class="discount-amount discount-product"
                        style="top: -238px;"
                      >-$29.00</span> -->

                      <!-- <span class="sr-only">价格:</span> -->
                      <span
                        itemprop="price"
                        class="price"
                      >{{item.price}}</span>

                    </div>

                  </div>

                  <ul class="product-flags">
                    <li class="product-flag discount">Reduced price</li>
                  </ul>

                  <div class="highlighted-informations no-variants hidden-sm-down">

                    <a
                      class="quick-view"
                      href="javascript:;"
                    >
                      <i class="el-icon-position"></i>{{$t('index.quickView')}}
                    </a>

                  </div>

                </div>
              </article>

            </div>
            <div class="all-product-link float-xs-left float-md-right h4" style="width:100%;text-align:center" @click="routerTo('category')">
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
export default {
  name: "index",
  components: {
    slideritem,
    slider
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
    let {banner,lovely,menus,hot,best} = await Home.init();
    this.banner = banner
    this.productList = hot
  }
};
</script>


<style scoped lang="less">
</style>