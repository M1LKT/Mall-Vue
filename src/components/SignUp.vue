<template>
  <div>
    <Row class="container">
      <i-col span="12" offset="2" class="signup-img-box">
        <img src="static/img/signup-sale.png" alt="">
      </i-col>
      <i-col span="8" class="box">
        <div class="sign-up-title">
          <h1>{{ $t('signUp.welcome') }}</h1>
          <br>
          <h2 :class="{'en-slogan': isEnLang}">{{ $t('signUp.slogan') }}</h2>
        </div>
        <div class="sing-up-step-box">
          <Steps :current="signUpStep">
              <Step :title="$t('signUp.step1')" icon="iphone"></Step>
              <Step :title="$t('signUp.step2')" icon="person-add"></Step>
              <Step :title="$t('signUp.step3')" icon="ios-checkmark-outline"></Step>
          </Steps>
          <div class="sign-up-box">
            <transition mode="out-in">
              <router-view></router-view>
            </transition>
          </div>
        </div>
      </i-col>
    </Row>
    <Footer></Footer>
  </div>
</template>

<script>
import store from '@/vuex/store';
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'SignUp',
  data () {
    return {
      index: 0
    };
  },
  computed: {
    ...mapState(['signUpStep']),
    isEnLang () {
      return document.body.classList.contains('lang-en');
    }
  },
  methods: {
    ...mapMutations(['SET_SIGN_UP_SETP'])
  },
  store,
  mounted () {
    this.SET_SIGN_UP_SETP(0);
  }
};
</script>

<style scoped>
.container {
  margin: 15px auto;
  height: 500px;
  overflow: hidden;
}
.signup-img-box {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.signup-img-box>img {
  height: 80%;
}
.sign-up-title {
  width: 430px;
  margin: 15px auto;
  height: 80px;
}
.sing-up-step-box {
  margin: 15px auto;
  padding-left: 30px;
  padding-top: 30px;
  width: 430px;
  height: 380px;
  border: 1px solid #495060;
}
.sign-up-box {
  margin: 30px 25px;
  width: 350px;
  display: flex;
  align-items: center;
}
.en-slogan {
  font-size: 14px;
}
</style>
