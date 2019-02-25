export default {
    // 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
    getgoodsnum(state, data) {
        state.goodsnum = data.sum;
        state.shopingcar = data.result;
        console.log(state.shopingcar)
    },
    getAllGoods(state, allgoods){
        if (state.allgoods.length>0){

        }else{
            state.allgoods = allgoods;
            allgoods.forEach((item) => {
                if (item.type == '6') {
                    state.bigimg.push(item)
                }
                if (item.type == '1') {
                    state.chuang.push(item)
                }
                if (item.type == '2') {
                    state.zhuoyi.push(item)
                }
                if (item.type == '3') {
                    state.chugui.push(item)
                }
                if (item.type == '4') {
                    state.dengju.push(item)
                }
                if (item.type == '5') {
                    state.shafa.push(item)
                }
            });
        }

        
        state.username = sessionStorage.username;
    },
    record(state, { username, uid }){
        state.username = username;
        state.uid = uid;
        state.status=true;
        // console.log(state);
        // sessionStorage.setItem('username', username);
    },
    setmeilelepage(state, { meilelepage, goodstype}){
        state.meilelepage = meilelepage;
        state.goodstype = goodstype
        // console.log(state);
    },
    getgoods(state,{num,type}){
        num = num || 1;
        if (type==0){
            state.count = state.allgoods.length*1
            state.shangping = state.allgoods.slice(state.danye * (num - 1), state.danye * num);
        }
        if (type == 1){
            state.count = state.chuang.length*1
            state.shangping = state.chuang.slice(state.danye * (num - 1), state.danye * num);
        }
        if (type == 2) {
            state.count = state.zhuoyi.length*1
            state.shangping = state.zhuoyi.slice(state.danye * (num - 1), state.danye * num);
        }
        if (type == 3) {
            state.count = state.chugui.length*1
            state.shangping = state.chugui.slice(state.danye * (num - 1), state.danye * num);
        }
        if (type == 4) {
            state.count = state.dengju.length*1
            state.shangping = state.dengju.slice(state.danye * (num - 1), state.danye * num);
        }
        if (type == 5) {
            state.count = state.shafa.length*1
            state.shangping = state.shafa.slice(state.danye * (num - 1), state.danye * num);
        }
        if (state.goodstype ==100){
            state.count = state.searchlist.length * 1
            state.shangping = state.searchlist.slice(state.danye * (num - 1), state.danye * num);
        }
        // console.log(state)

    },
    getstatus(state){
        if (sessionStorage.username){
            state.status=true;
        }else{
            state.status=false;
        }
    },
    exit(state){
        state.username="";
        sessionStorage.setItem('username', "");
        sessionStorage.setItem('uid', "");
        state.status = false;
        state.goodsnum = 0;
    },
    seachgoods(state,msg){
        console.log(state);
        if (msg.length>0){
            state.shangping = state.allgoods.filter(item => {
                if (item.goodsname) {
                    return item.goodsname.indexOf(msg) !== -1
                }
            });
            state.goodstype = '100';
            state.searchlist = state.shangping;
            state.count = state.searchlist.length * 1
            console.log(state)
        }else{
            state.count = state.allgoods.length * 1
            state.shangping = state.allgoods.slice(0, 16);
            state.goodstype = '';
        }
        
        
    },
    changeSearchMsg(state,msg){
        state.seachmsg = msg;
    },
    addnum(state,val){
        state.numb=val;
    },
    updateDelAll(state,val){
        state.delAll = val
    },
    getCarList(state,val){
        console.log('mutations   getCarList')
        console.log(val)
        state.shopingcar = val
    }
}




//    type:1  床
//    type:2  桌椅组合  
//    type:3  橱柜  
//    type:4  灯具套餐   
//    type:5  沙发  
//    type:6  大轮播图