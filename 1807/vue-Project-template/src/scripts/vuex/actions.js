import axios from "axios";
axios.defaults.baseURL = "http://60.205.210.6:1314";

export default {
    // Action 提交的是 mutation，而不是直接变更状态。  commit 提交 mutation
    // Action 可以包含任意异步操作。
    getgoodsnum({ commit }, uid) {
        axios.post('/getgoodsnum', { uid })
            .then(res => {
                commit('getgoodsnum', res.data)
            })
    },
    getAllGoods({ commit }){
        axios.get('/allgoods')
        .then(res=>{
            commit('getAllGoods', res.data.result)
        })
    },
    record({ commit: commit },{username,uid}){
        console.log("record " + username);
        commit('record', { username, uid })
    },
    setmeilelepage({ commit }, { meilelepage,goodstype}){
        commit('setmeilelepage', { meilelepage, goodstype})
    },
    getgoods({ commit},{num,type}){
        commit('getgoods', { num, type})
    },
    getstatus({ commit }){
        commit('getstatus')
    },
    exit({ commit }){
        commit('exit')
    },
    seachgoods({ commit},msg){
        commit('seachgoods', msg)
    },
    getCarList({ commit }, {uid}) {
        console.log('action   getCarList')
        axios.post('/getgoodsnum', { uid })
        .then(res => {
            commit('getCarList', res.data.result)
           
        })



        // axios.get(
        //     url,
        //     {
        //         params: {
        //             mobile,
        //         }
        //     }
        // ).then(res => {
        //     console.log(res);
        //     cb();
        //     commit("getCarList", res.data.result);
        // })
    },
}