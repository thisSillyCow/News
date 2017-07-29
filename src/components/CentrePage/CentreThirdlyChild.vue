<template>
  <div class="module_app">
    <div class="vip moudle-wrap">
      <h2 class="t">我的会员<span class="all-num" style="color: #f8931f !important">12</span></h2>
      <div class="moudle" id="myVIP">
        <a class="yes">
          <span class="icon" style="width: 25px"></span>
          <p>
            <span class="num"><i>{{ucfmdPromOrdQty}}</i>人</span>
            <span class="txt">已购买会员</span>
          </p>
        </a>
        <a class="no">
          <span class="icon" style="width: 25px"></span>
          <p>
            <span class="num" style="color: #858586 !important"><i>{{unpuredCustQty}}</i>人</span>
            <span class="txt">未购买会员</span>
          </p>
        </a>
      </div>
    </div>
    <div class="tuig moudle-wrap">
      <h2 class="t">推广订单总数<span class="all-num" style="color:#f8931f !important">6</span></h2>
      <div class="moudle" id="tg_list">
        <a class="yes">
          <span class="icon"></span>
          <p>
            <span class="num"><i>{{cfmdPromOrdQty}}</i>单</span>
            <span class="txt">已确定</span>
          </p>
        </a>
        <a class="no">
          <span class="icon"></span>
          <p>
            <span class="num" style="color: #858586 !important;"><i>{{puredCustQty}}</i>单</span>
            <span class="txt">未确定</span>
          </p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import centreBus from '../commUtil/eventBus'
  export default {
    name: 'module_app',
    data () {
      return {
        unpuredCustQty: '',
        ucfmdPromOrdQty: '',
        puredCustQty: '',
        cfmdPromOrdQty: ''
      }
    },
    methods: {},
    created () {
      let url = 'http://www.hubeta.com/web/api/basCustomerExt/getByConId?conId=DD0A1E6556DA4393A2D8EE09755C3110'
      this.$http.get(url).then((response) => {
        // 响应成功回调
        this.unpuredCustQty = response.data.result.unpuredCustQty
        this.ucfmdPromOrdQty = response.data.result.ucfmdPromOrdQty
        this.puredCustQty = response.data.result.puredCustQty
        this.cfmdPromOrdQty = response.data.result.cfmdPromOrdQty
        let indexCommRevenues = response.data.result.revenues + '@' + response.data.result.commTotal
        centreBus.$emit('revenuesCommTotal', indexCommRevenues)
      }, (response) => {
        // 响应错误回调
      })
    }
  }
</script>

<style>

</style>
