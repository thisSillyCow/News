<template>
    <div id="particulars">
      <div id="title">
        <div class="article-title">
          <h1 class="title">{{title}}</h1>
        </div>
        <div class="article-src-time"><span class="src">{{updateTime}}&nbsp;&nbsp;来源：{{source}}</span></div>
      </div>
      <div id="content" class="J-article-content article-content" v-html="rawHtml"></div>
    </div>
</template>

<script>
  export default {
    name: 'particulars',
    data () {
      return {
        title: '',
        updateTime: '',
        source: '',
        Child: '',
        rawHtml: ''
      }
    },
    methods: {
      format: (timestamp) => {
        let time = new Date(timestamp)
        let y = time.getFullYear()
        let m = time.getMonth() + 1
        let d = time.getDate()
        return y + '-' + m + '-' + d
      }
    },
    created () {
      let domain = 6
      let aid = this.$route.query.adId
      let url = 'http://news.91snews.com/front/detail?id=' + aid + '&domain=' + domain + '&no_app_domain=true'
      // Lambda写法
      this.$http.get(url).then((response) => {
        let news = response.data.news
        this.title = news.title
        this.source = news.source
        this.updateTime = this.format(news.updateTime)
        this.rawHtml = news.body
      }, (response) => {
      })
    },
    onAbort () {
      this.$router.push({ path: '/cart_btn' })
    }
  }
</script>

<style>
#particulars {
  margin-top: 1.4rem;
  padding: .3rem .4rem;
  background: #fff;
  text-align: left;
}
.article-title {
  margin-bottom: .2rem;
}
#title .title {
  font-size: 20px!important;
  line-height: 28px;
  font-weight: 700;
  color: #3a3a3a;
}
.article-src-time {
  font-size: 12px;
  color: #999;
  padding-bottom: 10px;
}
.article-content p {
  word-wrap: break-word;
  font-size: 18px;
  color: #333;
  line-height: 28px;
  margin-top: 24px;
}
#content img{
  display: block;
  width: 100% !important;
  height: auto !important;
  background-color: #fff;
}
</style>
