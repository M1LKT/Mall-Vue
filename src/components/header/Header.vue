<template>
  <div class="box">
    <div class="nav">
      <ul class="location">
        <li>
          <Dropdown  placement="bottom-start">
            <a href="javascript:void(0)">
              <Icon type="ios-location" class="icon"></Icon> {{$t('city.' + city)}}
            </a>
            <DropdownMenu slot="list">
              <div class="city">
                <p v-for="(items, index) in cityArr" :key="index">
                    <span
                      v-for="(item, idx) in items"
                      class="city-item"
                      :key="idx"
                      @click="changeCity(item)"
                    >{{$t('city.' + item)}}</span>
                </p>
              </div>
            </DropdownMenu>
          </Dropdown>
        </li>
      </ul>
      <ul class="detail">
        <li class="first" v-show="!userInfo.username">
          {{ $t('header.hello') }}
          <router-link to="/login">
            {{ $t('header.login') }} <Icon type="person"></Icon>
          </router-link>
          |<span class="text-color-red">
            <router-link to="/SignUp">
              {{ $t('header.register') }} <Icon type="person-add"></Icon>
            </router-link>
          </span>
        </li>
        <li v-show="!!userInfo.username">
          <Dropdown>
            <p class="username-p">
              <Avatar class="person-icon" icon="person" size="small" /> <span class="username">{{userInfo.username}} </span>
            </p>
            <DropdownMenu slot="list">
                <div class="my-page">
                  <div class="my-info" @click="myInfo">
                    <Icon type="home"></Icon>
                    <p>{{ $t('header.myHome') }}</p>
                  </div>
                  <div class="sign-out" @click="signOutFun">
                    <Icon type="log-out"></Icon>
                    <p>{{ $t('header.logout') }}</p>
                  </div>
                </div>
            </DropdownMenu>
          </Dropdown>
        </li>
        <li>
          <Dropdown  placement="bottom-start">
            <a href="javascript:void(0)">
              <Icon type="ios-cart-outline"></Icon>  {{ $t('header.cart') }}
            </a>
            <DropdownMenu slot="list">
              <div class="shopping-cart-null" v-show="shoppingCart.length <= 0">
                <Icon type="ios-cart-outline" class="cart-null-icon"></Icon>
                  <span>{{ $t('header.cartEmpty') }}</span>
                  <span>{{ $t('header.cartAdd') }}</span>
              </div>
              <div class="shopping-cart-list" v-show="shoppingCart.length > 0">
                <div class="shopping-cart-box" v-for="(item,index) in shoppingCart" :key="index">
                  <div class="shopping-cart-img">
                    <img :src="item.img">
                  </div>
                 <div class="shopping-cart-info">
                  <div class="shopping-cart-title">
                    <p>{{item.title.substring(0, 22)}}...</p>
                  </div>
                  <div class="shopping-cart-detail">
                    <p>
                      {{ $t('header.package') }}:
                      <span class="shopping-cart-text">
                        {{item.package}}
                      </span>
                      {{ $t('header.count') }}:
                      <span class="shopping-cart-text">
                        {{item.count}}
                      </span>
                      {{ $t('header.price') }}:
                      <span class="shopping-cart-text">
                        {{item.price}}
                      </span>
                    </p>
                  </div>
                </div>
                </div>
                <div class="go-to-buy">
                  <Button type="error" size="small" @click="goToPay">
                    {{ $t('header.cartGoPay') }}
                  </Button>
                </div>
              </div>
            </DropdownMenu>
          </Dropdown>
        </li>
        <!-- <li><router-link to="/">{{ $t('header.nav.guide') }}</router-link></li> -->
        <li><router-link to="/freeback">{{ $t('header.nav.feedback') }}</router-link></li>
        <li><router-link to="/">{{ $t('header.nav.home') }}</router-link></li>
        <li>
          <el-dropdown>
              <!-- <a>{{ $t('header.nav.switchLang') }}</a> -->
              <a>
                {{ optionLang[$i18n.locale] }}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </a>
            <el-dropdown-menu slot="dropdown" class="dropdownMenu">
              <el-dropdown-item v-for="(item, index) in $i18n.availableLocales" @click="changeLanguage(item)" :key="index">
                <span
                  @click="changeLanguage(item)"
                  :class="{ 'lang-active': $i18n.locale === item }"
                >
                  {{optionLang[item]}}
                </span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import store from '@/vuex/store';
