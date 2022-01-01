import React from 'react';
import { View, Text, ActivityIndicator, Dimensions, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { Image, Button } from 'react-native-elements';
import Colors from '../../utils/Colors';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { useNavigation } from '@react-navigation/native';


const BannerSlider = ()=>{
    // console.log(props)
    const navigation = useNavigation();

    // console.log('props',navigation)

    const carouselItems = [
        {
            img:require('../../assets/imgs/shorts-f.jpg'),
            heading:'Women Shorts',
            subHeading:'Awesome discounts',
            linkTitle:'View All',
            linkTo:'product_listing',
            searchCategory:'women shorts'
        },
        {
            img:require('../../assets/imgs/shirt.jpg'),
            heading:'Men Shirt',
            subHeading:'Awesome discounts',
            linkTitle:'View All',
            linkTo:'product_listing',
            searchCategory:'shirt'
        },
        {
            img:require('../../assets/imgs/track-suit.jpg'),
            heading:'Track Suit',
            subHeading:'Awesome discounts',
            linkTitle:'View All',
            linkTo:'product_listing',
            searchCategory:'track-suit'
        },
        {
            img:require('../../assets/imgs/shorts-f2.jpg'),
            heading:'Women Shorts',
            subHeading:'Awesome discounts',
            linkTitle:'View All',
            linkTo:'product_listing',
            searchCategory:'women shorts'
        },
        {
            img:require('../../assets/imgs/jeans.jpg'),
            heading:'Jeans',
            subHeading:'Awesome discounts',
            linkTitle:'View All',
            linkTo:'product_listing',
            searchCategory:'men jeans'
        },
        {
            img:require('../../assets/imgs/kurti.jpg'),
            heading:'Kurti',
            subHeading:'Awesome discounts',
            linkTitle:'View All',
            linkTo:'product_listing',
            searchCategory:'women kurti'
        }
    ]

    // // console.log(carouselItems)

    const carouselContent = ()=>(
        carouselItems?
            carouselItems.map((item,i)=>(
                <View style={styles.child} key={i}>
                    <TouchableWithoutFeedback
                        onPress={()=>navigation.navigate(item.linkTo, {searchBy:item.searchCategory})}
                    >
                    <Image
                        source={item.img}
                        // source={{ uri: item.img }}
                        style={styles.imageStyle}
                        PlaceholderContent={<ActivityIndicator />}
                        
                    />
                    </TouchableWithoutFeedback>
                </View>
            ))
        :null
    )

    return(
        <View style={styles.sliderWrapper}>
            <SwiperFlatList 
                autoplay 
                autoplayDelay={4} 
                autoplayLoop 
                autoplayLoopKeepAnimation={true}
                index={1} 
                showPagination
                paginationDefaultColor={Colors.dark[100]}
                paginationStyle={{height:10}}
                paginationStyleItem={styles.paginationStyleItem}
                paginationActiveColor={Colors.primary[500]}
            
            >
                {carouselContent()}
                
                {/* <View style={styles.child}>

                    <Image
                        source={require("../../assets/imgs/banner01.jpg")}
                        // source={{ uri: item.img }}
                        style={styles.imageStyle}
                        PlaceholderContent={<ActivityIndicator />}
                        onPress={()=>navigation.navigate('product_listing', {searchBy:'men top ware'})}
                    />
                </View>
                <View style={styles.child}>
                    <Image
                        source={require("../../assets/imgs/banner02.jpg")}
                        // source={{ uri: item.img }}
                        style={styles.imageStyle}
                        PlaceholderContent={<ActivityIndicator />}
                        onPress={()=>navigation.navigate('product_listing', {searchBy:'women top ware'})}
                    />
                </View>
                <View style={styles.child}>
                    <Image
                        source={require("../../assets/imgs/banner01.jpg")}
                        // source={{ uri: item.img }}
                        style={styles.imageStyle}
                        PlaceholderContent={<ActivityIndicator />}
                        onPress={()=>navigation.navigate('product_listing', {searchBy:'home'})}
                    />
                </View> */}
                
            </SwiperFlatList>
        </View>
    )
}

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
    sliderWrapper: { 
        flex: 1, 
        backgroundColor: Colors.white,
        marginBottom:15,
        
    },
    child: {
        width, 
        justifyContent: 'center', 
       
    },
    imageStyle:{
        width, 
        height:250,
    },
    text: { 
        fontSize: 20, 
        textAlign: 'center' 
    },
    paginationStyleItem:{
        width:22,
        height:7,
        borderRadius:8,
        marginHorizontal:5
    }
});

export default BannerSlider;