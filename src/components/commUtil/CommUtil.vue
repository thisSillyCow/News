<template>
    <div id="commUtil">
      <div class="opacity"></div>
      <div class="loadToast">
        <div class="toastList">
          <span class="loadingLeaf0"></span>
          <span class="loadingLeaf1"></span>
          <span class="loadingLeaf2"></span>
          <span class="loadingLeaf3"></span>
          <span class="loadingLeaf4"></span>
          <span class="loadingLeaf5"></span>
          <span class="loadingLeaf6"></span>
        </div>
        <span class="toastContent">{{msg}}</span>
      </div>
    </div>
</template>

<script>
export default {
  name: 'commUtil',
  data () {
    return {
      msg: '加载中'
    }
  },
  methods: {},
  created () { }
}
</script>

<style lang="less" type="text/less">
  @import url(commUtil.less);
</style>
