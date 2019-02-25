
import { connect } from "react-redux";

import ReactReduxDemoUI from "./index";

const mapStateToProps = (state) => {   // state ==> store.getState() 
    console.log(state);
    return {
        count1: state.count + 100,
        ...state
    }
}

const mapDispatchToProps = (dispatch) => {   // store.dispatch 
    return {
        add: (payload)=>{
            dispatch({
                type: "ADD",
                payload
            })
        },
        desc: () => dispatch(increment(50)),
        changeCity: city => dispatch(changeCity(city))
    }
}

export default connect(
    // params
    mapStateToProps,
    mapDispatchToProps
)(ReactReduxDemoUI) 