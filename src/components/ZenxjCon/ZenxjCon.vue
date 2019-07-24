<template>
  <div class="ZhenXuanJia">
      <div class="slide">
          <div class="swiper-container">
                <div class="swiper-wrapper">
                    <a class="swiper-slide">
                        <div class="imgBox">
                            <img src="https://yanxuan.nosdn.127.net/4c7dea0d162b3dd3fb87dfe34829bb90.jpg?imageView&quality=75&thumbnail=670x371" alt="">
                        </div>
                    </a>
                    <a class="swiper-slide">
                        <div class="imgBox">
                            <img src="https://yanxuan.nosdn.127.net/2dde0ddaa2b9033730d282793a0cc04c.jpg?imageView&quality=75&thumbnail=670x371" alt="">
                        </div>
                    </a>
                    <a class="swiper-slide">
                        <div class="imgBox">
                            <img src="https://yanxuan.nosdn.127.net/4c7dea0d162b3dd3fb87dfe34829bb90.jpg?imageView&quality=75&thumbnail=670x371" alt="">
                        </div>
                    </a>
                </div>
            </div>
      </div>
      <!-- 建议征集 -->
      <div class="advise-Model">
        <div class="advise-middle">
            <div class="wraper">
                <img src="https://yanxuan.nosdn.127.net/fdcfa17b26d048eacb4ea087bb678345.jpg?imageView&quality=75&thumbnail=272x200" alt="">
            </div>
            <div class="baseInfo">
                <div class="title">
                    你希望严选推出那些方便的菜肴呢？
                </div>
                <div class="counts">
                    <div class="left">
                        <i class="iconfont icon-jianyi"></i>
                        <span>15条建议</span>
                    </div>
                    <div class="right">
                        <i class="iconfont icon-kanguo"></i>
                        <span>305人看过</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="describe">
            <div class="desc-content">
                如果我们推出方便菜肴，你会希望有哪些口味呢？比如酸甜口味、香辣口味、咖喱口味或者其他口味；希望推出1人份还是多人份？希望是加热即食还是可以简单烹饪？你对严选的方便菜肴还有哪些期待呢？快来说说吧
            </div>
            <div class="advise">
                我要建议
            </div>
        </div>
      </div>
        <!-- 样式甄选 -->
        <div class="style-Model">           
            <div class="style-middle">
                <div class="style-top">
                    <div class="title">
                        <span class="tag">
                            <i class="icon iconfont icon-huang"> </i>
                            <span class="txt">母婴篇</span>
                        </span>
                    </div>
                    <div class="pick">经典色系选色</div>
                </div>
                <ul class="list">
                    <li class="sampleItem">
                        <div class="imgWrap">
                            <img src="https://yanxuan.nosdn.127.net/f984b5a258f94be7e85c2385ed9331cf.png?imageView&quality=65&thumbnail=300x300" alt="">
                        </div>
                        <div class="likeWrap">
                            <div class="desc">
                                紫色
                            </div>
                            <div class="likeArea">
                                <i class="icon iconfont icon-xihuan"></i>
                                <span class="like">喜欢</span>
                            </div>
                        </div>
                    </li>
                     <li class="sampleItem">
                        <div class="imgWrap">
                            <img src="https://yanxuan.nosdn.127.net/f984b5a258f94be7e85c2385ed9331cf.png?imageView&quality=65&thumbnail=300x300" alt="">
                        </div>
                        <div class="likeWrap">
                            <div class="desc">
                                紫色
                            </div>
                            <div class="likeArea">
                                <i class="icon iconfont icon-xihuan"></i>
                                <span class="like">喜欢</span>
                            </div>
                        </div>
                    </li>
                     <li class="sampleItem">
                        <div class="imgWrap">
                            <img src="https://yanxuan.nosdn.127.net/f984b5a258f94be7e85c2385ed9331cf.png?imageView&quality=65&thumbnail=300x300" alt="">
                        </div>
                        <div class="likeWrap">
                            <div class="desc">
                                紫色
                            </div>
                            <div class="likeArea">
                                <i class="icon iconfont icon-xihuan"></i>
                                <span class="like">喜欢</span>
                            </div>
                        </div>
                    </li>
                     <li class="sampleItem">
                        <div class="imgWrap">
                            <img src="https://yanxuan.nosdn.127.net/f984b5a258f94be7e85c2385ed9331cf.png?imageView&quality=65&thumbnail=300x300" alt="">
                        </div>
                        <div class="likeWrap">
                            <div class="desc">
                                紫色
                            </div>
                            <div class="likeArea">
                                <i class="icon iconfont icon-xihuan"></i>
                                <span class="like">喜欢</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
    
        </div>

        <!-- 样品试用 -->
        <div class="sampling-Model">
            <ZxjTop>
                <span slot="tit">样品试用</span>
                
                <span slot="desc">加入我们，一起检验好物初样</span>
            </ZxjTop>
            <div class="sampling-middle">
              <div class="wrapper"></div>
            </div>
            <div class="describe">
                <div class="advise">
                    我要建议
                </div>
            </div>
        </div>
      
  </div>
</template>

