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
                  <li>没有可使用的地址。</li>
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
          <div class="addresses-footer">
            <el-button
              type="primary"
              icon="el-icon-circle-plus"
            >Create new address</el-button>
          </div>

        </section>

      </section>

    </div>

  </div>

</template>
<script>
import Bread from "../components/Bread";
import { Address } from "../api";
export default {
  name: "address",
  components: {
    Bread
  },
  data() {
    return {
      addressList: []
    };
  },
  created() {
    this.initAddress();
  },
  methods: {
    async createAddress(){

    },
    async initAddress() {
      try {
        this.addressList = await Address.getAddress();
        for (let i = 0; i < this.addressList.length; i++) {
          if (this.addressList[i].is_default) {
            this.addressId = this.addressList[i].id;
          }
        }
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