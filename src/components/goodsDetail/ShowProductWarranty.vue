<template>
  <div>
    <div class="remarks-title">
      <span>{{ $t('showProductWarranty.title') }}</span>
    </div>
    <div class="item-protect-container">
      <div class="item-protect-box">
        <p class="item-protect-title-box">
          <Avatar style="background-color: #e4393c" icon="ribbon-a" />
          <span class="item-protect-title">{{ $t('showProductWarranty.sellerService') }}</span>
        </p>
        <p class="item-protect-detail">
          {{ $t('showProductWarranty.sellerServiceDetail') }}
        </p>
      </div>
      <div class="item-protect-box">
        <p class="item-protect-title-box">
          <Avatar style="background-color: #e4393c" icon="cash" />
          <span class="item-protect-title">{{ $t('showProductWarranty.platformPromise') }}</span>
        </p>
        <p class="item-protect-detail">
          {{ $t('showProductWarranty.platformPromiseDetail1') }}<br>
          {{ $t('showProductWarranty.platformPromiseDetail2') }}
        </p>
      </div>
      <div class="item-protect-box">
        <p class="item-protect-title-box">
          <Avatar style="background-color: #e4393c" icon="locked" />
          <span class="item-protect-title">{{ $t('showProductWarranty.authentic') }}</span>
        </p>
        <p class="item-protect-detail">
          {{ $t('showProductWarranty.authenticDetail') }}
        </p>
      </div>
      <div class="item-protect-box">
        <p class="item-protect-title-box">
          <Avatar style="background-color: #e4393c" icon="settings" />
          <span class="item-protect-title">{{ $t('showProductWarranty.nationwideWarranty') }}</span>
        </p>
        <p class="item-protect-detail">
          {{ $t('showProductWarranty.nationwideWarrantyDetail1') }}<br><br>
          {{ $t('showProductWarranty.nationwideWarrantyDetail2') }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShowProductWarranty'
};
</script>

<style scoped>
.remarks-title {
  padding-left: 15px;
  height: 36px;
  font-size: 16px;
  font-weight: bolder;
  line-height: 36px;
  color: #666666;
  background-color: #F7F7F7;
}
.item-protect-container {
  padding: 15px;
}
.item-protect-box {
  margin-bottom: 30px;
}
.item-protect-title-box {
  display: flex;
  align-items: center;
}
.item-protect-title {
  padding-left: 15px;
  font-size: 20px;
  font-weight: bolder;
  color: #e4393c;
}
.item-protect-detail {
  padding-top: 5px;
  padding-left: 46px;
  font-size: 14px;
  color: #999;
}
</style>
