// 获取秒杀数据
export const loadSeckillsInfo = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const data = [
      {
        intro: 'seckillItem1',
        img: 'static/img/index/seckill/seckill-item1.jpg',
        price: 71.9,
        realPrice: 89.6
      },
      {
        intro: 'seckillItem2',
        img: 'static/img/index/seckill/seckill-item2.jpg',
        price: 989.0,
        realPrice: 1299.0
      },
      {
        intro: 'seckillItem3',
        img: 'static/img/index/seckill/seckill-item3.jpg',
        price: 21.8,
        realPrice: 49.0
      },
      {
        intro: 'seckillItem4',
        img: 'static/img/index/seckill/seckill-item4.jpg',
        price: 49.9,
        realPrice: 59.0
      },
      {
        intro: 'seckillItem5',
        img: 'static/img/index/seckill/seckill-item5.jpg',
        price: 559.9,
        realPrice: 759.9
      }
    ];
    const date = new Date();
    const hours = date.getHours();
    const minute = date.getMinutes();
    const seconds = date.getSeconds();
    console.log([hours, minute, seconds]);
    // 距离开始秒杀时间
    const deadline = {
      hours: 1,
      minute: 38,
      seconds: 36
    };
    commit('SET_SECKILLS_INFO', [data, deadline]);
  });
};

// 获取轮播(营销)图片
export const loadCarouselItems = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const data = {
      carouselItems: [
        'static/img/nav/7791235.jpg',
        'static/img/nav/10143017.jpg',
        'static/img/nav/10185284.jpg',
        'static/img/nav/9759122.jpg',
        'static/img/nav/cyber-monday-landing-page-template_23-2149733323.avif'
      ],
      activity: [
        // 'static/img/nav/nav_showimg1.jpg',
        // 'static/img/nav/nav_showimg2.jpg'

        'static/img/nav/e-commerce-concept-facebook-template_23-2151243790.avif',
        'static/img/nav/flat-11-11-singles-day-horizontal-banner-template_23-2149736442.jpg'
      ]
    };
    commit('SET_CAROUSELITEMS_INFO', data);
  });
};

// 加载电脑专栏数据
export const loadComputer = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const computer = {
      title: 'computer', // 用 key
      link: [
        'computerHall', 'game', 'diy', 'work', 'lady', 'vr', 'tablet', 'edu', 'weekly'
      ],
      detail: [
        {
          bigImg: 'static/img/index/computer/41YIoWkZn4L._SX300_SY300_QL70_FMwebp_.webp',
          itemFour: [
            {
              title: 'computerHall',
              intro: 'notebookSale',
              img: 'static/img/index/computer/item-computer-2.jpg'
            },
            {
              title: 'peripheral',
              intro: 'discount618',
              img: 'static/img/index/computer/item-computer-1-3.jpg'
            },
            {
              title: 'parts',
              intro: 'save618',
              img: 'static/img/index/computer/item-computer-1-4.jpg'
            },
            {
              title: 'office',
              intro: 'stationery',
              img: 'static/img/index/computer/item-computer-1-5.jpg'
            }
          ],
          itemContent: [
            'static/img/index/computer/Frame 435.jpg',
            'static/img/index/computer/Frame 4350.jpg',
            'static/img/index/computer/Frame 4352.jpg'
          ]
        },
        {
          bigImg: 'static/img/index/computer/94c6f11d-29c4-45e3-9de8-dab849092e5b.jpg',
          itemFour: [
            {
              title: 'tablet',
              intro: 'tablet12free',
              img: 'static/img/index/computer/item-computer-2-2.jpg'
            },
            {
              title: 'smart',
              intro: 'coupon666',
              img: 'static/img/index/computer/item-computer-2-3.jpg'
            },
            {
              title: 'entertainment',
              intro: 'headphone50',
              img: 'static/img/index/computer/item-computer-2-4.jpg'
            },
            {
              title: 'camera',
              intro: 'camera50',
              img: 'static/img/index/computer/item-computer-2-5.jpg'
            }
          ],
          itemContent: [
            'static/img/index/computer/Frame 4353.jpg',
            'static/img/index/computer/Frame 4343.jpg',
            'static/img/index/computer/Frame 4342.jpg'
          ]
        }
      ]
    };
    commit('SET_COMPUTER_INFO', computer);
  });
};

