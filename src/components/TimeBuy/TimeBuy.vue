<template>
      <div class="home-buy">
          <div class="home-buy-top">
            <span class="home-buy-time">限时购</span>
            <!-- <div class="home-buy-item">
              <div class="buy-more">更多</div>
              <div class="iconfont buy-xiao"> > </div>
            </div> -->
          </div>
          <div class="home-buy-container">
            <ul class="home-buy-list">
              <li>
                <img src="https://yanxuan.nosdn.127.net/e37656ecad9a2494f456e222fe7800a2.png?imageView&quality=65&thumbnail=330x330" alt="">
                <div class="home-customize-size">
                  <span>￥549</span>
                  <span class="home-strick">￥600</span>
                </div>
              </li>
              <li>
                <img src="https://yanxuan.nosdn.127.net/2862a7c31788a61e0862d523f411b498.png?imageView&quality=65&thumbnail=330x330" alt="">
                <div class="home-customize-size">
                  <span>￥149</span>
                  <span class="home-strick">￥180</span>
                </div>
              </li>
              <li>
                <img src="https://yanxuan.nosdn.127.net/9d581d4ec02cf86ff2a05cf81868f159.png?imageView&quality=65&thumbnail=330x330" alt="">
                <div class="home-customize-size">
                   <span>￥199</span>
                   <span class="home-strick">￥299</span>
                </div>
              </li>
              <li>
                <img src="https://yanxuan.nosdn.127.net/9d581d4ec02cf86ff2a05cf81868f159.png?imageView&quality=65&thumbnail=330x330" alt="">
                <div class="home-customize-size">
                   <span>￥199</span>
                   <span class="home-strick">￥299</span>
                </div>
              </li>
              <li>
                <img src="https://yanxuan.nosdn.127.net/9d581d4ec02cf86ff2a05cf81868f159.png?imageView&quality=65&thumbnail=330x330" alt="">
                <div class="home-customize-size">
                   <span>￥199</span>
                   <span class="home-strick">￥299</span>
                </div>
              </li>
              <li>
                <img src="https://yanxuan.nosdn.127.net/9d581d4ec02cf86ff2a05cf81868f159.png?imageView&quality=65&thumbnail=330x330" alt="">
                <div class="home-customize-size">
                   <span>￥199</span>
                   <span class="home-strick">￥299</span>
                </div>
              </li>
            </ul>
          </div>
      </div>
</template>

<script>
export default {
    
}
</script>

<style lang="stylus" scoped>
    .home-buy
      width 750px
      height 700px
      .home-buy-top
        display flex
        .home-buy-time
          width 600px
          height 100px
          font-size 32px
          color #333
          padding-left 30px
          display block
          line-height 100px
      .home-buy-container
        box-sizing border-box
        height 600px
        padding 0 10px 0 30px
        .home-buy-list
          width 100%
          height 600px
          display flex
          flex-wrap wrap
          li
            width 216px
            heihght 300px
            margin-right 20px
            img
              width 216px
              height 216px
              background #f5f5f5
            .home-customize-size
              width 216px
              height 41px
              text-align center
              line-height 41px 
              span
                color #b4282d
              .home-strick
                margin-left 10px
                color #7F7F7F
                text-decoration line-through
</style>

