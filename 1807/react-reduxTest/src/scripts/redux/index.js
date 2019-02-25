import React, { Component } from "react";
import ReactDOM, { render } from "react-dom";
import Views from "./views"
import { Provider } from "react-redux"
import store from "./store"

// Provider会一直监听store, 当变化时会重新渲染

const hotRender = () => {
    render(
        <Provider store={store}>    
            <Views />
        </Provider>,
        document.getElementById("app")
    )
}

hotRender();

// import '../es6/index.js'








//下面是没有使用react-redux中Provider的情况


// import React, { Component } from "react";
// import ReactDOM, { render } from "react-dom";
// import Views from "./views"
// import store from "./store";

// const hotRender = () => {
//     const state = store.getState();  // 初始化执行 
//     render(

//         <Views />,
//         document.getElementById("app")
//     )
// }

// hotRender();
// store.subscribe(hotRender)   // state change  会触发视图刷新 