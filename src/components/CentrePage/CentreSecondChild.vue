<template>
  <div class="myInfo">
    <div class="moudle">
      <a href="javascript:;" class="xf-num">
        <p>
          <span class="num"><i style="color: red">{{revenues}}</i>元</span>
          <span class="txt">营业额</span>
        </p>
      </a>
      <a href="javascript:;" class="zj-tree">
        <p>
          <span class="unPresent">0</span>
          <span class="num">
							<i style="color: green;display: none">0</i>
						</span>
          <span class="txt">礼品</span>
        </p>
      </a>
      <a class="applyWithDrawal">
        <p>
          <span class="num"><i style="color: red">{{commTotal}}</i>元</span>
          <span class="txt">推广费</span>
        </p>
      </a>
    </div>

    <div class="moudle">
      <a href="javascript:" class="ewm" style="border-bottom: 0px solid;">
        <p>
          <span class="icon" style="margin-bottom: 6px;"></span>
          <span class="txt">二维码</span>
        </p>
      </a>
      <a class="phb">
        <p>
          <span class="icon" style="margin-bottom: 6px;"></span>
          <span class="txt">排行榜</span>
        </p>
      </a>
      <a class="my-order">
        <p>
          <span class="icon" style="margin-bottom: 6px;"></span>
          <span class="txt">我的订单</span>
        </p>
      </a>
    </div>
  </div>
</template>

<script>
  import centreBus from '../commUtil/eventBus'
  export default {
    name: 'myInfo',
    data () {
      return {
        revenues: '',
        commTotal: ''
      }
    },
    methods: {},
    mounted () {
      centreBus.$on('revenuesCommTotal', (indexCommRevenues) => {
        console.log(indexCommRevenues)
      })
    },
    created () {

    }
  }
</script>

<style>
</style>
