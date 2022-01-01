import React,{useEffect} from 'react';
import { View, Text, Image, TouchableWithoutFeedback, ScrollView, StyleSheet } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import { LeftIcon } from '../../routes/stacks';
import Colors from '../../utils/Colors';
import { headerRightComponent } from '../../utils/tools';
import HeaderComponent from '../layout/HeaderComponent';
import { useDispatch, useSelector } from "react-redux";

import BannerSlider from './BannerSlider';
import HomeCategory from './HomeCategorys';
import Promotion from '../../utils/promotions/Promotion';
import { productsBySort } from '../../store/actions/products.action';
import HomeProducts from './HomeProducts';


const HomeScreen = (props)=>{
    // console.log(props)
    const { bySold, byDate } = useSelector(state => state.products);
    const dispatch = useDispatch();

    const offerPromotion = [
        {
            img:require('../../assets/imgs/shirt.jpg'),
            heading:'Men Shirts',
            subHeading:'Upto 70% off',
            linkTitle:'View All',
            linkTo:'product_listing',
            searchCategory:'men shirt'
        },
        {
            img:require('../../assets/imgs/jeans.jpg'),
            heading:'Jeans',
            subHeading:'Top collaction Jeans',
            linkTitle:'View All',
            linkTo:'product_listing',
            searchCategory:'men jeans'
        },
        {
            img:require('../../assets/imgs/kurti.jpg'),
            heading:'Kurti',
            subHeading:"Exclusive kurti collection, Don't miss it!",
            linkTitle:'View All',
            linkTo:'product_listing',
            searchCategory:'women kurti'
        },
        {
            img:require('../../assets/imgs/shorts-f.jpg'),
            heading:'Women Shorts',
            subHeading:'One hours offers, Only here!',
            linkTitle:'View All',
            linkTo:'product_listing',
            searchCategory:'men tshirts'
        },
        {
            img:require('../../assets/imgs/tshirt2.jpg'),
            heading:'Men T-shirts',
            subHeading:'Deal today, Gone tomorrow!',
            linkTitle:'View All',
            linkTo:'product_listing',
            searchCategory:'men tshirts'
        },
        {
            img:require('../../assets/imgs/track-suit.jpg'),
            heading:'Track Suit',
            subHeading:'Truly unbeleievable discounts!',
            linkTitle:'View All',
            linkTo:'product_listing',
            searchCategory:'men tshirts'
        },
        {
            img:require('../../assets/imgs/shorts-m.jpg'),
            heading:'Male Shorts',
            subHeading:'Latest colloction, Miss it, Miss Out!',
            linkTitle:'View All',
            linkTo:'product_listing',
            searchCategory:'men tshirts'
        },
    ]

    const centerComponent = () => (
        <View style={{margin:5}}>
            <Image
                source={require('../../assets/imgs/shop-sopra.png')}
                style={styles.logo}
            />
        </View>
    )

    useEffect(()=>{
        dispatch(productsBySort({
            limit:'6', sortBy:'itemsold', order:'desc', where:'bySold'
        }));
        dispatch(productsBySort({
            limit:'6', sortBy:'date', order:'desc', where:'byDate'
        }));
    },[dispatch]);


    // console.log(byDate)

    return(
        <ScrollView
            stickyHeaderIndices={[0]}
        >
            {/* <View style={{position:'relative', zIndex:1000, elevation:6}}> */}
                <HeaderComponent 
                    type="home"
                />
            {/* </View> */}
            
            
            <View style={styles.sliderWrapper}>
                <BannerSlider />
            </View>

            <View>
                <HomeCategory />
            </View>

            <View style={styles.promotionWrapper}>
                <View style={styles.promotionBox}>
                    <Promotion items={offerPromotion[0]}/>
                </View>
                <View style={styles.promotionBox}>
                    <Promotion items={offerPromotion[1]}/>
                </View>
            </View>

            <View style={styles.productsWrapper} >
                <HomeProducts 
                    items={byDate}
                    title="New Arrivals Products"
                    shortBy="date"
                />
            </View>

            <View style={styles.promotionWrapper}>
                <View style={styles.promotionBox}>
                    <Promotion items={offerPromotion[3]}/>
                </View>
                <View style={styles.promotionBox}>
                    <Promotion items={offerPromotion[4]}/>
                </View>
            </View>

            <View style={styles.promotionWrapper}>
                <View style={styles.promotionBox}>
                    <Promotion items={offerPromotion[5]}/>
                </View>
                <View style={styles.promotionBox}>
                    <Promotion items={offerPromotion[6]}/>
                </View>
            </View>

            <View style={styles.productsWrapper} >
                <HomeProducts 
                    title="Best Selling Products"
                    items={bySold}
                    shortBy="itemsold"
                />
            </View>

            

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    
    sliderWrapper:{
        marginBottom:5
    },
    promotionWrapper:{
        marginBottom:15,
        flexDirection:'row',
        paddingHorizontal:4,
        elevation: 5,
        backgroundColor:Colors.white,
        paddingVertical:10
    },
    promotionBox:{
        flexGrow:1,
        paddingHorizontal:6,
        borderRadius:15,
        maxWidth:'50%'
    },
    productsWrapper:{
        marginBottom:15,
        paddingHorizontal:4,
        elevation: 5,
        backgroundColor:Colors.white,
    },
});

export default HomeScreen;