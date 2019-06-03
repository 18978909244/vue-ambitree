<template>
  <div class="container">

    <Bread name="搜索结果" />

    <div id="content-wrapper">

      <section id="main">

        <section id="products">

          <div>

            <div
              id="js-product-list-top"
              class="row products-selection"
            >
              <div class="col-md-6 hidden-sm-down total-products">
                <p>There are {{goodsList.length}} products.</p>
              </div>
              <div class="col-md-6">
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

          <div>

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
import Item from "src/components/Item";
import { Search } from "../api";
export default {
  name: "search",
  components: {
    Item
  },
  data() {
    return {
      goodsList: []
    };
  },
  created() {
    this.init(this.$route.query.word);
  },
  methods: {
    async init(word) {
      try {
        let result = await Search.searchByWord(word);
        this.goodsList = result;
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>


<style scoped lang="less">
</style>