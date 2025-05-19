<template>
  <div class="info-form">
     <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80" >
        <FormItem :label="$t('inputInfo.name')" prop="name">
            <i-input v-model="formValidate.name" clearable size="large" :placeholder="$t('inputInfo.namePlaceholder')"></i-input>
        </FormItem>
        <FormItem :label="$t('inputInfo.mail')" prop="mail">
            <i-input v-model="formValidate.mail" clearable size="large" :placeholder="$t('inputInfo.mailPlaceholder')"></i-input>
        </FormItem>
        <FormItem :label="$t('inputInfo.password')" prop="password">
            <i-input type="password" v-model="formValidate.password" clearable size="large" :placeholder="$t('inputInfo.passwordPlaceholder')"></i-input>
        </FormItem>
        <FormItem :label="$t('inputInfo.repassword')" prop="repassword">
            <i-input type="password" v-model="formValidate.repassword" clearable size="large" :placeholder="$t('inputInfo.repasswordPlaceholder')"></i-input>
        </FormItem>
        <Button type="error" size="large" long @click="handleSubmit('formValidate')">{{ $t('inputInfo.register') }}</Button>
    </Form>
  </div>
</template>

<script>
import store from '@/vuex/store';
import { mapMutations, mapActions } from 'vuex';
export default {
  name: 'InputInfo',
  data () {
    const validatePassCheck = (rule, value, callback) => {
      if (value === '') {
        callback(new Error(this.$t('inputInfo.repasswordRequired')));
      } else if (value !== this.formValidate.password) {
        callback(new Error(this.$t('inputInfo.passwordNotMatch')));
      } else {
        callback();
      }
    };
    return {
      formValidate: {
        name: '',
        mail: '',
        password: '',
        repassword: ''
      },
      ruleValidate: {
        name: [
          { required: true, message: this.$t('inputInfo.nameRequired'), trigger: 'blur' }
        ],
        mail: [
          { required: true, message: this.$t('inputInfo.mailRequired'), trigger: 'blur' },
          { type: 'email', message: this.$t('inputInfo.mailFormatError'), trigger: 'blur' }
        ],
        password: [
          { required: true, message: this.$t('inputInfo.passwordRequired'), trigger: 'blur' },
          { type: 'string', min: 6, message: this.$t('inputInfo.passwordMin'), trigger: 'blur' }
        ],
        repassword: [
          { validator: validatePassCheck, trigger: 'blur' }
        ]
      }
    };
  },
  watch: {
    '$i18n.locale' () {
      this.ruleValidate.name[0].message = this.$t('inputInfo.nameRequired');
      this.ruleValidate.mail[0].message = this.$t('inputInfo.mailRequired');
      this.ruleValidate.mail[1].message = this.$t('inputInfo.mailFormatError');
      this.ruleValidate.password[0].message = this.$t('inputInfo.passwordRequired');
      this.ruleValidate.password[1].message = this.$t('inputInfo.passwordMin');
    }
  },
  methods: {
    ...mapMutations(['SET_SIGN_UP_SETP']),
    ...mapActions(['addSignUpUser']),
    handleSubmit (name) {
      const father = this;
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success(this.$t('inputInfo.registerSuccess'));
          const userinfo = {
            username: this.formValidate.name,
            password: this.formValidate.password,
            mail: this.formValidate.mail,
            phone: this.$route.query.phone
          };
          this.addSignUpUser(userinfo);
          father.SET_SIGN_UP_SETP(2);
          this.$router.push({ path: '/SignUp/signUpDone' });
        } else {
          this.$Message.error(this.$t('inputInfo.registerFail'));
        }
      });
    }
  },
  store
};
</script>

<style scoped>
.info-form {
  width: 90% !important;
}
</style>
