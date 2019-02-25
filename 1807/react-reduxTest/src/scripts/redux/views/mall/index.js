

import "./index.css";
import { connect } from "react-redux"
import React, { Component } from "react";
import { Carousel, WingBlank, Grid, WhiteSpace, Toast } from 'antd-mobile';
// import store from "../../store";
import LazyLoad from 'react-lazyload';
import { getLunbo, getAllGoods,changeNum} from "../../actions";
import { NavLink } from "react-router-dom";
import Head3 from "../../../components/head3"
import axios from "axios";
axios.defaults.baseURL = "http://60.205.210.6:1314";
const data1=[
    { icon: 'https://s10.mogucdn.com/mlcdn/c45406/181031_1fa6a0aj703ek9g6kkc5ek5495ke1_172x172.png', text:'包包'},
    { icon: 'https://s10.mogucdn.com/mlcdn/c45406/181031_522dgj6e1i9ji87gkc4hcbcc9cb2b_172x172.png', text: '裤子' },
    { icon: 'https://s10.mogucdn.com/mlcdn/c45406/181031_56ldahcgfcb306ieceh0f36edga0k_172x172.png', text: '内衣' },
    { icon: 'https://s10.mogucdn.com/mlcdn/c45406/181031_353i8ki02gfl955alfi9k3i9j4i5h_172x172.png', text: '女鞋' },
    { icon: 'https://s10.mogucdn.com/mlcdn/c45406/181031_5jbbcl9ja0hdg8di6j0b4hfaa8iba_172x172.png', text: '裙子' },
    { icon: 'https://s10.mogucdn.com/mlcdn/c45406/181031_20c98cekk381c5i3ladb506e8g290_172x172.png', text: '上衣' },
]



@connect(
    state => {    // mapStateToProps
        return {
            lunbotu: state.lunbotu,
            allgoods: state.allgoods,
            totalgoods: state.totalgoods,
            num:state.num
        }
    }
)
export default class Mall extends Component {
    // state = {
    //     imgHeight: 176
    // }
    constructor(props) {
        super(props);
        this.state = {
            finished: false,//是否全部加载完毕
            isFoot: true,   //阻止用户频繁上拉调接口
            imgHeight: 176
        }
        this._page = 1;              //分页页码                           
        this.val = '';               //搜索框的值
        this._page_size = 5;         //每页显示个数 
        this.startx;                 //触摸起始点x轴坐标
        this.starty;                 //触摸起始点y轴坐标 
        // this.num=1
    }
    touchStart=(e)=> {
        // console.log(touchStart)
        this.startx = e.touches[0].pageX;
        this.starty = e.touches[0].pageY;
    }
    touchEnd=(e)=> {
        // console.log(touchEnd)
        let endx, endy;
        endx = e.changedTouches[0].pageX;
        endy = e.changedTouches[0].pageY;
        let direction = this.getDirection(this.startx, this.starty, endx, endy);
        switch (direction) {
            case 0:
                console.log("未滑动！");
                break;
            case 1:
                console.log("向上！");
                this.loadData();
                break;
            case 2:
                console.log("向下！");
                this.Refresh();
                break;
            case 3:
                console.log("向左！");
                break;
            case 4:
                console.log("向右！");
                break;
            default:
        }
    }
    getAngle(angx, angy) {
        return Math.atan2(angy, angx) * 180 / Math.PI;
    }
    getDirection(startx, starty, endx, endy) {
        let angx = endx - startx;
        let angy = endy - starty;
        let result = 0;

        //如果滑动距离太短
        if (Math.abs(angx) < 2 && Math.abs(angy) < 2) {
            return result;
        }
        let angle = this.getAngle(angx, angy);
        if (angle >= -135 && angle <= -45) {
            result = 1;
        } else if (angle > 45 && angle < 135) {
            result = 2;
        } else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
            result = 3;
        } else if (angle >= -45 && angle <= 45) {
            result = 4;
        }

