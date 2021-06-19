<template lang="pug">
    
path.item__path(    :d="path" 
                    :data-morphPath="morphPath"
                    :transform="transform" )


</template>

<script>
import Path from '@/components/island/path'

export default {
    props : {
        isHover : {
            type : Boolean,
            default: false,
            required : true, 
        },
        path : {
            type : String,
            required : true, 
        },
        transform : {
            type : String,
            required : false
        },
        morphPath : {
            type : String,
            required : true, 
        }
    },
    data(){
        return {
            Path : null,
            seed : ''
        }
    },
    watch: {
        isHover(){
            this.isHover === true 
                ? this.Path.hoverIn()
                : this.Path.hoverOut()
        }
    },
    mounted(){
        this.Path = new Path(this.$el)
    },
    beforeDestroy() {
        this.Path = null
    },
}
</script>

<style lang="scss" scoped>
.item__path{
    transform-origin: center center;
}
</style>