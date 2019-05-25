<template>
  <div class="container">

    <div id="content-wrapper">

      <section id="main">

        <header class="page-header">
          <h1>
            {{$t('register.createOne')}}
          </h1>
        </header>

        <section
          id="content"
          class="page-content card card-block"
        >

          <section class="register-form">
            <p>{{$t('register.alreadyHave')}} <a href="javascript:;" @click="routerTo('login')">{{$t('register.loginRightNow')}}</a></p>

              <section>

                <div class="form-group row ">
                  <label class="col-md-3 form-control-label required">
                    名
                  </label>
                  <div class="col-md-6">
                    <input
                      class="form-control"
                      name="firstname"
                      type="text"
                    >
                  </div>
                </div>

                <div class="form-group row ">
                  <label class="col-md-3 form-control-label required">
                    姓
                  </label>
                  <div class="col-md-6">
                    <input
                      class="form-control"
                      name="lastname"
                      type="text"
                    >
                  </div>
                </div>

                <div class="form-group row ">
                  <label class="col-md-3 form-control-label required">
                    E-mail(邮箱)
                  </label>
                  <div class="col-md-6">
                    <input
                      class="form-control"
                      name="email"
                      type="email"
                    >
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

              </section>

              <footer class="form-footer clearfix">
                <input
                  type="hidden"
                  name="submitCreate"
                  value="1"
                >

                <button
                  class="btn btn-primary form-control-submit float-xs-right"
                  data-link-action="save-customer"
                  type="submit"
                >
                  节省
                </button>

              </footer>

          </section>

        </section>

      </section>

    </div>

  </div>
</template>
<script>
export default {
  name: "register",
  components: {},
  data() {
    return {};
  }
};
</script>


<style scoped lang="less">
</style>