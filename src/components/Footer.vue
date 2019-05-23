<template>
  <footer>
    <div class="container">
      <div class="row">

      </div>
    </div>
    <div class="footer-container">
      <div class="container">
        <div class="row">

          <div class="col-md-6 links">
            <div class="row">
              <div
                class="col-md-6 wrapper"
                v-for="(item,index) in list"
                :key="index"
              >

                <p class="h3 hidden-sm-down">{{item.name}}</p>
                <div
                  class="title clearfix hidden-md-up"
                  data-toggle="collapse"
                >
                  <span class="h3">{{item.name}}</span>
                  <span class="float-xs-right">
                    <span class="navbar-toggler collapse-icons">
                      <i class="material-icons add"></i>
                      <i class="material-icons remove"></i>
                    </span>
                  </span>
                </div>
                <ul class="collapse">
                  <li
                    v-for="(_item,_index) in item.children"
                    :key="_index"
                  >
                    <a
                      class="cms-page-link"
                      title="_item.title"
                    >
                      {{_item.name}}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            id="block_myaccount_infos"
            class="col-md-3 links wrapper"
          >
            <p class="h3 myaccount-title hidden-sm-down">
              <a
                class="text-uppercase"
                href="https://www.ambitree.in/zh/my-account"
                rel="nofollow"
              >
                Your account
              </a>
            </p>
            <div
              class="title clearfix hidden-md-up"
              data-target="#footer_account_list"
              data-toggle="collapse"
            >
              <span class="h3">Your account</span>
              <span class="float-xs-right">
                <span class="navbar-toggler collapse-icons">
                  <i class="material-icons add"></i>
                  <i class="material-icons remove"></i>
                </span>
              </span>
            </div>
            <ul
              class="account-list collapse"
              id="footer_account_list"
            >
              <li>
                <a
                  href="https://www.ambitree.in/zh/identity"
                  title="Personal info"
                  rel="nofollow"
                >
                  Personal info
                </a>
              </li>
              <li>
                <a
                  href="https://www.ambitree.in/zh/order-history"
                  title="订单"
                  rel="nofollow"
                >
                  订单
                </a>
              </li>
              <li>
                <a
                  href="https://www.ambitree.in/zh/order-slip"
                  title="代金券"
                  rel="nofollow"
                >
                  代金券
                </a>
              </li>
              <li>
                <a
                  href="https://www.ambitree.in/zh/addresses"
                  title="地址"
                  rel="nofollow"
                >
                  地址
                </a>
              </li>
              <li>
                <a
                  href="https://www.ambitree.in/zh/discount"
                  title="凭证"
                  rel="nofollow"
                >
                  凭证
                </a>
              </li>

            </ul>
          </div>
          <div class="block-contact col-md-3 links wrapper">
            <div class="hidden-sm-down">
              <p class="h4 text-uppercase block-contact-title">{{$t("footer.shop")}}</p>
              Ambitree Pharma<br>Mumbai<br>India
              <br>
              Fax: <span>+91 88829 45536</span>
              <br>
              Email us: <a
                href="mailto:sales@ambitree.in"
                class="dropdown"
              >sales@ambitree.in</a>
            </div>
            <div class="hidden-md-up">
              <div class="title">
                <a
                  class="h3"
                  href="https://www.ambitree.in/zh/stores"
                >店信息</a>
              </div>
            </div>
          </div>

        </div>
        <div class="row">

        </div>
        <div class="row">
          <div class="col-md-12">
            <p class="text-sm-center">

              <a
                class="_blank"
                href="http://www.ambitree.in"
                target="_blank"
              >
                © 2019 - 电子商务服务由 Ambitree-安必成 提供
              </a>

            </p>
          </div>
        </div>
      </div>
    </div>

  </footer>
</template>
<script>
export default {
  name: "footer",
  components: {},
  computed: {
    list(){
      console.log(this.$t("footer.list"))
      return this.$t("footer.list");
    }
  }
};
</script>


<style scoped lang="less">
</style>