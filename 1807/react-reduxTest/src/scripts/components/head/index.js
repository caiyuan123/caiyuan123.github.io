


import "./index.css";
import React, { Component } from "react";

import { NavBar, Icon, Popover, Modal } from "antd-mobile";
const Item = Popover.Item;

const alertMsg = Modal.alert;


const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;



export default class Head extends Component {
    state = {
        visible: false,
        selected: '',
    };
    onSelect = (opt) => {
        var uid = sessionStorage.uid;

        if (opt.props.value=='购物车'){
            if (uid) {
                // alert("进入购物车")
                this.props.history.push('/shopingcar')
            } else {
                // alert("没有登录")
                alertMsg('提示', '您还未登录,是否前去登录', [
                    { text: '返回' },
                    { text: '确认', onPress: () => this.props.history.push('/login') },
                ])
            }
            // console.log(opt.props.value);
            // this.props.history.push('/shopingcar')
        }
        if (opt.props.value == '登录'){
            this.props.history.push('/login')
        }
        if (opt.props.value == '注册') {
            this.props.history.push('/register')
        }


        this.setState({
            visible: false,
            selected: opt.props.value,
        });
    };
    handleVisibleChange = (visible) => {
        this.setState({
            visible,
        });
    };
    gotoSearch = () => {
        const { history } = this.props;
        history.push("/search/");
    }

    render() {
        const { title, show, history } = this.props;
        return (
            <div className='head'>
                <NavBar
                    mode="light"
                    icon={show ? <Icon type="left" /> : ''}
                    onLeftClick={show ? () => history.go(-1) : () => console.log('')}
                    rightContent={
                        <Popover mask
                            overlayClassName="fortest"
                            overlayStyle={{ color: 'currentColor' }}
                            visible={this.state.visible}
                            overlay={[
                                (<Item key="4" value="消息"  data-seed="logId">消息</Item>),
                                (<Item key="5" value="购物车"  style={{ whiteSpace: 'nowrap' }}>购物车</Item>),
                                (<Item key="6" value="登录" style={{ whiteSpace: 'nowrap' }}>登录</Item>),
                                (<Item key="7" value="注册" style={{ whiteSpace: 'nowrap' }}>注册</Item>)

                            ]}
                            align={{
                                overflow: { adjustY: 0, adjustX: 0 },
                                offset: [-10, 0],
                            }}
                            onVisibleChange={this.handleVisibleChange}
                            onSelect={this.onSelect}
                        >
                            <div style={{
                                height: '100%',
                                padding: '0 15px',
                                marginRight: '-15px',
                                display: 'flex',
                                alignItems: 'center',
                            }}
                            >
                                <Icon onClick={this.gotoSearch} key="0" type="search" style={{ marginRight: '16px' }} />,
                            <Icon type="ellipsis" />
                            </div>
                        </Popover>
                    }
                >
                    {title}
                </NavBar>
            </div>
            


            // <NavBar
            //     mode="light"
            //     icon={show ? <Icon type="left" /> : ''}
            //     onLeftClick={show ? () => history.go(-1) : () => console.log('')}
            //     rightContent={[
            //         <Icon onClick={this.gotoSearch} key="0" type="search" style={{ marginRight: '16px' }} />,
            //         <Icon key="1" type="ellipsis" />,
            //     ]}
            // >
            //     {title}
            // </NavBar>
        )
    }
}