

import "./index.css";
import { connect } from "react-redux"
import React, { Component } from "react";
import Head4 from "../../../components/head4";
import backgroundImg from "../../../../assets/images/mogu.jpg";
import { Carousel, WingBlank, Grid, WhiteSpace, Button, Modal } from 'antd-mobile';
// import store from "../../store";
import axios from "axios";
axios.defaults.baseURL = "http://60.205.210.6:1314";

import { UsernameInp, PasswordInp, changeDbPswdInp } from "../../actions";
const alertMsg = Modal.alert;






@connect(
    state => {    // mapStateToProps
        return {
            username: state.usernameinp,
            password: state.passwordinp,
            dbPassword: state.dbPassword,
            usernameinp: state.usernameinp,
            passwordinp: state.passwordinp,

        }
    }
)
export default class Register extends Component {
    
    usernameInp = () => {
        let { dispatch } = this.props;
        dispatch(UsernameInp(this.refs.username.value))
    }
    passwordInp = () => {
        let { dispatch } = this.props;
        dispatch(PasswordInp(this.refs.password.value))
    }
    changeDbPswdInp = () => {
        let { dispatch } = this.props;
        dispatch(changeDbPswdInp(this.refs.dbpswd.value))
    }
    register=()=> {
        var that = this;
        var usernameReg = /^[a-zA-Z][a-zA-Z0-9]{3,15}$/;  
        var passwordReg = /^[a-zA-Z0-9]{4,10}$/; 
        let { username, password, dbPassword}=this.props;
        // let username = store.getState().usernameinp;
        // let password = store.getState().passwordinp;
        // let dbPassword = store.getState().dbPassword;
        var flg1=true;
        var flg2=true;
        if (usernameReg.test(username) == false){
            flg1=false;
            alertMsg('提示', '用户名不能含有非法字符且必须以字母开头，长度在4-10之间', [
                { text: '返回' },
                { text: '确认' },
            ])
        }else{
            
            if (passwordReg.test(password) == false) {
                flg2 = false;
                alertMsg('提示', '密码不能含有非法字符，长度在4-10之间', [
                    { text: '返回' },
                    { text: '确认' },
                ])
            }else{
                if (password !== dbPassword) {
                    // alert("两次密码不一致")
                    alertMsg('提示', '两次密码不一致', [
                        { text: '返回' },
                        { text: '确认' },
                    ])
                }else{
                    axios({
                        type: "get",
                        url: "/zhuce",
                        params: {
                            username,
                            password
                        }
                    }).then(res => {
                        console.log("查询结果是")
                        console.log(res)
                        if (res.data.type == 1) {
                            console.log(that)
                            alertMsg('注册成功', '是否前往登录', [
                                { text: '返回' },
                                { text: '确认', onPress: () => that.props.history.push('/login') },
                            ])
                        } else {
                            alertMsg('提示', '该用户名已存在', [
                                { text: '返回' },
                                { text: '确认' },
                            ])
                        }
                       
                    })
                }
            }
        }
        
    }
    render() {
        let { usernameinp, passwordinp, dbPassword } = this.props;
        // let usernameinp = store.getState().usernameinp;
        // let passwordinp = store.getState().passwordinp;
        // let dbPassword = store.getState().dbPassword;
        return (
            <div className="box loginbox">
                {/* <img src={backgroundImg} alt=""/> */}
                <Head4 history={this.props.history} show='true'></Head4>
                <div className='loginMsgBox'>
                    <p className='loginTitle'>注册</p>
                    <input type="text" ref="username" placeholder="用户名/邮箱手机号" onChange={this.usernameInp} />
                    <input type="password" ref="password" placeholder="密码" onChange={this.passwordInp} />
                    <input type="password" ref="dbpswd" placeholder="确认密码" onChange={this.changeDbPswdInp} />
                    <WhiteSpace />
                    <Button type="primary" className='loginBtn' onClick={this.register}>注册</Button>
                </div>
            </div>
        )
    }
}