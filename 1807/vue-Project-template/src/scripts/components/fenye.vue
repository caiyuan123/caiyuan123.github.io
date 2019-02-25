<template>
    <div>
        <div class="fenye">
            <div class="block">
                <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :page-size="danye"
                layout="prev, pager, next, jumper"
                :total="count">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    import {mapActions ,mapState,mapMutations,mapGetters} from "vuex";
    

    export default {
        computed: {
            ...mapState([
                'username','status','allgoods','shangping','danye','count','goodstype'
            ])
        },
        methods: {
            ...mapActions([
                'getAllGoods','setmeilelepage','getgoods'
            ]),
            handleSizeChange(){
                // alert("1")
                // console.log(this)
            },
            handleCurrentChange(){
                var num=document.querySelector(".active").innerHTML;
                // console.log(a)
                //分页的搜索
                this.getgoods({num,type:this.goodstype})
                console.log(this.goodstype)
            }
        }
    }
</script>

<style scoped>
    .fenye{width: 400px;margin: auto;}
</style>