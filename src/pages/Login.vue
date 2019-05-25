<template>

  <div class="container">

    <div id="content-wrapper">

      <section id="main">

        <header class="page-header">
          <h1>
            {{$t('login.loginAccount')}}
          </h1>
        </header>

        <section
          id="content"
          class="page-content card card-block"
        >

          <section class="login-form">

            <section>

              <div class="form-group row ">
                <label class="col-md-3 form-control-label required">
                  {{$t('login.email')}}
                </label>
                <div class="col-md-6">

                  <input
                    class="form-control"
                    name="account"
                    v-model.trim="account"
                  />

                </div>

                <div class="col-md-3 form-control-comment">

                </div>
              </div>

              <div class="form-group row ">
                <label class="col-md-3 form-control-label required">
                  {{$t('login.password')}}
                </label>
                <div class="col-md-6">

                  <div class="input-group js-parent-focus">
                    <input
                      class="form-control js-child-focus js-visible-password"
                      name="password"
                      type="password"
                      v-model.trim="pwd"
                    >
                  </div>

                </div>

                <div class="col-md-3 form-control-comment">

                </div>
              </div>

              <div
                class="forgot-password"
                style="text-align:center"
              >
                <a
                  href="javascript:;"
                  @click="routerTo('forgetPassword')"
                >
                  {{$t('login.forgetPassword')}}
                </a>
              </div>
            </section>

            <footer class="form-footer text-sm-center clearfix">

              <button
                id="submit-login"
                class="btn btn-primary"
                data-link-action="sign-in"
                @click="onClickLogin"
              >
                {{$t('login.login')}}
              </button>

            </footer>

          </section>
          <hr>

          <div
            class="no-account"
            style="text-align:center"
          >
            <a
              href="javascript:;"
              data-link-action="display-register-form"
              @click="routerTo('register')"
            >
              {{$t('login.noAccount')}}
            </a>
          </div>

        </section>

      </section>

    </div>

  </div>
</template>
<script>
import { User } from "../api";
export default {
  name: "login",
  components: {},
  data() {
    return {
      account: "crmeb",
      pwd: "123456"
    };
  },
  methods: {
    async onClickLogin(e) {
      if (!this.account) {
        this.$message("请输入账号");
        return;
      }
      if (!this.pwd) {
        this.$message("请输入密码");
        return;
      }
      try {
        let result = await User.Login({
          account: this.account,
          pwd: this.pwd
        });
        this.$router.push({
          path: this.$route.query.redirect || "/"
        });
      } catch (e) {
        console.log(e)
      }
    }
  }
};
</script>


<style scoped lang="less">
</style>