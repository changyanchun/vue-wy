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
            <div class="header_top_center" @click="goTo('/sousuo')">
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
                <li :class="{active:currentIndex === index}" @click="toggle(index)" v-for="(cate,index) in cateList" :key="index">{{cate.name}}</li>
              </ul>
            </div>
            <!-- 遮罩层 -->
            <div class="mask"></div>
          </div>
          
          <!-- 头部下部分 -->
          <div class="header_bottom" v-show="!isShow"  >
            <div class="header_nav" ref="headerTop">
              <ul class="header_nav_list">
                <li class="nav_item  " :class="[{active:currentIndex === index},{first:currentIndex === index}]" @click="toggle(index)" v-for="(cateL,index) in cateList" :key="index">{{cateL.name}}</li>              
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
            <div class="swiper-slide" v-for="(home,index) in navList.categoryModule" :key="index">
              <img :src="home.titlePicUrl" alt="">
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
          <div>网易自营品牌</div>
        </div>
        <div class="home-center-grow">
          <span class="dun"></span>
          <div>30天无忧退</div>
        </div>
        <div class="home-center-grow">
          <span class="price"></span>
          <div>48小时快速</div>
        </div>
      </div>
      <div class="home-center-img">
        <ul class="home-center-list">
          <li v-for="(ban,index) in navList.Listban" :key="index">
            <img :src="ban.msiteUrl" alt="">
            <span>{{ban.title}}</span>
          </li>
        </ul>
      </div>

      <div class="home-img">
         <img src="https://yanxuan.nosdn.127.net/9e2248500f961bfe0e872027776b1e79.gif" alt="">
      </div>

      <div class="home-puzzle">
        <div class="home-puzzle-item" v-for="(topic,index) in navList.topicList" :key="index">
          <div class="puzzle-item-top">
            <span class="puzzle-1">{{topic.subtitle}}</span>
            <span class="puzzle-2">{{topic.title}}</span>
          </div>
          <div class="puzzle-item-bottom">
            <img :src="topic.itemPicUrl" alt="">
            <img :src="topic.scenePicUrl" alt="">
          </div>
        </div>     
      </div>
    </div>
        <!-- 分割线 -->
     <div class="home-line"></div>
     <!-- 定位小礼物 -->
      <div class="home-hert">
        <i class="iconfont"></i>
      </div>

      <!-- 私人定制 -->
       <div class="home-person"> 
         <div class="person-top">私人定制</div>         
       </div>
       <PerBanner :shops="navList.personalShop"/>
      <!-- 分割线 -->
      <div class="home-line"></div>
      <!-- 现时购 -->
      <TimeBuy/>
      <!-- 分割线 -->
      <div class="home-line"></div>
      
      <!-- 新品首发 -->
      <TimeBuy/>
       <div class="home-line"></div>

       <!-- 人气推荐 -->
      <Sentiment/>
      <div class="home-line"></div>
      
      <!-- 类目热销榜 -->
      <Hot/>
      <div class="home-line"></div>

      <!-- 4张图片 -->
      <FourImg/>
      <div class="home-line"></div>

      <!-- 品牌直销商 -->
      <Brand/>
      <div class="home-line"></div>

      <!-- 专题精选 -->
      <Special :specialData="navList.specialTop"/>
      <div class="home-line"></div>

      <!-- 众筹 -->
      <Crowd/>
      <div class="home-line crowd-active"></div>

      <!-- 广告图 -->
      <div class="home-agency">
        <img src="https://yanxuan.nosdn.127.net/a415cf841405c9c5e14e435d8c57408b.jpg?imageView&thumbnail=750x0&quality=75" alt="">
      </div>

      <!-- 滑块图 -->
      <Sliding :slids="navList.newItemList"/>
      <div class="home-line slid-active"></div>

      <!-- 底部 -->
      <div class="home-bottom">
        <div class="home-base">
          <div class="base-top">
            <button class="btn1">下载APP</button>
            <button class="btn2">电脑版</button>
          </div>
          <div class="base-bottom">
            <p class="baseP-1">网易公司版权所有 © 1997-2019</p>
            <p class="baseP-2">食品经营许可证：JY13301080111719</p>
          </div>
        </div>
      </div>
      
  </div>

</template>

