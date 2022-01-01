import React from 'react';
import { View, ImageBackground, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import Colors from '../../utils/Colors';
import { useNavigation } from '@react-navigation/native';
import { borderRadius } from '../tools';


const Promotion = ({items})=>{
    const navigation = useNavigation();

    return(
        <View style={styles.promotionWrapper}>
            <View style={styles.promotionBox}>
                <TouchableWithoutFeedback
                    onPress={()=> navigation.navigate(items.linkTo,{
                        searchBy:items.searchCategory
                    })}
                >
                    <View>
                        
                        <ImageBackground
                            // source={{uri:`${items.img}`}}
                            source={items.img}
                            style={styles.promotionImg}
                            borderRadius={borderRadius}
                        >
                            <View style={styles.promoOverlay}></View>
                            <Text style={styles.promotionHeading}>{items.heading}</Text>
                            <Text style={styles.promotionSubHeading}>{items.subHeading}</Text>
                        </ImageBackground>
                    </View>
                </TouchableWithoutFeedback>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    promotionWrapper:{
    },
    promotionBox:{
        position:'relative',
        borderRadius:borderRadius,  
        
         
    },
    promoOverlay:{
        position:'absolute',
        backgroundColor:'rgba(0,0,0,0.4)',
        width:'100%',
        height:'100%',
        left:0,
        top:0,
        zIndex:100,
        borderRadius:borderRadius,
        borderWidth:2,
        borderColor:Colors.secondary[500]     

    },
    promotionImg:{
        width:'100%',
        height:140,
        alignItems:'center',
        justifyContent:'center',
    },
    promotionHeading:{
        position:'relative',
        zIndex:110,
        fontSize:22,
        color:Colors.white,
        textTransform:'uppercase',
        marginBottom:5,
        paddingHorizontal:10,
        textAlign:'center'
    },
    promotionSubHeading:{
        position:'relative',
        zIndex:110,
        fontSize:16,
        color:Colors.white,
        textAlign:'center',
        paddingHorizontal:10,
    }

});

export default Promotion;