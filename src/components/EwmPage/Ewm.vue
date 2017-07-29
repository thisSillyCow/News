<template>
    <div id="Ewm">
      <h1>{{ msg }}</h1>

    </div>
</template>

<script>
  export default {
    name: 'Ewm',
    data () {
      return {
        msg: 'Welcome to Your Ewm'
      }
    },
    methods: {},
    created () {}
  }
</script>

<style type="text/less">
  h1{
    width: 10rem;
    height: 1rem;
    line-height: 1rem;
    background: red;

  }

</style>