<script type="text/ecmascript-6">
  import Sliding from '../../components/Sliding/Sliding.vue' 
  import Crowd from '../../components/Crowd/Crowd.vue' 
  import Special from '../../components/Special/Special.vue' 
  import PerBanner from '../../components/PerBanner/PerBanner.vue' 
  import Brand from '../../components/Brand/Brand.vue' 
  import FourImg from '../../components/FourImg/FourImg.vue'
  import Hot from '../../components/Hot/Hot.vue'
  import Sentiment from '../../components/Sentiment/Sentiment.vue'
  import TimeBuy from '../../components/TimeBuy/TimeBuy.vue'
  import Swiper from 'swiper/dist/js/swiper' 
  import "swiper/dist/css/swiper.min.css"
  import BScroll from 'better-scroll'
  import {reqHome,reqCategory} from '../../api'   
  import {mapState} from 'vuex'     
  export default {
    data(){
      return{
        isShow:false,
        currentIndex:0
        //navList:[]
      }
    },
    created(){
       this.$nextTick(()=>{
            const topScroll = new BScroll(this.$refs.headerTop, {
              //startX: 0,
               probeType: 1,
              click: true,
              scrollX: true,
              // 忽略竖直方向的滚动
              scrollY: false,
              eventPassthrough: "vertical"
          })
        })
         this.$store.dispatch('recategorys')
         this.$store.dispatch('reList')
    },
    async mounted(){

        /* if(this.cateList.length>0){
          this.initScroll()
        } */

        await this.$store.dispatch('reNav')
       
       /*  const result = await reqHome()
        console.log(result)
        if(result.code === 0){
          const navList = result.data.focusList
          this.navList = navList
        } */
        new Swiper ('.swiper-container', {
          direction: 'horizontal', // 垂直切换选项
          loop: true, // 循环模式选项
          //autoplay:true, //自动轮播
          // 如果需要分页器
          pagination: {el: '.swiper-pagination'}       
        })

       
       
    },
    computed:{
      ...mapState(['navList','categorys','cateList']),

      className(){
        return this.isShow?'go':'back'
      }
    },
    methods:{
      toggle(index){
        this.currentIndex = index
      },
      goTo(path){
        this.$router.replace(path)
        this.$store.dispatch('reqSouItem')
      }
    },
    components:{
      TimeBuy,
      Sentiment,
      Hot,
      FourImg,
      Brand,
      PerBanner,
      Special,
      Crowd,
      Sliding
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl' 
  #HomeContainer
    width 750px
    .home_header
      background white
      height 150px
      position fixed
      top 0
      left 0
      z-index 88
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
              border-radius 5px
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
        height 60px
        padding-right 120px
        .header_nav      
          height 60px
          overflow hidden
          width 750px
          position relative
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
            .first     
              &::after
                content ''
                display block
                width 88px
                height 4px
                background #b4282d
                position absolute
                bottom 0
                left 8px
                 
      .rotate 
        width 105px
        height 60px
        position fixed
        top 85px
        right 0
        z-index 99
        background white
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
      padding-top 150px
      /* display none */ 
      .swiper-container
        width 720px
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
        padding 0 15px
        width 600px
        height 72px
        display flex
        text-align center
        line-height 72px
        .home-center-grow
          font-size 24px
          display flex
          align-items center
          justify-content center
          padding-right 40px
          box-sizing border-box
          span 
            width 32px
            height 32px
            position relative
          .yi          
            background-image url(https://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png)
            background-size 100%              
          div
            margin-left 8px
            position relative
            font-size 24px
            width 146px
            height 32px
            line-height 32px
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
        box-sizing border-box
        width 700px
        height 576px
        margin-top 15px
        margin-left 30px
        display flex
        flex-wrap wrap
        .home-puzzle-item
          width 343px
          height 264px 
          background #F5F5F5
          margin-right 5px 
          display flex
          flex-direction column
          align-items center
          justify-content center
        .home-puzzle-item:nth-child(3)
          margin-top -30px
        .home-puzzle-item:nth-child(4)
          margin-top -30px  
          .puzzle-item-top
            display flex
            flex-direction column
            .puzzle-1
              font-size 32px
              padding-left 10px
              height 48px
              line-height 48px
              text-align center
              box-sizing border-box
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
      margin-top 30px
      &.crowd-active
        margin-top 70px
      &.slid-active
        margin-top -30px  
    .home-hert
      width 112px
      height 80px
      display none 
    .home-person
      width 750px
      height 100px
      .person-top
        width 690px
        height 100px
        font-size 32px
        color #333333
        line-height 100px
        padding-left 20px
    .home-agency
      width 750px
      height 370px
      padding-bottom 20px
      img
        width 100%    
    .home-bottom
      width 100%
      height 244px
      padding-bottom 100px
      background #414141
      .home-base
        width 710px
        height 100% 
        padding 54px 20px 28px 
        .base-top
          width 710px
          height 60px
          text-aligin center
          button
            width 172px
            height 62px
            background #414141
            color white
            font-size 24px
            border 0px
            outline none
          .btn1
            margin-right 50px
            margin-left 150px
            border 1px solid #fff
          .btn2
            border 1px solid #fff  
        .base-bottom
          width 510px
          height 64px
          line-height 35px
          position relative
          top 30px 
          left 150px    
          color #999
          .baseP-1
            margin-left 30px                             
</style>  
