
import axios from "axios";
axios.defaults.baseURL = "http://60.205.210.6:1314";
import "./index.css";
import React, { Component } from "react";
import Head from "../../../components/head";
import { connect } from "react-redux"
import {getGood } from "../../actions";
import { Carousel, WingBlank, Grid, WhiteSpace, Modal, ActivityIndicator, Toast } from 'antd-mobile';
import start from "../../../../assets/images/star.png"
import dianpu from "../../../../assets/images/dianpu.png"
const alertMsg = Modal.alert;

@connect(
    state => {    // mapStateToProps
        return {
            goodsdetail: state.goodsdetail
        }
    }
)
export default class GoodsDetail extends Component {
    state={
        backgroundNum:0,
        num:1,
        show:false,
        goType:0
    }
    componentWillMount() {
        let { match, location, history, dispatch } = this.props;
        dispatch(getGood({ url: "/getgood",id: this.props.match.params.id }))
        var maxHeight = document.documentElement.clientHeight;
        
    }
    addShopingCar(goodsid,type){
        var uid = sessionStorage.uid
        if (uid) {
            this.refs.bcg.style.cssText = "display:block"
            this.setState({
                backgroundNum: 1,
                goType: type
            })
        } else {
            alertMsg('提示', '您还未登录,是否前去登录', [
                { text: '返回' },
                { text: '确认', onPress: () => this.props.history.push('/login') },
            ])
        }
    }
    exit=(e)=>{
        this.refs.bcg.style.cssText="display:block"
        setTimeout(() => {
            this.refs.bcg.style.cssText = "display:none"
        }, 800);
        this.setState({
            backgroundNum: 0
        })
    }
    del(){
        this.setState({
            num: this.state.num - 1 > 1 ? this.state.num - 1:1
        })
    }
    add(){
        this.setState({
            num: this.state.num+1
        })
    }
    addShopingCarNum(goodsid){
        var that=this;
        var uid = sessionStorage.uid
        var num=this.state.num;
        this.setState({
            show: true
        })
        axios({
            method: "post",
            url: "/mogucar",
            data: {
                uid,
                goodsid,
                count: num
            }
        }).then(res => {
            if (res.data.type == 1){
                setTimeout(()=>{
                    Toast.info("加入成功!");
                    that.refs.bcg.style.cssText = "display:none"
                    if (that.state.goType==1){
                        this.props.history.push('/shopingcar')
                    }
                    setTimeout(()=>{
                        Toast.hide();
                    },1000)
                },800)
                this.setState({
                    backgroundNum: 0,
                    show: false
                })
            }
        }) 
    }
    show = (e)=>{
        if(e.stopPropagation){
            e.stopPropagation()
        }else{
            e.cancelBubble = true;
        }
    } 
    render() {
        let { match, location, history, goodsdetail} = this.props;
        let goodsid = this.props.match.params.id
        let that=this;
        const loadingEl = (
            <div style={{ width: '50px', height: '50px', position: 'fixed', left: '48%', top: '50%', zIndex: 1001,justifyContent: 'center' }} >
                <ActivityIndicator size="large" />
            </div>
        );
        return (
            <div className="box">
                <div className='goodsDetailBox'>

                
                {this.state.show ? loadingEl : null}
                    <div className={this.state.backgroundNum === 1 ? 'bcgBox fadeInUp combcg' : 'xiaoshi fadeOutDown combcg'} ref='bcg' onClick={this.exit} >
                    <div className='bcgBoxBottom' onClick={(event) => this.show(event)} >
                        <WingBlank size="sm">
                            <div className='mianbanTop clearfix'>
                                <img src={goodsdetail.img} alt="" className='smallImg'/>
                                <p className='mianbanTopRight'>
                                    ￥{goodsdetail.price}
                                </p>
                                {/* onClick={() => this.exit()} */}
                                <div className='exit' onClick={(e) => this.exit(e)}>X</div>
                            </div>
                            <div className='mianbanContent'>
                                <p>尺码</p>
                                <span>S</span>
                                <span>M</span>
                                <span>L</span>
                                <span>XL</span>
                                <span>XXL</span>
                            </div>
                            <div className='mianbanBottom'>
                                <p>数量</p>
                                <span className='del' ref='del' onClick={()=>this.del()}>-</span>
                                <span className='goodsNum' ref='num'>{this.state.num}</span>
                                <span className='add' ref='add' onClick={() => this.add()}>+</span>
                            </div>
                        </WingBlank>
                        <button className='mianbanBtn' onClick={() => this.addShopingCarNum(goodsid)}>确认</button>
                    </div>
                </div>
                <Head title="商品详情" show={true} history={this.props.history}  ></Head>
                <div className='content'>
                    <WingBlank size="sm">
                    <div className='goodsBox'>
                        <img src={goodsdetail.img} alt=""/>
                    </div>
                    <div className='goodsMsgBox clearfix'>
                        <div className='goodsPrice'>
                            <div className='newPrice'>
                                <span className='newPrice1'>￥</span>
                                <span className='newPrice2'>
                                    {goodsdetail.price}
                                </span>
                            </div>
                            <div className='oldPrice'>
                                <p>￥{goodsdetail.orgPrice}</p>
                                <p>原价</p>
                            </div>
                        </div>
                    </div>
                    <WhiteSpace size="sm" />
                    <p className='goodsMsgBottom'>
                        {goodsdetail.title}
                    </p>
                    </WingBlank>
                </div>
                <div className='footer'>
                    <div className='shoucang'>
                        <img src={start} alt=""/>
                        <p>收藏</p>
                    </div>
                    <div className='dianpu'>
                        <img src={dianpu} alt="" />
                        <p>店铺</p>
                    </div>
                    <div className='addShopingCar' onClick={() => this.addShopingCar(goodsid,0)}>
                        加入购物车
                    </div>
                    <div className='buy' onClick={() => this.addShopingCar(goodsid,1)}>
                        立即购买
                    </div>
                </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        
    }
    componentDidUpdate(){
        var box = document.querySelector(".box");
        var bcg = document.querySelector(".combcg");
        bcg.addEventListener('touchmove',function(e){
            if (e.stopPropagation) {
                e.stopPropagation()
            } else {
                e.cancelBubble = true;
            }
        
            console.log("22")
        })
        box.addEventListener('touchmove', function (e) {
          
            console.log("11")
        })

    }
}