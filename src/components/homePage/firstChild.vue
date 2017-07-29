<template>
    <div id="firstChild">
      <header>
        <section class="top-menu">
          <div class="productModel" >
             <span  class="productType"
                    v-for="(index,item) in items"
                    :class="{'ul_type':ulType==index.sortrank}"
                    :linktype="index.linktype"
                    :typeid="index.typeid"
                    :link="index.link"
                    @click="productClick(item,index.typeid)"
             >{{index.showname}}</span>
          </div>
        </section>
      </header>
    </div>
</template>

<script>
  import bus from '../commUtil/eventBus'
  export default {
    data () {
      return {
        msg: '',
        ulType: 1,
        items: [],
        initialCounterType: ''
      }
    },
    methods: {
      productClick (indexId, typeId) {
        if (indexId === 0) {
          this.ulType = indexId + 1
        } else {
          this.ulType = indexId + 3
        }
        this.$router.push({path: '/index_btn/secondChild', query: { adTypeId: typeId, titleId: indexId }})
        bus.$emit('userDefinedEvent', typeId)
      },
      listNewsNav (objectList) {
        objectList.sort(function (a, b) {
          return a.sortrank - b.sortrank
        })
        for (let b = 0; b < objectList.length; b++) {
          if (objectList[b].showname === '两性' || objectList[b].showname === '美女') {
            continue
          }
          (this.items).push(objectList[b])
        }
      }
    },
    created () {
      if (this.$route.query.titleId === '0') {
        this.ulType = Number(this.$route.query.titleId) + 1
      } else {
        this.ulType = Number(this.$route.query.titleId) + 3
      }
      let domain = 6
      let url = 'http://news.91snews.com/front/newsNav?&domain=' + domain
      // Lambda写法
      this.$http.get(url).then((response) => { // 响应成功回调
        this.listNewsNav(response.data)
      }, (response) => { // 响应错误回调
      })
    }
  }
</script>

<style>
  header{
    position: fixed;
    z-index: 3;
    top: 0;
    width: 100%;
    left: 0;
  }
  .top-menu{
    position: relative;
    height: 1.3rem;
    background-color: #fff;
  }
  .productModel{
    height: 1.3rem;
    overflow: hidden;
    overflow-x: auto;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    backface-visibility: hidden;
    -moz-transform: translate3d(0,0,0);
    -ms-transform: translate3d(0,0,0);
  }
  .productType{
    line-height: 1.1rem;
    display: inline-block;
    height: 1.1rem;
    margin: 5px 0 5px 3px;
    padding: 0 8px;
    vertical-align: middle;
    white-space: nowrap;
    color: #666;
    -webkit-tap-highlight-color: rgba(0,0,0,.1);
    overflow: auto;
    font-size: 20px;
  }
  .ul_type {
    border-bottom: 0.08rem solid #00a0e9;
    font-weight: bold;
  }
</style>
