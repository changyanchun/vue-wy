<template>
  <div class="big_container">
    <div class="big_top">
        <div class="big_top_content">
            <div class="big_top_Img">
                <img :src="search.avatar" alt="">
            </div>
            <span class="sister">{{search.nickname}}</span>
        </div>
        <div class="big_top_Size">{{search.subTitle}}</div>
    </div>
    <div class="big_Img">
        <div class="bigImg">
            <img v-lazy="search.picUrl" alt="">
        </div>
        <div class="bigImg_bottom">
            <i class="iconfont icon-yanjing yan"></i>
            <span class="per">{{search.readCount}}人看过</span>
        </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    props:['search']
  }
 
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>    
    .big_container
      width 690px
      height 614px
      padding 30px
      border-bottom 20px solid #eee
      .big_top
        width 690px
        height 200px
        .big_top_content
          width 690px
          height 56px
          display flex
          .big_top_Img
            width 56px
            height 56px
            img   
              width 56px
              height 56px
              border-radius 50%
          .sister
            width 56px
            height 34px
            position relative
            top 15px
            left 30px
            font-size 28px
            color #333333   
        .big_top_Size
          width 690px
          height 102px
          font-size 36px
          color #333333
          line-height 52px 
          padding-top 20px
      .big_Img
        width 690px
        height 204px
        .bigImg
          width width 690px
          height 367px
          img
            width 100%
            border-radius 10px  
      .bigImg_bottom
        width 690px
        height 32px
        padding-top 25px    
        display flex
        .yan
          margin-top 2px
          font-size 32px
          color #999999
        .per  
          wdith 116px
          height 32px
          line-height 32px
          color #999999
          margin-left 8px   
</style>
