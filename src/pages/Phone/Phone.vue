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
              <i class="iconfont icon-sousuo" @click="goHome('/sousuo')"></i>
              <i class="iconfont icon-gouwuche" @click="goHome('/order')"></i>
            </div>
       </div>
       <div class="phone_container">
          <div class="phone_top">
            <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
          </div>
          <div class="phone_content">
            <input type="text" class="inp1" placeholder="请输入手机号" v-model="phone" name="phone" v-validate="'required|mobile'">
            <div class="line"></div>
            <span class='message' style="color: red;" v-show="errors.has('phone')">{{ errors.first('phone')}}</span>
            <input type="text" class="inp2" placeholder="请输入短信">
            <button class="btn" :class="{mark:computeTime>0}" :disabled="computeTime>0" @click="sendcode"><span class="btn-size">{{computeTime>0?`${computeTime}S`:'获取验证码'}}</span></button>
            <div class="line"></div>
            <div class="problem">
              <span class="problem1">遇到问题？</span>
              <span class="problem2">使用密码验证登录</span>
            </div>
          </div>

          <div class="phone_bottom">
            <mt-button type="danger" class="btn1" @click="login">
              <span class="login1">登录</span>
            </mt-button>
            <mt-button plain class="btn2" @click="goHome('/profile/email')">
              <span class="login2">其他登录方式</span>
            </mt-button>
            <div class="profile_phone">
              <span>注册账号</span>
              <span> > </span>
            </div>
          </div>
       </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import {Toast} from 'mint-ui'
  export default {
      data(){
        return {
          computeTime:0,
          phone:'' //手机号
        }
      },
      methods:{
        goHome(path){
            this.$router.push(path)
        },
         /* 发送短信验证 */
        sendcode(){
          this.computeTime = 60
          const timer = setInterval(()=>{
            this.computeTime--
            if(this.computeTime === 0){
              clearInterval(timer)
            }
          },1000)
        },
          /* 登录统一验证 */
          login(){
              const {phone} =this
              const  names = phone 
              if(names){
                const success =this.$validator.validateAll(names) // 对指定的所有表单项进行验证
                if(success){
                    Toast('登录成功')
                }
                
              }
          }
      }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixins.styl' 
    .mint-toast
      width 300px 
      height 200px 
      text-align center
      line-height 200px
      .mint-toast-text
        font-size 36px
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
      .phone_container
        width 690px
        height  900px
        padding 50px 30px 0  
        .phone_top
          width 100%
          height 64px
          text-align center
          img 
            width 192px
            height 64px 
        .phone_content
          width 100%
          height 440px
          margin-top 170px
          .inp1
            width 600px
            height 45px
            padding 28px 0 
            position relative
            outline none 
          ::-webkit-input-placeholder
            font-size 30px   
          .line
            width 670px
            height 1px
            position relative
            top 0
            left 0
            background #666
            opacity 0.5
          .message 
            display block
            font-size 28px
            height 50px  
            line-height 50px
            margin-top -40px
          .inp2
            width 380px
            height 45px
            padding 28px 0 
            outline none 
          .line
            width 670px
            height 1px
            position relative
            top 0
            left 0
            background #666
            opacity 0.5
            margin-bottom 40px 
          .btn
            width 168px
            height 56px
            border-radius 5px
            color #333
            border 2px solid #7F7F7F 
            background white
            text-align center
            line-height 50px  
            position relative
            left 100px    
            outline none 
          .mark
            background-color rgba(0,0,0,.5)
          .btn-size
              font-size 28px
          .problem  
            width 100%
            height 40px
            .problem1
              font-size 30px
              color $7F7F7F
              opacity 0.7
              width 142px
              height 40px
              line-height 40px 
              margin-right 280px
            .problem2
              width 228px
              height 40px
              line-height 40px  
              font-size 30px
        .phone_bottom
          width 640px
          height 292px
          position relative
          top -40px
          left 0
          .btn1
            width 670px
            height 100px
            display flex
            background #b4282d
            .login1
              width 168px
              height 32px
              font-size 28px
              color #FFFFFF  
              position relative
              top 0
              left 290px
          .btn2
            width 670px
            height 100px
            margin-top 40px 
            border 1px solid #b4282d
            .login2
              width 168px
              height 32px
              font-size 28px
              color #b4282d 
              display block
              position relative
              top 0px
              left 230px 
          .profile_phone
            width 200px
            height 40px
            line-height 40px
            font-size 28px
            color #333333   
            position relative
            left 260px
            top 30px   
             
</style>
