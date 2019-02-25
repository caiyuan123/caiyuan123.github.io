<template>
    <div>
        <meilele-search></meilele-search>
        <div class="carContent">
            <ul class="tabTop">
                <li class="tabTopAllCheck">
                    <el-checkbox v-model="allcheck">全选</el-checkbox>
                </li>
                <li class="tabTopGoods">商品</li>
                <li class="tabTopPrice">单价</li>
                <li class="tabTopNum">数量</li>
                <li class="tabTopMoney">金额</li>
                <li class="tabTopcaozuo">操作</li>
            </ul>
            <ul v-for="(item,index) in shopingcar" :key="index" class="goodsList clearfix">
                <li class="checkBox">
                    <el-checkbox v-model="item.check"></el-checkbox>
                </li>
                <li class="goods">
                    <img :src="item.imgsrc" alt="">
                    <p>{{ item.goodsname }}</p>
                </li>
                <li class="goodsprice">
                    ￥{{ item.goodsprice }}
                </li>
                <li class="addOrdel">
                    <p class="goodsnum">
                        <span class="salemsg">数量</span>
                        <!-- item.count -->
                        <button  @click="item.count--" :disabled="item.count<=1">-</button>
                        <input type="text"  v-model="item.count" disabled>
                        <button @click="item.count++">+</button>
                        <!-- countAdd(index,item._id)-->
                    </p>
                </li>
                <li class="xiaoji">
                    {{ item.goodsprice*item.count }}
                </li>
                <li class="caozuo">
                    <a href="javascript:void(0)"  @click="del(index,item._id)">删除</a>
                </li>
            </ul>
            <ul class="tabBottom">
                <div class="tabBottom1">
                    <el-checkbox v-model="allcheck">全选</el-checkbox>
                    <el-checkbox v-model="delAll">删除选中商品</el-checkbox>
                </div>
                <div class="tabBottom2">
                    结算
                </div>
                <div class="tabBottom3">
                    已选<span class="sum">{{ checkCount }}</span>件商品&nbsp;&nbsp;&nbsp;
                    总价(不含运费):<span class="total">{{ total }}</span>
                </div>
            </ul>
        </div>
       
       
        
    </div>
</template>


