<template>
      <div class="top">
        <!-- 透明层   -->
        <span class="linear" ></span>
        <div class="head">
          <a class="account">
            <img src="http://www.hubeta.com:8080/group1/M00/00/07/wKgB9FhgtkiAAEe2AAAFJgnHYyM520.jpg" alt="我的头像">
            <p>
              <span>会员号：<i>1</i></span>
              <span>昵&nbsp;&nbsp;&nbsp;称：<i>佩您校1</i></span>
            </p>
            <span class="goto-icon"></span>
          </a>
          <!--换肤图标-->
          <span class="change_skin"></span>
        </div>
      </div>
</template>

<script>
  export default {
    name: 'top',
    data () {
      return {
        msg: ''
      }
    },
    methods: {},
    created () {
     /* let domain = 'DD0A1E6556DA4393A2D8EE09755C3110'
      let url = 'http://www.hubeta.com/web/api/basCustomer/getByConId' */
      // Lambda写法
     /* this.$http.get(url).then((response) => {
        // 响应成功回调
      }, (response) => {
        // 响应错误回调
      }) */
      /* this.$http.post(url, {conId: domain}, function (data) {
        console.log(data)
      }) */
    }
  }
</script>

<style>

</style>
