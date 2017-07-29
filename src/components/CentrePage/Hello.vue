<template>
    <div class="home_page">
      <div class="center-content" id="center_content">
        <centreFirst></centreFirst>
        <centre-second></centre-second>
        <centre-thirdly></centre-thirdly>
        <comm-util-page v-show="indexId"></comm-util-page>
      </div>
    </div>
</template>

<script>
  import centreFirst from './CentreFirstChild.vue'
  import centreSecond from './CentreSecondChild.vue'
  import centreThirdly from './CentreThirdlyChild.vue'
  import commUtilPage from '../commUtil/CommUtil.vue'
  import commUtil from '../commUtil/CommUtil'
  export default {
    name: 'home_page',
    data () {
      return {
        msg: '',
        indexId: false
      }
    },
    methods: {
    },
    created () {
      commUtil.AmendTitle('个人中心')
    },
    components: {
      centreFirst,
      centreSecond,
      centreThirdly,
      commUtilPage
    }
  }
</script>
<style>
  @import "Hello.css";
</style>
