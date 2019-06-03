<template>
  <div class="container">

    <div id="content-wrapper">

      <section>
        <section class="card">
          <div class="card-block">
            <div class="row">
              <div class="col-md-12">

                <h3 class="h1 card-title">
                  订单状态
                </h3>

                <p>
                  {{orderDetail._status._msg}}
                  <img
                    v-if="orderDetail.paid===0"
                    src="https://ambitree.in/logo2.png"
                    width="141"
                    height="70"
                    border="0"
                  >
                </p>

              </div>
            </div>
          </div>
        </section>

        <section class="card">
          <div class="card-block">
            <div class="row">
              <div class="col-md-12">

                <h3 class="h1 card-title">
                  订单信息
                </h3>

                <p>
                  订单编号：{{orderDetail.order_id}}<br>
                  下单时间：{{orderDetail.add_time}}<br>
                  支付方式：{{orderDetail._status._payType}}<br>
                  支付状态：{{orderDetail.paid===0?'未支付':'已支付'}}<br>
                </p>

              </div>
            </div>
          </div>
        </section>

        <section class="card">
          <div class="card-block">
            <div class="row">
              <div class="col-md-12">

                <h3 class="h1 card-title">
                  发货地址
                </h3>

                <p>
                  {{orderDetail.user_address}}<br>
                  {{orderDetail.real_name}} {{orderDetail.user_phone}}
                </p>

              </div>
            </div>
          </div>
        </section>

        <section
          id="content"
          class="page-content page-order-confirmation card"
        >
          <div class="card-block">
            <div class="row">

              <div
                id="order-items"
                class="col-md-12"
              >

                <h3 class="card-title h3">订购商品</h3>

                <div class="order-confirmation-table">

                  <div
                    class="order-line row"
                    v-for="(item,index) in cartList"
                    :key="index"
                  >
                    <div class="col-sm-2 col-xs-3">
                      <span class="image">
                        <img :src="item.productInfo.image">
                      </span>
                    </div>
                    <div class="col-sm-4 col-xs-9 details">
                      <span>{{item.productInfo.store_name}}</span>

                    </div>
                    <div class="col-sm-6 col-xs-12 qty">
                      <div class="row">
                        <div class="col-xs-5 text-sm-right text-xs-left">US$&nbsp;{{item.productInfo.price}}</div>
                        <div class="col-xs-2">{{item.cart_num}}</div>
                        <div class="col-xs-5 text-xs-right bold">US$&nbsp;{{item.cart_num*item.truePrice}}</div>
                      </div>
                    </div>
                  </div>

                  <hr>

                  <table>
                    <tbody>
                      <tr>
                        <td>小计</td>
                        <td>US$&nbsp;{{orderDetail.total_price}}</td>
                      </tr>
                      <tr>
                        <td>配送费：</td>
                        <td>US$&nbsp;{{orderDetail.pay_postage}}</td>
                      </tr>
                      <tr class="font-weight-bold">
                        <td><span class="text-uppercase">总计</span></td>
                        <td>US$&nbsp;{{orderDetail.pay_price}}</td>
                      </tr>
                    </tbody>
                  </table>

                </div>
              </div>

            </div>
          </div>
        </section>

      </section>

    </div>

  </div>

</template>
<script>
import Message from "../components/Message";
import { Order } from "../api";
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
      orderDetail: {},
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
    this.init(this.$route.query.id || "wx2019060209582710005");
    // this.initCart();
    // this.initAddress();
  },
  methods: {
    async init(uni) {
      try {
        let result = await Order.getOrder(uni);
        this.cartList = result.cartInfo;
        this.orderDetail = result;
      } catch (e) {
        console.log(e);
      }
    }
    // async initAddress() {
    //   try {
    //     this.addressList = await Cart.getAddress();
    //     for (let i = 0; i < this.addressList.length; i++) {
    //       if (this.addressList[i].is_default) {
    //         this.addressId = this.addressList[i].id;
    //       }
    //     }
    //   } catch (e) {
    //     console.log(e);
    //   }
    // },
    // async initCart() {
    //   try {
    //     let result = await Cart.getCart();
    //     this.cartList = result.valid;
    //   } catch (e) {
    //     console.log(e);
    //   }
    // },
    // async handleChange({ cartNum, cartId }) {
    //   await Cart.changeCartNumber({
    //     cartNum,
    //     cartId
    //   });
    // },
    // async createOrder() {
    //   try {
    //     let result = await Cart.createOrder({
    //       addressId: this.addressId,
    //       orderKey: this.orderKey,
    //       payType: this.payType
    //     });
    //     console.log(result);
    //   } catch (e) {
    //     this.$message(e.msg);
    //   }
    // },
    // async confirmOrder() {
    //   try {
    //     let result = await Cart.confirmOrder({
    //       cartId: this.cartList.map(item => item.id).join(",")
    //     });
    //     this.orderKey = result.orderKey;
    //     this.step = "order_confirm";
    //   } catch (e) {
    //     console.log(e);
    //   }
    // },
    // handleChange(value) {
    //   console.log(value);
    // },
    // editAddress(item) {
    //   this.ruleForm = {
    //     ...item,
    //     is_default: item.is_default === 1,
    //     region: [
    //       TextToCode[item.province].code,
    //       TextToCode[item.province][item.city].code,
    //       TextToCode[item.province][item.city][item.district].code
    //     ]
    //   };
    // },
    // submitForm(formName) {
    //   this.$refs[formName].validate(async valid => {
    //     if (valid) {
    //       let address = {
    //         province: CodeToText[this.ruleForm.region[0]],
    //         city: CodeToText[this.ruleForm.region[1]],
    //         district: CodeToText[this.ruleForm.region[2]]
    //       };
    //       try {
    //         await Cart.editUserAddress({
    //           address,
    //           detail: this.ruleForm.detail,
    //           id: this.ruleForm.id,
    //           is_default: this.ruleForm.is_default,
    //           phone: this.ruleForm.phone,
    //           real_name: this.ruleForm.real_name
    //         });
    //         this.initAddress();
    //         this.resetForm("ruleForm");
    //       } catch (e) {
    //         this.$message(e.msg);
    //       }
    //     } else {
    //       console.log("error submit!!");
    //       return false;
    //     }
    //   });
    // },
    // resetForm(formName) {
    //   this.$refs[formName].resetFields();
    //   this.ruleForm.is_default = false;
    // }
  }
};
</script>


<style scoped lang="less">
.el-input-number {
  width: 80px;
}
.address_item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}
</style>