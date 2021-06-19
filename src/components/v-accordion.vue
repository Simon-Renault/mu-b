<template lang="pug">
div.accordion-container
    section.section(v-for="(entretien,i) in new_content")
        div.top(@click="index = i === index ? null : i")
            div.title {{entretien.title}}
            div.action( :class="{'open': i === index}")  
                svg(version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink")
                    g(fill="#000")
                        path(opacity="0" d="M0,0h24v24h-24Z" transform="matrix(-1,1.22465e-16,-1.22465e-16,-1,24,24)")
                        path(d="M10.46,18l6.4199e-08,3.7781e-10c-0.314032,-0.00184808 -0.624132,-0.070002 -0.909999,-0.2l-1.66569e-08,-7.34214e-09c-0.631438,-0.278329 -1.04197,-0.899988 -1.05,-1.59v-8.42l-7.15866e-08,6.15037e-06c0.00803011,-0.690012 0.418557,-1.31167 1.04999,-1.59l4.95824e-08,-2.34199e-08c0.725814,-0.342834 1.58357,-0.241921 2.21,0.26l5.1,4.21l-4.78779e-09,-3.81159e-09c0.734539,0.58477 0.85595,1.65428 0.27118,2.38882c-0.0798753,0.100333 -0.170847,0.191305 -0.27118,0.27118l-5.1,4.21l-1.00739e-08,8.16954e-09c-0.36762,0.298126 -0.826689,0.460566 -1.3,0.46Zm0,-10v7.9l4.86,-3.9Z")
    

        div.content(v-if="index === i" v-html=" entretien.content")
</template>

<script>
import axios from 'axios'
export default {
    props : {
        content : {
            required : false,
            type : Array
        }
    },
    data(){
        return {
          index:-1,
          new_content : [

          ]
        }
    },
    async mounted(){

        const x = Promise.all(this.content.map(async x => {
            const res = await  axios.get(`/content/entretiens/entretiens_fr/${x.file}`)
            return {
                ...x,
                content : res.data
            }
        }))

        this.new_content = await x
        
        
              
    }
}
</script>

<style lang="scss" scoped>
.accordion-container{
    padding:10%;
    font-size: 20px;
}
.section{
    display:flex;
    flex-direction: column;
    .top{
        z-index:99;
        top: 0px;
        padding: 0 10px;
        position: sticky;
        display:flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        height: 50px;
        box-shadow: 0 0 0 2px black;
        background: #E2E4E6;
        font-weight: 600;
    }
    .open svg{
        transform: rotate(.25turn);
    }
    svg{
        transition: all .2s ease;
        width:30px;
        height:30px;
    }
    .content{
        max-height: 600px;
        overflow:scroll;
         padding: 30px 20px;
    }
}

</style>