<template>
    <div id="index_btn">
     <firstChild></firstChild>
      <!--  <secondChild></secondChild>-->
     <router-view></router-view>
    </div>
</template>

<script>
  import firstChild from './firstChild.vue'
  import secondChild from './secondChild.vue'
  import commUtil from '../commUtil/CommUtil'
  export default {
    name: 'index_btn',
    data () {
      return {
        msg: ''
      }
    },
    methods: {},
    created () {
      commUtil.AmendTitle('新闻热点')
    },
    components: {
      firstChild,
      secondChild
    }
  }
</script>

<style>


</style>
