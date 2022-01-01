import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';
import {  Formik, useFormik} from 'formik';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import Colors from '../../utils/Colors';
import { InputBox } from '../../utils/tools';



const RangeSelect = (props)=>{
    console.log('Range',props)
    const dispatch = useDispatch();

    const formik = useFormik({
        enableReinitialize: true,
        initialValues:{
            min:props.priceMin?props.priceMin:"0",
            max:props.priceMax?props.priceMax:"100000"
        },
        validationSchema:Yup.object({
            min:Yup.number()
            .min(0,'The minimum is 0'),
            max:Yup.number()
            .max(100000,'The max is 1000000')
        }),
        // onSubmit:(values)=>{
        //     props.handleRange([values.min,values.max])
        // }
    })

    useEffect(()=>{
        
        props.handleRange([parseInt(formik.values.min),parseInt(formik.values.max)])

    },[formik.values]);

    console.log('formik', formik.values.min)


    return(
        
        <View>
            <View>
                <InputBox 
                    placeholder="Min"
                    value={formik.values.min}
                    name="min"
                    onChangeText={(data)=> formik.handleChange(data)}
                    onBlur={(data)=> formik.handleBlur(data)}
                    errors={ formik.errors.min}
                    touched={formik.touched.min}
                    keyboardType="numeric"
                    leftIcon={{ type: 'font-awesome', name: 'rupee', size:18 }}
                />
                <InputBox 
                    placeholder="Max"
                    value={formik.values.max}
                    name="max"
                    onChangeText={(data)=> formik.handleChange(data)}
                    onBlur={(data)=> formik.handleBlur(data)}
                    errors={ formik.errors.max}
                    touched={formik.touched.max}
                    keyboardType="numeric"
                    leftIcon={{ type: 'font-awesome', name: 'rupee', size:18 }}
                />
                    
            </View>
        </View>
        
        // <Formik
        //     initialValues={{
        //         min:0,
        //         max:50000,
        //     }}
        //     validationSchema={Yup.object({
        //         min:Yup.number()
        //         .min(0,'The minimum is 0'),
        //         max:Yup.number()
        //         .max(100000,'The max is 100000')
        //     })}
        //     onSubmit={ values => handleSubmit(values)}
        // >
        //     { ({ handleChange, handleBlur, handleSubmit, values, touched, errors })=> (

        //         <View>
        //             <InputBox 
        //                 placeholder="Min"
        //                 value={values.min}
        //                 name="min"
        //                 onChangeText={(data)=> handleChange(data)}
        //                 onBlur={(data)=> handleBlur(data)}
        //                 errors={ errors.min}
        //                 touched={touched.min}
        //                 keyboardType="numeric"
        //                 leftIcon={{ type: 'font-awesome', name: 'rupee', size:18 }}
        //             />
        //             <InputBox 
        //                 placeholder="Max"
        //                 value={values.max}
        //                 name="max"
        //                 onChangeText={(data)=> handleChange(data)}
        //                 onBlur={(data)=> handleBlur(data)}
        //                 errors={ errors.max}
        //                 touched={touched.max}
        //                 keyboardType="numeric"
        //                 leftIcon={{ type: 'font-awesome', name: 'rupee', size:18 }}
        //             />
                        
        //         </View>
        //     )}
        // </Formik>
    )
}

const styles = StyleSheet.create({

});

export default RangeSelect;