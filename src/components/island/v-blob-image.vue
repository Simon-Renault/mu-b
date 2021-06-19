<template lang="pug">
g
    clipPath(:id="`clipShape${seed}`")
        slot

    g( :clip-path="`url(#clipShape${seed})`" ref="main" )
        image.item__img( :xlink:href="img" x="0" y="0" height="500px" width="500px" ref="img")
        
</template>

<script>
import Image from '@/components/island/image'

export default {
    props : {
        isHover : {
            type : Boolean,
            default: false,
            required : true, 
        },
        img : {
            type : String,
            required : true,
            default : 'img/texture1.png'
        }
    },
    data(){
        return {
            Image : null,
            seed : ''
        }
    },
    watch: {
        isHover(){
            this.isHover === true 
                ? this.Image.hoverIn()
                : this.Image.hoverOut()
        }
    },
    created(){
        this.seed = Math.random().toString(36).substring(7)
    },
    mounted(){
        this.Image  = new Image(this.$refs.img)
    },
    beforeDestroy() {
        this.Image = null
    },
}
</script>

<style lang="scss" scoped>
.item__img{
    transform-origin: center center;
}
</style>