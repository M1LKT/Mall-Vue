<template>
  <div>
    <div class="nav-item">
      <ul>
        <li v-for="(item,index) in nav" :key="index">
          <a href="#">{{item}}</a>
        </li>
      </ul>
    </div>
    <div class="nav-body">
      <!-- 侧边导航 -->
      <div class="nav-side" ref="navSide">
        <ul>
          <li @mouseenter="showDetail(1)" @mouseleave="hideDetail(1)">
            <span class="nav-side-item">{{ $t('homeNav.side.homeAppliance') }}</span>
          </li>
          <li @mouseenter="showDetail(2)" @mouseleave="hideDetail(2)">
            <span class="nav-side-item">{{ $t('homeNav.side.phone') }}</span> /
            <span class="nav-side-item">{{ $t('homeNav.side.operator') }}</span> /
            <span class="nav-side-item">{{ $t('homeNav.side.digital') }}</span>
          </li>
          <li @mouseenter="showDetail(1)" @mouseleave="hideDetail(1)">
            <span class="nav-side-item">{{ $t('homeNav.side.computer') }}</span> /
            <span class="nav-side-item">{{ $t('homeNav.side.office') }}</span>
          </li>
          <li @mouseenter="showDetail(2)" @mouseleave="hideDetail(2)">
            <span class="nav-side-item">{{ $t('homeNav.side.home') }}</span> /
            <span class="nav-side-item">{{ $t('homeNav.side.furniture') }}</span> /
            <span class="nav-side-item">{{ $t('homeNav.side.decoration') }}</span> /
            <span class="nav-side-item">{{ $t('homeNav.side.kitchen') }}</span>
          </li>
          <li @mouseenter="showDetail(1)" @mouseleave="hideDetail(1)">
            <span class="nav-side-item">{{ $t('homeNav.side.menClothing') }}</span> /
            <span class="nav-side-item">{{ $t('homeNav.side.underwear') }}</span>
          </li>
          <li @mouseenter="showDetail(2)" @mouseleave="hideDetail(2)">
            <span class="nav-side-item">{{ $t('homeNav.side.beauty') }}</span> /
            <span class="nav-side-item">{{ $t('homeNav.side.pet') }}</span>
          </li>
          <li @mouseenter="showDetail(1)" @mouseleave="hideDetail(1)">
            <span class="nav-side-item">{{ $t('homeNav.side.womenShoes') }}</span> /
            <span class="nav-side-item">{{ $t('homeNav.side.bag') }}</span> /
            <span class="nav-side-item">{{ $t('homeNav.side.watch') }}</span> /
            <span class="nav-side-item">{{ $t('homeNav.side.jewelry') }}</span>
          </li>
          <li @mouseenter="showDetail(2)" @mouseleave="hideDetail(2)">
            <span class="nav-side-item">{{ $t('homeNav.side.menShoes') }}</span> /
            <span class="nav-side-item">{{ $t('homeNav.side.sports') }}</span> /
            <span class="nav-side-item">{{ $t('homeNav.side.outdoor') }}</span>
          </li>
          <li @mouseenter="showDetail(1)" @mouseleave="hideDetail(1)">
            <span class="nav-side-item">{{ $t('homeNav.side.car') }}</span> /
            <span class="nav-side-item">{{ $t('homeNav.side.carAccessory') }}</span>
          </li>
          <li @mouseenter="showDetail(2)" @mouseleave="hideDetail(2)">
            <span class="nav-side-item">{{ $t('homeNav.side.motherBaby') }}</span> /
            <span class="nav-side-item">{{ $t('homeNav.side.toy') }}</span>
          </li>
          <li @mouseenter="showDetail(1)" @mouseleave="hideDetail(1)">
            <span class="nav-side-item">{{ $t('homeNav.side.food') }}</span> /
            <span class="nav-side-item">{{ $t('homeNav.side.wine') }}</span> /
            <span class="nav-side-item">{{ $t('homeNav.side.freshFood') }}</span> /
            <span class="nav-side-item">{{ $t('homeNav.side.specialty') }}</span>
          </li>
          <!-- <li @mouseenter="showDetail(2)" @mouseleave="hideDetail(2)">
            <span class="nav-side-item">{{ $t('homeNav.side.gift') }}</span> /
            <span class="nav-side-item">{{ $t('homeNav.side.agriculture') }}</span>
          </li> -->
          <!-- <li @mouseenter="showDetail(1)" @mouseleave="hideDetail(1)">
            <span class="nav-side-item">{{ $t('homeNav.side.health') }}</span> /
            <span class="nav-side-item">{{ $t('homeNav.side.adult') }}</span>
          </li> -->
          <li @mouseenter="showDetail(2)" @mouseleave="hideDetail(2)">
            <span class="nav-side-item">{{ $t('homeNav.side.book') }}</span> /
            <span class="nav-side-item">{{ $t('homeNav.side.audio') }}</span> /
            <span class="nav-side-item">{{ $t('homeNav.side.ebook') }}</span>
          </li>
        </ul>
      </div>
      <div class="nav-content">
        <!-- 幻灯片 -->
        <div>
          <Carousel autoplay loop class="carousel" >
              <CarouselItem  v-for="(item, index) in marketing.CarouselItems" :key="index">
                <router-link to="/goodsList">
                  <img :src="item" style="  max-width: 1180px;max-height: 340px;width: 100%;height: auto;">
                </router-link>
              </CarouselItem>
          </Carousel>
        </div>
        <div class="nav-show">
          <div class="nav-show-img" v-for="(item, index) in marketing.activity" :key="index" >
            <router-link to="/goodsList">
              <img :src="item">
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <transition name="fade">
      <div class="detail-item-panel panel-1" :duration="{ enter: 100, leave: 100 }" v-show="panel1" @mouseenter="showDetail(1)" ref="itemPanel1" @mouseleave="hideDetail(1)">
        <div class="nav-detail-item">
          <span v-for="(item, index) in panelData1.navTags" :key="index">{{ $t('homeNav.panel1.navTags.' + item) }} > </span>
        </div>
        <ul>
          <li v-for="(items, index) in panelData1.classNav" :key="index" class="detail-item-row">
            <span class="detail-item-title">{{ $t('homeNav.panel1.classNav.' + items.title) }}
              <span class="glyphicon glyphicon-menu-right"></span>
            </span>
            <router-link to="/goodsList" v-for="(item, subIndex) in items.tags" :key="subIndex">
              <span class="detail-item">{{ $t('homeNav.panel1.tags.' + item) }}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </transition>
    <transition name="fade">
      <div class="detail-item-panel panel-2" :duration="{ enter: 100, leave: 100 }" v-show="panel2" @mouseenter="showDetail(2)" ref="itemPanel2" @mouseleave="hideDetail(2)">
        <div class="nav-detail-item">
          <span v-for="(item, index) in panelData2.navTags" :key="index">{{ $t('homeNav.panel2.navTags.' + item) }} > </span>
        </div>
        <ul>
          <li v-for="(items, index) in panelData2.classNav" :key="index" class="detail-item-row">
            <span class="detail-item-title">{{ $t('homeNav.panel2.classNav.' + items.title) }}
              <span class="glyphicon glyphicon-menu-right"></span>
            </span>
            <router-link to="/goodsList" v-for="(item, subIndex) in items.tags" :key="subIndex">
              <span class="detail-item">{{ $t('homeNav.panel2.tags.' + item) }}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import store from '@/vuex/store';
