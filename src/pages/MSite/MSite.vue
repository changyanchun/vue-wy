<template>
  <div id="HomeContainer">
      <!-- 头部 -->
      <div class="home">
        <div class="home_header">
          <!-- 头部上部分 -->
          <div class="header_top">
            <!-- logo图 -->
            <h1 class="logo"></h1>
            <!-- 中间部分 -->
            <div class="header_top_center">
              <i class="iconfont icon-sousuo"></i>
              <span>搜索商品,共6666款好物</span>
            </div>
            <!-- 登录 -->
            <div class="loginBtn">登录</div>
          </div>
          
          <div class="header-extend" v-show="isShow">
            <div class="header-extend-top">
              <p>全部频道</p>
            </div>

            <div class="header-extend-bottom">
              <ul class="header-extend-list">
                <li class="active">推荐</li>
                <li>居家生活</li>
                <li>服饰鞋包</li>
                <li>美食酒水</li>
                <li>推荐</li>
                <li>推荐</li>
                <li>母婴亲子</li>
                <li>推荐</li>
                <li>数码家电</li>
              </ul>
            </div>
            <!-- 遮罩层 -->
            <div class="mask"></div>
          </div>
          
          <!-- 头部下部分 -->
          <div class="header_bottom" v-show="!isShow">
            <div class="header_nav">
              <ul class="header_nav_list">
                <li class="nav_item tj active nav_item-first">推荐</li>
                <li class="nav_item">居家生活</li>
                <li class="nav_item">服饰鞋包</li>
                <li class="nav_item">美食酒水</li>
                <li class="nav_item">个护清洁</li>
                <li class="nav_item">母婴亲子</li>
                <li class="nav_item">运动旅行</li>
                <li class="nav_item">数码家电</li>
                <li class="nav_item">全球特色</li>
              </ul>
            </div>          
          </div>
          
          <!-- 旋转箭头 -->
          <div class="rotate">
            <transition name='fade'>
              <div class="rotate-jt" @click="isShow = !isShow" :class="className"></div>
            </transition>
          </div>
      </div>
      </div>

    <!-- 轮播 -->
      <div class="home_nav">
       <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(home,index) in navList" :key="index">
              <img :src="home.picUrl" alt="">
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>      
    </div>
    <!-- 导航列表 -->
    <div class="home-center">
      <div class="home-center-detail">
        <div class="home-center-grow">
          <span class="yi"></span>
          <p>网易自营品牌</p>
        </div>
        <div class="home-center-grow">
          <span class="dun"></span>
          <p>30天无忧退货</p>
        </div>
        <div class="home-center-grow">
          <span class="price"></span>
          <p>48小时快速退款</p>
        </div>
      </div>
      <div class="home-center-img">
        <ul class="home-center-list">
          <li>
            <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
            <span>新品首发</span>
          </li>
          <li>
            <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
            <span>新品首发</span>
          </li>
          <li>
            <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
            <span>新品首发</span>
          </li>
          <li>
            <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
            <span>新品首发</span>
          </li>
          <li>
            <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
            <span>新品首发</span>
          </li>
          <li>
            <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
            <span>新品首发</span>
          </li>
          <li>
            <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
            <span>新品首发</span>
          </li>
          <li>
            <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
            <span>新品首发</span>
          </li>
          <li>
            <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
            <span>新品首发</span>
          </li>
          <li>
            <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
            <span>新品首发</span>
          </li>
        </ul>
      </div>

      <div class="home-img">
         <img src="https://yanxuan.nosdn.127.net/9e2248500f961bfe0e872027776b1e79.gif" alt="">
      </div>

      <div class="home-puzzle">
        <div class="home-puzzle-item">
          <div class="puzzle-item-top">
            <span class="puzzle-1">几元就买到小确幸</span>
            <span class="puzzle-2">珍惜唾手可得的小幸福</span>
          </div>
          <div class="puzzle-item-bottom">
            <img src="https://yanxuan.nosdn.127.net/1eecf74b769af3ed4c7817aeb5d6bb2b.png?imageView&thumbnail=150x150&quality=75" alt="">
            <img src="https://yanxuan.nosdn.127.net/f8ab1da43385ce39549272c1571f6397.png?imageView&thumbnail=150x150&quality=75" alt="">
          </div>
        </div>
        <div class="home-puzzle-item">
          <div class="puzzle-item-top">
            <span class="puzzle-1">几元就买到小确幸</span>
            <span class="puzzle-2">珍惜唾手可得的小幸福</span>
          </div>
          <div class="puzzle-item-bottom">
            <img src="https://yanxuan.nosdn.127.net/1eecf74b769af3ed4c7817aeb5d6bb2b.png?imageView&thumbnail=150x150&quality=75" alt="">
            <img src="https://yanxuan.nosdn.127.net/f8ab1da43385ce39549272c1571f6397.png?imageView&thumbnail=150x150&quality=75" alt="">
          </div>
        </div>
        <div class="home-puzzle-item">
          <div class="puzzle-item-top">
            <span class="puzzle-1">几元就买到小确幸</span>
            <span class="puzzle-2">珍惜唾手可得的小幸福</span>
          </div>
          <div class="puzzle-item-bottom">
            <img src="https://yanxuan.nosdn.127.net/1eecf74b769af3ed4c7817aeb5d6bb2b.png?imageView&thumbnail=150x150&quality=75" alt="">
            <img src="https://yanxuan.nosdn.127.net/f8ab1da43385ce39549272c1571f6397.png?imageView&thumbnail=150x150&quality=75" alt="">
          </div>
        </div>
        <div class="home-puzzle-item">
          <div class="puzzle-item-top">
            <span class="puzzle-1">几元就买到小确幸</span>
            <span class="puzzle-2">珍惜唾手可得的小幸福</span>
          </div>
          <div class="puzzle-item-bottom">
            <img src="https://yanxuan.nosdn.127.net/1eecf74b769af3ed4c7817aeb5d6bb2b.png?imageView&thumbnail=150x150&quality=75" alt="">
            <img src="https://yanxuan.nosdn.127.net/f8ab1da43385ce39549272c1571f6397.png?imageView&thumbnail=150x150&quality=75" alt="">
          </div>
        </div>
      </div>
    </div>
     <div class="home-line"></div> 
  </div>
