<template>
    <div class="phone">
       <div class="search_top">
            <div class="search_top1" @click="goHome('/msite')">
              <i class="iconfont icon-fangzi iconFang"></i>
            </div>
            <div class="search_top2">
              <span class="search_title1"></span>
            </div>
            <div class="search_top3">
              <i class="iconfont icon-sousuo"></i>
              <i class="iconfont icon-gouwuche" @click="goHome('/order')"></i>
            </div>
       </div>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
      methods:{
        goHome(path){
            this.$router.push(path)
        }
      }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .phone
      width 100%
      height 100%
      .search_top
        width 700px
        height 100px
        padding 0 26px 0 24px
        background #fafafa
        border-bottom 1px solid #d9d9d9
        display flex
        .search_top1
          width 46px
          height 100p
          line-height 100px        
          .iconFang
            font-size 46px
        .search_top2
          width 320px
          height 100px 
          text-align center
          line-height 100px
          display flex
          position relative
          left 180px
          .search_title1
            width 116px
            display block
            width 172px
            height 54px
            background url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-b1aa4c35e6.png)
            background-size 100% 
            background-position-y 300px
            position relative
            top 15px
            left 40px     
        .search_top3
          width 140px
          height 100px
          line-height 100px
          display flex
          position relative
          left 180px
          .icon-sousuo
            width 62px
            height 100px
            font-size 50px
            margin-right 24px
            display block
          .icon-gouwuche
            width 49px
            height 100px
            font-size 50px     
            display block
</style>
