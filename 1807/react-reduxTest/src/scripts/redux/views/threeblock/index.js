

import "./index.css";
import React, { Component } from "react";

import axios from "axios";
import { Toast, WhiteSpace, Tabs, PullToRefresh } from "antd-mobile";
import { Link } from "react-router-dom"

export default class ThreeBlock extends Component {


    state = {
        refreshing: false  // 没有在刷新 
    }

    componentWillMount() {

    }

    render() {
        // let { tab, data, reverseGoods } = this.props;
        // let myData = data && data.filter((item, index) => item.type.value == tab.value);
        // console.log(myData);
        return (
            <div>
                123
            </div>
        )
    }
}