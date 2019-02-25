
import "./index.css";
import React, { Component } from "react";
// import $ from 'jquery';
import { SearchBar, WhiteSpace, WingBlank, NavBar, Icon, Tabs } from 'antd-mobile';
const tabs = [
    { title: '正在流行' },
    { title: '上衣' },
    { title: '裤子' },
    { title: '套装' },
    { title: '上衣' },
    { title: '女鞋' },
    { title: '包包' },
];



export default class AllGoods extends Component {
    // qwe=()=>{
    //     alert('123')
    // }
    state={
        count:1
    }

    render() {
        let { count } = this.state
        return (
            
            <div className="box">
               <div className='head'>
                    <NavBar
                        mode="light"
                        icon={ <Icon type="left" />}
                        onLeftClick={() => this.props.history.go(-1) }
                    >
                        全部分类
                    </NavBar>
               </div>
                <div  className='liebiaoBox'>
                   
                    {/* <Tabs tabs={tabs}
                        initalPage={'t2'}
                        tabBarPosition="left"
                        tabDirection="vertical"
                    >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '400px', backgroundColor: '#fff' }}>
                            Content of first tab
                    </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '400px', backgroundColor: '#fff' }}>
                            Content of second tab
                    </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '400px', backgroundColor: '#fff' }}>
                            Content of third tab
                    </div>
                    </Tabs> */}
                   <ul className='liebiaoLeft'  res='liebiaoList' >
                        <li className={count == 1 ? 'liebiaoSelect':''} >上衣</li>
                        <li className={count == 2 ? 'liebiaoSelect' : ''}>裤子</li>
                        <li className={count == 3 ? 'liebiaoSelect' : ''}>裙子</li>
                        <li className={count == 4 ? 'liebiaoSelect' : ''}>套装</li>
                        <li className={count == 5 ? 'liebiaoSelect' : ''}>女鞋</li>
                        <li className={count == 6 ? 'liebiaoSelect' : ''}>包包</li>
                   </ul>
                    <div className='liebieRight'>

                    </div>


                </div>
            </div>
        )
    }
    // componentDidMount() {
    //     var liebiaoSelect = document.querySelectorAll(".liebiaoSelect")[0];
    //     liebiaoSelect.addEventListener('click', function (e) {
    //         // console.log("22") 
    //         this.setState({
    //             count:2
    //         })
    //     })
    // }
    // componentDidUpdate() {
    //     var liebiaoSelect = document.querySelectorAll(".liebiaoSelect")[0];
    //     liebiaoSelect.addEventListener('click', function (e) {
    //         // console.log("22") 
    //         this.setState({
    //             count: 2
    //         })
    //     })
    // }


}