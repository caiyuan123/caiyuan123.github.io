
import React, { Component } from "react";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Guide from "./guide";
import App from "./app";
import Search from "./search";
import AllGoods from "./allgoods";
import Goods from "./goods";
import GoodsDetail from "./goodsdetail";
import Login from "./login";
import Register from "./register";
import ShopingCar from "./shopingcar";
import Demo from "./demo";

export default class Layout extends Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route path="/" exact component={Guide} />
                    <Route path="/app" component={App} />
                    <Route path="/search" component={Search} />
                    <Route path="/goods/:type?" component={Goods} />
                    <Route path="/allgoods" component={AllGoods} />
                    <Route path="/goodsdetail/:id?" component={GoodsDetail} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/shopingcar" component={ShopingCar} />
                    <Route path="/demo" component={Demo} />
                    <Route component={App} />
                </Switch>
            </Router>
        )
    }
}