// 加载爱吃专栏数据
export const loadEat = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const eat = {
      title: 'eat', // 用 key
      link: [ 'snack', 'nut', 'milk', 'drink', 'oil', 'rice', 'liquor', 'wine', 'bbq', 'steak', 'cherry' ],
      detail: [
        {
          bigImg: 'static/img/index/eat/delicious-burger-food-menu-instagram-facebook-story-template_120329-4762.jpg',
          itemFour: [
            { title: 'seasoning', intro: 'buy2free1', img: 'static/img/index/eat/item-eat-1-2.jpg' },
            { title: 'drink', intro: 'half', img: 'static/img/index/eat/item-eat-1-3.jpg' },
            { title: 'snack', intro: 'minus40', img: 'static/img/index/eat/item-eat-1-4.jpg' },
            { title: 'wine', intro: 'minus100', img: 'static/img/index/eat/item-eat-1-5.jpg' }
          ],
          itemContent: [
            'static/img/index/eat/61gffWaYtPL._AC_UL480_FMwebp_QL65_.webp',
            'static/img/index/eat/61hnTXbICqL._AC_UL480_FMwebp_QL65_.webp',
            'static/img/index/eat/81mABE1sNhL._AC_UL480_FMwebp_QL65_.webp'
          ]
        },
        {
          bigImg: 'static/img/index/eat/special-food-menu-promotion-social-media-instagram-story-banner-template_159024-175.avif',
          itemFour: [
            { title: 'homefood', intro: 'tasty', img: 'static/img/index/eat/item-eat-2-2.jpg' },
            { title: 'homefood', intro: 'tasty', img: 'static/img/index/eat/item-eat-2-2.jpg' },
            { title: 'homefood', intro: 'tasty', img: 'static/img/index/eat/item-eat-2-2.jpg' },
            { title: 'homefood', intro: 'tasty', img: 'static/img/index/eat/item-eat-2-2.jpg' }
          ],
          itemContent: [
            'static/img/index/eat/Frame 4347.jpg',
            'static/img/index/eat/Frame 4348.jpg',
            'static/img/index/eat/Frame 4349.jpg'
          ]
        }
      ]
    };
    commit('SET_EAT_INFO', eat);
  });
};

