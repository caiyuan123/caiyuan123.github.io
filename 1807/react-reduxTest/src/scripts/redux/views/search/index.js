
import "./index.css";
import React, { Component } from "react";
import Head from "../../../components/head";
import { Menu, ActivityIndicator,SearchBar, WhiteSpace, WingBlank,NavBar } from 'antd-mobile';
import Head2 from "../../../components/head2";








export default class SearchDemo extends Component {

    constructor(...args) {
        super(...args);
        this.state = {
            initData: '',
            show: false,
        };
    }
    onChange = (value) => {
        let label = '';
        data.forEach((dataItem) => {
            if (dataItem.value === value[0]) {
                label = dataItem.label;
                if (dataItem.children && value[1]) {
                    dataItem.children.forEach((cItem) => {
                        if (cItem.value === value[1]) {
                            label += ` ${cItem.label}`;
                        }
                    });
                }
            }
        });
        console.log(label);
    }
    handleClick = (e) => {
        e.preventDefault(); // Fix event propagation on Android
        this.setState({
            show: !this.state.show,
        });
        // mock for async data loading
        if (!this.state.initData) {
            setTimeout(() => {
                this.setState({
                    initData: data,
                });
            }, 500);
        }
    }

    onMaskClick = () => {
        this.setState({
            show: false,
        });
    }



    render() {
        // const { title, show, history } = this.props;
        const { initData, show } = this.state;
        
        const loadingEl = (
            <div style={{ width: '100%', height: document.documentElement.clientHeight * 0.6, display: 'flex', justifyContent: 'center' }}>
                <ActivityIndicator size="large" />
            </div>
        );
        return (
            <div className="box">
                {/* <WingBlank>
                    <WhiteSpace />
                    <SearchBar placeholder="Search" maxLength={8} />
                </WingBlank> */}

                <Head2 title="搜索商品" show={true} history={this.props.history}  ></Head2>
                {/* {true?loadingEl : null} */}
            </div>
        )
    }
}