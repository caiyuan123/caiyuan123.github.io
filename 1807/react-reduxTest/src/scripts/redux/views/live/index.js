

import "./index.scss";
import React, { Component } from "react";
import Head from "../../../components/head";
import { SearchBar, WhiteSpace, WingBlank } from 'antd-mobile';

export default class Live extends Component {

    render() {

        return (
            <div className="box">
                <Head title="直播间" show={true} history={this.props.history}  ></Head>
            </div>
        )
    }
}