<script>
    import axios from "axios";
    axios.defaults.baseURL = "http://60.205.210.6:1314";
    import {mapActions ,mapState,mapMutations,mapGetters} from "vuex";
    import Search from "../components/search.vue";
    import lunbotu from "../components/lunbotu.vue";
    import content from "../components/content.vue"
    import fenye from "../components/fenye.vue";


    import { MessageBox ,Message} from 'element-ui';
    import router from "../router";
    export default {
        beforeRouteEnter (to, from, next) {
            if(sessionStorage.username){
                    //  已经登录 直接跳转     
                next();
            }else{
                MessageBox.confirm('你还未登录,是否登录后再进入', '友情提示', {
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
        },
        components:{
            "meilele-search":Search,
            "meilele-content":content
        },
        computed: {
            ...mapState([
                'username','status','allgoods','shangping','danye','count','goodstype'
            ]),
            shopingcar:{
                get(){
                    return this.$store.state.shopingcar
                },
                set(val){
                    console.log("val")

                    // this.$store.commit("addnum",val)
                }
            },
            allcheck:{
                get(){
                    var flg=true;
                    this.shopingcar.forEach((item,index)=>{
                        if(!item.check){
                            flg=false
                        }else{
                            this.updateDelAll(false)
                        }
                    })
                    return flg
                },
                set(val){
                    this.shopingcar=this.shopingcar.map((item,index)=>{
                        item.check=val;
                        return item
                    })
                }
            },
            total(){
                var sum=0;
                this.shopingcar.forEach((item,index)=>{
                    if(item.check){
                        sum=sum+item.goodsprice*item.count
                    }
                })
                return sum;
            },
            checkCount(){
                var count=0;
                this.shopingcar.forEach((item,index)=>{
                    if(item.check){
                        count=count+item.count
                    }
                })
                return count
            },
            delAll:{
                get(){
                    // return false;
                     return this.$store.state.delAll
                },
                set(val){
                    var that=this
                   this.updateDelAll(val)
                //    this.getgoodsnum(sessionStorage.uid)
                   if(val){
                        var _id=[]
                        for(var i=0;i<this.shopingcar.length;i++){
                            if(this.shopingcar[i].check){
                                _id.push(this.shopingcar[i]._id)
                                this.shopingcar.splice(i,1)
                                i--;
                            }
                        }
                        console.log(_id)
                        axios({
                            method:"post",
                            url:"/delgoods",
                            data:{
                                goodsid:_id
                            }
                        }).then(res=>{
                            console.log(res);
                            that.getgoodsnum(sessionStorage.uid)
                        })
                   }
                }
            },
        },
        methods: {
            ...mapActions([
                'getAllGoods','setmeilelepage','getgoods','getgoodsnum'
            ]),
            ...mapMutations([
                'updateDelAll','getCarList'
            ]),
            del(index,goodsid){
                this.shopingcar.splice(index,1)
                console.log(goodsid)
                var _id=[]
                 var that=this
                _id.push(goodsid)
                // this.getgoodsnum(sessionStorage.uid)
                 axios({
                    method:"post",
                    url:"/delgoods",
                    data:{
                        goodsid:_id
                    }
                }).then(res=>{
                    console.log(res);
                    that.getgoodsnum(sessionStorage.uid)
                })

            },
            countAdd(index,goodsid){
                
            }
           
        },
        watch:{
            shopingcar:{
                deep:true,
                handler(val){
                    console.log(val)
                    // this.getgoodsnum(sessionStorage.uid)
                    this.getCarList(val)
                }
            }
        },
        created(){
           this.setmeilelepage({meilelepage:'',goodstype:'0'})
        },
        updated() {
            
        }
        
    }
</script>

<style scoped>
    .carContent{box-sizing: border-box;padding: 35px;}
    .tabTop{width: 1190px; height: 40px;margin: auto;}
    .tabTop li{float: left;height: 40px;color: #676767;background-color: #eee;text-align: center;line-height: 40px;}
    .tabTopAllCheck{width: 153px;}
    .tabTopGoods{width: 456px;}
    .tabTopPrice{width: 160px;}
    .tabTopNum{width: 180px;}
    .tabTopMoney{width: 115px;}
    .tabTopcaozuo{width: 125px;}
    .goodsList{height: 80px;padding: 25px 0;background-color: #fefaf1;width: 1190px;margin: auto;border: 1px solid #eee;margin: 0 0 -1px 0;}
    .goodsList li{float: left; text-align: center;line-height: 80px;}

    .checkBox{width: 153px;}
    .goods{width: 456px;}
    .goods img{width: 121px;height: 80px;float: left;}
    .goods p{height: 80px; float: left; font-size: 12px;width: 310px;line-height: 20px;text-align: left;padding-left: 20px;}
    .goodsprice{width: 160px;}
    .addOrdel{width: 180px;}
    .xiaoji{width: 115px;}
    .caozuo{width: 125px;}
    .caozuo a{color: black;font-size: 14px}
    .caozuo a:hover{color: red;}
    .goodsnum button{display: inline-block;width: 32px;height: 27px;border: 1px solid #999;color: #999;background-color: white;cursor: pointer;}
    .goodsnum button:hover{color: black;}
    .goodsnum input{display: inline-block; width: 40px;height: 25px;border: 1px solid #999;text-align: center;}
    .tabBottom{width: 1190px;height: 60px;margin: auto;color: #676767;background-color: #eee;}
    .tabBottom1{float: left;width: 360px;height: 60px;}
    .tabBottom2{float: right;width: 120px;height: 60px;background-color: red;color: white;font-size: 22px;text-align: center;line-height: 60px;cursor: pointer;}
    .tabBottom3{float: right;width: 340px;height: 60px;}
</style>


