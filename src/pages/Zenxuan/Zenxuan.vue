<template>
   <div class="zenxj">
     <div class="search_top">
            <div class="search_top1" @click="goHome('/msite')">
              <i class="iconfont icon-fangzi iconFang"></i>
            </div>
            <div class="search_top2">
              <span class="search_title1" :class="{search_active:!isShow}" @click="toggleCut">发现</span>
              <span class="search_title2" :class="{search_active:isShow}" @click="toggleCut">甄选家</span>
            </div>
            <div class="search_top3">
              <i class="iconfont icon-sousuo"></i>
              <i class="iconfont icon-gouwuche" @click="goHome('/order')"></i>
            </div>
      </div>
      <div class="zxuanj">
            <ZenxjCon/>
      </div> 
   </div>
</template>

<script type="text/ecmascript-6">
import ZenxjCon from '../../components/ZenxjCon/ZenxjCon.vue'
  export default {
    data(){
      return{
        isShow:true
      }
    },
    methods:{
      toggleCut(){
          this.isShow = !this.isShow
          if(this.isShow === false){
            this.$router.replace('/search')
          }
        }
        ,
        goHome(path){
          this.$router.push(path)
        }
    },
    components:{
      ZenxjCon
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .zenxj
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
          .search_active
            font-size 40px
            color #b4282d
            font-weight bold       
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
      .zxuanj
        width 100%
        height 100%  
</style>
