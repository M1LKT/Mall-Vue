/*
 * @Author: Gavin
 * @Date: 2018-06-11 11:27:10
 * @Last Modified by: Gavin
 * @Last Modified time: 2018-06-11 12:23:40
 * @Describe: 搜索商品导航标签
 */
<template>
  <div class="item-class-show">
    <Row class="item-class-group" v-for="(items, index) in tagsInfo" :key="index">
      <i-col class="item-class-name" span="3">{{ $t('goodsClassNav.' + items.tagName) }} : </i-col>
      <i-col class="item-class-select" span="21">
        <span v-for="(item, subIndex) in items.tags" :key="subIndex">{{ $t('goodsClassNav.tags.' + item) }}</span>
      </i-col>
    </Row>
  </div>
</template>

<script>
export default {
  name: 'GoodsClassNav',
  data () {
    return {
      tagsInfo: [
        {
          tagName: 'brand',
          tags: [
            'huawei', 'samsung', 'mate', 'msvii', 'oppo', 'mofi', 'nillkin', 'rock', 'esr', 'apple', 'uplus'
          ]
        },
        {
          tagName: 'accessory',
          tags: [
            'case', 'appleRim', 'film', 'powerbank', 'creative', 'earphone', 'holder'
          ]
        },
        {
          tagName: 'style',
          tags: [
            'soft', 'hard', 'flip', 'frame', 'armband', 'wallet', 'custom', 'waterproof', 'cloth', 'other'
          ]
        },
        {
          tagName: 'material',
          tags: [
            'plastic', 'silicone', 'metal', 'electroplate', 'leather', 'resin', 'wood', 'diamond', 'liquidSilicone', 'tpu'
          ]
        }
      ]
    };
  }
};
</script>

<style scoped>
.item-class-show {
  margin: 15px auto;
  width: 100%;
}
.item-class-group {
  margin-top: 1px;
  height: 45px;
  border-bottom: 1px solid #ccc;
}
.item-class-group:first-child {
  border-top: 1px solid #ccc;
}
.item-class-name {
  padding-left: 15px;
  line-height: 44px;
  color: #666;
  font-weight: bold;
  background-color: #f3f3f3;
}
.item-class-name:first-child {
  line-height: 43px;
}
.item-class-select span {
  margin-left: 15px;
  width: 160px;
  color: #005aa0;
  line-height: 45px;
  cursor: pointer;
}
</style>
