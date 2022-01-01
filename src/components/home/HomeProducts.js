import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import Colors from '../../utils/Colors';
import CardBlock from '../../utils/products/card.block';
import { useNavigation } from '@react-navigation/native';

const HomeProducts = ({items, title,cardSort, shop, shortBy, category, viewMore}) => {
    const navigation = useNavigation();

    // console.log('items', items);

    const renderProductCards = ()=>(

        items?
            items.map((item, i)=>(
                // <Link to={`${cardSort && cardSort==='category'?'/products/'+item.subcategory.name:'/product_detail/'+item._id}/${item.category.maincategory}`} className="product-home-link" key={item._id}>
                <View style={styles.productBox} key={item._id}>
                    <CardBlock 
                        item={item}
                        category={category}
                    />
                </View>

            ))
        
        :null
    )

    return(
        <View style={styles.homeProductWrapper}>
            <View style={styles.homeProductTitleWrapper}>
                <Text style={styles.homeProductTitle}>{title}</Text>
                <Button title="View all"  type="clear" titleStyle={styles.viewButton}
                    onPress={()=> navigation.navigate('product_listing',{
                        shortBy:shortBy,
                        pageTitle:title
                    })}
                />
            </View>
            
            {items?
                <View  style={styles.homeProductContainer}>
                    {renderProductCards()}
                </View>
            :
                <View style={{marginVertical:20}}>
                    <ActivityIndicator size="large" color={Colors.secondary[500]} />
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    homeProductWrapper:{

    },
    homeProductTitleWrapper:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center'
    },
    homeProductTitle:{
        fontSize:19,
        margin:10,
        marginBottom:5,
        color:Colors.primary[500]
    },
    viewButton:{
        color:Colors.secondary[500],
        fontSize:13
    },
    homeProductContainer:{
        flexDirection:'row',
        flexWrap:'wrap',
    },
    productBox:{
        width:'33.3333%',
        paddingHorizontal:10
    }
});

export default HomeProducts;