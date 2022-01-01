import {
    GET_PROD_BY_SOLD,
    GET_PROD_BY_DATE,
    GET_PRODUCT_PAGINATE,
    GET_PROD_BY_ID,
    CLEAR_CURRENT_PRODUCT
} from '../types'




export default function productsReducer(state={}, action){
    switch(action.type){
        case GET_PROD_BY_SOLD:
            return {...state, bySold: action.payload}
        case GET_PROD_BY_DATE:
            return {...state, byDate: action.payload}
        
        case GET_PRODUCT_PAGINATE :
            return {...state, byPaginate: action.payload}

        case GET_PROD_BY_ID:
            return {...state, byId: action.payload}
            
        case CLEAR_CURRENT_PRODUCT:
            return {...state, byId:null}
            
        default:
            return state
    }

}