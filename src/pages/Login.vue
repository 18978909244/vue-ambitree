<template>

  <div class="container">
    <Bread name="登录" />
    <div id="content-wrapper">

      <section id="main">

        <section
          id="content"
          class="page-content card card-block"
        >

          <section class="login-form">
            <el-form
              :model="ruleForm"
              :rules="rules"
              ref="ruleForm"
              label-width="100px"
              class="demo-ruleForm"
            >
              <el-form-item
                label="手机"
                prop="phone"
              >
                <el-input
                  v-model="ruleForm.phone"
                  type="text"
                ></el-input>
              </el-form-item>

              <el-form-item
                label="密码"
                prop="password"
              >
                <el-input
                  type="password"
                  v-model="ruleForm.password"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button
                  type="primary"
                  @click="submitForm('ruleForm')"
                >{{$t('login.login')}}</el-button>
                <a
                  @click="routerTo('register')"
                  style="margin-left:20px"
                >{{$t('login.noAccount')}}</a>
                <a
                  @click="routerTo('forgetPass')"
                  style="margin-left:20px"
                >{{$t('login.forgetPassword')}}</a>
              </el-form-item>
            </el-form>

          </section>
        </section>

      </section>

    </div>

  </div>
</template>
<script>
import { User } from "../api";
export default {
  name: "login",
  data() {
    return {
      ruleForm: {
        phone: "crmeb",
        password: "123456"
      },
      rules: {
        phone: [{ required: true, message: "请输入手机号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          try {
            let result = await User.Login({
              account: this.ruleForm.phone,
              pwd: this.ruleForm.password
            });
            this.$router.push({
              path: this.$route.query.redirect || "/"
            });
            this.$bus.emit("login_change", {});
          } catch (e) {
            console.log(e);
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
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
        this.$bus.emit("login_change", {});
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>


<style scoped lang="less">
.demo-ruleForm {
  width: 500px;
  margin: 0 auto;
}
</style>