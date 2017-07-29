/**
 * Created by Administrator on 2017/7/6.
 */
const config = {
  request_prefix: 'http://news.91snews.com/front',
  base_img: ''
}

const DingConf = function (data) {
  console.log(data)
}

const replaceData = function (evenData, evenType, evenMent) {
  return evenData.replace(evenType, evenMent)
}

const rollLoadIncident = function (pageY) {
  this.bodyClientHeight = document.body.clientHeight
  this.visibleClientHeight = document.documentElement.clientHeight
  this.pageYOffset = window.pageYOffset
  var forecastInfoCss = document.getElementById('secondChild')
  var indexMarginBottom = window.getComputedStyle(forecastInfoCss, null).marginBottom
  var indexMarginTop = window.getComputedStyle(forecastInfoCss, null).marginTop
  this.totalLENGTH = (Number(this.replaceData(window.getComputedStyle(forecastInfoCss, null).height, 'px', '')) +
  Number(this.replaceData(indexMarginBottom, 'px', '')) +
  Number(this.replaceData(indexMarginTop, 'px', ''))).toFixed(0)
  var indexPageYOffset = this.totalLENGTH - this.visibleClientHeight
  var resultType = ''
  var redBagSlot = document.createElement('span')
  redBagSlot.className = 'loadData'
  if (this.pageYOffset === 0) {
    if (this.pullDown === undefined) { this.pullDown = false }
    if (this.pullDown === false) {
      this.startY = pageY
      this.pullDown = true
    } else {
      if (this.startY !== '') {
        if (this.startY < pageY) {
          if (this.loadTimeTypeDown === undefined) { this.loadTimeTypeDown = true }
          if (this.loadTimeTypeDown === true) {
            this.loadTimeTypeDown = false
          } else {
            return false
          }
          redBagSlot.innerHTML = '刷新数据'
          document.getElementById('secondChild').insertBefore(redBagSlot, forecastInfoCss.childNodes[0])
          resultType = 'loadDown'
        } else { this.pullDown = false }
      }
    }
  } else if (indexPageYOffset === this.pageYOffset) {
    if (this.pullUp === undefined) { this.pullUp = false }
    if (this.pullUp === false) {
      this.startY = pageY
      this.pullUp = true
    } else {
      if (this.startY !== '') {
        if (this.startY > pageY) {
          if (this.loadTimeTypeUp === undefined) { this.loadTimeTypeUp = true }
          if (this.loadTimeTypeUp === true) {
            this.loadTimeTypeUp = false
          } else {
            return false
          }
          redBagSlot.innerHTML = '加载数据'
          document.getElementById('secondChild').appendChild(redBagSlot)
          resultType = 'loadUp'
        } else { this.pullUp = false }
      }
    }
  }
  return resultType
}

const rollLoadStop = function (rollType) {
  if (document.getElementsByClassName('loadData')[0] !== undefined) {
    document.getElementsByClassName('loadData')[0].remove()
    if (rollType === 'loadDown') {
      this.loadTimeTypeDown = true
    } else if (rollType === 'loadUp') {
      this.loadTimeTypeUp = true
    } else {
      this.loadTimeTypeDown = true
      this.loadTimeTypeUp = true
    }
  }
}

const httpsGetData = function (_that, url) {
  // Lambda写法
  let returnHttpsGetData = ''
  _that.$http.get(url).then((response) => {
    // 响应成功回调
    returnHttpsGetData = response.data.news
  }, (response) => {
    // 响应错误回调
  })
  return returnHttpsGetData
}

const AmendTitle = (data) => {
  document.title = data
}

export default {
  config,
  DingConf,
  replaceData,
  rollLoadIncident,
  rollLoadStop,
  httpsGetData,
  AmendTitle
}

