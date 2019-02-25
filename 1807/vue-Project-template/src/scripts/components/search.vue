<template>
    <div class="seach">
        <div class="seachTop">
            <div class="seachTopLeft">
                <div v-if="status">
                    <router-link :to="{name:'homepage'}">{{username}}</router-link>
                    <a href="javascript:void(0)" @click="exit">[退出]</a>
                </div>
                <div v-else>
                    <router-link :to="{name:'login'}">请登录</router-link>
                    <router-link :to="{name:'register'}">免费注册</router-link>
                </div>
            </div>  
            <div class="seachTopRight">
                <ul>
                    <li>
                        <el-dropdown>
                            <span class="el-dropdown-link">
                                <router-link :to="{name:'homepage'}">我的美乐乐</router-link>
                                <i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>我的订单</el-dropdown-item>
                                <el-dropdown-item>我的金币</el-dropdown-item>
                                <el-dropdown-item>我的红包</el-dropdown-item>
                                <el-dropdown-item disabled>我的收藏</el-dropdown-item>
                                <el-dropdown-item divided>我的评价</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </li>
                    <li>
                        <el-dropdown>
                            <span class="el-dropdown-link">
                                <router-link :to="{name:'shopingcar'}">
                                    <el-badge :value="goodsnum" :max="99" class="item">
                                        购物车
                                    </el-badge>
                                    </router-link>
                                
                            </span>
                            <el-dropdown-menu slot="dropdown">
                             
                            </el-dropdown-menu>
                        </el-dropdown>
                    </li>
                    <li>
                        <el-dropdown>
                            <span class="el-dropdown-link">
                                <router-link :to="{name:'homepage'}">关注美乐乐</router-link>
                                <i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>
                                    <img src="../../assets/imgs/erweima.png" alt="">
                                </el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </li>
                    <li>
                        <el-dropdown>
                            <span class="el-dropdown-link">
                                <router-link :to="{name:'homepage'}">帮助中心</router-link>
                                <i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>
                                    购买流程
                                </el-dropdown-item>
                                <el-dropdown-item>
                                    购买流程
                                </el-dropdown-item>
                                <el-dropdown-item>
                                    购买流程
                                </el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </li>
                    <li>
                        <a href="javascript:void(0)">收藏本站</a>
                    </li>
                    <li>全国热线: <span class="tel">123456789</span> </li>
                </ul>
            </div>
        </div>
        <div class="seachContent">
            <el-row>
                <el-col :span="4">
                    <div class="grid-content bg-purple">
                        <img src="../../assets/imgs/logo.png" alt="">
                    </div>
                </el-col>
                <el-col :span="14" class="seachCenter">
                        <el-input  placeholder="请输入内容" class="input-with-select my-inp" v-model="seachmsg">
                            <el-button slot="append" icon="el-icon-search" ></el-button>
                        </el-input>
                </el-col>
                <el-col :span="6" class="hongbaoBox">
                    <div class="grid-content bg-purple">
                        <div class="hongbao">
                            <img src="../../assets/imgs/qianghongbao.png" alt="">
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="seachMenu">
            <el-row>
                <el-col :span="4">
                    <div class="grid-content bg-purple">
                        <p class="allgoods">商品分类</p>
                    </div>
                </el-col>
                <el-col :span="20">
                    <div class="grid-content bg-purple-light">
                        <ul class="menu">
                            <li>
                                <router-link :to="{name:'homepage'}" :style="meilelepage=='home'?{'color':'red'}:''">首页</router-link>
                            </li>
                            <li>
                                <router-link :to="{name:'shafa'}" :style="meilelepage=='shafa'?{'color':'red'}:''">沙发</router-link>
                            </li>
                            <li>
                                <router-link :to="{name:'chuang'}" :style="meilelepage=='chuang'?{'color':'red'}:''">床</router-link>
                            </li>
                            <li>
                                <router-link :to="{name:'zhuoyizuhe'}" :style="meilelepage=='zhuoyizuhe'?{'color':'red'}:''">桌椅组合</router-link>
                            </li>
                            <li>
                                <router-link :to="{name:'chugui'}" :style="meilelepage=='chugui'?{'color':'red'}:''">橱柜</router-link>
                            </li>
                            <li>
                                <router-link :to="{name:'dengjutaocan'}" :style="meilelepage=='dengjutaocan'?{'color':'red'}:''">灯具套餐</router-link>
                            </li>
                        </ul>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>


<script>
    import axios from "axios";
    import {mapActions ,mapState,mapMutations} from "vuex";


    export default {
        data(){
            return{
                // seachmsg:""
            }
        },
        computed: {
            ...mapState([
                'username','status','meilelepage','goodsnum'
            ]),
            seachmsg:{
                get(){
                    return this.$store.state.seachmsg
                },
                set(val){
                    this.$store.commit("changeSearchMsg",val);
                    this.seachgoods(val)
                }
            }
        },
        methods: {
            ...mapActions([
                'getAllGoods','getstatus','exit','seachgoods','getgoodsnum'
            ]),
            // seachgoods(){
            //     // var that=this
            //     // alert(this.seachmsg)
            //     // var msg=this.seachmsg
            //     // this.seachgoods(msg)
            // }
        },
        created(){
            this.getAllGoods()
            this.getstatus()
            if(sessionStorage.username){
                this.getgoodsnum(sessionStorage.uid)
            }
            
        }
        
    }
</script>


<style scoped>
    /* .seach{border-bottom: 2px solid red;} */
    .seachTop{box-sizing: border-box;padding: 0 30px;height: 30px;background-color: #f8f8f8;font-size: 12px;line-height: 30px}
    .seachTopLeft{float: left;}
    .seachTop a{color: #717171;padding: 0 8px}
    .seachTop a:hover{color: red;}
    .seachTopRight{float: right;}
    .seachTopRight ul li{float: left;}
    .tel{color: red;font-weight: 700;}
    .seachContent{box-sizing: border-box;padding: 20px 30px;}
    .seachCenter{padding:6px 80px;}
    
    .hongbaoBox{position: relative;}
    .hongbao{position: absolute;top: 0;left: 0;}
    .seachMenu{box-sizing: border-box;padding: 0 30px;line-height: 36px;}
    .allgoods{text-align: center;background-color: red;color: white;}
    .menu li{float: left;}
    .menu a{padding: 0 15px;color: black;}
    .menu li a:hover{color: red;}
</style>
