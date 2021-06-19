<template lang="pug">

div.content  
    v-nav( right="/page/3" left="/page/2" top="/page/3" bottom="/page/2"  key="p1")
   

</template>

<script>
import mixin from "@/views/projects/project-mixin.js"

export default {
    mixins: [mixin],
    mounted(){
        window.app.next(2)
    }
}
</script>

<style lang="scss" scoped>
.content{
    pointer-events: none;
}
</style>