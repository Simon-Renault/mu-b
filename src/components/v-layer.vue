<template lang="pug">
div.layer
    div.layer__content
        slot
</template>


<style lang="scss" scoped>
.layer{
    position: absolute;
    top:0;
    right:0;
    left:0;
    bottom:0;
    width: 100%;
    height: 100%;
    max-width: 100vw;
    &__content{
        width: 100%;
        height: 100%;
        max-width: 100vw;
    }
}
</style>