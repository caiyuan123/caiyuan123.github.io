


import "./index.css";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { NavBar, Icon, Popover, SearchBar } from "antd-mobile";
const Item = Popover.Item;
const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;
// import abc from "../../../assets/images/fenlei.png"

export default class Head3 extends Component {
    state = {
        fenleiimg: require("../../../assets/images/fenlei.png")
    }
    gotoSearch = () => {
        const { history } = this.props;
        history.push("/search/");
    }

    render() {
        return (
            <div className="box">
                <div className="searchBox">
                    <NavLink to='/allgoods' activeClassName="nav-active">
                        <img src={this.state.fenleiimg} alt="" />
                        <span>分类</span>
                    </NavLink>
                    <div onClick={this.gotoSearch} >
                        <SearchBar placeholder="Search" maxLength={8} />
                    </div>

                </div>
            </div>
        )
    }
}