import * as actions from './index';
import axiosConfig from '../../axiosConfig';
import { getAuthHeader } from '../../utils/tools';

// Get All BRands
export const getAllBrands = ()=>{
    return async(dispatch)=>{
        try{
            const brands = await axiosConfig.get(`/api/brands/all`);

            dispatch(actions.getAllBrands(brands.data));

        }catch(error){
            dispatch(actions.errorGlobal(error.response.data.message));
        }
    }
}

export const addBrand = (data)=>{
    return async(dispatch)=>{
        try{
            const brands = await axiosConfig.post(`/api/brands/add`,data, getAuthHeader());

            dispatch(actions.addBrand(brands.data))

            dispatch(actions.successGlobal('Sub Category Added !'));

        }catch(error){
            dispatch(actions.errorGlobal(error.response.data.message));
        }
    }
}

export const getBrandById = (id)=>{
    return async(dispatch)=>{
        try{
            const brand = await axiosConfig.get(`/api/brands/brand/${id}`,);

            dispatch(actions.getBrandById(brand.data))


        }catch(error){
            dispatch(actions.errorGlobal(error.response.data.message));
        }
    }
}
export const brandEdit = (values,id) => {
    console.log(values)
    return async(dispatch)=>{
        try{
            await axiosConfig.patch(`/api/brands/brand/${id}`, values, getAuthHeader());
            dispatch(actions.successGlobal('Brand updated !!'))

        }catch(error){
            // console.log(error)
            dispatch(actions.errorGlobal(error.response.data.message))
        }
    }
}

export const deleteBrandById = (id)=>{
    return async(dispatch)=>{
        try{
            const brand = await axiosConfig.delete(`/api/brands/brand/${id}`,getAuthHeader())
            dispatch(actions.deleteArticle());
            dispatch(actions.successGlobal(brand.data.msg));

        }catch(error){
            dispatch(actions.errorGlobal(error.response.data.message))
        }
    }
}