

import "./index.css";
import React, { Component } from "react";
import Head4 from "../../../components/head4";
import backgroundImg from "../../../../assets/images/mogu.jpg";
import { Carousel, WingBlank, Grid, WhiteSpace, Button, Modal } from 'antd-mobile';
// import store from "../../store";
import { connect } from "react-redux"
import axios from "axios";
axios.defaults.baseURL = "http://60.205.210.6:1314";

import mui from './mui.min.js';
import init from './init.js';


import { changeNameInp, changePasswordInp } from "../../actions";
const alertMsg = Modal.alert;
@connect(
    state => {    // mapStateToProps
        return {
            username: state.username,
            password: state.password
        }
    }
)
export default class Login extends Component {
    componentWillMount(){
       
    }
    changeNameInp = () => {
        let {dispatch}=this.props;
        dispatch(changeNameInp(this.refs.username.value))
    }
    changePasswordInp = () => {
        let { dispatch } = this.props;
        dispatch(changePasswordInp(this.refs.password.value))
    }
    authLogin=(index)=> {
        var auths = '';
        plus.oauth.getServices(
            (services) => {
                auths = services; //支持这四个：QQ，小米，新浪微博，微信
                console.log(JSON.stringify(auths)); //
                var s = auths[index];
                if (!s.authResult) {
                    s.login(function (e) {
                        alert("登录认证成功！");
                        s.getUserInfo(function (e) {
                            alert("获取用户信息成功：" + JSON.stringify(s.userInfo));
                            console.log(s.userInfo.nickname); //用户信息
                        }, function (e) {
                            alert("获取用户信息失败：" + e.message + " - " + e.code);
                        });
                    }, function (e) {
                        alert("登录认证失败！");
                    });
                } else {
                    alert("已经登录认证！");
                }
            },
            (e) => {
                alert("获取分享服务列表失败：" + e.message + " - " + e.code);
            }
        )
    }




    login=()=>{
        let { username, password } = this.props;
        // let username = store.getState().username;
        // let password = store.getState().password;
        axios({
            method: "post",
            url: "/denglu",
            data: {
                username,
                password
            }
        }).then(res => {
            console.log("查询结果是")
            console.log(res.data.username)
            if (res.data.type == 1) {
                sessionStorage.setItem('username', res.data.username);
                sessionStorage.setItem('uid', res.data.uid);
                this.props.history.push('/app/home')
            } else {
                alertMsg('提示', '账号或密码错误', [
                    { text: '返回' },
                    { text: '确认' },
                ])
            }

        }) 
    }
    render() {
        let { username, password } = this.props;
        // let username = store.getState().username;
        // let password = store.getState().password;
        return (
            <div className="box loginbox">
                {/* <img src={backgroundImg} alt=""/> */}
                <Head4 history={this.props.history} show='true'></Head4>
                <div className='loginMsgBox'>
                        <p className='loginTitle'>账号登录</p>
                    <input type="text" ref="username" placeholder="用户名/邮箱手机号" onChange={this.changeNameInp}/>
                    <input type="password" ref="password" placeholder="密码" onChange={this.changePasswordInp}/>  
                        <WhiteSpace />
                        <Button type="primary" className='loginBtn' onClick={this.login}>登录</Button>
                    <Button type="primary" className='mui-btn' onClick={() => { this.authLogin(0)}}>QQ登录</Button>
                    <Button type="primary" className='mui-btn' onClick={() => { this.authLogin(1) }}>小米登录</Button>
                    <Button type="primary" className='mui-btn' onClick={() => { this.authLogin(2) }}>新浪微博登录</Button>
                    <Button type="primary" className='mui-btn' onClick={() => { this.authLogin(3) }}>微信登录</Button>
                </div>
               
            </div>
        )
    }
   
}