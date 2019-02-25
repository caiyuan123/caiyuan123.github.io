
import { GETLUNBO, GETALLGOODS, GETGOOD, CHANGENAMEINP, USERNAMEINP, PASSWORDINP, GETTYPEGOODS} from "../actions"

// let allgoods=[];
// let partallgoods=[];
const defaultState = {
   biaoti:"",
   lunbotu:[],
    totalgoods: {},
//    allgoods:[],
//    partallgoods:[],
   goodsdetail:{},
   username:"",
   password:"",
   usernameinp:"",
   passwordinp:"",
   dbPassword:"",
   typeGoods:[],
   num:1

}

export default (state = defaultState, action)=>{
    
    switch (action.type){
        case "GETLUNBO":
            return { ...state, ...{ lunbotu: action.lunbotu } } ;
            break;
        case "GETALLGOODS":
            var totalgoods1 = {}
            totalgoods1.allgoods = action.allgoods
            totalgoods1.partallgoods = action.allgoods.slice(0,8+ action.num*4)
            // totalgoods1.num=num*1+1
            // console.log(totalgoods1)
            return { ...state, ...{ totalgoods: totalgoods1 }};
            // return { ...state, ...{ partallgoods: action.allgoods}}
            break;
        case "GETGOOD":
            return { ...state, ...{ goodsdetail: action.goodsdetail } };
            break;

        case "CHANGENAMEINP":
            return { ...state, ...{ username: action.inp } };
            break;
        case "CHANGEPASSWORDINP":
            return { ...state, ...{ password: action.inp } };
            break;
        case "CHANGEDBPSWDINP":
            return { ...state, ...{ dbPassword: action.inp } };
            break;
        case "USERNAMEINP":
            return { ...state, ...{ usernameinp: action.inp } };
            break;
        case "PASSWORDINP":
            return { ...state, ...{ passwordinp: action.inp } };
            break;
        case "GETTYPEGOODS":
            return { ...state, ...{ typeGoods: action.typeGoods } };
            break;
        case "CHANGENUM":
            console.log('action.num是' + action.num)
            return { ...state, ...{ num: action.num } };
            break;



        default:
            return state;
            break;
    }
}


