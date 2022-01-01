import * as actions from './index';
// import axios from "axios";
import axiosConfig from '../../axiosConfig';
import { getAuthHeader, removeTokenCookie, getTokenCookie, TOKEN_KEY } from '../../utils/tools';
// axios.defaults.baseURL = 'http://localhost:3001';

// Main Category
export const getMainCategory = () => {
    return async(dispatch)=>{
        try{
            const category = await axiosConfig.get(`/api/main_category/all`);

            dispatch(actions.getMainCategory(category.data))

        }catch(error){
            dispatch(actions.errorGlobal(error.response.data.message));
        }
    }
}

export const addMainCategory = (data) => {
    return async(dispatch)=>{
        try{
            const category = await axiosConfig.post(`/api/main_category/add/`,data, getAuthHeader());

            dispatch(actions.addMainCategory(category.data))

            dispatch(actions.successGlobal('Main Category Added !'));

        }catch(error){
            dispatch(actions.errorGlobal(error.response.data.message));
        }
    }
}
export const updateMainCategory = (values,id)=>{
    return async(dispatch)=>{
        try{
            await axiosConfig.patch(`/api/main_category/category/${id}`, {'categoryname':values}, getAuthHeader());
            dispatch(actions.successGlobal('Main Category updated !!'));

        }catch(error){
            dispatch(actions.errorGlobal(error.response.data.message));
        }
    }
}
export const deleteMainCategory = (id)=>{
    return async(dispatch)=>{
        try{
            const category = await axiosConfig.delete(`/api/main_category/category/${id}`,getAuthHeader())
            dispatch(actions.deleteArticle()); //Notification reducer new case
            dispatch(actions.successGlobal(category.data.msg));

        }catch(error){
            dispatch(actions.errorGlobal(error.response.data.message))
        }
    }
}

// Sub Category
export const getSubCategory = () => {
    return async(dispatch)=>{
        try{
            const category = await axiosConfig.get(`/api/sub_category/all`);

            dispatch(actions.getSubCategory(category.data));


        }catch(error){
            dispatch(actions.errorGlobal(error.response.data.message));
        }
    }
}
export const getSubCategoryByParent = (id) => {
    return async(dispatch)=>{
        try{
            const category = await axiosConfig.get(`/api/sub_category/all`);

            let categoryById = []
            category.data.forEach((item)=>{
                if(id === item.maincategory._id){
                    categoryById.push(item)
                }
            })

            dispatch(actions.getSubCategoryByParent(categoryById));

        }catch(error){
            dispatch(actions.errorGlobal(error.response.data.message));
        }
    }
}

export const addSubCategory = (data) => {
    return async(dispatch)=>{
        try{
            const category = await axiosConfig.post(`/api/sub_category/add`,data, getAuthHeader());

            dispatch(actions.addSubCategory(category.data))

            dispatch(actions.successGlobal('Sub Category Added !'));

        }catch(error){
            dispatch(actions.errorGlobal(error.response.data.message));
        }
    }
}
export const updateSubCategory = (values,id)=>{
    return async(dispatch)=>{
        try{
            await axiosConfig.patch(`/api/sub_category/category/${id}`, values, getAuthHeader());
            dispatch(actions.successGlobal('Sub Category updated !!'));

        }catch(error){
            dispatch(actions.errorGlobal(error.response.data.message));
        }
    }
}
export const deleteSubCategory = (id)=>{
    return async(dispatch)=>{
        try{
            const category = await axiosConfig.delete(`/api/sub_category/category/${id}`,getAuthHeader())
            dispatch(actions.deleteArticle()); //Notification reducer new case
            dispatch(actions.successGlobal(category.data.msg));

        }catch(error){
            dispatch(actions.errorGlobal(error.response.data.message))
        }
    }
}

// Category
export const getCategoryByParentId = (parentId, id) => {
    return async(dispatch)=>{
        try{
            const category = await axiosConfig.get(`/api/category/all`);
            let categoryById = []
            category.data.forEach((item)=>{
                // console.log(item.subcategory._id)
                    if(item !== null && item.subcategory !== "" && item.subcategory !== null && item.subcategory !== undefined && item.subcategory._id !== null && item.subcategory._id !== undefined){
                        // console.log(item.subcategory.name)
                        if(id === item.subcategory._id && parentId === item.subcategory.maincategory._id){
                            categoryById.push(item)
                        }
                }
            })

            dispatch(actions.getCategoryByParentId(categoryById));

        }catch(error){
            // console.log(error)
            dispatch(actions.errorGlobal(error.response.data.message));
        }
    }
}


