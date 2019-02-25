
import axios from "axios";
axios.defaults.baseURL = "http://60.205.210.6:1314";
import "./index.css";
import React, { Component } from "react";
import Head from "../../../components/head";
import { Checkbox} from 'antd-mobile';
const CheckboxItem = Checkbox.CheckboxItem;



export default class ShopingCar extends Component {
    state = {
        mogucar:[],
        checkAll:true
    }
    componentWillMount(){
        var that=this;
        var uid = sessionStorage.uid
        axios({
            type: "get",
            url: "/getmogucar",
            params: {
                uid
            }
        }).then(res => {
            if (res.data.type == 1) {
                that.setState({
                    mogucar: res.data.result
                })
            }
        }) 
    }
    total=()=>{
        var sum = 0
        this.state.mogucar.filter((item, index) => {
            if(item.check){
                sum = sum + item.goodsprice * item.count
            }
        })
        return sum.toFixed(2)
    }
    onChange = (e,index) => {
        this.setState({
            mogucar: this.state.mogucar.map((item, i) => {
                if (index == i) {
                    item.check = !item.check
                    return item
                } else {
                    return item
                }
            })
        })
        var flg=true;
        this.state.mogucar.filter((item, i) => {
            if (!item.check) {
                flg=false;
            }
        })
        this.setState({
            checkAll: flg
        })
    }
    delNum = (e, index,uid, goodsid)=>{
        var that = this;
        if (this.state.mogucar[index].count>1){
            axios({
                method: "post",
                url: "/mogucar",
                data: {
                    uid,
                    goodsid,
                    count: -1
                }
            }).then(res => {
                if (res.data.type == 1) {
                    that.setState({
                        mogucar: that.state.mogucar.map((item, i) => {
                            if (index == i) {
                                item.count = item.count - 1 > 0 ? item.count - 1 : 1
                                return item
                            } else {
                                return item
                            }
                        })
                    })
                }
            }) 
        }
    }
    addNum = (e,index,uid,goodsid)=>{
        var that=this;
        axios({
            method: "post",
            url: "/mogucar",
            data: {
                uid,
                goodsid,
                count:1
            }
        }).then(res => {
            if (res.data.type == 1) {
                that.setState({
                    mogucar: that.state.mogucar.map((item, i) => {
                        if (index == i) {
                            item.count = item.count * 1 + 1
                            return item
                        } else {
                            return item
                        }
                    })
                })
            }
        }) 
    }
    delOne=(e,index,uid,goodsid)=>{
        console.log(uid)
        console.log(goodsid)
        var _id = []
        var that = this
        _id.push(goodsid)
        axios({
            method: "post",
            url: "/delMoguGoods",
            data: {
                uid,
                goodsid: _id
            }
        }).then(res => {
            console.log(res);
            if(res.data.type==1){
                that.state.mogucar.splice(index, 1)
                that.setState({
                    mogucar: that.state.mogucar
                })
            }
        })
    }
    checkAll=()=>{
        this.setState({
            checkAll: !this.state.checkAll
        })
        if (!this.state.checkAll){
            mogucar: this.state.mogucar.map((item, i) => {
                    item.check = true
                    return item
            })
        }else{
            mogucar: this.state.mogucar.map((item, i) => {
                item.check = false
                return item
            })
        }
    }
    delAll=()=>{
        var uid=sessionStorage.uid
        var _id = []
        var that = this
        var newmogucar=[]
        this.state.mogucar.forEach((item, i) => {
            if (item.check == true){
                _id.push(item._id)
            }else{
                newmogucar.push(item)
            }
        })
        console.log(_id)
        console.log(newmogucar)
        axios({
            method: "post",
            url: "/delMoguGoods",
            data: {
                uid,
                goodsid: _id
            }
        }).then(res => {
            console.log(res);
            if (res.data.type == 1) {
                that.setState({
                    mogucar: newmogucar
                })
            }
        })



    }
    render() {
        let mogucar = this.state.mogucar;
        // { console.log(this.state.total)}

        return (
            <div className="box">
                <Head title="购物车" show={true} {...this.props}   ></Head>
                <div className='shopingCarGoodsListBox'>
                    <ul className='shopingCarGoodsList'>
                        {
                            mogucar.map((val, index) =>(
                                <li className="list-li" key={index}>
                                    <div className='leftDiv'>
                                        <Checkbox onChange={(e) => this.onChange(e,index)} className='liCheckBox' checked={val.check}>
                                        </Checkbox>
                                        <div className='liMsg'>
                                            <img src={val.imgsrc} alt="" className='liMsgLeft'/>
                                            <div className='liMsgRight'>
                                                <p>{val.goodsname}</p>
                                                <p className='liMsgPriceBox'>
                                                    <span className='liMsgPrice'>
                                                    ￥{val.goodsprice}
                                                    </span>
                                                    <span className='liMsgTotal'>
                                                        小计:￥{(val.goodsprice * val.count).toFixed(2)}</span>
                                                </p>
                                                <p className='liMsgNum'>
                                                    <span onClick={(e) => { this.delNum(e, index, val.uid,val.goodsid) }}>-</span>
                                                    <span>{val.count}</span>
                                                    <span onClick={(e) => { this.addNum(e, index, val.uid,val.goodsid)}}>+</span>
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="btn" onClick={(e) => { this.delOne(e, index, val.uid, val._id)}}>删除</div>
                                </li>
                            ))
                        }
                    </ul>
                    <div className='shopingcarBottomBox'>
                        <div>
                            <Checkbox onChange={() => this.checkAll()} className='liCheckBox' checked={this.state.checkAll}>
                                全选
                        </Checkbox>
                        <a href="javascript:void(0)" className='delAll' onClick={()=>this.delAll()}>删除所选商品</a>
                        </div>
                       

                        <div>
                            <span>￥{this.total()}</span>
                            <span className='jiesuanBtn'>结算</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    componentDidUpdate(){
        var open = null;//open初始化，判断是否是已展开元素
        // var list = document.getElementsByClassName("list-li");
        var list = document.querySelectorAll(".list-li");
        for (var i = 0; i < list.length; i++) {
            var x, y, X, Y, moveX, moveY;
            list[i].addEventListener('touchstart', function (e) {
                /*获取最初的触摸位置*/
                x = e.changedTouches[0].pageX;
                y = e.changedTouches[0].pageY;
                moveX = true;
                moveY = true;
            });

            list[i].addEventListener('touchmove', function (e) {
                X = e.changedTouches[0].pageX;
                Y = e.changedTouches[0].pageY;

                //左右滑动
                if (moveX && Math.abs(X - x) - Math.abs(Y - y) > 0) {
                    e.stopPropagation();//阻止冒泡事件
                    //右滑收起删除按钮
                    if (X - x > 10) {
                        e.preventDefault();
                        this.classList.remove("moveleft");
                    }
                    //左滑显示删除按钮
                    if (x - X > 10) {
                        e.preventDefault();
                        this.classList.add("moveleft");
                        open = this;//存入展开的li元素
                    }
                    moveY = false;//左右滑动时不执行上下滑动时的事件
                }

                //上下滑动
                if (moveY && Math.abs(X - x) - Math.abs(Y - y) < 0) {
                    moveX = false;//上下滑动时不执行左右滑动时的事件
                }
            });

            list[i].addEventListener('click', function (e) {
                //在已展开的元素中执行操作
                if (open) {
                    var obj = e.target;
                    var objli = e.target.closest(".list-li");

                    //点击li元素里不是删除按钮的部分，li元素收起
                    if (obj.className != "btn") {
                        open.classList.remove("moveleft");
                    } 
                }
            });

        }
    }
}