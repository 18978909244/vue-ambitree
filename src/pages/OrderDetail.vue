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

        <li
          itemprop="itemListElement"
          itemscope=""
          itemtype="http://schema.org/ListItem"
        >
          <a
            itemprop="item"
            href="https://www.ambitree.in/zh/"
          >
            <span itemprop="name">主页</span>
          </a>
          <meta
            itemprop="position"
            content="1"
          >
        </li>

      </ol>
    </nav>

    <div id="content-wrapper">

      <section id="main">

        <section
          id="content-hook_order_confirmation"
          class="card"
        >
          <div class="card-block">
            <div class="row">
              <div class="col-md-12">

                <h3 class="h1 card-title">
                  <i class="material-icons rtl-no-flip done"></i>您的订单需要点击以下按钮付款

                  <p><a
                      href="http://pay.ambitree.in"
                      target="_blank"
                    ><img
                        src="https://ambitree.in/logo2.png"
                        width="141"
                        height="70"
                        border="0"
                      ></a><br>Please wait for an email with a payment link(或等待付款链接发送到您的注册邮箱)</p>

                </h3>

                <p>
                  An email has been sent to your mail address 40854@qq.com.
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

                  <div class="order-line row">
                    <div class="col-sm-2 col-xs-3">
                      <span class="image">
                        <img src="https://www.ambitree.in/453-home_default/rolimus-everolimus-10mg.jpg">
                      </span>
                    </div>
                    <div class="col-sm-4 col-xs-9 details">
                      <span>Rolimus 依维莫司 | 飞尼妥 | Everolimus 10mg</span>

                    </div>
                    <div class="col-sm-6 col-xs-12 qty">
                      <div class="row">
                        <div class="col-xs-5 text-sm-right text-xs-left">US$&nbsp;199.00</div>
                        <div class="col-xs-2">1</div>
                        <div class="col-xs-5 text-xs-right bold">US$&nbsp;199.00</div>
                      </div>
                    </div>
                  </div>

                  <hr>

                  <table>
                    <tbody>
                      <tr>
                        <td>小计</td>
                        <td>US$&nbsp;199.00</td>
                      </tr>
                      <tr>
                        <td>运送及处理：</td>
                        <td>US$&nbsp;30.00</td>
                      </tr>
                      <tr class="font-weight-bold">
                        <td><span class="text-uppercase">总计</span> （无其他费用）免费包含清关服务</td>
                        <td>US$&nbsp;229.00</td>
                      </tr>
                    </tbody>
                  </table>

                </div>
              </div>

              <div
                id="order-details"
                class="col-md-4"
              >
                <h3 class="h3 card-title">订单详细:</h3>
                <ul>
                  <li>Order reference: LCKNLBYWW</li>
                  <li>Payment method: 中国支付宝</li>
                  <li>
                    送货方式： EMS<br>
                    <em>7-14天</em>
                  </li>
                </ul>
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
      await Cart.changeCartNumber({
        cartNum,
        cartId
      });
    },
    async createOrder() {
      try {
        let result = await Cart.createOrder({
          addressId: this.addressId,
          orderKey: this.orderKey,
          payType: this.payType
        });
        console.log(result);
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
        console.log(e);
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
    }
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