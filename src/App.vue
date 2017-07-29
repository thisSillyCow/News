<template>
  <div id="app">
    <router-view></router-view>
    <!-- 底部按钮-->
    <div id="footer" style="display: none">
      <div class="footer clr " @click="indexBtn">
        <router-link to="/index_btn" class="footer-btn  index-btn" v-bind:class="{'active-btn': index_btn}" >
          <i class="footer-icon index-icon"></i>
          <span class="footer-txt">首页</span>"
        </router-link>
        <router-link  to="/cart_btn" class="footer-btn  cart-btn " v-bind:class="{'active-btn': cart_btn}" >
          <i class="footer-icon cart-icon"></i>
          <span class="footer-txt">购物车</span>
        </router-link>
        <router-link to="/ewm_btn"  class="footer-btn  ewm-btn" v-bind:class="{'active-btn': ewm_btn}" >
          <i class="footer-icon ewm-icon"></i>
          <span class="footer-txt">二维码</span>
        </router-link>
        <router-link to="/center_btn" class="footer-btn center-btn " v-bind:class="{'active-btn': center_btn}">
          <i class="footer-icon center-icon"></i>
          <span class="footer-txt">个人中心</span>
        </router-link>
      </div>
    </div>
  </div>
</template>


<script>

export default {
  name: 'app',
  data () {
    return {
      index_btn: false, // 默认首页的样式是[false]
      cart_btn: false, // 默认购物车的样式是[false]
      ewm_btn: false, // 默认二维码的样式是[false]
      center_btn: false // 默认个人中心的样式是[false]
    }
  },
  methods: {
    indexBtn: function () {
      let getUrl = window.location.href
      let thisGetUrl = getUrl.split('#/')
      this.index_btn = false
      this.cart_btn = false
      this.ewm_btn = false
      this.center_btn = false
      if (thisGetUrl[1].indexOf('index_btn') > -1) {
        this.index_btn = true
      } else if (thisGetUrl[1].indexOf('cart_btn') > -1) {
        this.cart_btn = true
      } else if (thisGetUrl[1].indexOf('ewm_btn') > -1) {
        this.ewm_btn = true
      } else if (thisGetUrl[1].indexOf('center_btn') > -1) {
        this.center_btn = true
      } else {
        this.center_btn = true
      }
    }
  },
  created () {
    let getUrl = window.location.href
    let thisGetUrl = getUrl.split('#/')
    if (thisGetUrl[1].indexOf('index_btn') > -1) {
      this.index_btn = true
    } else if (thisGetUrl[1].indexOf('cart_btn') > -1) {
      this.cart_btn = true
    } else if (thisGetUrl[1].indexOf('ewm_btn') > -1) {
      this.ewm_btn = true
    } else if (thisGetUrl[1].indexOf('center_btn') > -1) {
      this.center_btn = true
    } else {
      this.center_btn = true
    }
  }
}
</script>

<style type="text/less">
@media screen and (min-width:320px){html{font-size:32px;}}
@media screen and (min-width:346px){html{font-size:34.6px;}}
@media screen and (min-width:352px){html{font-size:35.2px;}}
@media screen and (min-width:360px){html{font-size:36px;}}
@media screen and (min-width:375px){html{font-size:37.5px;}}
@media screen and (min-width:400px){html{font-size:40px;}}
@media screen and (min-width:412px){html{font-size:41.2px;}}
@media screen and (min-width:414px){html{font-size:41.2px;}}
@media screen and (min-width:480px){html{font-size:48px;}}
@media screen and (min-width:560px){html{font-size:56px;}}
@media screen and (min-width:640px){html{font-size:64px;}}
@media screen and (min-width:750px){html{font-size:75px;}}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-y: scroll;
}
#footer a.active-btn .center-icon{
  background-image: url(./assets/ico/center-icon-active.png);
  background-size: 100% 100%;
}
#footer a.active-btn .cart-icon {
  background-image: url(./assets/ico/cart-icon-active.png);
  background-size: 100% 100%;
}
#footer a.active-btn .ewm-icon {
   background-image: url(./assets/ico/ewm-icon-active.png);
   background-size: 100% 100%;
}
#footer a.active-btn .index-icon {
  background-image: url(./assets/ico/index-icon-active.png);
  background-size: 100% 100%;
}
#footer a.active-btn {
  color: #00a0e9;
}
</style>
