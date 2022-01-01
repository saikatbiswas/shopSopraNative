import React from 'react';
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { Image, Text, Icon } from 'react-native-elements';
import Colors from '../Colors';
// import { useNavigation } from '@react-navigation/native';
import { RenderCardImage, borderRadius } from '../tools';


const CardBlock = (props)=>{
    // const navigation = useNavigation();

    return(
        <View style={styles.cardWrapper}>
            <View style={styles.cardImageWrapper}>
                <Image 
                    source={RenderCardImage(props.item.images)}
                    style={[styles.cardImage, props.imageStyle]}
                />
                {props.showFavorite?
                    <Icon 
                        name="hearto" 
                        type="antdesign" 
                        containerStyle={styles.iconContainerStyle}
                        iconStyle={styles.heartIcon} 
                        onPress={()=> alert('update Favorite db')}
                    />
                :null}
            </View>
            
            <View style={styles.cardBody}>
                <Text style={styles.cardBrandName}>{props.item.brand.name}</Text>
                <Text style={styles.cardHeading}>{props.item.name}, Size: {props.item.size}</Text>
                <Text style={styles.cardDiscription}>{props.item.subcategory.name}, {props.item.category.name}</Text>

                <View style={styles.cardPriceWrapper}>
                    <Text style={styles.productPriceText}>&#8377;{props.item.price }</Text>
                    <Text style={styles.productMrpText}>&#8377;{props.item.productmrp }</Text>
                    
                </View>
                <View style={styles.cardPriceWrapper}>
                    <Text style={styles.cardOffer}>{100 * Math.abs( ( props.item.price - props.item.productmrp ) / props.item.productmrp).toFixed(2)}% Off</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardWrapper:{
        marginVertical:10
    },
    cardImageWrapper:{
        marginBottom:10,
        borderRadius:borderRadius,
        elevation: 10,
        backgroundColor:'#fff',
        position:'relative'
    },
    cardImage:{
        borderRadius:borderRadius,
        height:140,
        
    },
    iconContainerStyle:{
        position:'absolute',
        right:10,
        top:10,
        backgroundColor:Colors.white,
        borderRadius:100,
        padding:7
    },
    heartIcon:{
        fontSize:20,
        color:Colors.secondary[500],
    },
    cardBody:{

    },
    cardBrandName:{
        fontSize:12,
        fontWeight:'700',
        color:Colors.dark[400],
        textTransform:'uppercase',
    },
    cardHeading:{
        fontSize:12,
        marginBottom:5,
    },
    cardDiscription:{
        fontSize:12,
        color:Colors.dark[300],
        marginBottom:5
    },
    cardPriceWrapper:{
        flexDirection:'row'
    },
    productPriceText:{
        fontSize:15,
        color:Colors.dark[700]
    },
    productMrpText:{
        textDecorationLine:'line-through',
        color:Colors.dark[300],
        marginLeft:5
    },
    cardOffer:{
        color:Colors.success[500]
    },
    





});

export default CardBlock;