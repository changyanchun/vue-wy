<template>
    <div class="Sentiment">
          <span class="Sentiment-per">人气推荐</span>
          <div class="SentimentImg">
              <div class="SentimentMask">
                  <img src="https://yanxuan.nosdn.127.net/bb032dd258a8b8c638f0cd8af92202e3.png?imageView&quality=65&thumbnail=280x280" alt="">
              </div>
              <div class="SentimentImg-list">
                  <div class="Sen1">好货内部价</div>
                  <div class="Sen2">超冷感吸放湿双面夏凉被</div>
                  <div class="Sen3">冷感+亲肤，享受双面睡感</div>
                  <div class="sen4">￥179</div>
              </div>
          </div>
          <div class="Sentiment-container">
            <ul class="Sentiment-list">
              <li>
                <img src="https://yanxuan.nosdn.127.net/d2abd30e0296cdee86f1bdd9242c0937.png?imageView&quality=65&thumbnail=330x330" alt="">
                <div class="Sentiment-size">
                  <span>无损风味 超即溶精品咖啡（...</span>
                  <span class="Sentiment-active">￥88</span>
                </div>
              </li>
              <li>
                <img src="https://yanxuan.nosdn.127.net/d2abd30e0296cdee86f1bdd9242c0937.png?imageView&quality=65&thumbnail=330x330" alt="">
                <div class="Sentiment-size">
                  <span>智能降温保冷杯</span>
                  <span class="Sentiment-active">￥4.9</span>
                </div>
              </li>
              <li>
                <img src="https://yanxuan.nosdn.127.net/d2abd30e0296cdee86f1bdd9242c0937.png?imageView&quality=65&thumbnail=330x330" alt="">
                <div class="Sentiment-size">
                   <span>追风 男式轻弹慢跑运动鞋</span>
                   <span class="Sentiment-active">￥328</span>
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
    .Sentiment
      width 100%
      height 640px
      padding-bottom 60px
      .Sentiment-per 
        width 600px
        height 100px
        font-size 32px
        color #333
        padding 0 30px
        display block
        line-height 100px
      .SentimentImg
        width 690px
        height 280px
        background #FEF0DF
        margin 0 30px 20px
        display flex
        .SentimentMask
          width 280px
          height 280px
          background-image url(https://yanxuan.nosdn.127.net/bb032dd258a8b8c638f0cd8af92202e3.png?imageView&quality=65&thumbnail=280x280)
          background-size 100%
          img
            width 280px
            height 280px 
        .SentimentImg-list
          width 350px
          height 160px
          line-height 60px
          positions absolute 
          top 0
          left 0
          bottom 0
          right 0
          margin auto 
          .Sen1
            color #B4282D
            background white
            width 118px
            height 30px  
            border 1px solid #B4282D
            font-size 20px
            text-align center
            line-height 30px
          .Sen2 
            width 350px
            height 41px
            font-size 28px
            color #333 
          .Sen3
            width 350px
            height 36px
            font-size 24px
            color #7f7f7f
          .sen4
            color #B4282D    
      .Sentiment-container
        width 100%
        height 310px
        .Sentiment-list
          width 100%
          height 310px
          display flex
          li
            width 216px
            height 310px
            margin-left 20px
            
            img 
              width 216px
              height 216px 
              background #f5f5f5
            .Sentiment-size
              width 216px
              height 72px
              font-size 24px
              padding 0 10px
              box-sizing border-box
              span  
                line-height 40px
              .Sentiment-active
                color #b4282d 
</style>
