import React from 'react';
import { View, Text, ActivityIndicator, Dimensions, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { Image, Button } from 'react-native-elements';
import Colors from '../../utils/Colors';
import Carousel from 'react-native-snap-carousel';
import { useNavigation } from '@react-navigation/native';

const sliderWidth = Dimensions.get('window').width;
const itemWidth = Math.round(sliderWidth);
const itemHeight = Math.round(itemWidth * 3 / 4);

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

    const carouselContent = ({item})=>(
        <View style={styles.child} >

            <Image
                source={item.img}
                // source={{ uri: item.img }}
                style={styles.imageStyle}
                PlaceholderContent={<ActivityIndicator />}
                onPress={()=>navigation.navigate(item.linkTo, {searchBy:item.searchCategory})}
            />
        </View>
    )
    

    return(
        <View style={styles.sliderWrapper}>
            <Carousel
            //   ref={(c) => { this._carousel = c; }}
              data={carouselItems}
              renderItem={carouselContent}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
              loop={true}
              autoplay={true}
            />
            {/* <SwiperFlatList 
                autoplay 
                autoplayDelay={4} 
                autoplayLoop 
                index={1} 
                showPagination
                paginationDefaultColor={Colors.dark[100]}
                paginationStyle={{height:10}}
                paginationStyleItem={styles.paginationStyleItem}
                paginationActiveColor={Colors.primary[500]}
            
            >
                {carouselContent()}
                
                
                
            </SwiperFlatList> */}
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