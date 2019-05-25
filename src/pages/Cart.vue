<template>
  <div class="container">
    <div id="content-wrapper">
      <section id="main">
        <div class="cart-grid row">

          <!-- Left Block: cart product informations & shpping -->
          <div class="cart-grid-body col-xs-12 col-lg-8">

            <!-- cart products detailed -->
            <div class="card cart-container">
              <div class="card-block">
                <h1 class="h1">Shopping Cart</h1>
              </div>
              <hr class="separator">

              <div class="cart-overview js-cart">
                <ul class="cart-items">
                  <li
                    class="cart-item"
                    v-for="(item,index) in cartList"
                    :key="index"
                  >

                    <div class="product-line-grid">
                      <!--  product left content: image-->
                      <div class="product-line-grid-left col-md-3 col-xs-4">
                        <span class="product-image media-middle">
                          <img :src="item.productInfo.image">
                        </span>
                      </div>

                      <!--  product left body: description -->
                      <div
                        class="product-line-grid-body col-md-4 col-xs-8"
                        @click="routerTo('detail')"
                      >
                        <div class="product-line-info">
                          {{item.productInfo.store_name}}
                        </div>

                      </div>

                      <!--  product left body: description -->
                      <div class="product-line-grid-right product-line-actions col-md-5 col-xs-12">
                        <div class="row">
                          <div class="col-xs-4 hidden-md-up"></div>
                          <div class="col-md-10 col-xs-6">
                            <div class="row">
                              <div class="col-md-6 col-xs-6 qty">
                                <el-input-number
                                  v-model="item.cart_num"
                                  controls-position="right"
                                  @change="handleChange"
                                  :min="1"
                                  :max="item.trueStock"
                                ></el-input-number>
                              </div>
                              <div class="col-md-6 col-xs-2 price">
                                <span class="product-price">
                                  <strong>
                                    US$&nbsp;{{item.productInfo.price*item.cart_num}}
                                  </strong>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-2 col-xs-2 text-xs-right">
                            <div class="cart-line-product-actions">
                              <i class="el-icon-delete"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="clearfix"></div>
                    </div>

                  </li>
                </ul>
              </div>

            </div>

            <a
              class="label"
              href="javascript:;"
            >
              <i class="el-icon-caret-left"></i>{{$t('cart.backItem')}}
            </a>

            <!-- shipping informations -->

          </div>

          <!-- Right Block: cart subtotal & cart total -->
          <div class="cart-grid-right col-xs-12 col-lg-4">

            <div class="card cart-summary">

              <div class="cart-detailed-totals">

                <div class="card-block">
                  <div
                    class="cart-summary-line"
                    id="cart-subtotal-products"
                  >
                    <span class="label js-subtotal">
                      {{cartList.length}} {{$t('cart.countItem')}}
                    </span>
                    <span class="value">US$&nbsp;{{totalPrice}}</span>
                  </div>
                  <div
                    class="cart-summary-line"
                    id="cart-subtotal-shipping"
                  >
                    <span class="label">
                      {{$t('cart.shopFee')}}
                    </span>
                    <span class="value">{{$t('cart.free')}}</span>
                    <div><small class="value"></small></div>
                  </div>
                </div>

                <div class="block-promo">
                  <div class="cart-voucher">

                    <!-- <p>
                      <a
                        class="collapse-button promo-code-button"
                        data-toggle="collapse"
                        href="#promo-code"
                        aria-expanded="false"
                        aria-controls="promo-code"
                      >
                        Have a promo code?
                      </a>
                    </p> -->

                    <!-- <div
                      class="promo-code collapse"
                      id="promo-code"
                    >

                      <form
                        action="https://www.ambitree.in/zh/cart"
                        data-link-action="add-voucher"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="token"
                          value="5db247094fa078f451e2a4d3ab92a85e"
                        >
                        <input
                          type="hidden"
                          name="addDiscount"
                          value="1"
                        >
                        <input
                          class="promo-input"
                          type="text"
                          name="discount_name"
                          placeholder="Promo code"
                        >
                        <button
                          type="submit"
                          class="btn btn-primary"
                        ><span>添加</span></button>
                      </form>

                      <div
                        class="alert alert-danger js-error"
                        role="alert"
                      >
                        <i class="material-icons"></i><span class="ml-1 js-error-text"></span>
                      </div>

                    </div> -->

                  </div>
                </div>

                <hr class="separator">

                <div class="card-block">
                  <div class="cart-summary-line cart-total">
                    <span class="label">{{$t('cart.total')}}</span>
                    <span class="value">US$&nbsp;{{totalPrice}}</span>
                  </div>

                  <!-- <div class="cart-summary-line">
                    <small class="label">{{$t('cart.noOtherFee')}}</small>
                    <small class="value">US$&nbsp;0.00</small>
                  </div> -->
                </div>

                <hr class="separator">
              </div>

              <div class="checkout cart-detailed-actions card-block">
                <div class="text-sm-center">
                  <a
                    href="javascript:;"
                    class="btn btn-primary"
                  >{{$t('cart.continueCount')}}</a>

                </div>
              </div>

            </div>

            <Message />
          </div>

        </div>
      </section>

    </div>

  </div>

</template>
<script>
import Message from "../components/Message";
import { Cart } from "../api";
export default {
  name: "cart",
  components: {
    Message
  },
  data() {
    return {
      cartList: [],
      num: 1
    };
  },
  computed: {
    totalPrice() {
      let total = 0;
      for (let i = 0; i < this.cartList.length; i++) {
        total +=
          this.cartList[i].cart_num *
          Number(this.cartList[i].productInfo.price);
      }
      return total
    }
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      let result = await Cart.getCart();
      this.cartList = result.valid;
    }
  }
};
</script>


<style scoped lang="less">
.el-input-number {
  width: 80px;
}
</style>