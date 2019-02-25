
import React, { Component } from "react";

import { Button } from "antd-mobile"

import { connect } from "react-redux"

import { increment, changeCity } from "../actions";
@connect(
    state=>{
        return {
            ...state,
            count1: state.count + 2000
        }
    },
    dispatch=>(
        {
            add: (payload) => {
                dispatch({
                    type: "ADD",
                    payload
                })
            },
            desc: () => dispatch(increment(50)),
            changeCity: city => dispatch(changeCity(city))
        }
       
    )
)

export default class CounterBox extends Component {
    render() {
        let { count, count1, add } = this.props;
        return (
            <div>
                <h2>react-redux demo  demo</h2>
                <h1>UI 组件 </h1>
                <h1>容器组件 </h1>
                <h1>count = = {count} count1==={count1}</h1>
                <Button type="primary" onClick={() => add(100)}>count add 100 </Button>
            </div>
        )
    }
}