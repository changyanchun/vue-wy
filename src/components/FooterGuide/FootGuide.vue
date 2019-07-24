<template>
  <footer class="footer_guide border-1px">
    <span class="guide_item" :class="{on: $route.path==='/msite'}" @click="goTo('./msite')">
      <span class="item_icon">
        <i class="iconfont icon-fangzi"></i>
      </span>
      <span>首页</span>
    </span>
    <span class="guide_item" :class="{on:$route.path==='/categorys'}" @click="goTo('./categorys')">
      <span class="item_icon">
        <i class="iconfont icon-guizi"></i>
      </span>
      <span>分类</span>
    </span>
    <span class="guide_item" :class="{on:$route.path==='/search'}" @click="goTo('./search')">
      <span class="item_icon">
        <i class="iconfont icon-thumb"></i>
      </span>
      <span>识物</span>
    </span>
    <span class="guide_item" :class="{on:$route.path==='/order'}" @click="goTo('./order')">
      <span class="item_icon">
        <i class="iconfont icon-gouwuche"></i>
      </span>
      <span>购物车</span>
    </span>
    <span class="guide_item" :class="{on:$route.path==='/profile'}" @click="goTo('./profile')">
      <span class="item_icon">
        <i class="iconfont icon-ren"></i>
      </span>
      <span>个人</span>
    </span>
  </footer>
</template>

<script type="text/ecmascript-6">
  
  export default {
    name:'FooterGuide',
    methods:{
      goTo(path){
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .footer_guide  //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 99
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 100px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 10px
      color #999999
      &.on
        color #b4282d
      span
        font-size 24px
        margin-top 4px
        margin-bottom 4px
        .iconfont
          font-size 44px
</style>