</template>

<script type="text/ecmascript-6">

  import Swiper from 'swiper/dist/js/swiper' 
  import "swiper/dist/css/swiper.min.css"
  import {reqHome} from '../../api'   
  //import {mapState} from 'vuex'     
  export default {
    data(){
      return{
        isShow:false,
        navList:[]
      }
    },
    async mounted(){

        //this.$store.dispatch('reNav')
        const result = await reqHome()
        console.log(result)
        if(result.code === 0){
          const navList = result.data.focusList
          this.navList = navList
        }
        var mySwiper = new Swiper ('.swiper-container', {
          direction: 'horizontal', // 垂直切换选项
          loop: true, // 循环模式选项
          autoplay:true, //自动轮播
          // 如果需要分页器
          pagination: {el: '.swiper-pagination'}       
        })
    },
    computed:{
      
      className(){
        return this.isShow?'go':'back'
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl' 
  #HomeContainer
    width 750px
    .home_header
      height 150px
      .header_top 
        padding 14px 30px
        display flex
        .logo
          background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png)
          background-size 100%
          background-position-y 4px
          display inline-block
          width 120px
          height 40px
          margin-right 20px
          margin-top 10px
        .header_top_center
          text-align center
          line-height 54px
          background #EDEDED
          width 442px
          height 56px
          border-radius 10px
          .icon-sousuo
            font-size 28px
            margin-right 10px
          span 
            color #666
            font-size 28px
        .loginBtn
          margin-left 30px
          width 74px
          height 40px
          border 1px solid #B4282D
          border-radius 10px
          color #b4282d
          text-align center
          line-height 40px
          margin-top 10px
      .header-extend
        width 100%
        height 372px
        .header-extend-top
          display flex
          font-size 28px
          padding-left 30px
          p 
            width 85%
            height 60px
            line-height 60px
        .header-extend-bottom
          background-color white
          position absolute
          top 140px
          left 0
          width 100%
          height 314px
          z-index 99
          box-sizing border-box
          .header-extend-list
            padding-top 24px
            width 100%
            height 100%
            display flex
            flex-wrap wrap
            li              
              width 150px
              font-size 24px
              text-align center
              height 56px
              line-height 56px
              margin 0 0 40px 30px
              background #FAFAFA 
              border 1px solid #ccc
              &.active
                color #b4282d
                border 1px solid #b4282d  
        .mask
          height 1334px
          width 750px
          background-color rgba(0,0,0,.5) 
          position relative
          z-index 2           
      .header_bottom
        position relative
        height 60px
        padding-right 120px
        .header_nav      
          height 60px
          overflow hidden
          .header_nav_list
            width 1400px
            display flex
            padding 0 40px
            .nav_item
              display inline-block
              padding 0 16px
              width 152px
              height 60px
              font-size 28px
              line-height 60px
              color #333
              position relative
              &.tj
                width 88px
              &.active
                color #b4282d  
            .nav_item-first     
              &::after
                content ''
                display block
                width 88px
                height 4px
                background #b4282d
                position absolute
                bottom 0
                left 0
                 
      .rotate 
        width 100px
        height 60px
        position absolute
        top 85px
        right 0
        .rotate-jt 
          background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-799ded53ea.png)
          width 30px
          height 30px
          position relative
          top 15px
          margin 0 auto
          transition .5s
         
          &.go
            transform rotate(180deg)
          &.back
            transform rotate(0)    
    .home_nav
      /* display none */ 
      .swiper-container
        width 100%
        height 400px
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            float left 
            top 0
            left 0
            img 
              width 100%
              height 100%
        /deep/.swiper-pagination
          position absolute
          bottom  20px
          left 0 
        /deep/.swiper-pagination-bullet
          width 40px
          height 6px
          opacity 0.4
          margin-left 10px
          background black 
          border-radius 0
        /deep/.swiper-pagination-bullet-active
          background white 
    .home-center
      width 100%
      .home-center-detail
        padding 0 30px
        width 100%
        height 72px
        display flex
        text-align center
        line-height 72px
        .home-center-grow
          font-size 24px
          display flex
          align-items center
          margin-right 40px
          span 
            width 32px
            height 32px
          .yi          
            background-image url(https://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png)
            background-size 100%              
          p
            margin-left 8px
          .dun     
            background-image url(https://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png)
            background-size 100%
          .price           
            background-image url(https://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png)
            background-size 100%
      .home-center-img
        width 100%
        height 341px
        .home-center-list
          width 100%
          height 341px
          display flex
          flex-wrap wrap
          padding-bottom 32px
          justify-content center
          align-items center
          li
            width 20%
            height 156px
            display flex
            flex-direction column
            justify-content center
            align-items center
            img  
              width 110px
              height 110px
            span
              font-size 24px
              text-align center  
              margin-top 10px 
      .home-img
        width 100%
        height 126px
        padding-top 32px
        img
          width 100%  
      .home-puzzle
        width 100%
        height 576px
        display flex
        flex-wrap wrap
        .home-puzzle-item
          width 343px
          height 264px 
          background #F5F5F5
          margin 20px 3px 3px 20px 
          display flex
          flex-direction column
          align-items center
          justify-content center
          .puzzle-item-top
            display flex
            flex-direction column
            .puzzle-1
              font-size 32px
              padding-left 10px
              height 48px
              line-height 48px
              text-align center
            .puzzle-2
              font-size 24px  
              padding-left 10px
              height 36px
              line-height 36px  
              text-align center 
    .home-line
      width 100%
      height 20px
      background #F5F5F5              
</style>  
