<template lang="pug">
div.page.page-projects
    div.page__inner
        component( :is="cId" :key="cId")



</template>

<script>
import p1 from '@/views/projects/1.vue'
import p2 from '@/views/projects/2.vue'
import p3 from '@/views/projects/3.vue'

export default {
    components : {
        "p1" : p1,
        "p2" : p2,
        "p3" : p3,
    },
    data(){
        return {
            id : 0,
            defaultPage : 1,
        }
    },
    watch: {
        '$route' (to, from) {
            if(to !== from){
                this.id = this.$route.params.id
            }
        }
    },
    methods: {
        enterAnim(done) {
            done()
        },
        leaveAnim(done){
            done()
        }
    },
    computed: {
        cId(){
            return this.id != 0 ? `p${this.id}` : `p${this.defaultPage}`
        }
    },
    mounted(){
        this.id = this.$route.params.id
    }
}
</script>

<style lang="scss" >
.page-projects{
    position: relative;
    max-width: 100vw;
    max-height: 100vh;
    height: 100vh;
    width: 100vw;
    max-width: 100vw;
    @media screen and (max-width : $medium){
        overflow: scroll !important;
    } 
    @media screen and (min-width : $medium){
        pointer-events: none;
    } 
}
.page__inner{
    display: flex;
    min-height: 100vh;
    pointer-events: none;
    max-width: 100vw;
    @media screen and (max-width : $medium){
        overflow: scroll !important;
    } 
}
</style>