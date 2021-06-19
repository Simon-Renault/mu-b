<template lang="pug">
div
    v-project-content( :url="nextUrl" )
        div.content(v-html="html")
        v-accordion( v-if="project.entretiens" :content="project.entretiens")
    div.left
        v-island.island(key="nyx" 
                        :project="project"
                        delay=0
                        :forceHover="true")
</template>

<script>
import projects from '@/data/projects_1.js'
import axios from 'axios'
import {mapGetters} from 'vuex'
import islands from '@/components/island/data.js'
import accordion from '@/components/v-accordion'

export default {
    components : {
        'v-project-content' : () => import('@/components/v-project-content.vue'),
        'v-island' : () => import('@/components/island/v-island.vue'),
        'v-accordion' : accordion
    },
    data(){
        return {
            projects,
            html: '',
            id : this.$route.params.id,
            projects,
        }
    },
    computed : {
        ...mapGetters(['getLang']),
        project(){
            return projects[this.id]
        },
        nextUrl(){
            return `/project${this.projects[this.$route.params.id].next}`
        },
        url(){
            const project_id = this.$route.params.id
            const base = `/content/${project_id}`
            const lang = this.getLang

            return {
                fr : `${base}/${lang}.html`,
                en : `${base}/${lang}.html`
            }
        }
    },
    methods: {
        fetchContent(){
            axios.get(this.url.fr)
                .then(response =>{
                    this.html = response.data
                    this.$refs.render.innerHTML = this.html
                })
        },
        enterAnim(done) {
            done()
        },
        leaveAnim(done){
            done()
        }
    },
    mounted() {
        this.fetchContent();
    },
}
</script>

<style lang="scss" scoped>
.left{
    position: fixed;
    width: 50vw;
    right:0;
    top:0;
    height: 100vh;
    justify-content: center;
    align-items: center;
    display: none;
    pointer-events: none;
    @media screen and (min-width : $medium){
        display: flex;
    } 
}

.content{
    padding: 0 10%;
    &  img{
        margin: 20px 0;
    }
}

</style>