// 请求获得商品详细信息
export const loadGoodsInfo = ({ commit }) => {
  commit('SET_LOAD_STATUS', true);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = {
        goodsImg: [
          'static/img/goodsDetail/71w6g8Z3+aL._AC_SX679_.jpg',
          'static/img/goodsDetail/71kT+055L0L._AC_SX679_.jpg',
          'static/img/goodsDetail/71nkTNqDLwL._AC_SX679_.jpg',
          'static/img/goodsDetail/71PxHn6fzlL._AC_SX679_.jpg'
        ],
        title: '苹果8/7手机壳iPhone7 Plus保护壳全包防摔磨砂硬外壳',
        tags: ['满69-20元', '关注产品★送钢化膜', 'BIT配次日达'],
        discount: ['满148减10', '满218减20', '满288减30'],
        promotion: ['跨店满减', '多买优惠'],
        remarksNum: 6000,
        setMeal: [
          [
            {
              img: 'static/img/goodsDetail/pack/1.jpg',
              intro: '4.7英寸-深邃蓝',
              price: 28.0
            },
            {
              img: 'static/img/goodsDetail/pack/2.jpg',
              intro: '4.7英寸-星空黑',
              price: 29.0
            },
            {
              img: 'static/img/goodsDetail/pack/3.jpg',
              intro: '5.5英寸-香槟金',
              price: 28.5
            }
          ],
          [
            {
              img: 'static/img/goodsDetail/pack/4.jpg',
              intro: '5.5英寸-玫瑰金',
              price: 32.0
            },
            {
              img: 'static/img/goodsDetail/pack/5.jpg',
              intro: '5.5英寸-深邃蓝',
              price: 32.0
            },
            {
              img: 'static/img/goodsDetail/pack/6.jpg',
              intro: '5.5英寸-星空黑',
              price: 35.0
            }
          ],
          [
            {
              img: 'static/img/goodsDetail/pack/7.jpg',
              intro: '4.7英寸-香槟金',
              price: 26.0
            },
            {
              img: 'static/img/goodsDetail/pack/8.jpg',
              intro: '4.7英寸-玫瑰金',
              price: 25.0
            },
            {
              img: 'static/img/goodsDetail/pack/9.jpg',
              intro: '4.7英寸-中国红',
              price: 28.0
            }
          ]
        ],
        hot: [
          {
            img: 'static/img/goodsDetail/hot/1.jpg',
            price: 28.0,
            sale: 165076
          },
          {
            img: 'static/img/goodsDetail/hot/81km6VdyE2L._AC_UY327_FMwebp_QL65_.webp',
            price: 36.0,
            sale: 135078
          },
          {
            img: 'static/img/goodsDetail/hot/3.jpg',
            price: 38.0,
            sale: 105073
          },
          {
            img: 'static/img/goodsDetail/hot/71JE46ZDflL._AC_UY327_FMwebp_QL65_.webp',
            price: 39.0,
            sale: 95079
          },
          {
            img: 'static/img/goodsDetail/hot/816B7MObvxL._AC_UY327_FMwebp_QL65_.webp',
            price: 25.0,
            sale: 5077
          },
          {
            img: 'static/img/goodsDetail/hot/6.jpg',
            price: 20.0,
            sale: 3077
          }
        ],
        goodsDetail: [
          'static/img/goodsDetail/intro/4783041f-04e8-427e-a32b-84588b24fab7.__CR0,0,1464,600_PT0_SX1464_V1___.jpg',
          'static/img/goodsDetail/intro/17af3505-ad45-461b-b477-ec765dffd959.__CR0,0,1464,600_PT0_SX1464_V1___.jpg',
          'static/img/goodsDetail/intro/aeff29e3-ad6a-4557-ba1c-511331c9547f.__CR0,0,1464,600_PT0_SX1464_V1___.jpg',
          'static/img/goodsDetail/intro/c8eb1e48-1295-4c68-8178-cbbf47cf94ca.__CR0,0,1464,600_PT0_SX1464_V1___.jpg'
        ],
        param: [
          {
            title: 'goodsDetail.paramName',
            content: 'iPhone 7手机壳'
          },
          {
            title: 'goodsDetail.paramId',
            content: '10435663237'
          },
          {
            title: 'goodsDetail.paramShop',
            content: 'Gavin Shop'
          },
          {
            title: 'goodsDetail.paramWeight',
            content: '100.00g'
          },
          {
            title: 'goodsDetail.paramOrigin',
            content: '中国大陆'
          },
          {
            title: 'goodsDetail.paramModel',
            content: 'iPhone 7'
          },
          {
            title: 'goodsDetail.paramMaterial',
            content: 'PC/塑料'
          },
          {
            title: 'goodsDetail.paramStyle',
            content: '软壳'
          },
          {
            title: 'goodsDetail.paramCrowd',
            content: '通用'
          }
        ],
        remarks: {
          goodAnalyse: 90,
          remarksTags: [ '颜色可人', '实惠优选', '严丝合缝', '极致轻薄', '质量没话说', '比定做还合适', '完美品质', '正品行货', '包装有档次', '不容易发热', '已经买第二个', '是全覆盖' ],
          remarksNumDetail: [ 2000, 3000, 900, 1 ],
          detail: [
            {
              username: 'p****1',
              values: 3,
              content: '颜色很好看，质量也不错！，还送了个指环，想不到哦！',
              goods: '4.7英寸-深邃蓝',
              create_at: '2018-05-15 09:20'
            },
            {
              username: '13****1',
              values: 5,
              content: '手感没的说，是硬壳，后背带有磨砂手感。很不错，很喜欢，还加送了钢化膜，支架环，物超所值，准备再买一个。很满意。物流很快。很愉快的一次购物！',
              goods: '5.5英寸-玫瑰金',
              create_at: '2018-05-13 15:23'
            },
            {
              username: '3****z',
              values: 4.5,
              content: '相当轻薄，店家还送了一大堆配件，*元非常值得！',
              goods: '4.7英寸-玫瑰金',
              create_at: '2018-05-05 12:25'
            },
            {
              username: 'gd****c',
              values: 3.5,
              content: '就是我想要的手机壳，壳子很薄，手感不错，就像没装手机壳一样，想要裸机手感的赶快下手了。',
              goods: '4.7英寸-中国红',
              create_at: '2018-04-06 16:23'
            },
            {
              username: 'r****b',
              values: 4.5,
              content: '壳子还不错，送的膜也可以，不过还是感觉膜小了那么一点，屏幕没法完全覆盖。对了，壳子稍微有点硬，可能会伤漆，所以不要频繁取壳就好。',
              goods: '4.7英寸-中国红',
              create_at: '2018-03-15 19:24'
            },
            {
              username: 'd****e',
              values: 5,
              content: '磨砂的，相当漂亮，尺寸非常合适！精工细作！',
              goods: '5.5英寸-星空黑',
              create_at: '2018-03-10 10:13'
            }
          ]
        }
      };
      commit('SET_GOODS_INFO', data);
      commit('SET_LOAD_STATUS', false);
    }, 300);
  });
};

