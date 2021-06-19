<template lang="pug">
  .app
    v-layer
      v-gl

    transition( @enter="enter" 
                @leave="leave" 
                name="test"
                mode="out-in"
                appear)
      router-view(ref="routerViewRef")

</template>

<script>
import islands from '@/components/island/data.js'
import gl from '@/components/v-glbg.vue'

export default {
  components : {
    'v-gl' : gl,
    'v-island' : () => import('@/components/island/v-island.vue'),
  },
  data(){
    return {
      islands
    }
  },
  methods: {
    enter: function (el, done) {
        this.$refs.routerViewRef.enterAnim(done);
    },
    leave: function (el, done) {
        this.from.leaveAnim(done);
    }
  },
  watch:{
    //Retreive the page instance that will leave before the routerViewRef get updated
    $route (to, from){
        this.from = this.$refs.routerViewRef;
    }
  } 
}
</script>

<style lang="scss" src="@/scss/base.scss"></style>