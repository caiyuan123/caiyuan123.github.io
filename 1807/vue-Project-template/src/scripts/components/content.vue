<template>
    <div>
         <div class="allgoodslist">
            <el-row>
                <el-col v-for="(o, index) in shangping" :key="index" class="goodsBox">
                    <div class="goodsBox2">
                        <div class="goodsBox1">
                            <div class="baise"></div>
                            <ul class="addBox">
                                <li class="duibi">对比</li>
                                <li class="shoucang">收藏</li>
                                <li class="addcar">
                                    <a href="javascript:void(0)" @click="addshopingcar(o._id)">加入购物车</a>
                                </li>
                            </ul>
                            <el-card :body-style="{ padding: '0px' }" class="newgoodsbox">
                                <router-link :to="{name:'detail',query:{goodsid:o._id,goodstype:o.type,goodsimg:o.imgsrc,goodsprice:o.goodsnewsprice,goodsname:o.goodsname}}">
                                    <img :src="o.imgsrc" class="goodsimage">
                                </router-link>
                                <!-- <router-link :to="{name:'detail',params:{goodsid:o._id,goodstype:o.type,goodsimg:o.imgsrc}}">
                                    <img :src="o.imgsrc" class="goodsimage">
                                </router-link> -->
                                <div style="padding: 14px;">
                                    <p class="priceBox">￥<span class="price">{{o.goodsnewsprice}}</span></p>
                                    <p class="goodsDetil">
                                        <a href="">{{o.goodsname}}</a>
                                    </p>
                                    <p class="salemsg">
                                        已售:&nbsp;<span>123</span>&nbsp;&nbsp;<span></span>评论&nbsp;<span>333</span>
                                    </p>
                                </div>
                            </el-card>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    import {mapActions ,mapState,mapMutations,mapGetters} from "vuex";

    import { MessageBox ,Message} from 'element-ui';
    import router from "../router";



    export default {
        computed: {
            ...mapState([
                'username','status','allgoods','shangping','danye','count','goodstype'
            ])
        },
        methods: {
            ...mapActions([
                'getAllGoods','setmeilelepage','getgoods','getgoodsnum'
            ]),
            addshopingcar(goodsid){
                var that=this;
                if(sessionStorage.username){
                    // alert(goodsid)
                    // alert(sessionStorage.uid)
                    axios({
                        method:"post",
                        // url:"http://60.205.210.6:1314/addshopingcar",
                        url:"/addshopingcar",
                        data:{
                            uid:sessionStorage.uid,
                            goodsid
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
                            router.push({name:'login'})
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
        // created(){
            // this.getAllGoods()
            // var that=this;
            // this.setmeilelepage({meilelepage:'home',goodstype:'0'})
            // this.$nextTick(()=>{
            //     this.getgoods(1)
            // })
            // setTimeout(function(){
            //        that.getgoods({num:1,type:'0'})
            //    },500)
            
        // },
        updated() {
            
        },
        
    }
</script>


<style scoped>
    .el-row{width: 1120px;margin: auto;}
    .allgoodslist{box-sizing: border-box;padding: 20px 35px;}
    .goodsBox{width: 280px;height: 330px;}
    .addBox{display: none}
    .goodsBox:hover .goodsBox1{display: block;}
    .goodsBox1:hover{z-index: 10;border-color: red;}
    .goodsBox1:hover .addBox{display: block}
    .goodsBox2{box-sizing: border-box;padding: 10px;position: relative;}
    .goodsBox1{box-sizing: border-box;position: absolute;height: 350px;border: 2px solid white;width: 100%;left:0;top:-2px;z-index: 5;}
    .price{font-weight: 700;}
    .goodsDetil{font-size: 12px;height: 40px;line-height: 20px;white-space:wrap;overflow:hidden;text-overflow:ellipsis;}
    .goodsDetil a{color: black;}
    .salemsg{color: #999;font-size: 12px;line-height: 20px;}
    .baise{position: absolute;bottom:0;left:0;width: 100%;height: 40px;background-color: white;}
    .addBox{position: absolute;bottom: 5px;left: 22px;}
    .addBox li{float: left;padding: 5px 15px 5px 25px;border: 1px solid #999;margin: 0 0 -1px -1px;cursor: pointer;font-size: 12px;}
    .addBox a{color: black;}
    .addBox li:hover{color: red;border-color: red;}
    .addBox li:hover + li{border-left-color: red;}
    .addBox li:hover a{color: red;}
    .duibi{background: url('../../assets/imgs/zhengfangxing.png') no-repeat 5px 5px;background-size:15px 15px;}
    .shoucang{background: url('../../assets/imgs/taoxin.png') no-repeat 5px 5px;background-size:15px 15px;}
    .addcar{background: url('../../assets/imgs/shopingcar.png') no-repeat 5px 5px;background-size:15px 15px;}

    .time {
        font-size: 13px;
        color: #999999;
    }
  
    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .button {
        padding: 0;
        float: right;
    }

    .goodsimage {
        width: 100%;
        display: block;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    
    .clearfix:after {
        clear: both
    }
</style>