export const getAllCategory = ({where})=>{
    
    return async(dispatch)=>{
        try{
            
            const category = await axiosConfig.get(`api/allcategory/all`);
            // console.log(category);
            
            let mainCate = [];
            let mainCateList = [];
            let subCate = [];
            let childCate = [];

            category.data.forEach((element, i) => {

                if(element.maincategory === null && element.subcategory === null){
                    mainCate.push({
                        '_id':element._id,
                        'name':element.name
                    });
                }

                if(element.maincategory !== null && element.subcategory === null){
                    subCate.push({
                        '_id':element._id,
                        'name':element.name,
                        'mainId':element.maincategory
                    });
                }
                if(element.maincategory !== null && element.subcategory !== null){
                    childCate.push({
                        '_id':element._id,
                        'name':element.name,
                        'mainId':element.maincategory,
                        'subid':element.subcategory,
                    });
                }
                mainCateList.push({
                    '_id':element._id,
                    'name':element.name
                });
                // if(element !== null && element.subcategory !== null && element.subcategory !== undefined && element.subcategory.name !== null && element.subcategory.name !== undefined){
                //     mainCate.push({
                //         '_id':element.subcategory.maincategory._id,
                //         'name':element.subcategory.maincategory.name
                //     });
                //     mainCateList.push({
                //         '_id':element.subcategory.maincategory._id,
                //         'name':element.subcategory.maincategory.name
                //     });

                //     subCate.push({
                //         '_id':element.subcategory._id,
                //         'name':element.subcategory.name,
                //         'mainId':element.subcategory.maincategory._id
                //     })
                //     childCate.push({
                //         '_id':element._id,
                //         'name':element.name,
                //         'subid':element.subcategory._id,
                //         'mainId':element.subcategory.maincategory._id
                //     })
                    
                // }
            });

            // console.log(mainCate,subCate, childCate)
            

            // let finalMainCate = mainCate.filter((thing, index) => {
            //     const _thing = JSON.stringify(thing._id);
            //     return index === mainCate.findIndex(obj => {
            //       return JSON.stringify(obj._id) === _thing;
            //     });
            // });

            // let finalSubCate = subCate.filter((thing, index) => {
            //     const _thing = JSON.stringify(thing._id);
            //     return index === subCate.findIndex(obj => {
            //       return JSON.stringify(obj._id) === _thing;
            //     });
            // });

            // let finalMainCateAll = mainCateList.filter((thing, index) => {
            //     const _thing = JSON.stringify(thing._id);
            //     return index === mainCateList.findIndex(obj => {
            //       return JSON.stringify(obj._id) === _thing;
            //     });
            // });

            

            mainCate.forEach((element,index)=>{
                // console.log(element);
                let mainCateVar = element._id;
                let subC = [];
                let childC = [];
                subCate.forEach((element,ind)=>{
                    let subCateVar = element._id;
                    childC = [];
                    // console.log(element.mainId);
                    if(element.mainId === mainCateVar){
                        

                        childCate.forEach((element)=>{
                            if(element.mainId === mainCateVar && element.subid === subCateVar){
                                // console.log(index,'index',element)
                                childC.push({
                                    '_id':element._id,
                                    'name':element.name
                                });
                            }
                        })
                        subC.push({
                            '_id':element._id,
                            'name':element.name,
                            'item':childC
                        });

                        // subC[ind].item = childC
                        

                    }
                    

                    // console.log(subC)
                    // console.log(childC);
                    
                })
                mainCate[index].sub = subC;
                
            })

            // let categoryList = [...finalMainCateAll, ...finalSubCate, ...childCate];

            switch(where){
                case 'byArrange':
                    dispatch(actions.getAllArrange(mainCate))
                break
                case 'byList':
                    dispatch(actions.getAllList(mainCateList))
                break
                case 'byAll':
                    dispatch(actions.getAllCategory(category.data))
                break
                default:
                    return false
            }
            
            // console.log(finalMainCate)
            

        }catch(error){
            dispatch(actions.errorGlobal(error.response.data.message))
        }
    }
}

export const addCategory = (data) => {
    return async(dispatch)=>{
        try{
            const category = await axiosConfig.post(`/api/allcategory/add`,data, getAuthHeader());
            dispatch(actions.addCategory(category.data))
            
            if(category.data.maincategory === null && category.data.subcategory === null){
                dispatch(actions.successGlobal('Main Category Added !'));
            }

            if(category.data.maincategory !== null && category.data.subcategory === null){
                dispatch(actions.successGlobal('Sub Category Added !'));
            }
            if(category.data.maincategory !== null && category.data.subcategory !== null){
                dispatch(actions.successGlobal('Category Added !'));
            }

            

        }catch(error){
            dispatch(actions.errorGlobal(error.response.data.message));
        }
    }
}
export const updateCategory = (values,id)=>{
    return async(dispatch)=>{
        try{
            const category = await axiosConfig.patch(`/api/allcategory/category/${id}`, values, getAuthHeader());
            if(category.data.maincategory === null && category.data.subcategory === null){
                dispatch(actions.successGlobal('Main Category updated !'));
            }

            if(category.data.maincategory !== null && category.data.subcategory === null){
                dispatch(actions.successGlobal('Sub Category updated !'));
            }
            if(category.data.maincategory !== null && category.data.subcategory !== null){
                dispatch(actions.successGlobal('Category updated !'));
            }

        }catch(error){
            dispatch(actions.errorGlobal(error.response.data.message));
        }
    }
}
export const deleteCategory = (id)=>{
    return async(dispatch)=>{
        try{
            const category = await axiosConfig.delete(`/api/allcategory/category/${id}`,getAuthHeader());
            dispatch(actions.deleteArticle()); //Notification reducer new case
            if(category.data.category.maincategory === null && category.data.category.subcategory === null){
                dispatch(actions.successGlobal('Main Category Deleted Successfully'));
            }

            if(category.data.category.maincategory !== null && category.data.category.subcategory === null){
                dispatch(actions.successGlobal('Sub Category Deleted Successfully'));
            }
            if(category.data.category.maincategory !== null && category.data.category.subcategory !== null){
                dispatch(actions.successGlobal('Category Deleted Successfully'));
            }
            // dispatch(actions.successGlobal(category.data.msg));

        }catch(error){
            dispatch(actions.errorGlobal(error.response.data.message))
        }
    }
}