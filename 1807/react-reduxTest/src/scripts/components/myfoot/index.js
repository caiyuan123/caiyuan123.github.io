
import "./index.scss";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import { Modal, Button, WingBlank, WhiteSpace, Toast } from 'antd-mobile';

const prompt = Modal.prompt;


export default class MyFoot extends Component{
    state = {
        img: require("../../../assets/images/add.png")
    }

    render(){
        return(
            <footer>
                <div>
                    {/* activeClassName是高亮显示VUE的foot也用到了 */}
                    <NavLink to='/app/home' activeClassName="nav-active">
                        <i className='iconfont icon-shouye'></i>
                        <span>首页</span>
                    </NavLink>
                </div>
                <div>
                    <NavLink to='/app/live' activeClassName="nav-active">
                        <i className='iconfont icon-zhibo'></i>
                        <span>直播</span>
                    </NavLink>
                </div>
                <div className='renzheng' onClick={() => prompt(
                    '手机认证',
                    '解锁发表、评论及晒单等更多功能',
                    (login, password) => console.log(`login: ${login}, password: ${password}`),
                    'login-password',
                    null,
                    ['请输入手机号', '请输入验证码'],
                )}>
                    <img src={this.state.img} alt=""/>
                    <span></span>
                </div>
                <div>
                    <NavLink to='/app/mall' activeClassName="nav-active">
                        <i className='iconfont icon-shangcheng'></i>
                        <span>商城</span>
                    </NavLink>
                </div>
                <div>
                    <NavLink to='/app/my' activeClassName="nav-active">
                        <i className='iconfont icon-wo'></i>
                        <span>我</span>
                    </NavLink>
                </div>
            </footer>
        )
    }
}