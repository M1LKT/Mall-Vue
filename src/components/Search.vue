<template>
  <div>
    <div class="container">
      <i-input
        v-model="sreachData"
        size="large"
        class="sreach"
        :placeholder="$t('search.placeholder')"
      >
        <Button slot="append" icon="ios-search" @click="sreach"></Button>
      </i-input>
      <Tag
        v-for="(item, index) in promotionTags"
        :key="index"
        closable
        @on-close="closeTags(index)"
      >
        <span @click="selectTags(index)">{{ $t('search.promotionTags.' + item) }}</span>
      </Tag>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      sreachData: '',
      promotionTags: [
        'buy2free1',
        'coupon200',
        'minus100',
        'babyHalf',
        'charge100get20'
      ]
    };
  },
  methods: {
    closeTags (index) {
      this.promotionTags.splice(index, 1);
    },
    selectTags (index) {
      this.sreachData = this.$t('search.promotionTags.' + this.promotionTags[index]);
    },
    sreach () {
      this.$router.push({ path: '/goodsList', query: { sreachData: this.sreachData } });
    }
  }
};
</script>

<style scoped>
.container {
  padding-top: 15px;
  margin: 0px auto;
  margin-bottom: 15px;
  width: 460px;
}
.sreach {
  margin: 5px 0px;
}
</style>
