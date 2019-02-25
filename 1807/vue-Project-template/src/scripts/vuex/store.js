import Vue from "vue";
import Vuex from "vuex"
Vue.use(Vuex);
import axios from "axios";

import state from "./state"
import actions from "./actions"
import mutations from "./mutations"

const store = new Vuex.Store({
    state,
    actions,
    mutations,
    getters:{
        bigImg(state){
            // console.log("bigImg")
            return state.allgoods.filter((item) => item.type == '6');
        }
    }
})

export default store;