        return result;
    }
    loadData() {
        let { dispatch ,num} = this.props;
        // console.log("数据的高-------------------------", this.refs.onPullUp.clientHeight);
        // console.log("滚动的高------------------------", document.documentElement.scrollTop);
        // console.log("滚动的高------------------------", document.body.scrollTop);
        // console.log("屏幕的高------------------------", document.documentElement.clientHeight);
        // let { meActs } = this.props;
        let dataHeight = this.refs.onPullUp.clientHeight;
        let scrollHeight = document.body.scrollTop || document.documentElement.scrollTop;
        let screenHeight = document.documentElement.clientHeight;
        const h = 10;//自定义距离底部多少时concat数据
        if (dataHeight - scrollHeight - h < screenHeight && this.state.isFoot) {
            this.setState({
            });
            console.log("应该只显示1次");
            let params = {
                value: this.val,
                page_index: this._page,
                page_size: this._page_size,
            }
            console.log("到达底部")
            Toast.loading('加载中...', 1, () => {

            });

            setTimeout(() => {
                dispatch(
                    getAllGoods({
                        url: "/mogujieallgoods", num:num*1+1,callback: () => {
                            Toast.hide();
                            Toast.info("请求成功!", 1);
                        }
                    })
                )
                dispatch(changeNum(num))
            }, 500)


            // meActs.getRecentReadList(this.accessKey, this.accessID, params).then((res) => {
            //     if (res.data.code === 10000 && res.data.data.list.length > 0) {
            //         this.setState({
            //             isFoot: true,
            //         });
            //         this._page++;
            //     }
            //     //数据加载完毕
            //     if (res.data.code === 10000 && res.data.data.list.length == 0) {
            //         this.setState({
            //             finished: true,
            //         })
            //     }
            // });
        }
        
    }
    Refresh() { 
        
    }



    componentWillMount(){
        let { dispatch,num}=this.props;
       
        dispatch(getLunbo({ url: "/lunbotu"}))

        // dispatch(getAllGoods({ url: "/mogujieallgoods" ,num:1}))
        if (num<=1){
            console.log("num是")
            console.log(num)
            dispatch(
                getAllGoods({
                    url: "/mogujieallgoods", num, callback: () => {
                        // Toast.hide();
                        // Toast.info("请求成功!", 1);
                    }
                })
            )
        }
        
    }
    goToTypeGoods=(index)=>{
        this.props.history.push(`/goods/${index}`)

    }
    componentDidMount() {


    }
    componentDidUpdate(){

    }


    render() {
        let { lunbotu, totalgoods} = this.props;
        // let { scrollHeight } = this.state;
        // console.log(totalgoods.allgoods)
        // console.log(totalgoods.partallgoods)
        return (
            <div className="box" ref="onPullUp">
                <Head3 history={this.props.history}></Head3>
                <WingBlank>
                    <Carousel
                        autoplay={true}
                        infinite
                        // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        // afterChange={index => console.log('slide to', index)}
                    >
                        {lunbotu.map(val => (
                            <a
                                key={val}
                                href="http://www.alipay.com"
                                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                            >
                                
                                <img
                                    src={val.imgs}
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                    onLoad={() => {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                                
                            </a>
                        ))}
                    </Carousel>
                </WingBlank>
                <ul className="navList">
                    {
                        data1.map((val,index)=>(
                            // <LazyLoad height={200} key={index}>
                            <li className='moveIn' key={index} onClick={() => { this.goToTypeGoods(index+1)}}>
                                <div className="imgBox">
                                    
                                    <img src={val.icon} alt="" />
                                    
                                </div>
                                <span>{val.text}</span>
                            </li>
                            // </LazyLoad>
                        )
                    )}               
                    <li></li>               
                                    
                </ul>
                
                <ul className='maybeLike'
                    onTouchStart={(e) => this.touchStart(e)} onTouchEnd={(e) =>this.touchEnd(e)}
                >
                    {   
                        totalgoods.partallgoods && totalgoods.partallgoods.map((val, index) => (
                            // <LazyLoad height={1000} key={index}>
                                <li className='bounceInUp' key={index}>
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
                            // </LazyLoad>
                        ))
                    }
                    
                </ul>
                
            </div>
        )
    }
}