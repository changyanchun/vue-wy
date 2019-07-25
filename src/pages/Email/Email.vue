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
            <input type="text" class="inp1" placeholder="邮箱账号" v-model="email" name="email" v-validate="'required|nobile'">
            <div class="line"></div>
            <span class='message' style="color: red;" v-show="errors.has('email')">{{ errors.first('email') }}</span>
            <input type="text" class="inp2" placeholder="密码">
            <div class="line1"></div>
            <div class="problem">
              <span class="problem1">注册账号</span>
              <span class="problem2">忘记密码</span>
            </div>
          </div>

          <div class="phone_bottom">
            <mt-button type="danger" class="btn1" @click="loginTo">
              <span class="login1">登录</span>
            </mt-button>
            <mt-button plain class="btn2" @click="goHome('/profile')">
              <span class="login2" >其他登录方式</span>
            </mt-button>
          </div>
       </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import {Toast} from 'mint-ui'
  export default {
      data(){
          return {
              email:'',//邮箱
          }
      },
      methods:{
        goHome(path){
            this.$router.push(path)
        },

         /* 登录统一验证 */
        loginTo(){
              const {email} =this
              const  names = email 
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

<style lang="stylus" rel="stylesheet/stylus">
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
            padding 22px 0 22px 5px 
            position relative
            outline none 
          ::-webkit-input-placeholder
            font-size 26px   
          .line
            width 670px
            height 1px
            position relative
            top 0
            left 0
            background #666
            opacity 0.5
            margin-bottom 50px
          .message 
            display block
            font-size 24px
            height 40px  
            line-height 40px
            margin-top -40px  
            background white
          .inp2
            width 380px
            height 45px
            padding 22px 0 22px 5px  
            outline none 
          .line1
            width 670px
            height 1px
            position relative
            top 0
            left 0
            background #666
            opacity 0.5 
            margin-bottom 20px
          .problem  
            width 100%
            height 40px
            .problem1
              font-size 28px
              color $7F7F7F
              opacity 0.5
              width 142px
              height 40px
              line-height 40px 
              margin-right 440px
            .problem2
              width 228px
              height 40px
              line-height 40px  
              font-size 28px
              opacity 0.5
        .phone_bottom
          width 690px
          height 292px
          position relative
          top -140px
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
              opacity 0.5
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
               
</style>
