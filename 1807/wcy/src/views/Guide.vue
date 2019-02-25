<template>
    <div class="guide">
        <mt-swipe 
        v-bind:auto="4000"
        :show-indicators="false"
        >
            <mt-swipe-item v-for="(img,index) in imgs" :key="index"  >
                <img @click="gotoIndex(index)" v-bind:src="img" alt="" class="img">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>


<script>
export default {
    data(){
        return {
            imgs:[
                require("../assets/images/slide1.png"),
                require("../assets/images/slide2.png"),
                require("../assets/images/slide3.png"),
                require("../assets/images/slide4.png"),
            ]
        }
    },
    methods:{
        gotoIndex(index){
            
            if(index==this.imgs.length-1){
                this.$router.push("/app/")
            }
        }
    },
    mounted(){
        if(localStorage.pcount){
            this.$router.push("/app/")
        }else{
            localStorage.pcount = 1;
        }
    }

}
</script>

<style scoped>
.guide , .mint-swipe ,.img{
    width:100%;
    height:100%;
}

</style>
