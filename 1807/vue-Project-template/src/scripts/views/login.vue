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
            <div class="loginBox">
                <div class="loginBoxLeft">
                    <img src="//img003.mllres.com/images/201812/1544753611574286369.png" alt="">
                </div>
                <div class="loginBoxRight">
                    <div class="loginBoxTop">
                        账号登录
                    </div>
                    <div class="loginBoxCenter">
                        
                            <div>
                                <label for="">
                                    <img src="../../assets/imgs/user.png" alt="">
                                </label>
                            <input type="text" placeholder="用户名" class="usernameInp">
                            </div>
                            <div>
                                <label for="">
                                    <img src="../../assets/imgs/pwd.png" alt="">
                                </label>
                                <input type="password" placeholder="登录密码" class="passwordInp">
                            </div>
                        <p><a href="javascript:void(0)">忘记密码？</a> </p>
                        <button class="loginBtn" @click="loginClick">登录</button>
                        
                    </div>
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
        computed: {
            ...mapState([
                'username'
            ])
        },
        methods: {
            ...mapActions([
                'record'
            ]),
            loginClick() {
                var meileusername=document.querySelector(".usernameInp").value;
                var password=document.querySelector(".passwordInp").value;
                var that=this;
                axios({
                    method:"post",
                    url:"/denglu",
                    data:{
                        username:meileusername,
                        password
                    }
                }).then(res=>{
                    if(res.data.type=="1"){
                        console.log('登录成功')
                        var uid=res.data.uid;
                        that.record({meileusername,uid})
                        sessionStorage.setItem('username', meileusername);
                        sessionStorage.setItem('uid', uid);
                        this.$router.push({name:'homepage'})
                        console.log(res.data)
                        
                    }else{
                        alert(res.data.msg)
                        document.querySelector(".usernameInp").value="";
                        document.querySelector(".passwordInp").value="";
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
    .contentCenter{padding: 75px 95px;background-color: red;}
    .loginBox>div{float: left;}
    .loginBoxLeft{margin-right: 90px;}
    .loginBoxRight{padding: 22px 27px 20px 27px;background-color: white;width: 300px;}
    .loginBoxTop{font-size: 16px;font-weight: 700;color: #e62318;text-align: center;height: 45px;}
    .loginBoxCenter div{width: 298px;border: 1px solid #ddd;height: 40px;line-height: 40px;margin-bottom: 25px;vertical-align: middle;}
    .loginBoxCenter label{display: inline-block ;width: 19px;height: 19px;padding-left: 5px;}
    .loginBoxCenter input{display: inline-block;width: 250px;border: none;padding-left: 19px;}
    .loginBoxCenter p{font-size: 14px;text-align: right;margin-bottom: 20px;}
    .loginBoxCenter p a{color: black;}
    .loginBoxCenter p a:hover{color: red;}
    .loginBtn{width: 300px;height: 40px;background-color: red;color: white;cursor: pointer;border: none;}
    .contentFooter{box-sizing: border-box;padding: 35px 35px;background-color: #f8f8f8;margin-top: 70px;position: relative;text-align: center;}
    .ulBox{display: inline-block;}
    .contentFooter ul{text-align: center;width: 100%;}
    .contentFooter li{float: left; width: 148px;height: 80px;text-align: center;}
    .contentFooter img{width: 50px;height: 50px;margin: auto;margin-bottom: 10px;}
    .contentFooter li a{color: black;font-size: 14px;display: block;width: 100%;height: 80px;}
    .contentFooter li a:hover{color: red;}
</style> 