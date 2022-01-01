import { 
    AUTH_USER,
    USER_SIGN_OUT,
    UPDATE_USER_PROFILE,
    USER_UPDATE_EMAIL,
    USER_ADD_TO_CART,
    PURCHASE_SUCCESS
} from '../types';


let DEFAULT_USER_STATE = {
    data:{
        _id:null,
        fullname:null,
        email:null,
        phone:null,
        historyuser:[],
        historyseller:[],
        issocalregister:null,
        verified:null
    },
    auth:true,
    cart:[],
    sell:[]
}

export default function usersReducer(state=DEFAULT_USER_STATE, action){
    switch(action.type){
        case AUTH_USER:
            return{
                ...state,
                data:{...state.data, ...action.payload.data},
                auth:action.payload.auth
            }
        case USER_SIGN_OUT:
            return{
                ...state,
                data:{...DEFAULT_USER_STATE.data},
                auth:false
            }
        case UPDATE_USER_PROFILE:
            return {
                ...state, data:{...action.payload}
            }
        case USER_UPDATE_EMAIL:
            return {
                ...state, 
                data:{...state.data, email:action.payload}
            }
        case USER_ADD_TO_CART:
            return{
                ...state,
                cart: action.payload
            }
        case PURCHASE_SUCCESS:
            return {...state,
                data:{
                    ...state.data,
                    history: action.payload.history
                },
                cart:[]            
            }
            
        default:
            return state
    }

}