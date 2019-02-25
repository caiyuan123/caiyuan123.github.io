

import "./index.css";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Modal, Button, WingBlank, WhiteSpace, Menu, ActivityIndicator, NavBar, Tabs, Badge, SearchBar} from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';
import ThreeBlock from "../threeblock"
import Head3 from "../../../components/head3"


export default class Home extends Component {
    render() {
        const tabs = [
            { title: <Badge>发现</Badge> },
            { title: <Badge>关注</Badge> },
            { title: <Badge>流行</Badge> },
        ];
        return (
            <div className="box">
                <Head3 history={this.props.history}></Head3>
                <ul className="nav">
                    <li>
                        直播
                    </li>
                    <li>
                        直播
                    </li>
                    <li>
                        直播
                    </li>
                    <li>
                        直播
                    </li>
                    <li>
                        直播
                    </li>
                    <li>
                        直播
                    </li>
                    <li>
                        直播
                    </li>
                </ul>
                <ul className="fenlei">
                    <li>
                        <NavLink to='/goods/6' activeClassName="nav-active" >
                            <div className="imgBox">
                                <img src='https://s10.mogucdn.com/mlcdn/c45406/181031_20c98cekk381c5i3ladb506e8g290_172x172.png' alt="" />
                            </div>
                            <span>上衣</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/goods/2' activeClassName="nav-active" >
                            <div className="imgBox">
                                <img src='https://s10.mogucdn.com/mlcdn/c45406/181031_522dgj6e1i9ji87gkc4hcbcc9cb2b_172x172.png' alt="" />
                            </div>
                            <span>裤子</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/goods/1' activeClassName="nav-active" >
                            <div className="imgBox">
                                <img src='https://s10.mogucdn.com/mlcdn/c45406/181031_1fa6a0aj703ek9g6kkc5ek5495ke1_172x172.png' alt="" />
                            </div>
                            <span>包包</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/goods/3' activeClassName="nav-active" >
                            <div className="imgBox">
                                <img src='https://s10.mogucdn.com/mlcdn/c45406/181031_56ldahcgfcb306ieceh0f36edga0k_172x172.png' alt="" />
                            </div>
                            <span>内衣</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/goods/5' activeClassName="nav-active" >
                            <div className="imgBox">
                                <img src='https://s10.mogucdn.com/mlcdn/c45406/181031_5jbbcl9ja0hdg8di6j0b4hfaa8iba_172x172.png' alt="" />
                            </div>
                            <span>裙子</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/goods/4' activeClassName="nav-active" >
                            <div className="imgBox">
                                <img src='https://s10.mogucdn.com/mlcdn/c45406/181031_353i8ki02gfl955alfi9k3i9j4i5h_172x172.png' alt="" />
                            </div>
                            <span>女鞋</span>
                        </NavLink>
                    </li>
                </ul>
                <Tabs tabs={tabs}
                    initialPage={1}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of first tab
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of second tab
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of third tab
                    </div>
                </Tabs>
            </div>
            
        )
    }
}


// 包包 type: 1  https://s10.mogucdn.com/mlcdn/c45406/181031_1fa6a0aj703ek9g6kkc5ek5495ke1_172x172.png
// 裤子 type: 2  https://s10.mogucdn.com/mlcdn/c45406/181031_522dgj6e1i9ji87gkc4hcbcc9cb2b_172x172.png
// 内衣 type: 3  https://s10.mogucdn.com/mlcdn/c45406/181031_56ldahcgfcb306ieceh0f36edga0k_172x172.png
// 女鞋 type: 4  https://s10.mogucdn.com/mlcdn/c45406/181031_353i8ki02gfl955alfi9k3i9j4i5h_172x172.png
// 裙子 type: 5  https://s10.mogucdn.com/mlcdn/c45406/181031_5jbbcl9ja0hdg8di6j0b4hfaa8iba_172x172.png
// 上衣 type: 6  https://s10.mogucdn.com/mlcdn/c45406/181031_20c98cekk381c5i3ladb506e8g290_172x172.png

// this.props.history.push('/path')