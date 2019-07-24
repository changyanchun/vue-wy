<template>
    <div class="profile">
      <div class="search_top">
            <div class="search_top1" @click="goHome('/msite')">
              <i class="iconfont icon-fangzi iconFang"></i>
            </div>
            <div class="search_top2">
              <span class="search_title1"></span>
            </div>
            <div class="search_top3">
              <i class="iconfont icon-sousuo"></i>
              <i class="iconfont icon-gouwuche" @click="home('/order')"></i>
            </div>
      </div>
      <div class="profile_container">
          <div class="profile_top">
            <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
          </div>
          <div class="profile_content">
            <mt-button type="danger" class="btn1" @click="goHome('/phone')">
              <div class="phone1"></div>
              <span class="login1">手机号登录</span>
            </mt-button>
            <mt-button plain class="btn2">
              <div class="phone2"></div>
              <span class="login2">邮箱快速登录</span>
            </mt-button>
            <div class="profile_phone">
              <span>手机号快速注册</span>
              <span> > </span>
            </div>
          </div>
          <div class="profile_bottom">
            <ul class="profile_list">
              <li class="profile_item">
                <i class="iconfont icon-weixin wei"></i>
                <span>微信</span>
                <span class="line"></span>
              </li>
              <li class="profile_item">
                <i class="iconfont icon-weibo wei"></i>
                <span>微博</span>
                <span class="line"></span>
              </li>
              <li class="profile_item">
                <i class="iconfont icon-qq wei"></i>
                <span>QQ</span>
              </li>
            </ul>
          </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">

import {Toast, MessageBox} from 'mint-ui'

  export default {
   methods:{
     goHome(path){
       this.$router.push(path)
     }
   }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl'
    .profile
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
      .profile_container
        width 100%
        height 1233px
        background #F2F5F4
        .profile_top
          width 750px
          height 410px
          text-align center
          position relative
          img 
            width 268px
            height 90px
            position absolute
            top 0 
            left 0 
            bottom 0
            right 0
            margin auto    
      .profile_content
        width 750px
        height 292px
        position relative
        top 0
        left 40px 
        .btn1
          width 670px
          height 100px
          display flex
          .phone1
            width 40px
            height 40px
            background url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s2d0d826858-156f617841.png)
            background-position-y 240px
            background-size 100%
            position relative
            left 200px
            top 15px
          .login1
            width 168px
            height 32px
            font-size 28px
            color #FFFFFF  
            position relative
            top -25px
            left 250px
        .btn2
          width 670px
          height 100px
          margin-top 40px 
          .phone2
            width 40px
            height 40px
            background url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s2d0d826858-156f617841.png) 
            background-size 100%     
            position relative 
            left 200px
            top 15px
          .login2
            width 168px
            height 32px
            font-size 28px
            color #b4282d 
            display block
            position relative
            top -25px
            left 250px 
        .profile_phone
          width 500px
          height 40px
          line-height 40px
          font-size 28px
          color #333333   
          position relative
          left 210px
          top 30px
      .profile_bottom
        width 100%
        height 160px
        position absolute
        bottom 0
        .profile_list
          width 500px
          height 160px
          padding 0 125px
          display flex
          margin-left 50px
          align-items center
          .profile_item
            width 182px
            height 40px
            font-size 28px
            line-height 40px 
            display flex
            .wei
              width 40px
              font-size 40px
              display block
              margin-top 2px
            span 
              display block  
            .line
              width 1px
              height 40px
              background #333 
              position relative
              left 40px
</style>
