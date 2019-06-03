<template>
  <div class="container">

    <Bread :name='current.cate_name' />

    <div
      id="left-column"
      class="col-xs-12 col-sm-4 col-md-3"
    >

      <div class="block-categories hidden-sm-down">
        <ul class="category-top-menu">
          <li><a
              class="text-uppercase h6"
              href="javascript:;"
            >{{current.cate_name}}</a></li>
          <li>
            <ul class="category-sub-menu">
              <li
                data-depth="0"
                v-for="(item,index) in chidlren"
                :key="index"
              ><a
                  href="javascript:;"
                  @click="routerTo(`category?id=${item.id}`)"
                >{{item.cate_name}}</a></li>
            </ul>
          </li>
        </ul>
      </div>
      <div
        id="search_filters_wrapper"
        class="hidden-sm-down"
      >
        <div
          id="search_filter_controls"
          class="hidden-md-up"
        >
          <span id="_mobile_search_filters_clear_all"></span>
          <button class="btn btn-secondary ok">
            <i class="material-icons rtl-no-flip"></i>
            确定
          </button>
        </div>
        <!-- <div id="search_filters">

          <p class="text-uppercase h6 hidden-sm-down">Filter By</p>

          <div
            id="_desktop_search_filters_clear_all"
            class="hidden-sm-down clear-all-wrapper"
          >
            <button
              data-search-url="https://www.ambitree.in/zh/10-cancer-categories"
              class="btn btn-tertiary js-search-filters-clear-all"
            >
              <i class="material-icons"></i>
              Clear all
            </button>
          </div>

          <section class="facet clearfix">
            <p class="h6 facet-title hidden-sm-down">分类</p>
            <div
              class="title hidden-md-up"
              data-target="#facet_2363"
              data-toggle="collapse"
            >
              <p class="h6 facet-title">分类</p>
              <span class="float-xs-right">
                <span class="navbar-toggler collapse-icons">
                  <i class="material-icons add"></i>
                  <i class="material-icons remove"></i>
                </span>
              </span>
            </div>

            <ul
              id="facet_2363"
              class="collapse"
            >
              <li>
                <label
                  class="facet-label"
                  for="facet_input_2363_1"
                >
                  <span class="custom-checkbox">
                    <input
                      id="facet_input_2363_1"
                      data-search-url="https://www.ambitree.in/zh/10-cancer-categories?q=%E5%88%86%E7%B1%BB-%E8%82%BE%E7%BB%86%E8%83%9E%E7%99%8C%EF%BC%88RCC%EF%BC%89"
                      type="checkbox"
                    >
                    <span class="ps-shown-by-js"><i class="material-icons rtl-no-flip checkbox-checked"></i></span>
                  </span>

                  <a
                    href="https://www.ambitree.in/zh/10-cancer-categories?q=%E5%88%86%E7%B1%BB-%E8%82%BE%E7%BB%86%E8%83%9E%E7%99%8C%EF%BC%88RCC%EF%BC%89"
                    class="_gray-darker search-link js-search-link"
                    rel="nofollow"
                  >
                    肾细胞癌（RCC）
                    <span class="magnitude">(6)</span>
                  </a>
                </label>
              </li>
            </ul>

          </section>
        </div> -->

      </div>

    </div>

    <div
      id="content-wrapper"
      class="left-column col-xs-12 col-sm-8 col-md-9"
    >

      <section id="main">

        <div id="js-product-list-header">
          <div class="block-category card card-block">
            <h1 class="h1">{{current.cate_name}}</h1>
          </div>
        </div>

        <section id="products">

          <div id="">

            <div
              id="js-product-list-top"
              class="row products-selection"
            >
              <div class="col-md-6 hidden-sm-down total-products">
                <p>There are {{goodsList.length}} products.</p>
              </div>
              <div class="col-md-6" v-if="goodsList.length!=0">
                <div class="row sort-by-row">

                  <span class="col-sm-6 col-xs-6 col-md-6 hidden-sm-down sort-by">{{$t('category.sortBy')}}:</span>
                  <div class="col-sm-6 col-xs-6 col-md-6 products-sort-order dropdown">
                    <el-dropdown
                      split-button
                      type="primary"
                    >
                      默认排序
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>按价格排</el-dropdown-item>
                        <el-dropdown-item>按销量排</el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div
            id=""
            class="hidden-sm-down"
          >
            <section
              id="js-active-search-filters"
              class="hide"
            >

              <h1 class="h6 hidden-xs-up">Active filters</h1>

            </section>

          </div>

          <div id="">

            <div id="js-product-list">
              <Item :goodsList="goodsList" />

              <nav
                class="pagination"
                style="text-align:center"
                v-if="goodsList.length!=0"
              >
                <el-pagination
                  background
                  layout="prev, pager, next"
                  :total="goodsList.length/20"
                >
                </el-pagination>

              </nav>

            </div>

          </div>

        </section>

      </section>

    </div>

  </div>

</template>
<script>
import Item from 'src/components/Item'
import { Common, Category } from "../api";
export default {
  name: "cart",
  components:{
    Item
  },
  data() {
    return {
      current: {},
      chidlren: [],
      goodsList: []
    };
  },
  created() {
    this.init(this.$route.query.id);
  },
  watch: {
    //监听相同路由下参数变化的时候，从而实现异步刷新
    $route(to, from) {
      console.log('to',to)
      this.init(to.query.id)
    }
  },
  methods: {
    async init(id = 1) {
      try {
        let all = await Common.getCat();
        this.current = all.filter(item => item.id == id)[0];
        this.chidlren = await Common.getCatId(id);
        this.goodsList = await Category.getCategoryGoodList({ cid: id });
        console.log("this.goodsList", this.goodsList);
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>


<style scoped lang="less">
</style>