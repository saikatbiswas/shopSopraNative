import {
    USER_NEED_LOGIN,
    CLEAR_USER_LOGIN,
} from '../types';

export default function needLoginReducer(state={}, action){
    switch(action.type){
        case USER_NEED_LOGIN:
            return {...state, needlogin: true}
        case CLEAR_USER_LOGIN:
            return {}

        default:
            return state
    }

}