// 获取商品列表
export const loadGoodsList = ({ commit }) => {
  commit('SET_LOAD_STATUS', true);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = {
        asItems: [
          {
            img: 'static/img/goodsList/item-as-img-1.jfif',
            price: 39.9,
            intro: 'asItem1',
            num: 3140,
            sale: 9000
          },
          {
            img: 'static/img/goodsList/item-as-img-2.jpg',
            price: 36.6,
            intro: 'asItem2',
            num: 6160,
            sale: 8900
          },
          {
            img: 'static/img/goodsList/item-as-img-1.jfif',
            price: 38.6,
            intro: 'asItem3',
            num: 9160,
            sale: 8800
          },
          {
            img: 'static/img/goodsList/item-as-img-2.jpg',
            price: 35.6,
            intro: 'asItem4',
            num: 6160,
            sale: 7990
          },
          {
            img: 'static/img/goodsList/item-as-img-1.jfif',
            price: 38.6,
            intro: 'asItem5',
            num: 9160,
            sale: 7600
          },
          {
            img: 'static/img/goodsList/item-as-img-2.jpg',
            price: 35.6,
            intro: 'asItem6',
            num: 6160,
            sale: 6900
          }
        ],
        goodsList: [
          {
            img: 'static/img/goodsList/item-show-1.jfif',
            price: 36.60,
            intro: 'goodsItem1',
            remarks: 6160,
            shopName: 'shop1',
            sale: 9900
          },
          {
            img: 'static/img/goodsList/item-show-2.jpg',
            price: 28.00,
            intro: 'goodsItem2',
            remarks: 3000,
            shopName: 'shop2',
            sale: 9600
          },
          {
            img: 'static/img/goodsList/item-show-3.jpg',
            price: 15.00,
            intro: 'goodsItem3',
            remarks: 2800,
            shopName: 'shop3',
            sale: 8900
          },
          {
            img: 'static/img/goodsList/item-show-4.jpg',
            price: 29.90,
            intro: 'goodsItem4',
            remarks: 9000,
            shopName: 'shop4',
            sale: 8600
          },
          {
            img: 'static/img/goodsList/item-show-5.jpg',
            price: 15.00,
            intro: 'goodsItem5',
            remarks: 6160,
            shopName: 'shop3',
            sale: 8560
          },
          {
            img: 'static/img/goodsList/12400237309_291903970.jpg',
            price: 28.00,
            intro: 'goodsItem6',
            remarks: 9006,
            shopName: 'shop4',
            sale: 8530
          },
          {
            img: 'static/img/goodsList/item-show-7.jpg',
            price: 15.00,
            intro: 'goodsItem7',
            remarks: 8666,
            shopName: 'shop3',
            sale: 8360
          },
          {
            img: 'static/img/goodsList/item-show-8.jpg',
            price: 29.90,
            intro: 'goodsItem8',
            remarks: 6080,
            shopName: 'shop4',
            sale: 7560
          },
          {
            img: 'static/img/goodsList/item-show-1.jfif',
            price: 36.60,
            intro: 'goodsItem1',
            remarks: 6160,
            shopName: 'shop1',
            sale: 7360
          },
          {
            img: 'static/img/goodsList/item-show-2.jpg',
            price: 28.00,
            intro: 'goodsItem2',
            remarks: 3000,
            shopName: 'shop2',
            sale: 6960
          },
          {
            img: 'static/img/goodsList/item-show-3.jpg',
            price: 15.00,
            intro: 'goodsItem3',
            remarks: 2800,
            shopName: 'shop3',
            sale: 6560
          },
          {
            img: 'static/img/goodsList/item-show-4.jpg',
            price: 29.90,
            intro: 'goodsItem4',
            remarks: 9000,
            shopName: 'shop4',
            sale: 6360
          },
          {
            img: 'static/img/goodsList/item-show-5.jpg',
            price: 15.00,
            intro: 'goodsItem5',
            remarks: 6160,
            shopName: 'shop3',
            sale: 5530
          },
          {
            img: 'static/img/goodsList/12400237309_291903970.jpg',
            price: 28.00,
            intro: 'goodsItem6',
            remarks: 9006,
            shopName: 'shop4',
            sale: 5560
          },
          {
            img: 'static/img/goodsList/item-show-7.jpg',
            price: 15.00,
            intro: 'goodsItem7',
            remarks: 8666,
            shopName: 'shop3',
            sale: 5260
          },
          {
            img: 'static/img/goodsList/item-show-8.jpg',
            price: 29.90,
            intro: 'goodsItem8',
            remarks: 6080,
            shopName: 'shop4',
            sale: 3560
          }
        ]
      };
      commit('SET_GOODS_LIST', data);
      commit('SET_LOAD_STATUS', false);
    });
  });
};

