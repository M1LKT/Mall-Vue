<template>
  <div class="container">
    <Layout class="layout">
      <Sider class="side-bar" :style="{height: 'calc(100vh - 35px)', background: '#fff', overflow: 'auto'}" ref="side" :collapsed-width="78">
        <Menu active-name="1-2" theme="light" width="auto" @on-select="onSelect">
          <div class="user-icon">
            <div class="user-img">
              <img src="static/img/head.png">
            </div>
            <p>Gavin</p>
          </div>
          <Submenu name="1">
            <template slot="title">
                <Icon type="location"></Icon>
                <span>{{ $t('home.address') }}</span>
            </template>
            <MenuItem name="myAddress">{{ $t('home.myAddress') }}</MenuItem>
            <MenuItem name="addAddress">{{ $t('home.addAddress') }}</MenuItem>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
                <Icon type="clipboard"></Icon>
                <span>{{ $t('home.order') }}</span>
            </template>
            <MenuItem name="myOrder">{{ $t('home.myOrder') }}</MenuItem>
          </Submenu>
          <Submenu name="3">
            <template slot="title">
                <Icon type="ios-cart"></Icon>
                <span>{{ $t('home.cart') }}</span>
            </template>
            <MenuItem name="myShoppingCart">{{ $t('home.myShoppingCart') }}</MenuItem>
          </Submenu>
        </Menu>
      </Sider>
      <Layout class="layout">
        <Header :style="{background: '#fff'}">
          <h2>{{activeTitle}}</h2>
        </Header>
        <Content class="content">
          <transition mode="out-in">
            <router-view></router-view>
          </transition>
        </Content>
        <Footer class="layout-footer-center">2018 &copy; Gavin</Footer>
      </Layout>
    </Layout>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      activeTitle: this.$t('home.myOrder'),
      bar: {
        'myAddress': this.$t('home.myAddress'),
        'addAddress': this.$t('home.addAddress'),
        'myOrder': this.$t('home.myOrder'),
        'myShoppingCart': this.$t('home.myShoppingCart')
      }
    };
  },
  watch: {
    // 语言切换时，动态更新菜单标题
    '$i18n.locale' () {
      this.bar = {
        'myAddress': this.$t('home.myAddress'),
        'addAddress': this.$t('home.addAddress'),
        'myOrder': this.$t('home.myOrder'),
        'myShoppingCart': this.$t('home.myShoppingCart')
      };
      // 同步更新当前标题
      const currentKey = Object.keys(this.bar).find(key => this.bar[key] === this.activeTitle);
      if (currentKey) {
        this.activeTitle = this.bar[currentKey];
      }
    }
  },
  methods: {
    onSelect (name) {
      this.activeTitle = this.bar[name];
      this.$router.push(`/home/${name}`);
    }
  }
};
</script>

<style scoped>
.side-bar a{
  color: #232323;
}
.user-icon {
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.user-icon span {
  font-size: 96px;
}
.user-img {
  margin-bottom: 15px;
  width: 96px;
  height: 96px;
  border-radius: 48px;
  overflow: hidden;
}
.user-img img{
  width: 100%;
}
.content {
  margin: 15px;
  background-color: #fff;
  padding: 15px;
}
.layout-footer-center {
  padding: 0px 15px;
  padding-bottom: 15px;
  text-align: center;
}
</style>
