<template>
  <div class="sou">
      <div class="sou_top">
          <i class="iconfont icon-sousuo Sou"></i>
          <input type="text" placeholder="人字拖限时9.9元" class="seek" v-model="keyworld">
          <span class="cancle" @click="back('/msite')">取消</span>
      </div>
      <div class="sou_content"  v-if="!keyworld">
          <div class="sou_hot">热门搜索</div>
          <div class="sou_container">
              <ul class="sou_list">
                  <li class="sou_item" :class="{active :current === index}" v-for="(item,index) in souList" :key="index" @click="toggle(index)">
                      <span class="item1">{{item.keyword}}</span>
                  </li>
              </ul>
          </div>
      </div>
      <div class="sou_bg">

      </div>
  </div>
</template>

<script type="text/ecmascript-6">
 import {mapState} from 'vuex'
  export default {
      data(){
          return{
              current:1,
              keyworld:''
          }
      },
      computed:{
          ...mapState(['souList'])
      },
      methods:{
          back(path){
              this.$router.replace(path)
          },
          toggle(index){
              this.current = index
          }
      }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .sou
      width 100%
      height 100%
      .sou_top
        width 690px
        height 88px
        padding 0 30px
        line-height 88px
        .Sou
          font-size 28px 
          display block
          position absolute 
          left 50px
        .seek
          width 540px
          heigth 56px
          padding-left 60px
          line-height 56px
          background #f4f4f4
          border-radius 5px
          outline none 
        ::-webkit-input-placeholder   
          font-size 28px
          color #999999
        .cancle
          width 56px
          height 41px
          font-size 28px
          color #333333
          margin-left 30px  
      .sou_content
        width 690px
        height 326px
        padding 0 30px  
        .sou_hot
          width 690px
          height 90px
          line-height 90px
          font-size 28px
          color #999999  
        .sou_container
          width 720px
          height 238px
          box-sizing border-box
          .sou_list
            width 100%
            height 100%
            .sou_item
              float left
              height 47px
              font-size 24px
              white-space nowrap
              margin-right  27px
              margin-bottom 32px 
              border 1px solid #999999
              line-height 47px
              box-sizing border-box
              &.active
                color #b4282d
                border 1px solid #b4282d
              .item1
                padding 0 10px
      .sou_bg 
        width 100%
        height 910px
        background #f4f4f4         
</style>