// 添加购物车
export const addShoppingCart = ({ commit }, data) => {
  return new Promise((resolve, reject) => {
    commit('ADD_SHOPPING_CART', data);
  });
};

// 获取用户推荐
export const loadRecommend = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const data = [
      [
        {
          img: 'static/img/otherBuy/1.jpg',
          intro: 'iPhone7/6s/8钢化膜苹果7Plus全屏全覆盖3D抗蓝',
          price: 29.00
        },
        {
          img: 'static/img/otherBuy/2.jpg',
          intro: '苹果数据线 苹果iPhoneX/6s/7plus/8充电线',
          price: 36.00
        },
        {
          img: 'static/img/otherBuy/3.jpg',
          intro: '苹果8/7/6/6s钢化膜 iphone8/7/6s/6钢化玻璃',
          price: 19.00
        },
        {
          img: 'static/img/otherBuy/4.jpg',
          intro: 'iPhone6s/7钢化膜苹果8 Plus手机膜抗蓝光非全屏',
          price: 28.00
        }
      ],
      [
        {
          img: 'static/img/otherBuy/5.jpg',
          intro: '苹果6s手机壳iPhone6s Plus保护壳防摔全',
          price: 28.00
        },
        {
          img: 'static/img/otherBuy/6.jpg',
          intro: 'iPhone7/8手机壳手机套防摔磨砂保护壳星空黑☆全包保护',
          price: 30.00
        },
        {
          img: 'static/img/otherBuy/7.jpg',
          intro: '数据线 适用于苹果iPhone 6s/6plus/7plus/8/X',
          price: 18.00
        },
        {
          img: 'static/img/otherBuy/8.jpg',
          intro: 'iPhone8/7/6S/6钢化膜 苹果8/7/6s/6玻璃膜 手机高',
          price: 15.00
        }
      ]
    ];
    commit('SET_RECOMMEND_INFO', data);
  });
};

export const loadAddress = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const address = [
      {
        addressId: '123456',
        name: 'Gavin',
        province: '广东省',
        city: '广州市',
        area: '天河区',
        address: '燕岭路633号',
        phone: '152****0609',
        postalcode: '510000'
      },
      {
        addressId: '123458',
        name: 'Kevin',
        province: '上海市',
        city: '上海市',
        area: '浦东新区',
        address: '沙新镇',
        phone: '158****0888',
        postalcode: '200120'
      }
    ];
    commit('SET_USER_ADDRESS', address);
  });
};

export const loadShoppingCart = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const data = [{
      goods_id: 1529931938150,
      count: 1,
      img: 'static/img/goodsDetail/pack/1.jpg',
      package: '4.7英寸-深邃蓝',
      price: 28,
      title: '苹果8/7手机壳iPhone7 Plus保护壳全包防摔磨砂硬外壳'
    }];
    commit('SET_SHOPPING_CART', data);
  });
};

// 添加注册用户
export const addSignUpUser = ({ commit }, data) => {
  return new Promise((resolve, reject) => {
    const userArr = localStorage.getItem('users');
    let users = [];
    if (userArr) {
      users = JSON.parse(userArr);
    }
    users.push(data);
    localStorage.setItem('users', JSON.stringify(users));
  });
};

// 用户登录
export const login = ({ commit }, data) => {
  return new Promise((resolve, reject) => {
    if (data.username === 'Gavin' && data.password === '123456') {
      localStorage.setItem('loginInfo', JSON.stringify(data));
      commit('SET_USER_LOGIN_INFO', data);
      resolve(true);
      return true;
    }
    const userArr = localStorage.getItem('users');
    console.log(userArr);
    if (userArr) {
      const users = JSON.parse(userArr);
      for (const item of users) {
        if (item.username === data.username) {
          localStorage.setItem('loginInfo', JSON.stringify(item));
          commit('SET_USER_LOGIN_INFO', item);
          resolve(true);
          break;
        }
      }
    } else {
      resolve(false);
    }
  });
};

// 退出登陆
export const signOut = ({ commit }) => {
  localStorage.removeItem('loginInfo');
  commit('SET_USER_LOGIN_INFO', {});
};

// 判断是否登陆
export const isLogin = ({ commit }) => {
  const user = localStorage.getItem('loginInfo');
  if (user) {
    commit('SET_USER_LOGIN_INFO', JSON.parse(user));
  }
};
