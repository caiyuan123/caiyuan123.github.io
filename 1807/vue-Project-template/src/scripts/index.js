

// 模块化编程 

// console.log('模块化编程')
// import Vue from "../../node_modules/vue/dist/vue.js";  // node_modules
import Vue from "vue";  // node_modules
import ElementUI from "element-ui";
import VueResource from "vue-resource";
Vue.use(ElementUI)    // Vue.use 表示全局声明 
Vue.use(VueResource);    // this.$http.get Vue.http

import router from "./router"

import Footer from "./components/foot.vue"
Vue.component("meilele-foot", Footer)

import Header from "./components/header.vue"
Vue.component("meilele-header", Header)

import store from "./vuex/store";
import MyMagnify from "./components/fangdajing.vue";


// Vue.component("app-root", App)

const vm = new Vue({
    el: "#meilele",
    router,
    store,   // 挂载到根实例  this.$store  
    data: {
        title: "vue + webpack ",

    }
})
