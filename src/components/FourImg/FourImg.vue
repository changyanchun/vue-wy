<template>
      <div class="FourImg">
        <div class="FourImg-item">
          <div class="FourImg-item-left">
            <div class="FourImg-1">福利社</div>
            <div class="FourImg-2">抢超值神券</div>
            <div class="FourImg-3">享今日特价</div>
          </div>
          <div class="FourImg-item-right">
            <img src="https://yanxuan.nosdn.127.net/3d1a9147522037c9f756578c1d8dac58.png?imageView&thumbnail=200x200&quality=75" alt="">
            <div class="FourImg-fixed">
                <span class="FourImg-price1">￥33</span>
                <span class="FourImg-price2">￥35</span>
            </div>
          </div>
        </div>
        <div class="FourImg-item">
          <div class="FourImg-item-left">
            <div class="FourImg-1">福利社</div>
            <div class="FourImg-2">抢超值神券</div>
            <div class="FourImg-3">享今日特价</div>
          </div>
          <div class="FourImg-item-right">
            <img src="https://yanxuan.nosdn.127.net/3d1a9147522037c9f756578c1d8dac58.png?imageView&thumbnail=200x200&quality=75" alt="">
            <div class="FourImg-fixed">
                <span class="FourImg-price1">￥33</span>
                <span class="FourImg-price2">￥35</span>
            </div>
          </div>
        </div>
        <div class="FourImg-item pos">
          <div class="FourImg-item-left">
            <div class="FourImg-1">福利社</div>
            <div class="FourImg-2">抢超值神券</div>
            <div class="FourImg-3">享今日特价</div>
          </div>
          <div class="FourImg-item-right">
            <img src="https://yanxuan.nosdn.127.net/3d1a9147522037c9f756578c1d8dac58.png?imageView&thumbnail=200x200&quality=75" alt="">
            <div class="FourImg-fixed">
                <span class="FourImg-price1">￥33</span>
                <span class="FourImg-price2">￥35</span>
            </div>
          </div>
        </div>
        <div class="FourImg-item pos">
          <div class="FourImg-item-left">
            <div class="FourImg-1">福利社</div>
            <div class="FourImg-2">抢超值神券</div>
            <div class="FourImg-3">享今日特价</div>
          </div>
          <div class="FourImg-item-right">
            <img src="https://yanxuan.nosdn.127.net/3d1a9147522037c9f756578c1d8dac58.png?imageView&thumbnail=200x200&quality=75" alt="">
            <div class="FourImg-fixed">
                <span class="FourImg-price1">￥33</span>
                <span class="FourImg-price2">￥35</span>
            </div>
          </div>
        </div>  
      </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .FourImg
      width 750px
      height 450px
      padding 25px 26px 26px 25px
      box-sizing border-box
      display flex
      flex-wrap wrap
      .FourImg-item
        width 343px
        height 220px
        padding 20px 0 0 30px
        box-sizing border-box
        margin-right 4px
        position relative
        display flex
        background #f9f3e4
        .FourImg-item-left
          color #333
          width 313px
          height 120px
          .FourImg-1
            font-size 32px
            color #33333
          .FourImg-2
            font-size 24px
            color #7f7f7f
            margin 12px 0
          .FourImg-3
            font-size 24px
            color #b4282d
        .FourImg-item-right
          width 200px
          height 200px
          position absolute   
          right 0
          top 0
          .FourImg-fixed
            width 80px
            height 80px
            background #F59524
            opacity .7
            position absolute
            top 30px
            left 90px
            border-radius 50%
            span 
              width 80px
              height 36px
              display block
              text-align center
              line-height 36px
              color white
              font-size 22px
              margin-top 5px
            .FourImg-price2
              position relative
              top -15px
              text-decoration line-through  
      .pos
        margin-top 5px          
</style>
