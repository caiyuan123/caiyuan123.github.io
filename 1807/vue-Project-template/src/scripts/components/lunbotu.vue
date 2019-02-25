<template>
    <div>
        <el-carousel class="bigimglist clearfix">
            <el-carousel-item v-for="(item,index) in bigImg" :key="index" class="bigimglist clearfix">
                <a href="javascript:void(0)"><img :src="item.imgsrc" alt=""></a>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>


<script>

    import {mapActions ,mapState,mapMutations,mapGetters}  from "vuex"


    export default {
        computed: {
            ...mapState([
                'allgoods'
            ]),
            ...mapGetters(['bigImg'])
        },
        mounted(){
            
        },
        created(){
            // var bigImgList=[];
            // this.allgoods.forEach((item) => {
            //     if (item.type=='6') {
            //         bigImgList.push(item)
            //     }
            // })
            // console.log(bigImgList)
            this.$nextTick(()=>{


            })
        }
    }
</script>

<style scoped>
    .bigimglist{height: 460px;}
    .bigimglist img { width:100%; height:auto;}
</style>
