

import "./index.css";
import React, { Component } from "react";

import { Modal, Button, WhiteSpace, WingBlank, Toast } from 'antd-mobile';

const alertMsg = Modal.alert;

export default class My extends Component {
   

    componentWillMount() {
      
    }
    shopingCar=()=>{
        var uid = sessionStorage.uid
        if (uid) {
            this.props.history.push('/shopingcar')
        } else {
            alertMsg('提示', '您还未登录,是否前去登录', [
                { text: '返回' },
                { text: '确认', onPress: () => this.props.history.push('/login') },
            ])
        }
    }
    exit=()=>{
        // alert("aa")
        sessionStorage.setItem('username', "");
        sessionStorage.setItem('uid', "");
        this.props.history.push('/app/my')
    }


    render() {
        let username = sessionStorage.username;
        return (
            <div className="box">
                <WingBlank size="md">
                <div className='userBox'>
                    <img src="" alt="" className='touxiang'/>
                    <p className='usernameP'>{username}</p>
                    <p className='shezhiP'>
                        <span className='sheshiMsg'>个人信息</span>
                        <span className='shezhiZhuye'>个人主页</span>
                    </p>
                </div>
                </WingBlank>
                <WingBlank size="sm">
                    <div className='myBox'>
                        <p>
                            <i className='iconfont icon-xiaoxi'></i>
                            <span>消息</span>
                        </p>
                        <p>
                            <i className='iconfont icon-htmal5icon24'></i>
                            <span>收藏</span>
                        </p>
                        <p>
                            <i className='iconfont icon-guanzhu'></i>
                            <span>关注</span>
                        </p>
                        <p onClick={()=>this.shopingCar()}>
                            <i className='iconfont icon-gouwucheman'></i>
                            <span>购物车</span>
                        </p>
                        <p>
                            <i className='iconfont icon-single'></i>
                            <span>订单</span>
                        </p>
                        <p onClick={this.exit}>
                            <i className='iconfont icon-shezhi'></i>
                            <span>退出当前账号</span>
                        </p>
                    </div>
                        
                    
                </WingBlank>
            </div>
        )
    }
}