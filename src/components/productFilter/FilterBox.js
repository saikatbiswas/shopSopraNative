import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';
import Colors from '../../utils/Colors';


const FilterBox = (props)=>{
    // console.log('brand props', props)
    // const [checked, setChecked] = useState(true);
    const [checked, setChecked] = useState([]);
    // const [checked, setChecked] = useReducer(
    //     (state, newState) => ([ ...state, ...newState ]),
    //     defaultValues
    // );
    
    // const [data, setData] = useState(props.list)

    // console.log(checked);
    // const onValueChange = (item, index) => {
    //     const newData = [...data];
    //     newData[index].isCheck = !item.isCheck;
    //     setData(newData);
    // }

    const handleToggle = (value) => {
        // console.log(checked);
        console.log(value);
        const currentIndex = checked.indexOf(value);
        let newChecked = [...checked];
        // const newChecked = checked;
        // alert('checked'+checked);
        // alert('prev'+[...checked]);

        // console.log('newChecked', newChecked)

        if(currentIndex === -1){
            // alert(value)
            newChecked.push(value)
        } else {
            newChecked.splice(currentIndex,1)
        }

        // console.log('newChecked 2', newChecked)

        setChecked(newChecked);
        props.handleFilters(newChecked)
    }

    

    useEffect(()=>{
        // console.log(props);
        if(props.resetData === true){
            
            setChecked([]);
            // console.log('Reset',checked);
        }
    }, [props.resetData]);

    useEffect(()=>{
        // console.log('props.brandCheck', props.brandCheck)
        if(props.brandCheck && props.brandCheck.length > 0){
            setChecked(...checked, props.brandCheck);
        }
    }, [props.brandCheck]);

    console.log('final checked', checked)

    const renderList = () => (
            props.list ?
            props.title === 'Price'?
            props.list.map((item, index)=>(
                    <View key={item._id}>
                        <CheckBox
                            title={item.name}
                            iconRight
                            iconType='material'
                            checkedIcon='check-box'
                            uncheckedIcon='check-box-outline-blank'
                            checkedColor={Colors.primary[500]}
                            // checked={checked}
                            // checked={item.isCheck || false}
                            // onPress={(val) => onValueChange(item, index)}
                            onPress={ ()=> handleToggle(item._id)}
                            checked={checked.indexOf(item._id) !== -1}
                            containerStyle={styles.containerStyle}
                            textStyle={styles.textStyle}
                        />
                    </View>

                ))
            :
            props.title === 'Brands'?
            props.list.map((item, index)=>(
                    <View key={item._id}>
                        <CheckBox
                            title={item.name}
                            iconRight
                            iconType='material'
                            checkedIcon='check-box'
                            uncheckedIcon='check-box-outline-blank'
                            checkedColor={Colors.primary[500]}
                            // checked={checked}
                            // checked={item.isCheck || false}
                            // onPress={(val) => onValueChange(item, index)}
                            onPress={ ()=> handleToggle(item._id)}
                            checked={checked.indexOf(item._id) !== -1}
                            containerStyle={styles.containerStyle}
                            textStyle={styles.textStyle}
                        />
                    </View>

                ))
            :
            props.title === 'Fabric'?
                props.list.map((value)=>(
                    <View>
                        <Text>Fabric</Text>
                    </View>
                ))
            :
            props.title === 'Color'?
                props.list.map((value)=>(
                    <View>
                        <Text>Color</Text>
                    </View>
                ))
            :null
        :null
    )

    return(
        <View>
            {renderList()}
        </View>
    )
}

const styles = StyleSheet.create({
    containerStyle:{
        padding:5,
        borderWidth:0,
        backgroundColor:'transparent',
        justifyContent:'space-between'
        
    },
    textStyle:{
        paddingLeft:0,
        marginLeft:0,
        marginRight:10,
        fontWeight:'normal',
        flex:1
    }
});

export default FilterBox;