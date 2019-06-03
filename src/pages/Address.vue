<template>
  <div class="container page-addresses">

    <div id="content-wrapper">

      <section id="main">

        <section
          id="content"
          class="page-content"
        >

          <aside
            id="notifications"
            v-if="addressList.length==0"
          >
            <div class="container">

              <article
                class="alert alert-warning"
                role="alert"
                data-alert="warning"
              >
                <ul>
                  <li>{{$t('address.noAddress')}}</li>
                </ul>
              </article>

            </div>
          </aside>

          <div
            class="col-lg-4 col-md-6 col-sm-6"
            v-else
            v-for="(item,index) in addressList"
            :key="index"
          >

            <article class="address">
              <div class="address-body">
                <!-- <h4>My Address</h4> -->
                <!-- {{`${item.province}${item.city}${item.district} ${item.detail} ${item.real_name} ${item.phone} `}} -->
                <address>{{item.real_name}}<br>{{item.phone}}<br>{{item.province}}<br>{{item.city}}<br>{{item.district}}<br>{{item.detail}}</address>
              </div>

              <div class="address-footer">

                <el-button
                  type="primary"
                  icon="el-icon-edit"
                  circle
                  @click="editAddress(item)"
                ></el-button>
                <el-button
                  type="primary"
                  icon="el-icon-delete"
                  circle
                  @click="deleteAddress(item.id)"
                ></el-button>
              </div>

            </article>

          </div>
          <div class="clearfix"></div>
          <div class="addresses-footer" style="background:#fff;padding:20px">
            <!-- <el-button
              type="primary"
              icon="el-icon-circle-plus"
            >Create new address</el-button> -->

            <el-form
              :model="ruleForm"
              :rules="rules"
              ref="ruleForm"
              label-width="100px"
              class="demo-ruleForm"
            >
              <el-form-item
                :label="$t('address.name')"
                prop="real_name"
              >
                <el-input v-model="ruleForm.real_name"></el-input>
              </el-form-item>
              <el-form-item
                :label="$t('address.region')"
                prop="region"
              >
                <el-cascader
                  size="large"
                  :options="options"
                  v-model="ruleForm.region"
                  @change="handleChange"
                >
                </el-cascader>
              </el-form-item>
              <el-form-item
                :label="$t('address.phone')"
                prop="phone"
              >
                <el-input v-model="ruleForm.phone"></el-input>
              </el-form-item>
              <el-form-item
                :label="$t('address.detail')"
                prop="detail"
              >
                <el-input
                  type="textarea"
                  v-model="ruleForm.detail"
                ></el-input>
              </el-form-item>
              <el-form-item :label="$t('address.default')">
                <el-switch v-model="ruleForm.is_default"></el-switch>
              </el-form-item>
              <el-form-item>
                <el-button
                  type="primary"
                  @click="submitForm('ruleForm')"
                >{{$t('address.submit')}}</el-button>
                <el-button @click="resetForm('ruleForm')">{{$t('address.reset')}}</el-button>
              </el-form-item>
            </el-form>
          </div>
        </section>

      </section>

    </div>

  </div>

</template>
<script>
import { regionData, CodeToText, TextToCode } from "element-china-area-data";
import { Address,Cart } from "../api";
export default {
  name: "address",
  data() {
    return {
      options: regionData,
      addressList: [],
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
  created() {
    this.initAddress();
  },
  methods: {
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
      this.ruleForm.id=0
    },
    async initAddress() {
      try {
        this.addressList = await Address.getAddress();
        // for (let i = 0; i < this.addressList.length; i++) {
        //   if (this.addressList[i].is_default) {
        //     this.addressId = this.addressList[i].id;
        //   }
        // }
      } catch (e) {
        console.log(e);
      }
    },
    async deleteAddress(id) {
      try {
        await Address.delete(id);
        this.initAddress();
      } catch (e) {
        this.$message(e.msg);
      }
    }
  }
};
</script>


<style scoped lang="less">
</style>