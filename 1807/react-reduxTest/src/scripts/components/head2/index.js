


import "./index.css";
import React, { Component } from "react";

import { NavBar, Icon, Popover, SearchBar } from "antd-mobile";
const Item = Popover.Item;
const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;
export default class Head2 extends Component {
 
    gotoSearch = () => {
        const { history } = this.props;
        history.push("/search/");
    }

    render() {
        const { title, show, history } = this.props;
        // console.log(this.props);
        return (
          


            <NavBar
                mode="light"
                icon={show ? <Icon type="left" /> : ''}
                onLeftClick={show ? () => history.go(-1) : () => console.log('')}
            >
            <SearchBar placeholder="Search" maxLength={8} />
            </NavBar>
        )
    }
}