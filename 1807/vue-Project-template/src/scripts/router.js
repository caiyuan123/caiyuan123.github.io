// 0.  模块化编程 
import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter);
// 1. 定义路由组件 
import Register from "./views/register.vue"
import Login from "./views/login.vue"
import HomePage from "./views/homepage.vue"
import Detail from "./views/detail.vue"
import shafa from "./views/shafa.vue"
import chuang from "./views/chuang.vue"
import zhuoyizuhe from "./views/zhuoyizuhe.vue"
import chugui from "./views/chugui.vue"
import dengjutaocan from "./views/dengjutaocan.vue"
import shopingcar from "./views/shopingcar.vue"
// 2. 配置 routes
const routes=[
    { path: "", redirect: { name: 'homepage' } },
    { path: "/register", name: "register", component: Register},
    { path: "/login", name: "login", component: Login },
    { path: "/homepage", name: "homepage", component: HomePage },
    { path: "/shafa", name: "shafa", component: shafa },
    { path: "/chuang", name: "chuang", component: chuang },
    { path: "/zhuoyizuhe", name: "zhuoyizuhe", component: zhuoyizuhe },
    { path: "/chugui", name: "chugui", component: chugui },
    { path: "/dengjutaocan", name: "dengjutaocan", component: dengjutaocan },
    // { path: "/detail/:goodsid/:goodstype/:goodsimg", name: "detail", component: Detail },
    { path: "/detail", name: "detail", component: Detail },
    { path: "/shopingcar", name: "shopingcar", component: shopingcar },
    
]
// 3. 创建路由
const router = new VueRouter({
    routes,
    mode: "hash"
})
// 暴露
export default router;

// {
//     path: "/app",
//         name: 'app',
//             component: App,
//                 children: [
//                     {
//                         path: "box",
//                         name: 'box',
//                         component: Box,
//                         children: [
//                             { path: 'home', name: 'home', component: Home },
//                             { path: 'newgoods', name: 'newgoods', component: newGoods },
//                             { path: 'man', name: 'man', component: Man },
//                             { path: 'woman', name: 'woman', component: Woman },
//                             { path: 'brand', name: 'brand', component: Brand }
//                         ]
//                     },
//                     {
//                         path: 'good-detail/:id',
//                         name: 'gooddetail',
//                         component: GoodDetail
//                     }
//                 ]
// }