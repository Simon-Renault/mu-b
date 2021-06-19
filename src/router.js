import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import( '@/views/page-landing.vue')
    },
    {
      path:  '/page/:id',
      component: () => import( '@/views/page-projects.vue')
    },
    {
      path :'/project/:id',
      component : () => import( '@/views/page-project.vue')
    },
  ]
})
