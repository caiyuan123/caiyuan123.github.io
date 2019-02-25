


import "./index.css";
import React, { Component } from "react";

import { NavBar, Icon, Popover } from "antd-mobile";
const Item = Popover.Item;
const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;
export default class Head4 extends Component {
    state = {
        visible: false,
        selected: '',
    };
    onSelect = (opt) => {
        const { title, show, history } = this.props;
        if (opt.props.value=='注册'){
            history.push("/register")
            console.log(opt.props.value);
        }
        if (opt.props.value == '登录') {
            history.push("/login")
            console.log(opt.props.value);
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
    render() {
        const { title, show, history } = this.props;
        // console.log(this.props);
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
                                (<Item key="4" value="帮助"  data-seed="logId">帮助</Item>),
                                (<Item key="5" value="登录"  style={{ whiteSpace: 'nowrap' }}>登录</Item>),
                                (<Item key="6" value="注册"  style={{ whiteSpace: 'nowrap' }}>注册</Item>)

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