import { mapState } from 'vuex';
export default {
  name: 'HomeNav',
  data () {
    return {
      panel1: false,
      panel2: false,
      nav: [
        // 'seckill', 'coupon', 'flash', 'auction', 'clothing', 'supermarket', 'fresh', 'global', 'finance'
      ],
      panelData1: {
        navTags: [ 'clean', 'beautyMall', 'beautyHall', 'beautyClub', 'globalBeauty', 'petHall' ],
        classNav: [
          {
            title: 'faceCare',
            tags: [ 'moisturize', 'removeMakeup', 'cleanser', 'toner', 'lotion', 'essence', 'eyeCream', 'sunscreen', 'mask', 'shaving', 'set' ]
          },
          {
            title: 'hairCare',
            tags: [ 'shampoo', 'conditioner', 'hairDye', 'styling', 'wig', 'hairTool', 'set' ]
          },
          {
            title: 'bodyCare',
            tags: [ 'moisturize', 'bath', 'bodyLotion', 'essentialOil', 'neck', 'handFoot', 'shape', 'breast', 'set' ]
          },
          {
            title: 'oralCare',
            tags: [ 'toothpaste', 'toothbrush', 'mouthwash', 'set' ]
          },
          {
            title: 'femaleCare',
            tags: [ 'sanitaryNapkin', 'pantyLiner', 'privateCare', 'depilatory' ]
          },
          {
            title: 'perfumeMakeup',
            tags: [ 'bbCream', 'cottonPad', 'womenPerfume', 'menPerfume', 'foundation', 'eyebrowPencil', 'mascara', 'eyeliner', 'eyeShadow', 'lipstick' ]
          },
          {
            title: 'clean',
            tags: [ 'wetWipes', 'clothesClean', 'cleanTool', 'homeClean', 'disposable', 'insectRepellent', 'leatherCare' ]
          },
          {
            title: 'petLife',
            tags: [ 'aquarium', 'dogFood', 'catFood', 'cannedFood', 'dogSnack', 'catSnack', 'petHealth', 'petToy', 'petClothes' ]
          }
        ]
      },
      panelData2: {
        navTags: [ 'sportsEvent', 'sportsMall', 'outdoorHall', 'gym', 'cyclingHall', 'watchMall' ],
        classNav: [
          {
            title: 'new2017',
            tags: [ 'casualShoes', 'businessShoes', 'formalShoes', 'canvasShoes', 'sandals', 'slippers', 'functionShoes', 'heightShoes', 'workShoes', 'rainShoes' ]
          },
          {
            title: 'sportsShoesBag',
            tags: [ 'runningShoes', 'casualShoes', 'basketballShoes', 'canvasShoes', 'boardShoes', 'slippers', 'sportsBag' ]
          },
          {
            title: 'fitness',
            tags: [ 'treadmill', 'exerciseBike', 'elliptical', 'trainer', 'rowingMachine', 'fatShaker', 'inversionMachine', 'martialArts' ]
          },
          {
            title: 'cycling',
            tags: [ 'mountainBike', 'roadBike', 'foldingBike', 'cyclingClothes', 'electricBike', 'electricScooter', 'cityBike', 'balanceBike' ]
          },
          {
            title: 'sportsGoods',
            tags: [ 'pingpong', 'badminton', 'basketball', 'football', 'rollerSkate', 'tennis', 'golf', 'billiards', 'volleyball' ]
          },
          {
            title: 'outdoorWear',
            tags: [ 'outdoorJacket', 'hikingShoes', 'tshirt', 'jacketPants', 'quickDry', 'trailRunning', 'skiSuit', 'downJacket', 'casualWear' ]
          },
          {
            title: 'outdoorEquip',
            tags: [ 'backpack', 'tent', 'binoculars', 'bbq', 'portableTable', 'outdoorAccessory', 'military', 'picnic' ]
          },
          {
            title: 'fishing',
            tags: [ 'fishingRod', 'fishingLine', 'float', 'bait', 'fishingAccessory', 'fishingBag', 'fishingBox', 'reel', 'fishingLamp' ]
          },
          {
            title: 'swimming',
            tags: [ 'womenSwimsuit', 'bikini', 'menSwimsuit', 'goggles', 'swimRing', 'swimBag', 'swimCap', 'swimAccessory' ]
          }
        ]
      }
    };
  },
  computed: {
    ...mapState(['marketing'])
  },
  methods: {
    showDetail (index) {
      index === 1 ? (this.panel1 = true) : (this.panel2 = true);
    },
    hideDetail (index) {
      index === 1 ? (this.panel1 = false) : (this.panel2 = false);
    }
  },
  mounted () {
    this.$refs.itemPanel1.style.left =
      this.$refs.navSide.offsetLeft + this.$refs.navSide.offsetWidth + 'px';
    this.$refs.itemPanel2.style.left =
      this.$refs.navSide.offsetLeft + this.$refs.navSide.offsetWidth + 'px';
    this.$refs.itemPanel1.style.top = this.$refs.navSide.offsetTop + 'px';
    this.$refs.itemPanel2.style.top = this.$refs.navSide.offsetTop + 'px';
  },
  updated () {
    this.$refs.itemPanel1.style.left =
      this.$refs.navSide.offsetLeft + this.$refs.navSide.offsetWidth + 'px';
    this.$refs.itemPanel2.style.left =
      this.$refs.navSide.offsetLeft + this.$refs.navSide.offsetWidth + 'px';
    this.$refs.itemPanel1.style.top = this.$refs.navSide.offsetTop + 'px';
    this.$refs.itemPanel2.style.top = this.$refs.navSide.offsetTop + 'px';
  },
  store
};
</script>

