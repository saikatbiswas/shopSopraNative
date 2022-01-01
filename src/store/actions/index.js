import {
    GET_PROD_BY_SOLD,
    GET_PROD_BY_DATE,
    GET_PRODUCT_PAGINATE,
    REMOVE_PRODUCT,
    PRODUCT_ADD,
    CLEAR_PRODUCT_ADD,
    GET_PROD_BY_ID,
    CLEAR_CURRENT_PRODUCT,

    
    ERROR_GLOBAL,
    SUCCESS_GLOBAL,
    CLEAR_NOTIFICATION,
    AUTH_USER,
    USER_SIGN_OUT,
    USER_NEED_LOGIN,
    CLEAR_USER_LOGIN,
    UPDATE_USER_PROFILE,
    USER_UPDATE_EMAIL,
    GET_ALL_ADDRESS,
    ADD_ADDRESS,
    CLEAR_LAST_ADDRESS,
    // UPDATE_ADDRESS,
    DELETE_ARTICLE,
    GET_MAIN_CATEGORY,
    ADD_MAIN_CATEGORY,
    CLEAR_LAST_CATEGORY,
    GET_SUB_CATEGORY,
    GET_SUB_CATEGORY_BY_PARENT,
    ADD_SUB_CATEGORY,
    GET_CATEGORY_BY_PARENT_ID,

    USER_ADD_TO_CART,
    PURCHASE_SUCCESS,

    GET_ALL_ARRANGE,
    GET_ALL_LIST,
    ADD_CATEGORY,
    ALL_CATEGORY,
    GET_ALL_BRANDS,
    ADD_BRAND,
    CLEAR_LAST_BRAND,
    GET_BRAND_BY_ID,
    CLEAR_CURRENT_BRAND,

    GET_SITE_VARS,
    UPDATE_SITE_VARS
    
} from '../types';

// Users
export const userAuthenticate = (data) =>({
    type:AUTH_USER,
    payload:data,
});
export const userUpdateProfile = (userData) => ({
    type:UPDATE_USER_PROFILE,
    payload:userData,
});
export const userUpdateEmail = (data)=>({
    type:USER_UPDATE_EMAIL,
    payload:data
})

// SIgnout
export const userSignOut = () =>({
    type:USER_SIGN_OUT
})


// User need login
// export const userNeedLogin = () => ({
//     type:USER_NEED_LOGIN
// });
// export const clearUserLogin = ()=> {
//     return (dispatch)=>{
//         dispatch({
//             type:CLEAR_USER_LOGIN
//         })
//     }
// };

// Address
export const getAllAddress = (data) => ({
    type:GET_ALL_ADDRESS,
    payload:data
});
export const addAddress = (data) => ({
    type:ADD_ADDRESS,
    payload:data
});
export const clearLastAddress = () => ({
    type:CLEAR_LAST_ADDRESS
});
// export const updateAddress = (data) => ({
//     type:UPDATE_ADDRESS,
//     payload:data
// });
export const deleteArticle = () => ({
    type:DELETE_ARTICLE
});

// Category Main
export const getMainCategory = (data) =>({
    type:GET_MAIN_CATEGORY,
    payload:data
});
export const addMainCategory = (data) =>({
    type:ADD_MAIN_CATEGORY,
    payload:data
});
export const clearLastCategory = () => ({
    type:CLEAR_LAST_CATEGORY
});
// Category sub
export const getSubCategory = (data) =>({
    type:GET_SUB_CATEGORY,
    payload:data
});
export const getSubCategoryByParent = (data) =>({
    type:GET_SUB_CATEGORY_BY_PARENT,
    payload:data
});
export const addSubCategory = (data) =>({
    type:ADD_SUB_CATEGORY,
    payload:data
});
// Category
export const getCategoryByParentId = (data) =>({
    type:GET_CATEGORY_BY_PARENT_ID,
    payload:data
});
export const addCategory = (data) =>({
    type:ADD_CATEGORY,
    payload:data
});
// export const clearLastSubCate = () => ({
//     type:CLEAR_LAST_MAIN_CATE
// });
export const getAllArrange = (data)=> ({
    type:GET_ALL_ARRANGE,
    payload:data
});
export const getAllList = (data)=> ({
    type:GET_ALL_LIST,
    payload:data
});
export const getAllCategory = (data)=> ({
    type:ALL_CATEGORY,
    payload:data
});

// Brands
export const getAllBrands = (data)=>({
    type:GET_ALL_BRANDS,
    payload:data
});
export const addBrand = (data)=>({
    type:ADD_BRAND,
    data:data
});
export const clearLastBrand = () => ({
    type:CLEAR_LAST_BRAND
});
export const getBrandById = (data) => ({
    type:GET_BRAND_BY_ID,
    payload:data
});
export const clearCurrentBrand = () => ({
    type:CLEAR_CURRENT_BRAND
});



// Products
export const productsBySold = (data) => ({
    type: GET_PROD_BY_SOLD,
    payload:data
});
export const productsByDate = (data) => ({
    type: GET_PROD_BY_DATE,
    payload:data
});
// Product by paginate
export const productsByPaginate = (products) =>({
    type:GET_PRODUCT_PAGINATE,
    payload:products
});
export const productRemove = () => ({
    type:REMOVE_PRODUCT
})

// add product
export const productAdd = (product) => ({
    type:PRODUCT_ADD,
    payload:product
});
// both finction are same we can use any of them
export const clearProductAdd = ()=>{
    return{
        type:CLEAR_PRODUCT_ADD
    }
}
export const productsById = (product) =>({
    type:GET_PROD_BY_ID,
    payload:product
})

export const clearCurrentProduct = () => ({
    type:CLEAR_CURRENT_PRODUCT
})

// Product cart
export const userAddToCart = (data)=>({
    type:USER_ADD_TO_CART,
    payload:data
})

export const userPurchaseSuccess = (data) => ({
    type:PURCHASE_SUCCESS,
    payload:data
})



// Notification
export const errorGlobal = (msg) => ({
    type:ERROR_GLOBAL,
    payload:msg
});
export const successGlobal = (msg) => ({
    type:SUCCESS_GLOBAL,
    payload:msg
});
export const clearNotification = (data)=> {
    return (dispatch)=>{
        dispatch({
            type:CLEAR_NOTIFICATION
        })
    }
};

//// SITE 
export const siteGetVars = (vars) => ({
    type:GET_SITE_VARS,
    payload: vars
})

export const updateSiteVars = (vars) => ({
    type:UPDATE_SITE_VARS,
    payload: vars
})








