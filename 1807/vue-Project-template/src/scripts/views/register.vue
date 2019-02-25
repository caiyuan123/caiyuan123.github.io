<template>
    <div class="content">
        <div class="contentTop">
            <el-row :gutter="20">
            <el-col :span="16">
                <div class="grid-content bg-purple grid-content-left">
                    <a href="/">
                        <router-link :to="{name:'homepage'}">
                            <img src="../../assets/imgs/logo.png" alt="">
                        </router-link>
                    </a>
                    <span>用户注册</span>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple grid-content-right">
                    <p>
                        <a href="javascript:void(0)">
                            <router-link :to="{name:'homepage'}">返回首页</router-link>
                            </a> | <a href="javascript:void(0)">帮助中心</a>
                    </p>
                </div>
            </el-col>
        </el-row>
        </div>
        <div class="contentCenter clearfix">
            <div class="contentCenterBox clearfix">
                <div class="contentCenterBoxLight">
                    <form action="">
                        <p class="p1">
                            <label for="">账户名 : </label>
                            <input type="text" class="usernameInp">
                            <span>用户名可使用字母、汉字、数字、下划线或其组合，4～20个字符，且不能为纯数字</span>
                        </p>
                        <p class="p1">
                            <label for="">设置密码 : </label>
                            <input type="password" class="passwordInp" >
                            <span>6-20位，支持字母、数字或符号的组合，不可单独使用字母、数字或符号</span>
                        </p>
                        <p class="p1">
                            <label for="">确认密码 : </label>
                            <input type="password" class="dbPasswordInp">
                            <span>请确保两次输入的密码一致</span>
                        </p>
                        <p class="p1">
                            <label for="">手机号 : </label>
                            <input type="text" disabled>
                        </p>
                        <p class="p1">
                            <label for="">验证码 : </label>
                            <input type="text" disabled>
                        </p>
                        <p class="p2">
                            <input type="checkbox" class="read" checked>
                            <label for=""><label>请阅读《<a href="javascript:void(0)" target="_blank" class="blue" tabindex="17">美乐乐用户注册协议</a>》</label></label>
                        </p>
                        <button class="registerBtn" @click="registerClick">注册</button>
                    </form>
                </div>
                <div class="contentCenterBoxRight">
                    <img src="../../assets/imgs/saoma.png" alt="">
                </div>
            </div>
        </div>
        <div class="contentFooter clearfix">
            <div class="ulBox">
                <ul class="clearfix">
                    <li>
                        <a href="javascript:void(0)">
                            <img src="../../assets/imgs/O2O.png" alt="">
                            <span>美乐乐O2O</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">
                            <img src="../../assets/imgs/O2O.png" alt="">
                            <span>美乐乐O2O</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">
                            <img src="../../assets/imgs/O2O.png" alt="">
                            <span>美乐乐O2O</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">
                            <img src="../../assets/imgs/O2O.png" alt="">
                            <span>美乐乐O2O</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">
                            <img src="../../assets/imgs/O2O.png" alt="">
                            <span>美乐乐O2O</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">
                            <img src="../../assets/imgs/O2O.png" alt="">
                            <span>美乐乐O2O</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">
                            <img src="../../assets/imgs/O2O.png" alt="">
                            <span>美乐乐O2O</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">
                            <img src="../../assets/imgs/O2O.png" alt="">
                            <span>美乐乐O2O</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>


<script>
    import axios from "axios";
    axios.defaults.baseURL = "http://60.205.210.6:1314";
    import {mapActions ,mapState,mapMutations} from "vuex";

    export default {
        methods: {
            registerClick() {
                var username=document.querySelector(".usernameInp").value;
                var password=document.querySelector(".passwordInp").value;
                var dbPassword=document.querySelector(".dbPasswordInp").value;
                axios({
                    method:"get",
                    url:"/zhuce",
                    params:{
                        username,
                        password
                    }
                }).then(res=>{
                    if(res.data.type=="1"){
                        this.$router.push({name:'login'})
                        // this.username=username;
                        // sessionStorage.username = username;
                    }else{
                        alert(res.data.msg)
                        document.querySelector(".usernameInp").value="";
                        document.querySelector(".passwordInp").value="";
                        document.querySelector(".dbPasswordInp").value="";
                    }
                    
                })
            }
        }
    }
</script>










<style scoped>
    .contentTop{padding: 30px 35px;height: 52px;}
    .contentTop a{color:#333 ;font-size: 12px;}
    .contentTop a:hover{color: red}
    .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
    }
    .grid-content-left{height: 52px;position: relative;}
    .grid-content-left a{display: inline-block;height: 52px;}
    .grid-content-left img{display: inline-block;}
    .grid-content-left span{font-size: 24px;color: #333;position: absolute;bottom: 0;left: 172px;}
    .grid-content-right{text-align: right;position: relative;height: 52px;}
    .grid-content-right p{position: absolute;bottom: 0;right: 0;}
    .contentCenter{padding: 0 35px;box-sizing: border-box;}
    .contentCenterBox{padding: 40px 0 40px 40px;border: 1px solid #d7d7d7;}
    .contentCenterBox > div{float: left;}
    .contentCenterBoxLight{padding: 20px 0;border-right:1px solid #d7d7d7;}
    .contentCenterBoxLight p{width: 760px;margin-bottom: 20px;}
    .contentCenterBoxLight p span{display: inline-block;width: 255px;height: 30px; font-size: 12px;border: 1px solid #ffe4e4;color: #d10000;background-color: #fff3f3;vertical-align: middle;padding: 5px 0; -webkit-user-select:none;opacity: 0;}
    .contentCenterBoxLight .p1 input{display: inline-block;border: 1px solid #d5d5d5;width: 306px;height: 40px;}
    .contentCenterBoxLight .p1 label{font-size: 14px;display: inline-block;width: 100px;text-align: right;}
    .p2{text-align: left;padding-left: 100px;box-sizing: border-box;font-size: 14px;margin-top: 50px;}
    .p2 a{color: aqua}
    .registerBtn{display: inline-block;width: 308px;height: 40px;margin-left: 100px;background-color: #cf000e;border: none;cursor: pointer;color: white;}
    .contentFooter{box-sizing: border-box;padding: 35px 35px;background-color: #f8f8f8;margin-top: 70px;position: relative;text-align: center;}
    .ulBox{display: inline-block;}
    .contentFooter ul{text-align: center;width: 100%;}
    .contentFooter li{float: left; width: 148px;height: 80px;text-align: center;}



    .contentFooter img{width: 50px;height: 50px;margin: auto;margin-bottom: 10px;}
    .contentFooter li a{color: black;font-size: 14px;display: block;width: 100%;height: 80px;}
    .contentFooter li a:hover{color: red;}
</style> 