<template>
    <div class="crowd">
        <div class="crowd-top">众筹</div>
        <div class="crowd-bottom">
            <div class="crowd-list">
                <div class="crowd-left">
                    <img src="https://yanxuan.nosdn.127.net/2bcee4afa066f513745c2a3fb3368b63.png?imageView&thumbnail=210x210&quality=75" alt="">
                </div>
                <div class="crowd-right">
                    <div class="crowd-list">
                        <span class="crowd-1">【中秋档】玉兔壶、诸事如意生肖普洱茶礼</span>
                        <div class="crowd-2" style="font-size:32px">￥248起</div>
                        <div class="crowd-3">
                            <span class="crowd-3-left"></span>
                            <span class="crowd-3-right">31%</span>
                        </div>
                        <span class="crowd-4">27人已支持</span>
                    </div>
                </div>
            </div>
             <div class="crowd-list active">
                <div class="crowd-left">
                    <img src="https://yanxuan.nosdn.127.net/aef933b95d9a590d1a0ce971104b66e1.png?imageView&thumbnail=210x210&quality=75" alt="">
                </div>
                <div class="crowd-right">
                    <div class="crowd-list">
                        <span class="crowd-1">【中秋档】玉兔壶、诸事如意生肖普洱茶礼</span>
                        <div class="crowd-2" style="font-size:32px">￥248起</div>
                        <div class="crowd-3">
                            <span class="crowd-3-left"></span>
                            <span class="crowd-3-right">31%</span>
                        </div>
                        <span class="crowd-4">27人已支持</span>
                    </div>
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
     .crowd
       width 750px
       height 508px
       .crowd-top
         width 690px
         height 100px
         font-size 32px
         color #333333
         line-height 100px
         padding-left 20px
       .crowd-bottom
         width 750px
         height 511px 
         .crowd-list
           width 660px
           height 240px
           padding 0 30px 
           display flex
           &.active 
             padding-top 5px
           .crowd-left
             width 210px
             height 210px
             background #F5F5F5
             img 
                width 100%
                height 100%
           .crowd-right
             width 480px
             height 210px
             .crowd-list
               width 100%
               height 100%
               display flex
               flex-direction column
               span 
                display block
               .crowd-1
                 font-size 28px
                 color #333333
                 width 450px
                 white-space nowrap 
                 overflow hidden
                 text-overflow ellipsis 
               .crowd-2
                 font-size 32xp
                 color #b4282d
                 margin 15px 0 15px 5px
               .crowd-4
                 font-size 24px
                 color #7F7F7F 
                 margin-left 5px   
               .crowd-3
                 width 450px
                 display flex
                 .crowd-3-left
                   width 360px
                   height 6px
                   background #D8D8D8
                 .crowd-3-right 
                   position relative
                   top -10px
                   left 20px  
</style>
