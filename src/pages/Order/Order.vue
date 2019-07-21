<template>
  <div class="order">
    <div class="order-top">
      <span class="order-top-left">购物车</span>
      <span class="order-top-right">领卷</span>
    </div>
    <div class="order-list">
      <div class="order-item">
        <i></i>
        <span>30天无忧退货</span>
      </div>
      <div class="order-item order-active">
        <i></i>
        <span>48小时快速退货</span>
      </div>
      <div class="order-item">
        <i></i>
        <span>满88元免邮费</span>
      </div>
    </div>
    <div class="order-content">
      <div class="order-bg"></div>
      <div class="order-size">去添加点什么吧</div>
      <button>登录</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .order
    width 100%
    height 100%
    .order-top
      width 690px
      height 88px
      padding 0 30px
      display flex
      align-items center
      .order-top-left
        width 108px
        height 88px
        font-size 36px
        color #333333
        line-height 88px
      .order-top-right
        width 60px
        height 33px
        color #B4282D
        font-size 30px  
        position relative
        left 500px
    .order-list
      width 690px
      height 70px
      padding 0 30px
      background #eee
      display flex
      align-items center
      .order-item
        font-size 24px
        color #666666
      .order-active
        margin 0 100px
    .order-content
      width 100%
      height 1000px
      background #f4f4f4 
      .order-bg
        width 248px
        height 248px
        background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png)
        position absolute
        top 0
        bottom 0
        left 0
        right 0
        margin auto 
      .order-size
        width 750px
        height 28px
        font-size 28px
        color #999999
        position absolute
        top 780px   
        text-align center
      button
        width 480px
        height 92px
        background #b4282d
        font-size 30px
        color #FFFFFF
        text-align center
        align-items center
        position absolute
        top 860px  
        left 140px
</style>
