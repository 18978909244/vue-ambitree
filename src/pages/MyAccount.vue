<template>
  <div class="container">

    <Bread :name="$t('bread.myAccount')" />

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

          <div class="row">
            <div class="links">

              <a
                class="col-lg-4 col-md-6 col-sm-6 col-xs-12"
                id="identity-link"
                href="javascript:;"
                @click="routerTo('forgetPass')"
              >
                <span class="link-item">
                  <i class="el-icon-s-custom"></i>
                  {{$t('myAccount.message')}}
                </span>
              </a>

              <a
                class="col-lg-4 col-md-6 col-sm-6 col-xs-12"
                id="address-link"
                href="javascript:;"
                @click="routerTo('address')"
              >
                <span class="link-item">
                  <i class="el-icon-location"></i>
                  {{$t('myAccount.address')}}
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
                  {{$t('myAccount.history')}}
                </span>
              </a>

              <!-- <a
                class="col-lg-4 col-md-6 col-sm-6 col-xs-12"
                id="order-slips-link"
                href="javascript:;"
                @click="routerTo('address')"
              >
                <span class="link-item">
                  <i class="el-icon-s-finance"></i>
                  代金券
                </span>
              </a> -->

            </div>
          </div>

        </section>

        <footer class="page-footer">

          <div class="text-sm-center">
            <a
              href="javascript:;"
              @click="loginout"
            >
              {{$t('myAccount.loginout')}}
            </a>
          </div>

        </footer>

      </section>

    </div>

  </div>

</template>
<script>
import Cookies from "js-cookie";
export default {
  name: "myAccount",
  data() {
    return {};
  },
  methods: {
    loginout() {
      Cookies.remove("user_id");
      this.$router.push("/");
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