
import axios from "axios";
axios.defaults.baseURL = "http://60.205.210.6:1314";



export const GETLUNBO = "GETLUNBO"
export const getLunbo=({url})=>{
   return axios.get(url)
            .then(res=>{
                // console.log("查询结果是")
                // console.log(res.data.result)
                return{
                    type: GETLUNBO,
                    lunbotu:res.data.result
                    
                }
            })
}

export const GETALLGOODS = "GETALLGOODS"
export const getAllGoods = ({ url, num, callback})=>{
    return axios.get(url)
            .then(res => {
                // console.log("查询结果是")
                // console.log(res.data.result)
                callback();
                return {
                    type: GETALLGOODS,
                    allgoods: res.data.result,
                    num

                }
            })
}

export const GETGOOD = "GETGOOD"
export const getGood = ({url,id})=>{
    return axios({
        type:"get",
        url: url,
        params:{
            _id:id
        }
    }).then(res=>{
        // console.log("查询结果是")
        // console.log(res.data.result[0])
        return {
            type: GETGOOD,
            goodsdetail: res.data.result[0]
        }
    })      
}

export const GETTYPEGOODS = "GETTYPEGOODS"
export const GetTypeGoods = ({ url, type }) => {
    return axios({
        type: "get",
        url: url,
        params: {
            type
        }
    }).then(res => {
        // console.log("查询结果是")
        // console.log(res.data.result)
        return {
            type: GETTYPEGOODS,
            typeGoods: res.data.result
        }
    })
}






export const CHANGENAMEINP = "CHANGENAMEINP"
export const changeNameInp = (inp) => (
    {
        type: CHANGENAMEINP,
        inp
    }
)

export const CHANGEPASSWORDINP = "CHANGEPASSWORDINP"
export const changePasswordInp = (inp) => (
    {
        type: CHANGEPASSWORDINP,
        inp
    }
)

export const CHANGEDBPSWDINP = "CHANGEDBPSWDINP"
export const changeDbPswdInp = (inp) => (
    {
        type: CHANGEDBPSWDINP,
        inp
    }
)


export const USERNAMEINP = "USERNAMEINP"
export const UsernameInp = (inp) => (
    {
        type: USERNAMEINP,
        inp
    }
)

export const PASSWORDINP = "PASSWORDINP"
export const PasswordInp = (inp) => (
    {
        type: PASSWORDINP,
        inp
    }
)



export const LOGIN ='LOGIN'
export const login = ({ url, username, password, callback1, callback2})=>{
    return axios({
        method: "post",
        url: url,
        data: {
            username,
            password
        }
    }).then(res => {
        console.log("查询结果是")
        console.log(res.data.username)
        if (res.data.type==1){
            callback2()
            return {
                type: LOGIN,
                goodsdetail: res.data.result[0]
            }
        }else{
            callback1()
        }
        
    })      
}

export const CHANGENUM = "CHANGENUM"
export const changeNum = (num) => (
    {
        type: CHANGENUM,
        num:num*1+1
    }
)