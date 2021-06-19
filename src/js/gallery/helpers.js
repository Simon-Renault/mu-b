export default {
    async getAllImages(el){
        const nodelist =  await [...document.querySelectorAll(img)]
        return nodelist
    },
    async generateGalleyObject(){

    }
}