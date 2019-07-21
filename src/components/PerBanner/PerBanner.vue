<template>
          <div class="swiper-container Swiper" ref="Swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(shops,index) in shopArr" :key="index">
                <a href="javascript:" class="link-shop" v-for="(shop,index) in shops" :key="index">
                    <div class="shop-Img">
                        <img :src="shop.listPicUrl" alt="">
                    </div>
                    <div class="shop-size">
                        <span class="shop-1">{{shop.name}}</span>
                        <span class="shop-2">￥{{shop.retailPrice}}</span>
                    </div>
                </a>
              </div>
            </div>
             <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
          </div>
     
</template>

<script type="text/ecmascript-6">
 import Swiper from 'swiper/dist/js/swiper' 
  import "swiper/dist/css/swiper.min.css"
  export default {

     props:{
         shops:Array
     },
     computed:{
          
       shopArr(){
           
           const bigArr=[]
           let smallArr=[]
           const shopList = this.shops || []
           //console.log(shopList)
            shopList.forEach(shop =>{
                //将小数组放到大数组里
                if(smallArr.length === 0){
                    bigArr.push(smallArr)
                }
                //将分类对象放到小数组里
                smallArr.push(shop)
                //如果满了重新创建一个新的数组
                if(smallArr.length === 3){
                    smallArr = []
                }
            })
            return bigArr
       }
     },
     watch:{
         shops(){
             this.$nextTick(()=>{
                  new Swiper (this.$ref.Swiper, {
                   // direction: 'horizontal', // 垂直切换选项
                    loop: true, // 循环模式选项
                    //autoplay:true, //自动轮播
                    // 如果需要分页器
                    pagination: {el: '.swiper-pagination'}       
                })
             })
         }
     }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .swiper-container                
        width 720px
        height 400px
        margin-left 25px    
        .swiper-wrapper
          width 720px
          height 100%
          .swiper-slide
            float left 
            top 0
            left 0
            display flex
            .link-shop
              width 300px
              height 216px
              .shop-Img
                width 216px
                height 216px
                background #f5f5f5
                img 
                    width 100%
                    height 100%
            .shop-size
              width 216px
              height 72px
              font-size 24px
              color #333
              line-height 40px
              .shop-2
                color #b4282d  
        .swiper-pagination-bullets
          position relative
          bottom 60px
          left -10px
          .swiper-pagination-bullet
            width 12px
            height 12px
          .swiper-pagination-bullet-active 
            background #b4282d        
</style>
