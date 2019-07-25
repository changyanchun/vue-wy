<template>
    <div class="special">
        <div class="special-top">专题精选</div>
        <div class="special-bottom" ref="Special">
            <ul class="special-list">
                <li class="special-item" v-for="(summer,index) in specialData" :key="index">
                    <img :src="summer.specialUrl" alt="">
                    <span class="special-1">{{summer.top}}</span>
                    <span class="special-2">{{summer.crital}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
  export default {
      props:['specialData'],
      mounted(){
          this.$nextTick(()=>{
            const topScroll = new BScroll(this.$refs.Special, {
               //startX: 0,
              probeType: 1,
              click: true,
              scrollX: true,
              // 忽略竖直方向的滚动
              scrollY: false,

          })
        })
      }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .special
      width 750px
      height 508px
      .special-top
        width 690px
        height 100px
        font-size 32px
        color #333333
        line-height 100px
        padding-left 20px
      .special-bottom
        width 750px
        height 408px 
        overflow hidden
        .special-list
          width 1440px
          height 378px          
          display flex        
          .special-item
            width 480px
            height 378px
            margin-left 31px
            background #F5F5F5
            img 
              width 480px
              height 269px
            .special-1
              display block
              white-space nowrap 
              overflow hidden
              text-overflow ellipsis 
              font-size 28px
              width 400px
              height 41px
              color #333333
              padding 15px 50px 0 15px
            .special-2
              font-size 24px
              color #7F7F7F 
              display block    
              margin-left 15px
</style>