<style scoped>
.nav-item {
  width: 680px;
  height: 36px;
  margin: 0px auto;
}
.nav-item ul {
  list-style: none;
  margin-left: 15px;
}
.nav-item li {
  float: left;
  font-size: 16px;
  font-weight: bold;

  margin-left: 30px;
}
.nav-item a {
  text-decoration: none;
  color: #555555;
}
.nav-item a:hover {
  color: #d9534f;
}
/*大的导航信息，包含导航，幻灯片等*/
.nav-body {
  width: 1020px;
  height: 485px;
  margin: 0px auto;
}
.nav-side {
  width: 200px;
  height: 100%;
  padding: 0px;
  color: #fff;
  float: left;
  background-color: #6e6568;
}
.nav-side ul {
  width: 100%;
  padding: 0px;
  padding-top: 15px;
  list-style: none;
}
.nav-side li {
  padding: 7.5px;
  padding-left: 15px;
  font-size: 14px;
  line-height: 18px;
}
.nav-side li:hover {
  background: #999395;
}
.nav-side-item:hover {
  cursor: pointer;
  color: #c81623;
}

/*导航内容*/
.nav-content {
  width: 792px;
  margin-left: 15px;
  overflow: hidden;
  float: left;
}
/*导航图片*/
.nav-show-img {
  margin-top: 30px;
  float: left;
  width: 390px;      /* 固定宽度 */
  height: 120px;     /* 固定高度 */
  background: #fff;  /* 可选，便于观察效果 */
  display: flex;     /* 让图片居中 */
  align-items: center;
  justify-content: center;
}

