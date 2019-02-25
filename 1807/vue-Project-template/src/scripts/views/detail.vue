<template>
    <div>
        <meilele-search></meilele-search>
        <div class="detailContent clearfix">
            <div class="meilepath">
                <!-- 面包屑 -->
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item>活动管理</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="detailContentLeft">
               <div class="left">
                    <my-magnify :previewImg="data.min" :zoomImg="data.max"></my-magnify>
                </div>
            </div>
            <div class="detailContentRight">
                <p>{{ $route.query.goodsname }}</p>
                <a href="javascript:void(0)" class="hongbao"><img src="//image.meilele.com/images/201812/1544728736851035313.jpg" alt=""></a>
                <div class="msgBox">
                    <p>
                        <span class="salemsg">促销价</span>
                        <span class="goodsprice">￥{{ $route.query.goodsprice }}</span>
                        <a href="javascript:void(0)" class="tongzhi">降价通知</a>
                    </p>
                    <p>
                        <span class="salemsg">领券</span>
                        <a href="javascript:void(0)"><img src="../../assets/imgs/kaquan.png" alt=""></a>
                    </p>
                    <p class="goodsnum">
                        <span class="salemsg">数量</span>
                        <button @click="count--" :disabled="count<=1">-</button>
                        <input type="text" v-model="count" disabled>
                        <button @click="count++">+</button>
                    </p>
                    <button class="addBtn" @click="addshopingcar">加入购物车</button>
                </div>
            </div>
        </div>
    </div>
    
    
</template>



<script>
    import axios from "axios";
    axios.defaults.baseURL = "http://60.205.210.6:1314";
    import {mapActions ,mapState,mapMutations,mapGetters} from "vuex";
    import Search from "../components/search.vue";
    import MyMagnify from "../components/fangdajing.vue";

 

    import { MessageBox ,Message} from 'element-ui';
    // import router from "../router";
    export default {
        data(){
            return{
                data: { 
                    min:"",
                    max:"", 
                    // count:'1'
                },
                count:1
            }
        },
        components:{
            "meilele-search":Search,
            MyMagnify
        },
        computed: {
            ...mapState([
                'allgoods'
            ]),
            numb:{
                get(){
                    return this.$store.state.numb
                },
                set(val){
                    this.$store.commit("addnum",val)
                }
            }
        },
        created() {
            console.log(this.$route.query)
            this.data.min = this.$route.query.goodsimg;
            this.data.max = this.$route.query.goodsimg;
        },
        methods: {
            ...mapActions([
                'getgoodsnum'
            ]),
            addshopingcar(){
                var that=this;
                if(sessionStorage.username){
                    console.log(this.count)
                     axios({
                        method:"post",
                        url:"/addshopingcar",
                        data:{
                            uid:sessionStorage.uid,
                            goodsid:that.$route.query.goodsid,
                            count:this.count
                        }
                    }).then(res=>{
                        console.log(res)
                        if(res.data.type==1){
                            that.getgoodsnum(sessionStorage.uid)
                             MessageBox.confirm('加入购物车成功', '友情提示', {
                                confirmButtonText: '确定',
                                cancelButtonText: '取消',
                                type: 'warning'
                                }).then((res) => {
                                    // 点击确定的回调
                                    // router.push({name:'login'})
                                    
                                }).catch(() => {
                                    // 点击取消的回调
                                    // Message({
                                    //     type: 'success',
                                    //     message: '你继续以游客身份访问'
                                    // });    
                            });
                        }
                    })
                    
                }else{
                    MessageBox.confirm('你还未登录,是否登录后再购买', '友情提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then((res) => {
                    // 点击确定的回调

                    // router.push({name:'login'})
                    this.$router.push({name:'login'})
                }).catch(() => {
                    // 点击取消的回调
                        Message({
                            type: 'success',
                            message: '你继续以游客身份访问'
                        });    
                    });
                }
                
            }
        },
    }
</script>


<style scoped>
    .detailContent{box-sizing: border-box;padding: 20px 35px;width: 100%;border: 1px solid}
    .meilepath{padding-bottom: 15px;}
    .detailContentLeft{float: left; width: 480px;margin-right: 35px;}
    .detailContentRight{float: left; width: 510px;}
    .hongbao{display: inline-block;margin-top: 20px;}
    .msgBox{font-size: 14px;color: #999;}
    .msgBox p{height: 34px;line-height: 34px;}
    .goodsprice{color: red;font-weight: 700;font-size: 18px;}
    .tongzhi{color: red;}
    .salemsg{display: inline-block;width: 70px;}
    .msgBox p img{display: inline-block;vertical-align: middle;}
    .tongzhi{margin-left: 20px;}


    .addBtn{display: block;margin: auto; width: 177px;height: 46px;border: 1px solid red;background-color: #ffeded;color: red;cursor: pointer;margin-top: 30px;}
    .addBtn:hover{background-color: white;}

    
    .goodsnum button{display: inline-block;width: 32px;height: 27px;border: 1px solid #999;color: #999;background-color: white;cursor: pointer;}
    .goodsnum button:hover{color: black;}
    .goodsnum input{display: inline-block; width: 40px;height: 25px;border: 1px solid #999;text-align: center;}
</style>

