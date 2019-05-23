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
            Log in to your account
          </h1>
        </header>

        <section
          id="content"
          class="page-content card card-block"
        >

          <section class="login-form">

            <form
              id="login-form"
              action="https://www.ambitree.in/zh/login?back=my-account"
              method="post"
            >

              <section>

                <input
                  type="hidden"
                  name="back"
                  value="my-account"
                >

                <div class="form-group row ">
                  <label class="col-md-3 form-control-label required">
                    E-mail(邮箱)
                  </label>
                  <div class="col-md-6">

                    <input
                      class="form-control"
                      name="email"
                      type="email"
                      value=""
                      required=""
                    >

                  </div>

                  <div class="col-md-3 form-control-comment">

                  </div>
                </div>

                <div class="form-group row ">
                  <label class="col-md-3 form-control-label required">
                    密码
                  </label>
                  <div class="col-md-6">

                    <div class="input-group js-parent-focus">
                      <input
                        class="form-control js-child-focus js-visible-password"
                        name="password"
                        type="password"
                        value=""
                        pattern=".{5,}"
                        required=""
                      >
                      <span class="input-group-btn">
                        <button
                          class="btn"
                          type="button"
                          data-action="show-password"
                          data-text-show="查看"
                          data-text-hide="Hide"
                        >
                          查看
                        </button>
                      </span>
                    </div>

                  </div>

                  <div class="col-md-3 form-control-comment">

                  </div>
                </div>

                <div class="forgot-password">
                  <a
                    href="https://www.ambitree.in/zh/password-recovery"
                    rel="nofollow"
                  >
                    忘记密码？
                  </a>
                </div>
              </section>

              <footer class="form-footer text-sm-center clearfix">
                <input
                  type="hidden"
                  name="submitLogin"
                  value="1"
                >

                <button
                  id="submit-login"
                  class="btn btn-primary"
                  data-link-action="sign-in"
                  type="submit"
                >
                  登录
                </button>

              </footer>

            </form>

          </section>
          <hr>

          <div class="no-account">
            <a
              href="https://www.ambitree.in/zh/login?create_account=1"
              data-link-action="display-register-form"
            >
              No account? Create one here
            </a>
          </div>

        </section>

        <footer class="page-footer">

          <!-- Footer content -->

        </footer>

      </section>

    </div>

  </div>
</template>
<script>
export default {
  name: "login",
  components: {},
  data() {
    return {};
  }
};
</script>


<style scoped lang="less">
</style>