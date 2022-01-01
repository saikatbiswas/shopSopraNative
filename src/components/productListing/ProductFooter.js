import React from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import ProductFilter from '../../utils/products/productFilter';
import ProductSort from '../../utils/products/productSort';
import Colors from '../../utils/Colors';

const ProductFooter= ({sortByProduct, sortIndex})=> {
    return(
        <View style={styles.footerWrapper}>
            <ProductSort sortByProduct={(index, value, order)=> sortByProduct(index, value, order)} sortActive={sortIndex} />
            <ProductFilter />
        </View>
    )
}

const styles = StyleSheet.create({
    footerWrapper:{
        flexDirection:'row',
        backgroundColor:Colors.primary[500],
        paddingHorizontal:5,

    }
});

export default ProductFooter;