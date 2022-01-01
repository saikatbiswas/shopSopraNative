import {
    GET_ALL_ARRANGE,
    GET_ALL_LIST,
    ALL_CATEGORY,
    GET_MAIN_CATEGORY,
    ADD_MAIN_CATEGORY,
    CLEAR_LAST_CATEGORY,
    GET_SUB_CATEGORY,
    GET_SUB_CATEGORY_BY_PARENT,
    ADD_SUB_CATEGORY,
    GET_CATEGORY_BY_PARENT_ID,
    ADD_CATEGORY
} from '../types'

export default function categoryReducer(state={}, action){
    switch(action.type){
        case GET_ALL_ARRANGE:
            return{...state, allCategoryArrange: action.payload}
        case GET_ALL_LIST:
            return{...state, allCategoryList: action.payload}
        case ALL_CATEGORY:
            return{...state, allCategory: action.payload}
        case GET_MAIN_CATEGORY:
            return{...state, allMainCategory: action.payload}
        case ADD_MAIN_CATEGORY:
            return{...state, lastAdded: action.payload}
        case CLEAR_LAST_CATEGORY:
            return{...state, lastAdded: null}
        case GET_SUB_CATEGORY:
            return {...state, allSubCategory:action.payload}
        case GET_SUB_CATEGORY_BY_PARENT:
            return {...state, subCategoryById:action.payload}
        case ADD_SUB_CATEGORY:
            return{...state, lastAdded: action.payload}
        case GET_CATEGORY_BY_PARENT_ID:
            return {...state, categoryById:action.payload}
        case ADD_CATEGORY:
            return{...state, lastAdded: action.payload}
        default:
            return state
    }
}