import { mapState, mapActions } from 'vuex';
import optionLang from '@/lang/optionLang';
export default {
  name: 'M-Header',
  created () {
    this.isLogin();
  },
  data () {
    return {
      city: '珠海',
      cityArr: [
        ['北京', '上海', '天津', '重庆', '广州'],
        ['深圳', '河南', '辽宁', '吉林', '江苏'],
        ['江西', '四川', '海南', '贵州', '云南'],
        ['西藏', '陕西', '甘肃', '青海', '珠海']
      ],
      optionLang: optionLang.optionLanguage
    };
  },
  computed: {
    ...mapState(['userInfo', 'shoppingCart'])
  },
  methods: {
    ...mapActions(['signOut', 'isLogin']),
    changeCity (city) {
      this.city = city;
    },
    goToPay () {
      this.$router.push('/order');
    },
    myInfo () {
      this.$router.push('/home');
    },
    signOutFun () {
      this.signOut();
      this.$router.push('/');
    },
    changeLanguage (lang) {
      this.$i18n.locale = lang;
      localStorage.setItem('lang', lang);
    }
  },
  store
};
</script>

<style scoped>
.box {
  width: 100%;
  height: 35px;
  background-color: #e3e4e5;
}
.nav {
  margin: 0% auto;
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.nav ul {
  list-style: none;
}
.nav li {
  float: left;
  font-size: 14px;
  line-height: 35px;
  margin-right: 15px;
  font-weight: bold;
}
.nav a {
  text-decoration: none;
  color: #999999;
  padding-left: 15px;
  border-left: 1px solid #ccc;
  cursor: pointer;
}
.location a {
  border-left: none;
}
.nav a:hover {
  color: #d9534f;
}
.location {
  color: #999999;
}
.icon {
  color: #d9534f;
}
.first {
  color: #999999;
}
.first a:first-child {
  padding-left: 3px;
  border-left: none;
}
.city {
  padding: 10px 15px;
}
.city-item {
  font-weight: bold;
  cursor: pointer;
  padding: 5px;
}
.city-item:hover {
  color: #d9534f;
}
.person-icon {
  color: #d9534f;
  background-color:  #f0cdb2;
}
.username {
  color: #999999;
}
.shopping-cart-list {
  padding: 3px 15px;
}
.shopping-cart-box {
  margin: 8px 0px;
  margin-top: 15px;
  padding-bottom: 15px;
  height: 40px;
  display: flex;
  align-items: center;
  border-bottom: 1px #ccc dotted;
}
.shopping-cart-box:first-child {
  margin-top: 8px;
}
.shopping-cart-img {
  margin-right: 15px;
  width: 40px;
  height: 40px;
}
.shopping-cart-img img {
  width: 100%;
}
.shopping-cart-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
  width: 200px;
  overflow: hidden;
  font-size: 12px;
  line-height: 20px;
  color: #999999;
}
.shopping-cart-detail {
  color: #999999;
}
.shopping-cart-text {
  color: #ccc;
}
.go-to-buy {
  display: flex;
  justify-content: flex-end;
}
.shopping-cart-null {
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.cart-null-icon {
  font-size: 38px;
  margin-bottom: 15px;
}
.shopping-cart-null span {
  color: #999999;
  font-size: 12px;
  line-height: 16px;
}
.username-p {
  cursor: pointer;
}
.my-page {
  padding: 3px 5px;
  width: 180px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.my-page a {
  margin: 0px;
  padding: 0px;
  border: none;
}
.my-info {
  padding: 5px;
  width: 50%;
  height: 100%;
  text-align: center;
  cursor: pointer;
}
.my-info:hover {
  box-shadow: 0px 0px 5px #ccc;
}
.my-info i {
  font-size: 28px;
}
.my-info p {
  font-size: 12px;
}
.sign-out {
  padding: 5px;
  width: 50%;
  height: 100%;
  text-align: center;
  cursor: pointer;
}
.sign-out:hover {
  box-shadow: 0px 0px 5px #ccc;
}
.sign-out i {
  font-size: 28px;
}
.sign-out p {
  font-size: 12px;
}
.lang-active {
  color: #d9534f;
  font-weight: bold;
}
</style>

<style>
.el-popper.dropdownMenu {
  /* background-color: red; */
  border: 1px solid #fff;
}
.el-popper.dropdownMenu .el-dropdown-menu__item {
  color: #999999 !important; /* 下拉菜单文字颜色 */
}
.el-popper.dropdownMenu .el-dropdown-menu__item:not(.is-disabled):hover {
  color: #d9534f !important;
}
</style>