.nav-show-img img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}
.nav-show-img:nth-child(2) {
  margin-left: 12px;
}
/*显示商品*/
.content {
  width: 100%;
}
/*显示商品详细信息*/
.detail-item-panel {
  width: 815px;
  height: 485px;
  background-color: #fff;
  position: absolute;
  top: 168px;
  left: 389px;
  z-index: 999;
}
.nav-detail-item {
  margin-left: 26px;
  margin-top: 15px;
  margin-bottom: 15px;
  cursor: pointer;
  color: #eee;
}
.nav-detail-item span {
  padding: 6px;
  padding-left: 12px;
  margin-left: 15px;
  font-size: 12px;
  background-color: #6e6568;
}
.nav-detail-item span:hover {
  margin-left: 15px;
  background-color: #f44336;
}
.detail-item-panel ul {
  list-style: none;
}
.detail-item-panel li {
  line-height: 38px;
  margin-left: 40px;
}
.detail-item-title {
  padding-right: 6px;
  font-weight: bold;
  font-size: 12px;
  cursor: pointer;
  color: #555555;
}
.detail-item-title:hover {
  color: #d9534f;
}
.detail-item-row a {
  color: #555555;
}
.detail-item{
  font-size: 14px;
  padding-left: 12px;
  padding-right: 8px;
  cursor: pointer;
  border-left: 1px solid #ccc;
}
.detail-item:hover {
  color: #d9534f;
}
/* 英文环境下字体和间距变小 */
.lang-en .nav-side,
.lang-en .nav-side-item,
.lang-en .detail-item-panel,
.lang-en .detail-item-title,
.lang-en .detail-item {
  font-size: 12px !important;
  line-height: 16px !important;
  letter-spacing: 0 !important;
}
.lang-zh .nav-side,
.lang-zh .nav-side-item,
.lang-zh .detail-item-panel,
.lang-zh .detail-item-title,
.lang-zh .detail-item {
  line-height: 24px !important;
  letter-spacing: 0 !important;
}
/* .carousel img,
.carousel-item img,
.carousel-item,
.carousel,
.carousel .ivu-carousel,
.carousel .ivu-carousel-item {
  max-width: 1180px;
  max-height: 510px;
  width: 100%;
  height: auto;
  object-fit: contain;
  display: block;
  margin: 0 auto;
} */

</style>
