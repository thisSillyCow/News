<template>
  <div id="secondChild"
       @touchstart="touchStart($event)"
       @touchmove="touchMove($event)"
       @touchend="touchEnd($event)"
  >
    <div  v-for="newsList in newsLists">
      <section class="news-item news-item-s1" v-if="newsList.litpictype === 1"@click="Particulars(newsList.id)">
        <!-- :to="" -->
        <a >
          <div class="news-wrap clearfix">
            <div class="txt-wrap fl">
              <h3>{{newsList.title}}</h3>
              <p class="tags clearfix">
                <em class="tag tag-src">{{newsList.source}}</em>
                <em class="tag tag-view">{{newsList.click}}万阅读</em>
              </p>
            </div>
            <div class="img-wrap fr">
              <img  class="lazy" :src="newsList.litpic" />
            </div>
          </div>
        </a>
      </section>
      <section class="news-item news-item-s2" v-else-if="newsList.litpictype === 3"  @click="Particulars(newsList.id)">
        <a >
          <div class="news-wrap">
            <h3>{{newsList.title}}</h3>
            <div class="img-wrap clearfix">
              <div class="img fl">
                <img class="lazy"  :src="(newsList.litpic).split(',')[0]" />
              </div>
              <div class="img fl">
                <img class="lazy" :src="(newsList.litpic).split(',')[1]" />
              </div>
              <div class="img fl">
                <img class="lazy" :src="(newsList.litpic).split(',')[2]"/>
              </div>
            </div>
            <p class="tags clearfix">
              <em class="tag tag-src">{{newsList.source}}</em>
              <em class="tag tag-view">{{newsList.click}}万阅读</em>
            </p>
          </div>
        </a>
      </section>
      <section class="news-item news-item-s3"  v-else-if="newsList.litpictype === 2"  @click="Particulars(newsList.id)">
        <a >
          <div class="news-wrap">
            <h3>{{newsList.title}}</h3>
            <div class="img-wrap clearfix">
              <img class="lazy fl"  :src="newsList.litpic"  >
            </div>
            <p class="tags clearfix">
              <em class="tag tag-src">{{newsList.source}}</em>
              <em class="tag tag-view">{{newsList.click}}万阅读</em>
            </p>
          </div>
        </a>
      </section>
    </div>
    <div id="commUtil"  v-show="loadType">
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
        <span class="toastContent">加载中</span>
      </div>
    </div>
  </div>
</template>

<script>
  import bus from '../commUtil/eventBus'
  import commUtil from '../commUtil/CommUtil'
  export default {
    name: 'secondChild',
    data () {
      return {
        msg: '',
        startY: '',
        startScroll: '',
        pullDown: false,
        visibleClientHeight: '',
        pageYOffset: '',
        totalLENGTH: '',
        loadTypeReturn: '',
        thisEndPage: 1,
        newsLists: [],
        updateTime: 0,
        loadType: true,
        newsType: false,
        url: '',
        flag: 0
      }
    },
    mounted () {
      let self = this
      bus.$on('userDefinedEvent', function (msg) {
        self.loadType = true
        self.newsType = false
        if (msg === 2550) { self.flag = 1 } else { self.flag = 0 }
        self.url = commUtil.config.request_prefix + '/list?labelId=36&lastid=0&updateTime=0&arctypeId=' + msg + '&flag=' + self.flag + '&num=1&upperId=0&advertIds=&domain=6'
        self.httpsGetData(self.url, 'update')
      })
    },
    methods: {
      indexListenToChildEvent (data) {
        let productModel = document.getElementsByClassName('productModel')[0]
        let indexLinkType = productModel.getElementsByTagName('span')[data].attributes.linktype.value
        let indexTypeId = productModel.getElementsByTagName('span')[data].attributes.typeid.value
        console.log(indexLinkType + ' ' + indexTypeId)
      },
      touchStart (e) {
        this.startY = e.targetTouches[0].pageY
        this.startScroll = this.$el.scrollTop || ''
      },
      touchMove (e) {
        this.loadTypeReturn = commUtil.rollLoadIncident(e.targetTouches[0].pageY)
      },
      touchEnd (e) {
        commUtil.rollLoadStop(this.loadTypeReturn)
        if (this.loadTypeReturn === 'loadUp') {
          let url = commUtil.config.request_prefix + '/list?labelId=36&lastid=0&updateTime=' + this.updateTime + '&arctypeId=2550&flag=1&num=' + this.thisEndPage + '&upperId=0&advertIds=&domain=6'
          this.httpsGetData(url)
        }
      },
      httpsGetData (url, type) {
        // Lambda写法
        let _that = this
        _that.$http.get(url).then((response) => {
          if (type === 'update') {
            _that.newsLists = []
          }
          // 响应成功回调
          _that.newsLists = response.data.news
          _that.updateTime = response.data.news[response.data.news.length - 1].updateTime
          _that.thisEndPage++
          _that.newsType = true
          _that.loadType = false
        }, (response) => {
          // 响应错误回调
        })
      },
      Particulars (data) {
        bus.$off(['', 'userDefinedEvent'])
        this.$router.push({path: 'Particulars', query: { adId: data, titleId: this.$route.query.titleId }})
      }
    },
    created () {
      if (this.$route.query.adTypeId === '2550') {
        this.flag = 1
      } else { this.flag = 0 }
      this.url = commUtil.config.request_prefix + '/list?labelId=36&lastid=0&updateTime=0&arctypeId=' + this.$route.query.adTypeId + '&flag=' + this.flag + '&num=1&upperId=0&advertIds=&domain=6'
      this.httpsGetData(this.url)
    }
  }
</script>

<style  lang="less" type="text/less">
  @import url(../commUtil/commUtil.less);
  #secondChild{
    margin-top: 1.4rem;
    margin-bottom: 1.5rem;
  }
  .news-item{
    width: 100%;
    background: #ffffff;
    text-align: left;
    margin-top: 0.1rem;
    position: relative;
  }
  .news-item a {
    display: inline-block;
    width: 10rem;
    padding: 12px 15px 0;
    color: #333;
  }
  .news-item-s3 a .img-wrap {
    overflow: hidden;
  }
  .img-wrap img{
    width: 100%;
  }
  .news-item a .news-wrap {
    position: relative;
    padding-bottom: 0.2rem;
    border-bottom: 1px solid #eee;
  }
  .news-wrap h3 {
    font-size: 17px;
    line-height: 1.5em;
    overflow: hidden;
    margin-bottom: 0.3rem;
  }
  .tags {
    position: relative;
    margin-top: 7px;
    color: #999;
    overflow: hidden;
    font-size: 0;
    display: block;
    width: 9rem;
  }
  .tags .tag {
    display: inline-block;
    font-size: 10px;
    line-height: 14px;
    margin-right: 5px;
  }

  .news-item-s1 a .txt-wrap {
    position: relative;
    width: 67%;
    height: 2.4rem;
  }
  .fl {
    float: left;
  }
  .news-item-s1 a .img-wrap {
    overflow: hidden;
    width: 33%;
    height: 2.4rem;
  }
  .fr {
    float: right;
  }
  .news-item-s2 a .img-wrap {
    overflow: hidden;
    height: 2.2rem;
  }
  .news-item-s2 a .img-wrap .img {
    width: 33.33%;
    min-height: 1.5rem;
    padding-right: 2px;
  }
</style>
