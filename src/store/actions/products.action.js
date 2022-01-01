import * as actions from './index';
import axiosConfig from '../../axiosConfig';
import { getAuthHeader } from '../../utils/tools';
// axios.defaults.headers.post['Content-Type'] = 'application/json';
// axios.defaults.baseURL = 'http://192.168.43.252:3001/';


export const productsBySort = ({limit, sortBy, order, where}) => {
    return async(dispatch)=>{
        try{
            const products = await axiosConfig.get(`api/products/all`,{
                params:{limit, sortBy, order, where}
            })

            switch(where){
                case 'bySold':
                    // dispatch({
                    //     type: GET_PROD_BY_SOLD,
                    //     payload:data
                    // });
                    // both are same instead of this we use "productsBySold" function inside index.js
                    dispatch(actions.productsBySold(products.data));
                break
                case 'byDate':
                    dispatch(actions.productsByDate(products.data));
                break
                default:
                    return false
            }
            
             //This is sending data to reducer

        }catch(error){
            dispatch(actions.errorGlobal(error.response.data.message))
        }
    }
}

export const productsByPaginate = (args, params)=>{
    // console.log('actions',args, params)
    return async(dispatch)=>{
        try{
            const products = await axiosConfig.post(`/api/products/paginate/all`, args,{
                params:params
            });
            // console.log(products)
            dispatch(actions.productsByPaginate(products.data));

        }catch(error){
            dispatch(actions.errorGlobal(error.response.data.message));
        }
    }
}


export const productAdd = (data) => {
    return async(dispatch)=>{
        try{
            console.log(data)
            const product= await axiosConfig.post(`/api/products/add`,data,getAuthHeader())
            console.log(product);

            dispatch(actions.productAdd(product.data));
            dispatch(actions.successGlobal());

        }catch(error){
            console.log(error.response);
            dispatch(actions.errorGlobal(error.response.data.errors[0].msg));
        }
    }
}

export const productsById = (id) => {
    return async(dispatch)=>{
        try{
            const product = await axiosConfig.get(`/api/products/prdouct/${id}`);
            // console.log(product.data)
            dispatch(actions.productsById(product.data))

        }catch(error){
            // console.log(error)
            dispatch(actions.errorGlobal(error.response.data.message))
        }
    }
}

export const productEdit = (values,id) => {
    return async(dispatch)=>{
        try{
            await axiosConfig.patch(`/api/products/prdouct/${id}`, values, getAuthHeader());
            // console.log(product.data)
            dispatch(actions.successGlobal('Product updated !!'))

        }catch(error){
            // console.log(error)
            dispatch(actions.errorGlobal(error.response.data.message))
        }
    }
}


export const productRemove = (id) => {
    return async(dispatch)=>{
        try{
            const product = await axiosConfig.delete(`/api/products/prdouct/${id}`,getAuthHeader())
            dispatch(actions.productRemove());
            dispatch(actions.successGlobal(product.data.msg));
        } catch(error){
            dispatch(actions.errorGlobal(error.response.data.message))
        }
    }
}