<script type="text/ecmascript-6">
import Swiper from 'swiper'
import "swiper/dist/css/swiper.css"
  export default {
      name:'ZhenXuanJia',
      mounted(){
          new Swiper ('.swiper-container', {
            loop: true, // 循环模式选项
            //autoplay:true,//自动轮播
            // 如果需要分页器
            pagination: {
            el: '.swiper-pagination',
            },
            
        })        
      }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.ZhenXuanJia
    width 750px
    .slide
        width 750px
        height 420px
        margin-bottom 20px
        background #fff
        .swiper-container
            width 750px
            height 420px
            padding 24px 0              
            .swiper-slide
                width 670px
                height 372px
                display block
                box-sizing border-box
                .imgBox
                    position relative
                    width 670px
                    height 372px
                    left 38px
                    img 
                        width 670px
                        height 372px
                        background #f9f9f9
                        border-radius 10px
                     &::after
                            content: " "
                            position: absolute;
                            left: 0;
                            top: 0;
                            z-index: 1
                            width 200%
                            height 200%
                            border 1px solid #d9d9d9
                            transform-origin 0 0
                            transform scale(0.5)
    .advise-Model
        width 690px
        height 700.72px
        background #fff 
        padding 0 30px 40px
        box-sizing border-box
        margin-bottom 20px
        
        .advise-middle
            width 690px
            height 248px
            background #f4f4f4
            padding 24px 0 24px 24px
            box-sizing border-box
            display flex
            .wraper
                width 272px
                height 200px
                img 
                    width 100%
                    height 100%
            .baseInfo
                width 348px
                height 200px
                padding-left 20px
                .title
                    width 345.96px
                    height 96px
                    line-height 48px
                    font-size 32px
                    margin-bottom 14px
                .counts
                    width 364px
                    height 36px
                    font-size 24px
                    color #7f7f7f
                    display flex
                    .left
                        width 137.72px
                        height 36px
                        line-height 36px
                        font-size 24px
                        margin-right 32px
                        i 
                            display inline-block
                            margin  0  7px 3px 0
                    .right
                        width 152.06px
                        height 36px
                        line-height 36px
                        font-size 24px
                        i 
                            display inline-block
                            margin  0  7px 3px 0
        .describe
            width 690px
            height 152px
            margin-top 32px
            .desc-content
                width 100%
                height 100%
                line-height 40px
                font-size 24px
                color #7f7f7f
                font-family PingFangSC-Light
            .advise
                width 690px
                height 87.968px
                margin-top 40px
                text-align center
                line-height 87.968px
                position relative
                &::after 
                    position absolute
                    top 0
                    left 0  
                    z-index 1
                    content ''
                    width 200%
                    height 200% 
                    border 1px solid #7f7f7f
                    transform-origin 0 0
                    transform scale(0.5)

    .style-Model
        width 750px
        background #fff 
        padding 0 30px 40px
        box-sizing border-box
        margin-bottom 20px
        .style-middle
            width 690px
            background #ffffff
            position relative
            &::before
                content ''
                display inline-block
                width 965px
                height 2px
                position absolute
                top 0
                left -250px
                background #999
                transform scaleY(0.4)
            .style-top
                width 690px
                height 134.938px
                .title
                    width 100%
                    height 69.94px
                    padding 30.9998px 0 12.99976px
                    .tag
                        width 112px
                        height 32px
                        margin-top 9.9976px
                        padding-left 20px
                        font-size 27.9998px
                        color #333
                        position relative
                        .icon
                            margin-left -20px
                            display inline-block
                            width 112px
                            height 32px
                            font-size 80px
                            overflow hidden
                            color   #CFB495  
                        .txt
                            width 112px
                            display block
                            font-size 24px
                            color #fff
                            position absolute
                            top 0
                            left 20px
                .pick
                    margin-top -40px
                    width 576px
                    height 65px
                    color #999
                    font-size 24px
                    padding-bottom 33px
            .list
                width 100%
                height 1000px
                display flex
                flex-wrap wrap
                justify-content space-between
                .sampleItem
                    width 335px
                    height 436.5px
                    padding 0  10px  48px 0      
                    &:nth-child(2n)
                        padding 0  0  48px 10px      
                    .imgWrap
                        width 335.032px
                        height 317.562px
                        background #f4f4f4
                        img 
                            width 100%
                            height 100%
                    .likeWrap
                        width  335.032px
                        height 99.968px
                        display flex
                        flex-wrap wrap
                        justify-content center
                        .desc
                            width 335.04px
                            height 40px
                            text-align center
                            margin 18.99976px 0px 15.99976px
                        .likeArea
                            width 136.04px
                            height 44px
                            border 2px solid #f09005
                            border-radius 22px
                            text-align center
                            line-height 44px
                            color #f09005
                            .icon 
                                font-size 24px
                                display inline-block
                                margin-right  10px
    .sampling-Model
        width 750px
        background #fff 
        padding 0 30px 40px
        box-sizing border-box
        margin-bottom 20px
        margin-bottom 180px
        .sampling-middle
            width 690px
            height 842.96px
            padding 24px
            box-sizing border-box
            display flex
            position relative
            &::after
                position absolute
                top 0
                left 0
                content ''
                display block
                width 100%
                height 100%
                border 0.5px solid #eee
            .wrapper
                width 690px
                height 480px
                background #fcc
            
        .describe
            width 690px
            height 152px
            margin-top 32px
           
            .advise
                width 690px
                height 87.968px
                margin-top 40px
                text-align center
                line-height 87.968px
                position relative
                &::after 
                    position absolute
                    top 0
                    left 0  
                    z-index 1
                    content ''
                    width 200%
                    height 200% 
                    border 1px solid #7f7f7f
                    transform-origin 0 0
                    transform scale(0.5)

        
                            

                    

</style>
