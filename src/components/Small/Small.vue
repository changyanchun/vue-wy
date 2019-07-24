<template>
  <div class="small">
      <div class="small-left">
          <div class="small_Img_top">
              <img :src="search.avatar" alt="">
              <span class="small_size">{{search.nickname}}</span>
          </div>
          <div class="small_Img_content">
              <span class="small_acid">{{search.subTitle}}</span>
              <span class="small_num">{{search.title}}</span>
          </div>
          <div class="small_Img_bottom">
              <i class="iconfont icon-yanjing yan"></i>
              <div class="per">{{search.readCount}}人看过</div>
          </div>
      </div>
      <div class="small-right">
          <img v-lazy="search.picUrl" alt="">
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
      props:['search']
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
   .small
     width 690px
     height 263px
     padding 30px
     display flex
     border-bottom 20px solid #eee
     .small-left
       width 400px
       height 272px
       .small_Img_top
         width 400px
         height 56px
         img 
           width 54px
           height 54px
           border-radius 50%
         .small_size
           width 196px
           height 34px
           font-size 28px
           color $333333
           display block  
           position relative
           top -45px 
           left 80px  
       .small_Img_content
         width 400px
         height 168px     
         .small_acid
           height 120px
           font-size 36px
           color #333333
           height 120px
           display block
           line-height 50px
           white-space nowrap 
           text-overflow ellipsis
           overflow hidden
         .small_num
           width 400px
           height 48px
           color #7F7F7F
           font-size 28px
           white-space nowrap 
           text-overflow ellipsis
           overflow hidden  
           display block
       .small_Img_bottom
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
     .small-right
       width 272px
       height 272px
       img
         width 100%
         border-radius 5px
      
</style>
