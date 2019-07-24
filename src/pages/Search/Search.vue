<template>
  <div class="search" >
     <div class="search_con">
          <div class="search_top">
            <div class="search_top1" @click="goHome('/msite')">
              <i class="iconfont icon-fangzi iconFang"></i>
            </div>
            <div class="search_top2">
              <span class="search_title1" :class="{search_active:isShow}" @click="toggleCut">发现</span>
              <span class="search_title1" :class="{search_active:!isShow}" @click="toggleCut">甄选家</span>
            </div>
            <div class="search_top3">
              <i class="iconfont icon-sousuo"></i>
              <i class="iconfont icon-gouwuche" @click="goHome('/order')"></i>
            </div>
          </div>     
          <div class="search_nav">
            <div class="search_nav_content">
              <ul class="search_list">
                <li class="search_item" :class="{search_active:currentNum === index}" v-for="(gen,index) in searchNav" :key="index" @click="toggle(index)">{{gen.tabName}}</li>
              </ul>
            </div>
          </div>
     </div> 
    <div class="search_scroll">
        <div class="sacrch_scroll_container" v-infinite-scroll="loadMore" infinite-scroll-disbale="isScroll" infinite-scroll-distance="5">
           <div class="search_content">
              <div class="search_Img">
                <img src="https://yanxuan.nosdn.127.net/bdb121b22f382f1d2a116ace09bcfaf4.jpg?imageView&quality=65&thumbnail=690y376" alt="">
              </div>
            </div>
              
            <div class="Sea-li" v-for="(search) in searchList" :key="search.topicId">
              <BigImg  :search="search" v-if="search.style === 1"/>
              <Small :search="search" v-else/>
            </div>

            <div class="iiiii">
          </div>

        </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Small from '../../components/Small/Small.vue'
import BigImg from '../../components/BigImg/BigImg.vue' 
import {reqLazy} from '../../api'
import {mapState} from 'vuex'
import BScroll from 'better-scroll'

  export default {
    data(){
      return{
        currentNum:0,
        searchList:[], //内容可视区域
        page:1,
        size:5,
        isShow:true, //true 发现   false 甄选家
        isScroll:false
      }
    },
    computed:{
      ...mapState(['searchNav'])
      
    },
    async created(){
        let page = this.page
        const size = this.size
        const result = await reqLazy({page, size})
        if(result.code === '200'){
          const goods = result.data.result
          goods.forEach(good => {
              this.searchList = good.topics
          })
        }
    },
    mounted(){
      this.$store.dispatch('reqNavList')     
  /*     console.log(this.$refs.scroll)
         console.log(this.$refs.scroll.clientHeight) */
         
    },
    methods:{
        toggle(index){
          this.currentNum = index
        },
        goHome(path){
          this.$router.replace(path)         
        },
        toggleCut(){
          this.isShow = !this.isShow
          if(this.isShow === false){
            this.$router.replace('/zenxj')
          }
        },
        async loadMore(){
          this.isScroll = true
          const page = this.page += 1
          this.page = page
          const size = this.size
          console.log(page)
            const result = await reqLazy({page, size})
              if(result.code === '200'){
                const foods = result.data.result
                foods.forEach(food => {
                    this.searchList.push(food.topics[1])
                })
              }
        }
    },
    components:{
      BigImg,
      Small
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl'
    .search
      width 100%
      height 100%
      .search_con
        width 100%
        height 100%
        position fixed
        left 0
        top 0
        z-index 5
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
              height 32px
              font-size 28px
              color #7F7F7F
            .search_title2
              width 116px
              height 32px
              font-size 28px
              color #7F7F7F
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
        .search_nav
          height 72px
          .search_nav_content
            height 72px 
            overflow hidden
            .search_list
              width 1100px
              height 72px
              display flex 
              background #fafafa
              position relative
              bottom-border-1px(#d9d9d9)
              .search_item
                height 68px 
                font-size 28px
                color #7f7f7f
                margin 0 20px
                padding 0 8px 
                line-height 68px
                text-align center
                &.search_active
                  border-bottom 4px solid #b4282d  
      .search_scroll
        width 100%
        height 100%
        padding-top 172 px   
        .sacrch_scroll_container
          width 100%
          height 100%          
          .search_content
            width 100%
            height 100%
            .search_Img
              width 690px
              height 408px
              padding 25px 30px
              border-top 20px solid #eee
              border-bottom 20px solid #eee
              img 
                width 690px
                height 376px 
          .Sea-li
            width 750px
            height 100% 
          .iiiii
            width 750px
            height 100px                        
</style>
