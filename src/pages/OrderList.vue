<template>
  <div class="container page-customer-account">
    <Bread name="我的订单" />
    <div id="content-wrapper">

      <section id="main">

        <section
          id="content"
          class="page-content"
        >

          <aside id="notifications">
            <div class="container">

            </div>
          </aside>

          <!-- <h6>该处为您的帐户建立时起您放置的订单</h6> -->

          <table class="table table-striped table-bordered table-labeled hidden-sm-down">
            <thead class="thead-default">
              <tr>
                <th>订单参考</th>
                <th>日期</th>
                <th>总价</th>
                <th>付款方式</th>
                <th class="hidden-md-down">状态</th>
                <!-- <th>备注</th> -->
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody v-if="orderList && orderList.length>0">
              <tr
                v-for="(item,index) in orderList"
                :key="index"
              >
                <th scope="row">{{item.order_id}}</th>
                <td>{{item.order_id.slice(2,10) | dateFn}}</td>
                <td class="text-xs-right">{{exchange(item.total_price)}}</td>
                <td>{{item.pay_type | payToText}}</td>
                <td>
                  <span
                    class="label label-pill bright"
                    style="background-color:#4169E1"
                    @click="routerTo(`orderDetail?id=${item.order_id}`)"
                  >
                    {{item._status._title}}
                  </span>
                </td>
                <!-- <td class="text-sm-center hidden-md-down">
                  -
                </td> -->
                <td class="text-sm-center order-actions">
                  <a
                    href="javascript:;"
                    @click="routerTo(`orderDetail?id=${item.order_id}`)"
                  >
                    详细
                  </a>
                  <!-- <a href="https://www.ambitree.in/zh/订单?submitReorder=&amp;id_order=1182">重新预订</a> -->
                </td>
              </tr>
            </tbody>
          </table>

          <div class="orders hidden-md-up">
            <div class="order">
              <div class="row">
                <div class="col-xs-10">
                  <a href="https://www.ambitree.in/zh/index.php?controller=order-detail&amp;id_order=1182">
                    <h3>LCKNLBYWW</h3>
                  </a>
                  <div class="date">2019-05-26</div>
                  <div class="total">US$&nbsp;229.00</div>
                  <div class="status">
                    <span
                      class="label label-pill bright"
                      style="background-color:#4169E1"
                    >
                      等待支付
                    </span>
                  </div>
                </div>
                <div class="col-xs-2 text-xs-right">
                  <div>
                    <a
                      href="https://www.ambitree.in/zh/index.php?controller=order-detail&amp;id_order=1182"
                      data-link-action="view-order-details"
                      title="详细(运单号)"
                    >
                      <i class="material-icons"></i>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.ambitree.in/zh/订单?submitReorder=&amp;id_order=1182"
                      title="重新预订"
                    >
                      <i class="material-icons"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>

        <footer class="page-footer">

          <a
            href="https://www.ambitree.in/zh/my-account"
            class="account-link"
          >
            <i class="material-icons"></i>
            <span>回到你的帐户</span>
          </a>
          <a
            href="https://www.ambitree.in/zh/"
            class="account-link"
          >
            <i class="material-icons"></i>
            <span>主页</span>
          </a>

        </footer>

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
      orderList: [],
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
  filters: {
    dateFn(str){
      let year = str.slice(0,4)
      let month = str.slice(4,6)
      let day = str.slice(6,8)
      return `${year}-${month}-${day}`
    },
    payToText(type) {
      let payText = "";
      switch (type) {
        case "yue":
          payText = "余额";
          break;
        case "weixin":
          payText = "微信";
          break;
        default:
          payText = "";
          break;
      }
      return payText;
    },
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
    this.init();
    // this.initCart();
    // this.initAddress();
  },
  methods: {
    async init() {
      let result = await Order.getOrderList();
      this.orderList = result;
      console.log(this.orderList);
    },
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
.bright:hover{
  cursor: pointer;
}
</style>