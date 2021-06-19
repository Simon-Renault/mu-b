<template lang="pug">
g.item__deco
    path.item__deco( :d="path" )
    path.item__outline__1( :d="path" )
    path.item__outline__2( :d="path" )
      
</template>

<script>
import Deco from '@/components/island/deco'

export default {
    props : {
        isHover : {
            type : Boolean,
            default: false,
            required : true, 
        },
        path : {
            required : true,
            type: String,
        }
    },
    data(){
        return {
            deco : null,
        }
    },
    watch: {
        isHover(){
            this.isHover === true 
                ? this.deco.hoverIn()
                : this.deco.hoverOut()
        }
    },
    mounted(){
        this.deco  = new Deco(this.$el)
    },
    beforeDestroy() {
        this.deco = null
    },
}
</script>

<style lang="scss" scoped>
.item__deco{
    fill: rgba(70,70,70,0.6);
    transform-origin: center center;
    transform: scale(.7);
}
.item__outline{
    &__1{
        transform-origin: center center;
        transform: scale(.8);
        fill: transparent;
        stroke: rgba(70,70,70,0.6);
        stroke-width: 2;
    }
    &__2{
        transform-origin: center center;
        transform: scale(.9);
        fill: transparent;
        stroke: rgba(70,70,70,0.5);
    }
}
</style>