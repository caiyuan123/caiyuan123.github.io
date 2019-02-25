
import React, { Component } from "react";

import ReactDOM, { render } from "react-dom";

import ReactReduxDemoUI from "./views";
import Counter from "./views/counter";  // 容器  组件 
import CounterBox from "./views/counterBox"
import store from "./store";

import { Provider } from "react-redux"; // 负责传递store 

const hotRender=()=>{
    render(
        <Provider store={store}>
            <CounterBox />
        </Provider>,
        document.getElementById("app")
    )
}

hotRender()