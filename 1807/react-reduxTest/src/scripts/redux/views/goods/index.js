
import "./index.css";
import axios from "axios";
axios.defaults.baseURL = "http://60.205.210.6:1314";
import React, { Component } from "react";
import { GetTypeGoods } from "../../actions";
import { NavLink } from "react-router-dom";
import { PullToRefresh } from "antd-mobile";
import { connect } from "react-redux"
import Head from "../../../components/head";
// import store from "../../store";
let type='';


@connect(
    state => {    // mapStateToProps
        return {
            typeGoods: state.typeGoods
        }
    }
)
export default class Goods extends Component {
    state = {
        refreshing: false  // 没有在刷新 
    }


    componentWillMount(){
        let { match, location, history, dispatch } = this.props;
        dispatch(GetTypeGoods({ url: "/gettypegoods", type: match.params.type}))
        
        if (match.params.type == 1) { type='包包'}
        if (match.params.type == 2) { type = '裤子' }
        if (match.params.type == 3) { type = '内衣' }
        if (match.params.type == 4) { type = '女鞋' }
        if (match.params.type == 5) { type = '裙子' }
        if (match.params.type == 6) { type = '上衣' }

    }
    render() {
        let { match, location, history, dispatch, typeGoods } = this.props;
        // let typeGoods = store.getState().typeGoods;
        return (
            <div className="box">
                <Head title={type} show={true} {...this.props}   ></Head>
                <div className='typeGoods'>

                
                <PullToRefresh
                    damping={60}
                    ref="scrolling"
                    style={{
                        overflow: 'auto',
                    }}
                    indicator={{ deactivate: '下拉刷新' }}
                    direction={'down'}
                    refreshing={this.state.refreshing}
                    onRefresh={() => {
                        this.setState({ refreshing: true });  // 表示正在刷新
                        console.log("下拉刷新")
                        setTimeout(() => {
                            // myData = myData.reverse(); 修改 props
                            // reverseGoods();
                            this.setState({ refreshing: false });  // 刷新完成
                        }, 2000);
                    }}
                >

                <ul className='maybeLike'>
                    {
                        typeGoods.map((val, index) => (

                            <li key={index} className='bounceInUp'>
                                <NavLink to={'/goodsdetail/' + val._id} activeClassName="nav-active">
                                    <div className='goodsBox'>
                                        <img src={val.img} alt="" />
                                    </div>
                                    <p className='goodsMsg'>
                                        {val.title}
                                    </p>
                                    <div className='goodsBoxBottom'>
                                        <span className='price'>
                                            ￥{val.price}
                                        </span>
                                        <span>
                                            销量:{val.sale}
                                        </span>
                                    </div>
                                </NavLink>
                            </li>

                        ))
                    }

                </ul>
                    </PullToRefresh>
                </div>
                
            </div>
        )
    }
}