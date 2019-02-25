import "./index.scss";

import React, { Component } from "react";

import { Route, Switch, Redirect } from "react-router-dom";

import Home from "../home"
import Live from "../live"
import Mall from "../mall"
import My from "../my"
import MyFoot from "../../../components/myfoot"

export default class App extends Component{
    render(){
        return(
            <div className="box">
                <Switch>
                    <Route path="/app/home" component={Home} />
                    <Route path="/app/live" component={Live} />
                    <Route path="/app/mall" component={Mall} />
                    <Route path="/app/my" component={My} />
                    <Route component={Home} />
                </Switch>
                <MyFoot history={this.props.history} ></MyFoot>

            </div>
        )
    }
}