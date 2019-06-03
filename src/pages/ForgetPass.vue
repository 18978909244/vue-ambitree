<template>

  <div class="container">
    <Bread name="找回密码" />
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
                <el-input v-model="ruleForm.phone" type="number"></el-input>
              </el-form-item>

              <el-form-item
                label="验证码"
                prop="code"
              >
                <el-input
                  v-model="ruleForm.code"
                  type="number"
                >
                  <el-button
                    slot="append"
                    @click="sendCode"
                  >发送验证码</el-button>
                </el-input>
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
              <el-form-item
                label="确认密码"
                prop="repassword"
              >
                <el-input
                  type="password"
                  v-model="ruleForm.repassword"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button
                  type="primary"
                  @click="submitForm('ruleForm')"
                >{{$t('forgetPass.edit')}}</el-button>
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
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        phone: "",
        password: "",
        repassword: "",
        code: ""
      },
      rules: {
        phone: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          { len: 8, message: "请输入正确的手机号", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { validator: validatePass, trigger: "blur" }
        ],
        repassword: [
          { required: true, message: "请重复输入密码", trigger: "blur" },
          { validator: validatePass2, trigger: "blur" }
        ],
        code: [{ required: true, message: "请输入验证码", trigger: "blur" }]
      }
    };
  },
  methods: {
    async sendCode() {
      
    },
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          
          
        } else {
          console.log("error submit!!");
          return false;
        }
      });
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