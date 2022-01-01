import {
    ERROR_GLOBAL,
    SUCCESS_GLOBAL,
    CLEAR_NOTIFICATION,
    DELETE_ARTICLE
} from '../types';

export default function notificationReducer(state={}, action){
    switch(action.type){
        case ERROR_GLOBAL:
            return {...state, error: true, msg: action.payload}
        case SUCCESS_GLOBAL:
            return {...state, success: true, msg: action.payload}
        case DELETE_ARTICLE:
            return {...state, removeArticle:true}
        case CLEAR_NOTIFICATION:
            return {}

        default:
            return state
    }

}