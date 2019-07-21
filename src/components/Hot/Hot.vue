<template>
  <div class="hot">
      <div class="hot-size">类目热销</div>
      <div class="hot-top">
          <div class="hot-letf">
              <div class="hot-class">
                  <span>热销类</span>
                  <div class="hot-active"></div>
              </div>
              <div class="hot-Img">
                 <img src="https://yanxuan.nosdn.127.net/06388e29fad0b7e8a9d6b1f398e5dcd3.png?imageView&quality=65&thumbnail=200x200" alt="">
              </div>
          </div>
           <div class="hot-letf active">
              <div class="hot-class">
                  <span>热销类</span>
                  <div class="hot-active"></div>
              </div>
              <div class="hot-Img">
                 <img src="https://yanxuan.nosdn.127.net/06388e29fad0b7e8a9d6b1f398e5dcd3.png?imageView&quality=65&thumbnail=200x200" alt="">
              </div>
          </div>
      </div>
      <div class="hot-bottom">
        <ul class="hot-list">
          <li>
            <div class="hot-list-life">居家生活</div>
            <div class="hot-list-Img"> 
              <img src="https://yanxuan.nosdn.127.net/768355bca1c186c0c25de88bd1272d8c.png?imageView&quality=65&thumbnail=200x200" alt="">
            </div>
          </li>
          <li>
            <div class="hot-list-life">居家生活</div>
            <div class="hot-list-Img"> 
              <img src="https://yanxuan.nosdn.127.net/768355bca1c186c0c25de88bd1272d8c.png?imageView&quality=65&thumbnail=200x200" alt="">
            </div>
          </li>
          <li>
            <div class="hot-list-life">居家生活</div>
            <div class="hot-list-Img"> 
              <img src="https://yanxuan.nosdn.127.net/768355bca1c186c0c25de88bd1272d8c.png?imageView&quality=65&thumbnail=200x200" alt="">
            </div>
          </li>
          <li>
            <div class="hot-list-life">居家生活</div>
            <div class="hot-list-Img"> 
              <img src="https://yanxuan.nosdn.127.net/768355bca1c186c0c25de88bd1272d8c.png?imageView&quality=65&thumbnail=200x200" alt="">
            </div>
          </li>
          <li>
            <div class="hot-list-life">居家生活</div>
            <div class="hot-list-Img"> 
              <img src="https://yanxuan.nosdn.127.net/768355bca1c186c0c25de88bd1272d8c.png?imageView&quality=65&thumbnail=200x200" alt="">
            </div>
          </li>
          <li>
            <div class="hot-list-life">居家生活</div>
            <div class="hot-list-Img"> 
              <img src="https://yanxuan.nosdn.127.net/768355bca1c186c0c25de88bd1272d8c.png?imageView&quality=65&thumbnail=200x200" alt="">
            </div>
          </li>
          <li>
            <div class="hot-list-life">居家生活</div>
            <div class="hot-list-Img"> 
              <img src="https://yanxuan.nosdn.127.net/768355bca1c186c0c25de88bd1272d8c.png?imageView&quality=65&thumbnail=200x200" alt="">
            </div>
          </li>
          <li>
            <div class="hot-list-life">居家生活</div>
            <div class="hot-list-Img"> 
              <img src="https://yanxuan.nosdn.127.net/768355bca1c186c0c25de88bd1272d8c.png?imageView&quality=65&thumbnail=200x200" alt="">
            </div>
          </li>
        </ul>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>    
    .hot
      width 710px
      height 710px
      box-sizing border-box
      .hot-size
         width 600px
         height 100px
         font-size 32px
         color #333
         padding 0 30px
         display block
         line-height 100px
      .hot-top
        height 210px
        width 100%
        display flex
        position relative
        top 0
        left 30px  
        .hot-letf
          width 340px 
          height 200px
          background #F9F3E4
          display flex
          margin-right 10px
          &.active
            background #EBEFF6
          .hot-class
            width 140px
            height 200px
            line-height 200px
            text-align center 
            span
              font-size 28px
              color #333
            .hot-active
              width 48px
              height 4px
              background #333
              position relative
              top -65px
              left 30px  
      .hot-bottom
        color #333
        .hot-list
          display flex
          flex-wrap wrap
          justify-content center
          margin-left 30px
          li 
            width 160px
            height 180px
            background #F5F5F5 
            margin 0 10px 10px 0
            .hot-list-life
              font-size 24px
              margin-top 10px
              text-align center
            .hot-list-Img
              width 120px
              height 120px
              position relative
              top 10px
              left 25px
              img   
                width 100%        
</style>
