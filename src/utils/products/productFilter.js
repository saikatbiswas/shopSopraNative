import React from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { Icon, Badge } from 'react-native-elements';
import Colors from '../Colors';
import { useNavigation } from '@react-navigation/native';


const ProductFilter = (props)=> {
    // console.log('Filter COmpo',props)
    const navigation = useNavigation();
    return(
        <View style={styles.sortWrapper}>
            <TouchableWithoutFeedback
                onPress={() => navigation.navigate('product_filter',{
                    pageTitle:'Filter',
                    searchValues:props.searchValues,
                    pagePatentTitle:props.pageTitle
                })}
            >
                <View style={styles.footerButton}>
                    <View>
                        {props.filterNo?
                            <Badge
                                status="secondary"
                                containerStyle={{ position: 'absolute', top: 2, left: 0, zIndex:100}}
                            />
                        :null}
                        <Icon name="filter-list" type="material" color={Colors.white} size={26} style={{marginRight:10}} /> 
                    </View>
                    <View>
                        <Text style={{color:Colors.white, textTransform:'uppercase', fontSize:14, marginBottom:-2}}>Filter</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    sortWrapper:{
        flexBasis:'50%',
    },
    footerButton:{
        flexDirection:'row',
        paddingVertical:8,
        paddingHorizontal:20,
        color:Colors.white,
        justifyContent:'center',
        alignItems:'center'
    }
});

export default ProductFilter;