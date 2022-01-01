import {
    GET_ALL_ADDRESS,
    ADD_ADDRESS,
    CLEAR_LAST_ADDRESS
} from '../types'

export default function categoryReducer(state={}, action){
    switch(action.type){
        case GET_ALL_ADDRESS:
            return{...state, all: action.payload}
        case ADD_ADDRESS:
            return{...state, lastAdded: action.payload}
        case CLEAR_LAST_ADDRESS:
            return{...state, lastAdded: null}
        default:
            return state
    }
}
