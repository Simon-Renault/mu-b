
<template>
  <div :class="{'box-image' : true ,'placeholder':true, 'loaded' :loaded}" :style="styles">
    <transition name="fade" v-if="placeholder">
      <img v-show="loadedPlaceholder" v-on:load="onLoadedPlaceholder" :src="placeholder"  :style="styles" class="blured" :class="{'loaded': loaded}">
    </transition>
    <transition name="fade">
      <img v-show="loaded" v-on:load="onLoaded" :src="src"  :alt="alt" :style="styles" >
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'image-loader',
    props: {
      src: {
        type: String,
        required: true
      },
      alt: {
        type: String,
        required: false
      },
      placeholder: {
        type: String,
        required: false
      },
      width: {
        type: String,
        required: false
      },
      height: {
        type: String,
        required: false
      }
    },
    data () {
      return {
        loaded: false,
        loadedPlaceholder: false,
      }
    },
    computed: {
      styles: function () {
        let styles = {}
        
        if (this.width) {
          styles.width = this.width
        }
        if (this.height) {
          styles.height = this.height
        }
        return styles
      }
    },
    methods: {
      onLoaded () {
        this.loaded = true
      },
      onLoadedPlaceholder () {
        this.loadedPlaceholder = true
      }
    }
  }
</script>

<style scoped lang="scss">

.fade-enter-active {
  transition: opacity 800ms ease-in-out;
}
.fade-enter-to {
  opacity: 1;
}
.fade-enter {
  opacity: 0;
}

.box-image {
  display: flex;
  position: relative;
  overflow: hidden;
  position: relative;
}
.box-image img {
  position: absolute;
  top: 0;
  left: 0;
  bottom:0;
  right:0;
  height: 100%;
  width: 100%;
  transition: 800ms all ease-in-out;
} 
.blured {
  filter: blur(25px);
}

</style>
