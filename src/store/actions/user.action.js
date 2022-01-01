import * as actions from './index';
// import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { getAuthHeader, removeTokenCookie, getTokenCookie, TOKEN_KEY } from '../../utils/tools';
// axios.defaults.headers.post['Content-Type'] = 'application/json';
import axiosConfig from '../../axiosConfig';

// const TOKEN_KEY = 'token_key';


export const userRegister = (values) => {
    return async(dispatch) =>{
        try{
            const user = await axiosConfig.post(`/api/auth/register`,{
                fullname:values.fullname,
                phone: values.phone,
                email: values.email,
                password:values.password
            })

            dispatch(actions.userAuthenticate({
                data:user.data.user,
                auth:true
            }))

            await AsyncStorage.removeItem(TOKEN_KEY);
            const tokenValue = JSON.stringify(user.data.token);
            await AsyncStorage.setItem(TOKEN_KEY, tokenValue);

            dispatch(actions.successGlobal('Welcome to ShopSopra!!'));

        }catch(error){
            dispatch(actions.errorGlobal(error.response.data.message));
        }
    }
}
export const userSignIn = (values) => {
    return async(dispatch) =>{
        try{
            const user = await axiosConfig.post(`/api/auth/signin`,{
                userid:values.user,
                password:values.password
            })

            dispatch(actions.userAuthenticate({
                data:user.data.user,
                auth:true
            }))

            await AsyncStorage.removeItem(TOKEN_KEY);
            const tokenValue = JSON.stringify(user.data.token);
            await AsyncStorage.setItem(TOKEN_KEY, tokenValue);


            dispatch(actions.successGlobal('Welcome to ShopSopra!!'));

        }catch(error){
            dispatch(actions.errorGlobal(error.response.data.message));
        }
    }
}

export const userIsAuth = ()=>{
    return async(dispatch) => {
        try{

            const site = await axiosConfig.get(`/api/site`);
            dispatch(actions.siteGetVars(site.data))

            // const tokenValue = await AsyncStorage.getItem(TOKEN_KEY);
            
            if(!getTokenCookie()){
                throw new Error();
            }
            // if(!tokenValue){
            //     throw new Error();
            // }

            const user = await axiosConfig.get(`/api/auth/isAuth`, getAuthHeader());
            
            dispatch(actions.userAuthenticate({data:user.data, auth:true}))

        }catch(error){
            dispatch(actions.userAuthenticate({data:{}, auth:false}))
        }
    }
}

export const userSignOut = ()=>{
    return async(dispatch)=> {
        removeTokenCookie();
        dispatch(actions.userSignOut());
        // dispatch(actions.successGlobal('Good bye !'));
    }
}

export const userUpdateProfile = (data)=>{
    return async(dispatch, getState)=>{
        try{
            const profile = await axiosConfig.patch(`/api/users/profile`,data, getAuthHeader());

            const userData = {
                ...getState().users.data, //Update reducer store
                fullname:profile.data.fullname,
                phone:profile.data.phone,
            }
            dispatch(actions.userUpdateProfile(userData));
            dispatch(actions.successGlobal('Profile updated !'));

        }catch(error){
            dispatch(actions.errorGlobal(error.response.data.message))
        }
    }
}

export const userUpdateEmail = (data, userRole)=>{
    return async(dispatch)=>{
        try{
            await axiosConfig.patch(`/api/users/email`,{
                email:data.email,
                newemail:data.newemail
            }, getAuthHeader());

            dispatch(actions.userUpdateEmail(data.newemail));
            if(userRole === 'seller'){
                dispatch(actions.successGlobal('Email id updated, Remember to verify your account !'));
            }else{
                dispatch(actions.successGlobal('Email id updated!'));
            }
            

        }catch(error){
            dispatch(actions.errorGlobal(error.response.data.message));
        }
    }
}

export const userUpdatePassword = (data)=>{
    return async(dispatch)=>{
        try{
            await axiosConfig.post(`/api/auth/resetpassword`,{
                oldpassword:data.oldpassword,
                newpassword:data.newpassword
            }, getAuthHeader());

            dispatch(actions.successGlobal('Password updated!'));
            

        }catch(error){
            dispatch(actions.errorGlobal(error.response.data.message));
        }
    }
}


// export const userAddToCart = (item)=>{
//     return async(dispatch, getState)=>{
//         try{
//             const cart = getState().users.cart //it's give us user cart from store
//             console.log(item)
//             dispatch(actions.userAddToCart([
//                 ...cart, // its means if user already have some inside cart
//                 item
//             ]))
            
//             dispatch(actions.successGlobal(`${item.name} added to the card !`));

//         }catch(error){
//             dispatch(actions.errorGlobal(error.response.data.message));
//         }
//     }
// }


// export const removeFromCart = (position)=>{
//     return async(dispatch, getState)=>{
//         try{
//             const cart = getState().users.cart //it's give us user cart from store
//             cart.splice(position,1) // remove this number position array

//             console.log(cart, position)

//             dispatch(actions.userAddToCart(cart))
            
//             dispatch(actions.errorGlobal(`Product removed from the card !`));

//         }catch(error){
//             dispatch(actions.errorGlobal(error.response.data.message));
//         }
//     }
// }