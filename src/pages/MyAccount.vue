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

        <header class="page-header">
          <h1>
            Your account
          </h1>
        </header>

        <section
          id="content"
          class="page-content"
        >

          <aside id="notifications">
            <div class="container">

            </div>
          </aside>

          <div class="row">
            <div class="links">

              <a
                class="col-lg-4 col-md-6 col-sm-6 col-xs-12"
                id="identity-link"
                href="https://www.ambitree.in/zh/identity"
              >
                <span class="link-item">
                  <i class="el-icon-s-custom"></i>
                  信息
                </span>
              </a>

              <a
                class="col-lg-4 col-md-6 col-sm-6 col-xs-12"
                id="address-link"
                href="https://www.ambitree.in/zh/address"
              >
                <span class="link-item">
                  <i class="el-icon-location"></i>
                  Add first address
                </span>
              </a>

              <a
                class="col-lg-4 col-md-6 col-sm-6 col-xs-12"
                id="history-link"
                href="javascript:;"
                @click="routerTo('orderList')"
              >
                <span class="link-item">
                  <i class="el-icon-date"></i>
                  历史订单(查看运单号)
                </span>
              </a>

              <a
                class="col-lg-4 col-md-6 col-sm-6 col-xs-12"
                id="order-slips-link"
                href="https://www.ambitree.in/zh/order-slip"
              >
                <span class="link-item">
                  <i class="el-icon-s-finance"></i>
                  代金券
                </span>
              </a>

            </div>
          </div>

        </section>

        <footer class="page-footer">

          <div class="text-sm-center">
            <a href="javascript:;" @click="loginout">
              登出
            </a>
          </div>

        </footer>

      </section>

    </div>

  </div>

</template>
<script>
import Cookies from "js-cookie";
import Bread from "../components/Bread";
export default {
  name: "myAccount",
  components: {
    Bread
  },
  data() {
    return {};
  },
  methods:{
    loginout(){
      Cookies.remove("user_id");
      this.$router.push('/')
      this.$bus.emit("login_change", {});
    }
  }
};
</script>


<style scoped lang="less">
.links {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
}
.links a {
  text-align: center;
  display: inline-block;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #7a7a7a;
  padding: 0 0.9375rem;
  margin-bottom: 1.875rem;
}
.links a span.link-item {
  display: block;
  height: 100%;
  box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.2);
  background: #fff;
  padding: 1rem;
}
.links a i {
  display: block;
  font-size: 2.6rem;
  width: 100%;
  color: #232323;
  padding-bottom: 1.4rem;
}
.links a:hover {
  color: #232323;
}
.links a:hover i {
  color: #2fb5d2;
}
</style>