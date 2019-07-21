<template>
    <div class="sliding" ref="Slid">
        <ul class="sliding-list">
            <li class="sliding-item" v-for="(slid,index) in slids" :key="index">
                <div class="sliding-Img">
                    <img :src="slid.primaryPicUrl" alt="">
                </div>
                <span class="sliding-1">{{slid.name}}</span>
                <span class="sliding-2">￥{{slid.retailPrice}}</span>
            </li>
        </ul>
    </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
  export default {
      props:['slids'],
      mounted(){
           this.$nextTick(()=>{
                const topScroll = new BScroll(this.$refs.Slid, {
                //startX: 0,
                probeType: 1,
                click: true,
                scrollX: true,
                // 忽略竖直方向的滚动
                scrollY: false,
                eventPassthrough: "vertical"
            })
        })
      }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .sliding
      width 720px
      height 391px
      padding-left 10px
      overflow hidden
      .sliding-list 
        width 1300px
        height 391px
        display flex      
        .sliding-item
          width 200px
          height 361px
          margin-left 20px
          .sliding-Img
            width 200px
            height 200px
            background #f4f4f4
            img 
              width 100%
          .sliding-1
            width 189px
            height 68px
            font-size 24px
            color #333333
            margin 10px 0
            display block
            line-height 30px
          .sliding-2
            width 200px
            height 36px
            font-size 24px
            color #b4282d  
            display block
            margin-top -15px 
</style>
