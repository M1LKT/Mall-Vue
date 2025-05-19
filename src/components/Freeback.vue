<template>
  <div>
    <div class="freeback-container">
      <div class="freeback-img-box">
        <img src="static/img/freeback.png">
      </div>
      <div class="freeback-box-border">
        <div class="freeback-box">
          <div class="freeback-title">
            <h1>{{ $t('freeback.title') }}</h1>
            <h2>{{ $t('freeback.thank') }}</h2>
          </div>
          <div class="freeback-content">
            <div class="freeback-form">
              <Form :model="formItem" :label-width="80">
                <FormItem :label="$t('freeback.form.title')">
                  <i-input v-model="formItem.title" :placeholder="$t('freeback.form.titlePlaceholder')"></i-input>
                </FormItem>
                <FormItem :label="$t('freeback.form.content')">
                  <i-input v-model="formItem.content" type="textarea" :autosize="{minRows: 8,maxRows: 10}" :placeholder="$t('freeback.form.contentPlaceholder')"></i-input>
                </FormItem>
                <FormItem>
                  <Button type="primary">{{ $t('freeback.form.submit') }}</Button>
                  <Button type="ghost">{{ $t('freeback.form.clear') }}</Button>
                </FormItem>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Freeback',
  data () {
    return {
      formItem: {
        title: '',
        content: ''
      }
    };
  }
};
</script>

<style scoped>
.freeback-container {
  margin: 15px auto;
  width: 80%;
  height: 600px;
  display: flex;
  align-items: center;
  /* background-color: #ccc; */
}
.freeback-img-box {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.freeback-img-box img {
  width: 80%;
}
.freeback-box-border {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.freeback-box {
  width: 480px;
}
.freeback-content {
  margin: 15px auto;
  border: 1px #ccc dotted;
}
.freeback-form {
  margin: 30px auto;
  width: 90%;
}
</style>
