<template>
  <header
    id="header"
    class="is-open"
  >
    <div class="header-banner">

    </div>

    <nav class="header-nav">
      <div class="container">
        <div class="row">
          <div class="hidden-sm-down">
            <div class="col-md-5 col-xs-12">
              <el-button
                type="text"
                @click="routerTo('contact')"
              >{{$t("header.contact")}}</el-button>
            </div>
            <div class="col-md-7 right-nav">
              <el-dropdown @command="handleCommand">
                <span class="el-dropdown-link">
                  中文<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="en">English</el-dropdown-item>
                  <el-dropdown-item command="hk">繁体中文</el-dropdown-item>
                  <el-dropdown-item command="cn">中文</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
              <el-dropdown>
                <span class="el-dropdown-link">
                  人民币<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>US</el-dropdown-item>
                  <el-dropdown-item>人民币</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
              <el-button type="text" @click="routerTo('login')">{{$t("header.signin")}}</el-button>
              <el-button
                type="primary"
                @click="routerTo('cart')"
              >{{$t("header.cart")}}</el-button>

            </div>
          </div>
          <div class="hidden-md-up text-sm-center mobile">
            <div
              class="float-xs-left"
              id="menu-icon"
            >
              <i class="material-icons d-inline"></i>
            </div>
            <div
              class="float-xs-right"
              id="_mobile_cart"
            ></div>
            <div
              class="float-xs-right"
              id="_mobile_user_info"
            ></div>
            <div
              class="top-logo"
              id="_mobile_logo"
            ></div>
            <div class="clearfix"></div>
          </div>
        </div>
      </div>
    </nav>

    <div class="header-top">
      <div class="container">
        <div class="row">
          <div
            class="col-md-2 hidden-sm-down"
            id="_desktop_logo"
          >
            <h1 @click="routerTo('')">
              <img
                class="logo img-responsive"
                src="../assets/image/prestashop-logo-1555762662.jpg"
                alt="Ambitree Pharma"
              >
            </h1>
          </div>
          <div class="col-md-10 col-sm-12 position-static">

            <div
              class="menu js-top-menu position-static hidden-sm-down"
              id="_desktop_top_menu"
            >
              <ul
                class="top-menu"
                id="top-menu"
                data-depth="0"
              >
                <li
                  class="top-nav"
                  v-for="(item,index) in categoryList"
                  :key="index"
                >
                  <el-dropdown @command="routerTo">
                    <span class="el-dropdown-link">
                      {{item.name}}<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu
                      slot="dropdown"
                      v-for="(child,_index) in item.children"
                      :key="_index"
                    >
                      <el-dropdown-item :command="child.route">{{child.name}}</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </li>
                <li class="top-nav">常见问题</li>
                <li class="top-nav">发货运单号</li>
              </ul>
              <div class="clearfix"></div>
            </div>
            <!-- Block search module TOP -->
            <div
              id="search_widget"
              class="search-widget"
            >
              <el-input
                placeholder="搜索我们的目录"
                v-model="searchWord"
                class="input-with-select"
                @change="inputSearchWord"
              >
                <el-button
                  slot="append"
                  icon="el-icon-search"
                  @click="routerTo('search')"
                ></el-button>
              </el-input>
            </div>
            <!-- /Block search module TOP -->

            <div class="clearfix"></div>
          </div>
        </div>
        <div
          id="mobile_top_menu_wrapper"
          class="row hidden-md-up"
          style="display:none;"
        >
          <div
            class="js-top-menu mobile"
            id="_mobile_top_menu"
          ></div>
          <div class="js-top-menu-bottom">
            <div id="_mobile_currency_selector"></div>
            <div id="_mobile_language_selector"></div>
            <div id="_mobile_contact_link"></div>
          </div>
        </div>
      </div>
    </div>

  </header>
</template>
<script>
export default {
  name: "header",
  components: {},
  data() {
    return {
      searchWord:'',
      categoryList: [
        {
          name: "抗癌",
          children: [
            {
              name: "a",
              route: "category"
            }
          ]
        },

        {
          name: "肝炎",
          children: [
            {
              name: "a",
              route: "category"
            }
          ]
        },
        {
          name: "其他处方药",
          children: [
            {
              name: "a",
              route: "category"
            }
          ]
        },
        {
          name: "男性健康",
          children: [
            {
              name: "a",
              route: "category"
            }
          ]
        }
      ]
    };
  },
  methods: {
    inputSearchWord(e){
      this.searchWord = e
    },
    handleCommand(e) {
      this.$i18n.locale = e;
    },
    routerTo(route) {
      console.log(route);
      this.$router.push(`/${route}`);
    },

  }
};
</script>


<style scoped lang="less">
.right-nav {
  .el-dropdown,
  .el-button {
    margin-left: 20px;
  }
}
.top-nav {
  margin-left: 5px;
  margin-right: 5px;
  font-size: 14px;
}
</style>