import islands from '@/components/island/data.js'
import projects from '@/data/projects_1.js'


export default {
    components : {
        'v-island' : () => import('@/components/island/v-island.vue'),
    },
    data(){
        return {
            islands,
            projects
        }
    },
    methods: {
        enterAnim(done) {
            done()
        },
        leaveAnim(done){
            done()
        }
    }
}