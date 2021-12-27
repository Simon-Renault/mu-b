<template lang="pug">
    div.page.page-landing
        div.page__inner
            div.logo(ref="logo" :style="logoCss")
            h1.title(ref="title") Matthieu Blake
            div.actions(ref="actions")
                div.language
                    button.ll.fr( @click="setLangFR" ref="lg"  :class="{'active':isFr}")
                        span Français
                    button.ll.en( @click="setLangEN" ref="lg2" :class="{'active':isEn}")
                        span English
                button.button.enter( @click="enter" ref="button")
                    span(v-if="isEn") ENTER
                    span(v-else) ENTRER

                a( class="contect" href="mailto:matthieublake.cinema@gmail.com" target="_blank" rel="no-refer no-folow").contact Contact
</template>

<script>
import charming from 'charming'
import anime from 'animejs'

import { mapMutations, mapGetters} from 'vuex'

export default {
    data(){
        return{
            
        }
    },
    mounted(){
        this.lang = 'fr'
        localStorage.setItem('lang','fr');
    },
    computed : {
        ...mapGetters(['getLang']),
        isFr(){
            return this.getLang === "fr"
        },
        isEn(){
            return this.getLang === "en"
        },
        logoCss(){

            let rand = Math.floor(Math.random() * 3 + 1);  // random int from 1 to 4

            return {
                'background-image' : `url('/img/kanji${rand}.png')` ,
            }
        }
    },
    methods : {
        ...mapMutations(['setLang']),
        enterAnim(done) {
            window.app.next(0)
            anime({
                targets: this.$refs.logo,
                opacity : 0.8,
                loop: false,
                elasticity: 400,
                easing: 'easeOutQuad',
                duration: 800,
            })
             anime({
                targets: this.$refs.actions,
                opacity : 1,
                loop: false,
                elasticity: 400,
                easing: 'easeOutQuad',
                duration: 700,
            })
            anime({
                targets: this.$refs.title,
                opacity : 1,
                loop: false,
                elasticity: 400,
                easing: 'easeOutQuad',
                delay: 300,
                duration: 1200,
                complete: (anim) => {
                    done()
                }
            })
        },
        enter(){
            this.$router.push(`/page/2`) 
        },
        setLangFR(){
            this.setLang( 'fr' )
            localStorage.setItem('lang','fr');
        },
        setLangEN(){
            this.setLang( 'en' )
            localStorage.setItem('lang','en');
        },
        leaveAnim(done){
            window.app.next(1)
            anime({
                targets: this.$refs.logo,
                opacity : 0,
                loop: false,
                elasticity: 400,
                easing: 'easeOutQuad',
                duration: 800,
            })
            anime({
                targets: this.$refs.actions,
                opacity : 0,
                loop: false,
                elasticity: 400,
                easing: 'easeOutQuad',
                duration: 700,
            })
          
            anime({
                targets: this.$refs.title,
                opacity : 0,
                loop: false,
                elasticity: 400,
                easing: 'easeOutQuad',
                delay: 300,
                duration: 500,
                complete: (anim) =>{
                    setTimeout(()=>{ 
                        done() 
                    }, 1200);
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.page{
    z-index: 99999;
    position: relative;
    color : $color-white;
    max-width: 100vw;
    //background: #000;
    &__inner{
        z-index: 99999;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
    & .logo{
        opacity: 0;
        width: 400px;
        height: 400px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center center;
        margin: 0 0 30px 0;
    }
    & .title{
        opacity: 0;
        font-size: 5rem;
        color: $color-white;
        margin: 0 0 20px;
    }
}

.actions{
    opacity: 0;
}
.button.enter{
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid white;
    background: transparent;
    color: $color-white;
    font-size: 18px;
    height: 50px;
    min-width: 150px;
    padding: 0 40px;
    line-height: 60px;
    border-radius: 25px;
    transition: background .5s ease;
    line-height: initial;
    margin: 0;
    margin: 30px auto;
    pointer-events: all;
    &:hover{
        background: rgba(255,255,255,0.4);
    }
}
.language{
    display: flex;
    justify-content: center;
}
.ll{
    font-size: 18px;
    color: white;
    background: transparent;
    margin: 10px;
    pointer-events: all;
    &.active{
        border-bottom: 2px solid white;
    }
}
.contact{
    font-size: 18px;
    color: white;
    position: fixed;
    top: 20px;
    right: 30px;
}
</style>