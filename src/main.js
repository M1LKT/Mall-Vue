// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import VueI18n from 'vue-i18n';
import ElementUI from 'element-ui';
import messages from './lang';
import 'element-ui/lib/theme-chalk/index.css';
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(iView).use(VueI18n).use(ElementUI);
Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  next();
});

const locale = localStorage.getItem('lang') || 'en'; // 读取本地存储

const i18n = new VueI18n({
  locale, // 默认语言
  messages
});

function setLangClass (lang) {
  document.body.classList.remove('lang-zh', 'lang-en');
  document.body.classList.add('lang-' + lang);
}
setLangClass(i18n.locale);
i18n.vm && i18n.vm.$watch('locale', setLangClass);

router.afterEach(route => {
  iView.LoadingBar.finish();
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
});
