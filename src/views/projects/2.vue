<template lang="pug">

div.content   

    v-island.island.a(  key="kurosawas_grave" 
                        :project="projects['kurosawas_grave']"
                        delay=300)

    v-island.island.b(  key="hotel" 
                        :project="projects['hotel']"
                        delay=300)
                        
    v-island.island.c(  key="GIF" 
                        :project="projects['gif']"
                        delay=300)

    v-island.island.c(  key="CV" 
                        :project="projects['cv']"
                        delay=300)

    v-nav( right="/page/1" left="/page/3" top="/page/1" bottom="/page/3" key="p2")

 
</template>

<script>
import mixin from "@/views/projects/project-mixin.js"

export default {
    mixins: [mixin],
    mounted(){
        window.app.next(3)
    }
}
</script>

<style lang="scss" scoped>



.content{
    margin: auto;
    display:grid;
    width: 100%;
    pointer-events: none;
    grid-template-columns: repeat(1,1fr);
    @media only screen and (min-width: 600px) {
        grid-template-columns: repeat(2,1fr);
    }
    @media only screen and (min-width: 1200px) {
        grid-template-columns: repeat(4,1fr);
    }

    & .island{
        //border: 1px solid red;
       
    }
}

</style>