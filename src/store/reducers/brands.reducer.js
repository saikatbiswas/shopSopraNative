import {
    GET_ALL_BRANDS,
    ADD_BRAND,
    CLEAR_LAST_BRAND,
    GET_BRAND_BY_ID,
    CLEAR_CURRENT_BRAND
} from '../types'



export default function brandsReducer( state={}, action){
    switch(action.type){
        case GET_ALL_BRANDS:
            return {...state, all:action.payload}
        case ADD_BRAND:
            return {...state, lastAdded:action.payload}
        case CLEAR_LAST_BRAND:
            return{...state, lastAdded: null}
        case GET_BRAND_BY_ID:
            return{ ...state, byId:action.payload}
        case CLEAR_CURRENT_BRAND:
            return {...state, byId:null}
        
        default:
            return state
    }
}