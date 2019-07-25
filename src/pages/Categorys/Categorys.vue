<template>
    <div class="category">
        <div class="category-top" @click="goTo('/sousuo')">
            <i class="iconfont icon-sousuo Sou"></i>
            <input type="text" placeholder="搜索商品,共21812款好物">
        </div>
        <div class="category-content">
            <div class="cateory-left" ref="Category1">
                <ul class="category-list">
                    <li class="category-item" :class="{category_active:numIndex === index}" v-for="(cate,index) in cateList" :key="index" @click="toggleCate(index,cate)">
                         <keep-alive>
                             <router-link :to="{path:'/categorys',query:{categoryId:cate.id}}">
                               {{cate.name}}
                             </router-link>
                         </keep-alive>
                    </li>
                </ul>
            </div>
            <div class="category-right" ref="Category2">
                  <div class="category-right-move">
                       <div class="categoryList-container">
                          <img :src="bannerUrl" alt="">
                       </div>
                        <div class="category-contain">
                            <ul class="category-List">
                                <li class="category-item" v-for="(c,index) in cateNum" :key="index">
                                    <div class="category-Img">
                                        <img :src="c.wapBannerUrl" alt="">
                                    </div>
                                    <span class="category-size">{{c.frontDesc}}</span>
                                </li>                     
                            </ul>
                        </div>   
                    </div>         
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import BScroll from 'better-scroll'
export default {
    data(){
        return {
            numIndex:0,
            cateNum:[],
            bannerUrl:'https://yanxuan.nosdn.127.net/cb225335d4a438564040f00b448e8db8.png?imageView&thumbnail=0x196'
        }
    },
    computed:{
        ...mapState(['cateList'])
    },
    created(){
          this.$nextTick(()=>{
            const topScroll = new BScroll(this.$refs.Category1, {
              startY:0,  
              probeType: 1,
              click: true,
              scrollY: true,
          })

          const topScroll1 = new BScroll(this.$refs.Category2, {
              startY:0,  
              probeType: 1,
              click: true,
              scrollY: true,
          })
        })
    },
    mounted(){
        //console.log(this.cateList[0].subCateList)
        if(!this.cateList[0]){
            return 
        }
        this.cateNum = this.cateList[0].subCateList 
    },
    methods:{
        toggleCate(index,cate){
            this.numIndex = index
            //console.log(this.$route.query.categoryId)
            const {id, subCateList} = cate
           // console.log(id,subCateList)
            if(this.$route.query.categoryId === id){
                this.cateNum = subCateList
            }
            this.bannerUrl = cate.bannerUrl
        },
        goTo(path){
          this.$router.replace(path)
        }
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

    .category
      width 100%
      height 100%
      .category-top
        width 690px
        height 88px
        padding 0 30px   
        border 1px solid #d9d9d9
        padding-bottom 15px    
        .Sou
          font-size 28px
          position relative
          top 45px
          left 155px
        input
          width 690px
          height 56px
          text-align center
          line-height 56px
          background #EDEDED
          font-size 28px
          color #666666
          border-radius 10px
      .category-content
        width 750px
        height 100%
        display flex
        .cateory-left
          width 162px
          height 1000px
          padding 40px 0 
          position relative
          overflow hidden
          .category-list 
            width 162px
            height 1150px
            position absolute
            .category-item
              width 156px
              height 49px
              font-size 28px
              text-align center
              line-height 49px
              box-sizing border-box
              margin-bottom 35px
              &.category_active
                color #ab2b2b
                border-left 6px solid #ab2b2b
        .category-right
          width 588px
          height 1052px
          padding 30px 30px 21px
          box-sizing border-box
          overflow hidden
          .category-right-move
            width 588px
            height 1148px
            margin-top 20px
            .categoryList-container
              width 528px
              height 192px
              img 
                width 528px
                height 182px
            .category-contain
              width 550px
              height 700px  
              .category-List
                width 550px
                height 700px            
                .category-item
                  float left 
                  width 124px
                  height 216px
                  margin-right 59px
                  .category-Img
                    width 124px
                    height 144px
                    border-radius 50%
                    background #F5F5F5
                    img 
                      width 144px
                      height 144px
                      border-radius 50%  
                  .category-size
                    font-size 24px
                    color #333333               
</style>
