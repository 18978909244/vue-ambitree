<template>
  <div class="container">

    <div id="content-wrapper">
      <section id="main">
        <div class="cart-grid row">

          <!-- Left Block: cart product informations & shpping -->
          <div class="cart-grid-body col-xs-12 col-lg-8 col-md-8">
            <section v-if="step=='shop_cart'">
              <!-- cart products detailed -->
              <div class="card cart-container">
                <div class="card-block">
                  <h1 class="h1">Shopping Cart</h1>
                </div>
                <hr class="separator">

                <div class="cart-overview js-cart">
                  <span
                    class="no-items"
                    v-if="cartList.length===0"
                  >您的购物车中没有更多商品</span>
                  <ul
                    class="cart-items"
                    v-else
                  >
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
                          @click="routerTo(`detail?id=${item.product_id}`)"
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
                                    @change="handleChange({
                                    cartNum:item.cart_num,
                                    cartId:item.id
                                  })"
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
                                <i
                                  class="el-icon-delete"
                                  @click="removeCart(item.id)"
                                ></i>
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
                @click="routerTo('back')"
              >
                <i class="el-icon-caret-left"></i>{{$t('cart.backItem')}}
              </a>
            </section>
            <section
              v-if="step=='order_confirm'"
              id="checkout"
            >
              <section
                id="checkout-personal-information-step"
                class="checkout-step -reachable -complete -current js-current-step"
              >
                <h1 class="step-title h3">
                  <i class="material-icons rtl-no-flip done"></i>
                  <span class="step-number">1</span>
                  个人信息
                  <span class="step-edit text-muted"><i class="material-icons edit">mode_edit</i> 修改</span>
                </h1>

                <div class="content">

                  <p class="identity">
                    Connected as <a href="javascript:;">xiaoguang su</a>.
                  </p>
                  <p>
                    Not you? <a href="javascript:;">Log out</a>
                  </p>
                  <p><small>If you sign out now, your cart will be emptied.</small></p>

                </div>
              </section>

              <section
                id="checkout-addresses-step"
                class="checkout-step -reachable -current"
              >
                <h1 class="step-title h3">
                  <i class="material-icons rtl-no-flip done"></i>
                  <span class="step-number">2</span>
                  地址
                  <span class="step-edit text-muted"><i class="material-icons edit">mode_edit</i> 修改</span>
                </h1>

                <div class="content">
                  <div style="margin-bottom:20px">
                    <div
                      v-for="(item,index) in addressList"
                      :key="index"
                      class="address_item"
                    >
                      <el-radio
                        v-model="addressId"
                        :label="item.id"
                      >{{`${item.province}${item.city}${item.district} ${item.detail} ${item.real_name} ${item.phone} `}}</el-radio>
                      <el-button @click="editAddress(item)">编辑</el-button>
                    </div>
                  </div>
                  <el-form
                    :model="ruleForm"
                    :rules="rules"
                    ref="ruleForm"
                    label-width="100px"
                    class="demo-ruleForm"
                  >
                    <el-form-item
                      label="姓名"
                      prop="real_name"
                    >
                      <el-input v-model="ruleForm.real_name"></el-input>
                    </el-form-item>
                    <el-form-item
                      label="省市区"
                      prop="region"
                    >
                      <el-cascader
                        size="large"
                        :options="options"
                        v-model="ruleForm.region"
                        @change="handleChange"
                      >
                      </el-cascader>
                    </el-form-item>
                    <el-form-item
                      label="手机"
                      prop="phone"
                    >
                      <el-input v-model="ruleForm.phone"></el-input>
                    </el-form-item>
                    <el-form-item
                      label="详细地址"
                      prop="detail"
                    >
                      <el-input
                        type="textarea"
                        v-model="ruleForm.detail"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="默认地址">
                      <el-switch v-model="ruleForm.is_default"></el-switch>
                    </el-form-item>
                    <el-form-item>
                      <el-button
                        type="primary"
                        @click="submitForm('ruleForm')"
                      >提交</el-button>
                      <el-button @click="resetForm('ruleForm')">重置</el-button>
                    </el-form-item>
                  </el-form>

                </div>
              </section>

              <section
                class="checkout-step -unreachable -current"
                id="checkout-payment-step"
              >
                <h1 class="step-title h3">
                  <span class="step-number">3</span> 付款
                </h1>
                <div class="content">
                  <el-radio
                    v-model="payType"
                    label="weixin"
                    border
                  >微信</el-radio>
                  <el-radio
                    v-model="payType"
                    label="yue"
                    border
                  >余额</el-radio>
                </div>

              </section>

              <!-- shipping informations -->
            </section>

          </div>

          <!-- Right Block: cart subtotal & cart total -->
          <div class="cart-grid-right col-xs-12 col-lg-4 col-md-4">

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
                  <button
                    class="btn btn-primary"
                    @click="confirmOrder"
                    v-if="step=='shop_cart'"
                    :disabled="cartList.length===0"
                  >{{$t('cart.continueCount')}}</button>

                  <button
                    class="btn btn-primary"
                    @click="createOrder"
                    v-if="step=='order_confirm'"
                  >{{$t('cart.continueCount')}}</button>

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
import { regionData, CodeToText, TextToCode } from "element-china-area-data";
export default {
  name: "cart",
  components: {
    Message
  },
  data() {
    return {
      orderKey: "",
      options: regionData,
      cartList: [],
      num: 1,
      step: "shop_cart",
      payType: "yue",
      addressList: [],
      addressId: "",
      ruleForm: {
        real_name: "",
        region: [],
        is_default: false,
        detail: "",
        address: {},
        phone: "",
        id: 0
      },
      rules: {
        real_name: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          { min: 1, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        phone: [{ required: true, message: "请输入手机", trigger: "blur" }],
        region: [
          { required: true, message: "请选择省市区", trigger: "change" }
        ],
        detail: [{ required: true, message: "请填写详情地址", trigger: "blur" }]
      }
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
      return total;
    }
  },
  created() {
    this.initCart();
    this.initAddress();
  },
  methods: {
    async initAddress() {
      try {
        this.addressList = await Cart.getAddress();
        for (let i = 0; i < this.addressList.length; i++) {
          if (this.addressList[i].is_default) {
            this.addressId = this.addressList[i].id;
          }
        }
      } catch (e) {
        console.log(e);
      }
    },
    async initCart() {
      try {
        let result = await Cart.getCart();
        this.cartList = result.valid;
      } catch (e) {
        console.log(e);
      }
    },
    async handleChange({ cartNum, cartId }) {
      try {
        await Cart.changeCartNumber({
          cartNum,
          cartId
        });
      } catch (e) {
        this.$message(e.msg);
      }
    },
    async removeCart(id) {
      try {
        await Cart.remove_cart(id);
        this.initCart();
      } catch (e) {
        this.$message(e.msg);
      }
    },
    async createOrder() {
      try {
        let result = await Cart.createOrder({
          addressId: this.addressId,
          orderKey: this.orderKey,
          payType: this.payType
        });
        // if(result.status==='PAY_ERROR'){
        //   this.$message()
        // }
        if(result.result){
          this.$router.push('orderDetail?id='+result.orderId)
          // console.log('orderId',result.result.orderId)
        }
        // console.log(result)
      } catch (e) {
        this.$message(e.msg);
      }
    },
    async confirmOrder() {
      try {
        let result = await Cart.confirmOrder({
          cartId: this.cartList.map(item => item.id).join(",")
        });
        this.orderKey = result.orderKey;
        this.step = "order_confirm";
      } catch (e) {
        this.$message(e.msg);
      }
    },
    handleChange(value) {
      console.log(value);
    },
    editAddress(item) {
      this.ruleForm = {
        ...item,
        is_default: item.is_default === 1,
        region: [
          TextToCode[item.province].code,
          TextToCode[item.province][item.city].code,
          TextToCode[item.province][item.city][item.district].code
        ]
      };
    },
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          let address = {
            province: CodeToText[this.ruleForm.region[0]],
            city: CodeToText[this.ruleForm.region[1]],
            district: CodeToText[this.ruleForm.region[2]]
          };
          try {
            await Cart.editUserAddress({
              address,
              detail: this.ruleForm.detail,
              id: this.ruleForm.id,
              is_default: this.ruleForm.is_default,
              phone: this.ruleForm.phone,
              real_name: this.ruleForm.real_name
            });
            this.initAddress();
            this.resetForm("ruleForm");
          } catch (e) {
            this.$message(e.msg);
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.ruleForm.is_default = false;
      this.ruleForm.id=0
    }
  }
};
</script>


<style scoped lang="less">
.el-input-number {
  width: 100px;
}
.address_item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}
.product-line-grid{
  display: flex;
  align-items:center;
}
</style>