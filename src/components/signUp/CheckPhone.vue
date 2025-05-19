<template>
  <div class="info-form">
    <Form ref="formValidate" :model="formValidate" :label-width="80" :rules="ruleValidate">
      <FormItem :label="$t('checkPhone.phoneLabel')" prop="phone">
          <i-input v-model="formValidate.phone" clearable size="large"  :placeholder="$t('checkPhone.phonePlaceholder')"></i-input>
      </FormItem>
      <FormItem :label="$t('checkPhone.codeLabel')" prop="checkNum">
        <i-input v-model="formValidate.checkNum" size="large" :placeholder="$t('checkPhone.codePlaceholder')">
          <Button slot="append" @click="getcheckNum">{{ $t('checkPhone.getCode') }}</Button>
        </i-input>
      </FormItem>
      <Button type="error" size="large" long @click="handleSubmit('formValidate')">{{ $t('checkPhone.verifyPhone') }}</Button>
    </Form>
  </div>
</template>

<script>
import store from '@/vuex/store';
import { mapMutations } from 'vuex';
export default {
  name: 'CheckPhone',
  data () {
    return {
      formValidate: {
        phone: '',
        checkNum: ''
      },
      ruleValidate: {
        phone: [
          { required: true, message: this.$t('checkPhone.phoneRequired'), trigger: 'blur' },
          { type: 'string', pattern: /^1[3|4|5|7|8][0-9]{9}$/, message: this.$t('checkPhone.phoneFormatError'), trigger: 'blur' }
        ],
        checkNum: [
          { required: true, message: this.$t('checkPhone.codeRequired'), trigger: 'blur' },
          { type: 'string', min: 4, max: 4, message: this.$t('checkPhone.codeLengthError'), trigger: 'blur' }
        ]
      }
    };
  },
  watch: {
    '$i18n.locale' () {
      this.ruleValidate.phone[0].message = this.$t('checkPhone.phoneRequired');
      this.ruleValidate.phone[1].message = this.$t('checkPhone.phoneFormatError');
      this.ruleValidate.checkNum[0].message = this.$t('checkPhone.codeRequired');
      this.ruleValidate.checkNum[1].message = this.$t('checkPhone.codeLengthError');
    }
  },
  methods: {
    ...mapMutations(['SET_SIGN_UP_SETP']),
    getcheckNum () {
      if (this.formValidate.phone.length === 11) {
        this.$Message.success({
          content: this.$t('checkPhone.codeTip', { code: '1234' }),
          duration: 6,
          closable: true
        });
      } else {
        this.$Message.error({
          content: this.$t('checkPhone.phoneTip'),
          duration: 6,
          closable: true
        });
      }
    },
    handleSubmit (name) { // 提交验证
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$router.push({ path: '/SignUp/inputInfo', query: { phone: this.formValidate.phone } });
          this.SET_SIGN_UP_SETP(1);
        } else {
          this.$Message.error({
            content: this.$t('checkPhone.infoError'),
            duration: 6,
            closable: true
          });
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
