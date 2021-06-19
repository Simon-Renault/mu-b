<template lang="pug">

div.content  

    v-island.island.a(  key="shisha_no_sho" 
                        :project="projects['shisha_no_sho']"
                        delay=300)

    v-island.island.d(  key="devant_larchipel" 
                        :project="projects['devant_larchipel']"
                        delay=300)

    v-island.island.b(  key="entretiens" 
                        :project="projects['entretiens']"
                        delay=300)
                        
    v-island.island.c(  key="nyx" 
                        :project="projects['nyx']"
                        delay=300)

    


    v-nav( right="/page/2" left="/page/1" top="/page/2" bottom="/page/1" key="p3")

</template>

<script>
import mixin from "@/views/projects/project-mixin.js"

export default {
    mixins: [mixin],
    mounted(){
        window.app.next(1)
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