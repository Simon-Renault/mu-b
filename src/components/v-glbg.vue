<template lang="pug">
   div.gl(ref="gl" )


</template>

<script>
import App from '@/js/particles/App.js'

export default {
   mounted(){
      this.$nextTick(() => {
         window.app = new App();
         window.app.init(this.$refs.gl);
         window.app.next.bind(app);
      })
   }
}
</script>

<style lang="scss" scoped>
.gl{
   position: absolute;
   top:0;
   left:0;
}
</style>