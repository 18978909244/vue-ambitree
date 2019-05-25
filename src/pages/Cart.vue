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

              <div
                class="cart-overview js-cart"
                data-refresh-url="//www.ambitree.in/zh/cart?ajax=1&amp;action=refresh"
              >
                <ul class="cart-items">
                  <li class="cart-item" v-for="(item,index) in cartList" :key="index">

                    <div class="product-line-grid">
                      <!--  product left content: image-->
                      <div class="product-line-grid-left col-md-3 col-xs-4">
                        <span class="product-image media-middle">
                          <img
                            src="https://www.ambitree.in/409-cart_default/lenvima-lenvatinib-4mg.jpg"
                          >
                        </span>
                      </div>

                      <!--  product left body: description -->
                      <div class="product-line-grid-body col-md-4 col-xs-8" @click="routerTo('detail')">
                        <div class="product-line-info">
                          Lenvima (Lenvatinib)仑伐替尼 乐伐替尼 4mg
                        </div>

                        <div class="product-line-info product-price h5 has-discount">
                          <div class="product-discount">
                            <span class="regular-price">US$&nbsp;1,124.00</span>
                            <span class="discount discount-amount">
                              -US$&nbsp;310.00
                            </span>
                          </div>
                          <div class="current-price">
                            <span class="price">US$&nbsp;814.00</span>
                          </div>
                        </div>

                        <br>

                      </div>

                      <!--  product left body: description -->
                      <div class="product-line-grid-right product-line-actions col-md-5 col-xs-12">
                        <div class="row">
                          <div class="col-xs-4 hidden-md-up"></div>
                          <div class="col-md-10 col-xs-6">
                            <div class="row">
                              <div class="col-md-6 col-xs-6 qty">
                                  <el-input-number v-model="num" controls-position="right" @change="handleChange" :min="1" :max="10"></el-input-number>
                                </div>
                              <div class="col-md-6 col-xs-2 price">
                                <span class="product-price">
                                  <strong>
                                    US$&nbsp;814.00
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
                      2 {{$t('cart.countItem')}}
                    </span>
                    <span class="value">US$&nbsp;1,083.00</span>
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
                    <span class="value">US$&nbsp;1,083.00</span>
                  </div>

                  <div class="cart-summary-line">
                    <small class="label">{{$t('cart.noOtherFee')}}</small>
                    <small class="value">US$&nbsp;0.00</small>
                  </div>
                </div>

                <hr class="separator">
              </div>

              <div class="checkout cart-detailed-actions card-block">
                <div class="text-sm-center">
                  <a
                    href="https://www.ambitree.in/zh/订单"
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
import Message from '../components/Message'
export default {
  name: "cart",
  components: {
    Message
  },
  data() {
    return {
      cartList:[1,2],
      num:1
    };
  }
};
</script>


<style scoped lang="less">
.el-input-number{
  width:80px;
}
</style>