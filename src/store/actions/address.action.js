import * as actions from './index';
import axios from "axios"

import { getAuthHeader} from 'utils/tools';
// axios.defaults.headers.post['Content-Type'] = 'application/json';


export const getAllAddress = (user)=>{
    return async(dispatch)=>{
        try{
            const address = await axios.get(`/api/address/all/${user._id}`);

            dispatch(actions.getAllAddress(address.data));

        }catch(error){
            dispatch(actions.errorGlobal(error.response.data.message));
        }
    }
}

export const addAddress = (data)=>{
    return async(dispatch)=>{
        try{
            const address = await axios.post(`/api/address/add/`,data, getAuthHeader());

            dispatch(actions.addAddress(address.data))

            dispatch(actions.successGlobal('Address Added !'));

        }catch(error){
            dispatch(actions.errorGlobal(error.response.data.message));
        }
    }
}

export const updateAddress = (values,id)=>{
    return async(dispatch)=>{
        try{
            await axios.patch(`/api/address/address/${id}`, values, getAuthHeader());
            // console.log(product.data)
            dispatch(actions.successGlobal('Address updated !!'));

        }catch(error){
            dispatch(actions.errorGlobal(error.response.data.message));
        }
    }
}

export const deleteArticle = (id)=>{
    return async(dispatch)=>{
        try{
            const address = await axios.delete(`/api/address/address/${id}`,getAuthHeader())
            dispatch(actions.deleteArticle()); //Notification reducer new case
            dispatch(actions.errorGlobal(address.data.msg));

        }catch(error){
            dispatch(actions.errorGlobal(error.response.data.message))
        }
    }
}