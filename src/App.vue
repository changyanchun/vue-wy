<template>
 <div id="app">
   <router-view></router-view>
   <FooterGuide v-if="$route.meta.isShowFooter"/>
 </div>
</template>

<script type="text/ecmascript-6">
import FooterGuide from '../src/components/FooterGuide/FootGuide.vue'


  export default {
    //注册组件
    components:{
      FooterGuide,
    },
    mounted(){
        this.$store.dispatch('reNav')
        this.$store.dispatch('reList')
    },
    
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    #app
      width 100%
</style>
