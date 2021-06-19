<template lang="pug">
   main.main.project-content
        header.header
            a(@click.prevent="$router.go(-1)")
                icon.close(name="close" width="26px" height="26px" )

        .scroll
            .scroll__inner
                div.text-content(ref="content")
                    slot
         
</template>

<script>
import '@/compiled-icons'
//import {imageCrawler, extractInfos} from '@/js/helpers'
//import Vue from 'vue'

export default {
   props : ['url'],
   data(){
      return{
         baseContentUrl : '/content',
         baseAssetsUrl : '/content',
         content : null,
      }
   },
   methods: {
    //   generateImgs(img){
    //      const data = extractInfos(img)
    //      return new Vue({
    //         template : ` <v-image-loader :src="src" :alt="alt" :class="type" ></v-image-loader>`,
    //         data(){
    //            return {
    //               ...data
    //            }
    //         },
    //      }).$mount(img)
    //   },
    //   displayImages(){
    //      this.$nextTick(()=> {
    //         imageCrawler(this.$refs.content,".lazy-image",this.generateImgs)
    //      })
    //   }
   },
   mounted(){
      //this.displayImages();
   }
}
</script>

<style lang="scss" scoped>
$header-height : 60px;
$footer-height : 120px;
.project-content{
   position: relative;
   width:100vw;
   height: 100vh;
   background: $color-light-grey;
   box-shadow: 0 0 5px 0 rgba(0,0,0,0.3),0 0 20px 0 rgba(0,0,0,0.3);
   @media screen and (min-width : $medium){
      width:50vw;
   } 
}
.header{
   z-index: 99;
   position: absolute;
   top:0;
   left:0;
   right:0;
   height: $header-height;
   display: flex;
   background: transparent;
   align-items: center;
   justify-content: flex-end;
   padding: 20px;
}
.footer{
   position: absolute;
   bottom:0;
   left:0;
   right:0;
   height: $footer-height;
   background: $color-medium-gey;
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: 2rem;
}
.scroll{
   top:0;
   height: 100%;
   overflow: scroll;
   max-width: 100vw;
   &__inner{
      position: relative;
      padding-top: $header-height;
      padding-bottom: $footer-height + 100px;
      min-height: 100vh;
      max-width: 100vw;
   }
}
</style>