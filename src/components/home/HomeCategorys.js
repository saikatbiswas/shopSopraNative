import React from 'react';
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { Text, Image } from 'react-native-elements';
import Colors from '../../utils/Colors';
import { useNavigation } from '@react-navigation/native';


const HomeCategory = ()=>{
    const navigation = useNavigation();

    return(
        <View style={styles.categoryWrapper}>
            <View style={styles.categoryBox}>
                <TouchableWithoutFeedback
                    onPress={()=> navigation.navigate('product_listing',{
                        searchBy:'men',
                        pageTitle:'Men Fashion'
                    })}
                >
                    <View>
                        <Image
                            source={require("../../assets/imgs/men.jpg")}
                            style={styles.cateImg}
                        />

                        <Text style={styles.cateText}>Men Fashion</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
            <View style={styles.categoryBox}>
                <TouchableWithoutFeedback
                    onPress={()=> navigation.navigate('product_listing',{
                        searchBy:'women',
                        pageTitle:'Women Fashion'
                    })}
                >
                    <View>
                        <Image
                            source={require("../../assets/imgs/women.jpg")}
                            style={styles.cateImg}
                        />

                        <Text style={styles.cateText}>Women Fashion</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
            <View style={styles.categoryBox}>
                <TouchableWithoutFeedback
                    onPress={()=> navigation.navigate('product_listing',{
                        searchBy:'kid',
                        pageTitle:'Kid Fashion'
                    })}
                >
                    <View>
                        <Image
                            source={require("../../assets/imgs/kid.jpg")}
                            style={styles.cateImg}
                        />

                        <Text style={styles.cateText}>Kid Fashion</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
            <View style={styles.categoryBox}>
                <TouchableWithoutFeedback
                    onPress={()=> navigation.navigate('product_listing',{
                        searchBy:'jewellery',
                        pageTitle:'Jewellery'
                    })}
                >
                    <View>
                        <Image
                            source={require("../../assets/imgs/jewellery.jpg")}
                            style={styles.cateImg}
                        />

                        <Text style={styles.cateText}>Jewellery</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    categoryWrapper:{
        flexDirection:'row',
        justifyContent:'space-between',
        flexWrap:'wrap',
        marginBottom:15
    },
    categoryBox:{
        width: '25%',
        paddingHorizontal:5,
        justifyContent:'center',
        alignItems:'center'
    },
    cateImg:{
        borderRadius: 100,
        width: 70,
        height:70,
        marginBottom:6,
        borderWidth:2,
        borderColor:Colors.secondary[500]
    },
    cateText:{
        fontSize:12,
        textTransform:'uppercase',
        textAlign:'center',
        color:Colors.secondary[500]
    }

});

export default HomeCategory;