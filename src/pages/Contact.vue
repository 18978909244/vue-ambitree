<template>
  <div class="container">
    <Bread name='联系我们(在线客服在右下角)' />
    <div
      id="left-column"
      class="col-xs-12 col-sm-4 col-md-3"
    >
      <div class="contact-rich">
        <h4>店信息</h4>
        <div class="block">
          <div class="icon"><i class="material-icons"></i></div>
          <div class="data">Ambitree Pharma<br>Mumbai<br>India</div>
        </div>
        <hr>
        <div class="block">
          <div class="icon"><i class="material-icons"></i></div>
          <div class="data">
            传真：<br>
            +91 88829 45536
          </div>
        </div>
        <hr>
        <div class="block">
          <div class="icon"><i class="material-icons"></i></div>
          <div class="data email">
            Email us:<br>
          </div>
          <a href="mailto:sales@ambitree.in">sales@ambitree.in</a>
        </div>
      </div>

    </div>

    <div
      id="content-wrapper"
      class="left-column col-xs-12 col-sm-8 col-md-9"
    >

      <section id="main">

        <section
          id="content"
          class="page-content card card-block"
        >

          <section class="contact-form">
            <form
              action="https://www.ambitree.in/zh/contact-us"
              method="post"
              enctype="multipart/form-data"
            >

              <section class="form-fields">

                <div class="form-group row">
                  <div class="col-md-9 col-md-offset-3">
                    <h3>联系我们(在线客服在右下角)</h3>
                  </div>
                </div>

                <div class="form-group row">
                  <label class="col-md-3 form-control-label">对象：</label>
                  <div class="col-md-6">
                    <select
                      name="id_contact"
                      class="form-control form-control-select"
                    >
                      <option value="2">客服</option>
                      <option value="1">网站管理员</option>
                    </select>
                  </div>
                </div>

                <div class="form-group row">
                  <label class="col-md-3 form-control-label">邮箱地址</label>
                  <div class="col-md-6">
                    <input
                      class="form-control"
                      name="from"
                      type="email"
                      value=""
                      placeholder="your@email.com"
                    >
                  </div>
                </div>

                <div class="form-group row">
                  <label class="col-md-3 form-control-label">附件</label>
                  <div class="col-md-6">
                    <input
                      type="file"
                      name="fileUpload"
                      class="filestyle"
                      data-buttontext="Choose file"
                      id="filestyle-0"
                      tabindex="-1"
                      style="position: absolute; clip: rect(0px, 0px, 0px, 0px);"
                    >
                    <div class="bootstrap-filestyle input-group"><input
                        type="text"
                        class="form-control "
                        placeholder=""
                        disabled=""
                      > <span
                        class="group-span-filestyle input-group-btn"
                        tabindex="0"
                      ><label
                          for="filestyle-0"
                          class="btn btn-default "
                        ><span class="icon-span-filestyle glyphicon glyphicon-folder-open"></span> <span class="buttonText">Choose file</span></label></span></div>
                  </div>
                  <span class="col-md-3 form-control-comment">
                    optional
                  </span>
                </div>

                <div class="form-group row">
                  <label class="col-md-3 form-control-label">消息：</label>
                  <div class="col-md-9">
                    <textarea
                      class="form-control"
                      name="message"
                      placeholder="How can we help?"
                      rows="3"
                    ></textarea>
                  </div>
                </div>

                <div class="form-group row">
                  <div class="offset-md-3">

                  </div>
                </div>

              </section>

              <footer class="form-footer text-sm-right">
                <input
                  type="text"
                  name="url"
                  value=""
                >
                <input
                  type="hidden"
                  name="token"
                  value="dc65afe89143fb8cf9a474910a162706"
                >
                <input
                  class="btn btn-primary"
                  type="submit"
                  name="submitMessage"
                  value="发送"
                >
              </footer>

            </form>
          </section>

        </section>

        <footer class="page-footer">

          <!-- Footer content -->

        </footer>

      </section>

    </div>

  </div>

</template>
<script>
import Bread from "../components/Bread";
export default {
  name: "contact",
  components: {
    Bread
  },
  data() {
    return {};
  }
};
</script>


<style scoped lang="less">
</style>