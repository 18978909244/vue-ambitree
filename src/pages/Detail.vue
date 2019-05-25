<template>
  <div class="container">

    <Bread />

    <div id="content-wrapper">

      <section id="main">

        <div class="row">
          <div class="col-md-6">

            <section
              class="page-content"
              id="content"
            >

              <ul class="product-flags">
              </ul>

              <div class="images-container">

                <div class="product-cover">
                  <img
                    class="js-qv-product-cover"
                    :src="storeInfo.image"
                    style="width:100%;"
                  >
                </div>

                <div class="js-qv-mask mask">
                  <ul class="product-images js-qv-product-images">
                    <li class="thumb-container">
                      <img
                        class="thumb js-thumb  selected "
                        :src="storeInfo.image"
                        alt=""
                        title=""
                        width="100"
                      >
                    </li>
                  </ul>
                </div>

              </div>

            </section>

          </div>
          <div class="col-md-6">

            <h1
              class="h1"
              itemprop="name"
            >{{storeInfo.store_name}}</h1>

            <div class="product-prices">

              <div class="product-price h5">

                <div class="current-price">
                  <span
                    itemprop="price"
                    content="69"
                  >US$&nbsp;{{storeInfo.price}}</span>

                </div>

              </div>
            </div>

            <div class="product-information">
              <div
                id="product-description-short-142"
                itemprop="description"
              >
                <p>{{storeInfo.store_info}}</p>

              </div>
              <div class="product-actions">

                <div class="product-add-to-cart">
                  <span class="control-label">{{$t('detail.num')}}</span>

                  <div class="product-quantity clearfix">
                    <div class="qty">
                      <div
                        class="input-group bootstrap-touchspin"
                        style="box-shadow:none"
                      >
                        <el-input-number
                          v-model="num"
                          controls-position="right"
                          @change="handleChange"
                          :min="1"
                          :max="10"
                        ></el-input-number>
                      </div>
                    </div>

                    <div class="add">
                      <el-button
                        type="primary"
                        @click="addCart(num)"
                      >{{$t('detail.cart')}}</el-button>
                    </div>
                  </div>

                  <span id="product-availability">
                  </span>

                  <p class="product-minimal-quantity">
                  </p>

                </div>

                <div class="product-additional-info">

                </div>

              </div>

              <Message />

            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div>

              <div class="tabs">
                <ul
                  class="nav nav-tabs"
                  role="tablist"
                >
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      data-toggle="tab"
                      href="#description"
                      role="tab"
                      aria-controls="description"
                      aria-selected="true"
                    >{{$t('detail.description')}}</a>
                  </li>
                  <!-- <li class="nav-item">
                    <a
                      class="nav-link"
                      data-toggle="tab"
                      href="#product-details"
                      role="tab"
                      aria-controls="product-details"
                    >品牌和规格</a>
                  </li> -->
                </ul>

                <div
                  class="tab-content"
                  id="tab-content"
                >
                  <div
                    class="tab-pane fade in active"
                    id="description"
                    role="tabpanel"
                  >

                    <div
                      class="product-description"
                      v-html="storeInfo.description"
                    >

                    </div>

                  </div>

                  <div
                    class="tab-pane fade"
                    id="product-details"
                  >

                    <div class="product-manufacturer">
                      <label class="label">品牌</label>
                      <span>
                        <a href="https://www.ambitree.in/zh/18_neon">Neon(印度)</a>
                      </span>
                    </div>
                    <div class="product-reference">
                      <label class="label">参考 </label>
                      <span itemprop="sku">Arimidex®</span>
                    </div>

                    <div class="product-quantities">
                      <label class="label">有货</label>
                      <span
                        data-stock="67"
                        data-allow-oosp="0"
                      >67 商品</span>
                    </div>

                    <div class="product-out-of-stock">

                    </div>

                    <section class="product-features">
                      <p class="h6">详细信息</p>
                      <dl class="data-sheet">
                        <dt class="name">包装数量</dt>
                        <dd class="value">28</dd>
                        <dt class="name">警告</dt>
                        <dd class="value">没有咨询专业的医生或医师，请勿服用该药物。</dd>
                        <dt class="name">建议用量</dt>
                        <dd class="value">遵照医生的建议</dd>
                        <dt class="name">品牌</dt>
                        <dd class="value">Neon（印度）</dd>
                      </dl>
                    </section>

                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>

      </section>

    </div>

  </div>

</template>
<script>
import { Detail } from "../api";
import Message from "../components/Message";
import Bread from "../components/Bread";
export default {
  name: "detail",
  components: {
    Message,
    Bread
  },
  data() {
    return {
      num: 1,
      storeInfo: {}
    };
  },
  created() {
    // console.log(this.$route.query.id)
    this.init(this.$route.query.id);
    this.id = this.$route.query.id;
  },
  methods: {
    async init(id = 1) {
      let {
        storeInfo,
        similarity,
        productAttr,
        productValue
      } = await Detail.getDetail(id);
      this.storeInfo = storeInfo;
    },
    handleChange() {},
    async addCart(num) {
      try {
        let result = await Detail.addCart(this.id, num);
        console.log(result);
      } catch (message) {
        this.$message({
          type:'error',
          message
        })
      }
    }
  }
};
</script>


<style scoped lang="less">
</style>