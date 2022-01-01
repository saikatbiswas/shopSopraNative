import React from 'react';
import { Platform, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Colors from '../utils/Colors';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';


import HomeScreen from '../components/home';
import AllCategoryScreen from '../components/allCategory';
import ProductCategoryScreen from '../components/productCategory';
import ProductSubCategoryScreen from '../components/productSubCategory';
// import ProductListingScreen from '../components/productListing';
// import ProductDetailsScreen from '../components/productDetails';

// Admin
import MyAccountScreen from '../components/myAccount';
import CartScreen from '../components/cart';



export const Stack = createNativeStackNavigator();
export const LeftIcon = () => {
    const navigation = useNavigation()
    return(
        <View style={{margin:5}}>
            <Icon
                name="menu"
                type="feather"
                color={Colors.white}
                onPress={()=> navigation.openDrawer()}
            />
        </View>
    )
}

export const screenOptions = {
    headerTitleAlign:'left',
    headerTintColor: Colors.white,
    headerStyle:{
        backgroundColor: Colors.primary[500],
        height: Platform.OS === 'ios' ? 110 : 60
    },
    // headerTitle:()=> <LogoText style={{fontSize:25}}/>
}

export const HomeStack = () => (
    <Stack.Navigator
        screenOptions={{
            ...screenOptions
        }}
        initialRouteName="Home_screen"
    >
        <Stack.Screen name="Home_screen"  component={HomeScreen} 
            options={{
                headerShown:false,
                headerLeft:(props)=> <LeftIcon/>,
            }}
        />
    </Stack.Navigator>
)
export const ProductStack = () => (
    <Stack.Navigator
        screenOptions={{
            ...screenOptions
        }}
        initialRouteName="all_category"
    >
        <Stack.Screen name="all_category" component={AllCategoryScreen} 
            options={{
                headerLeft:(props)=> <LeftIcon/>,
            }}
        />
        <Stack.Screen name="product_category" component={ProductCategoryScreen} />
        <Stack.Screen name="product_sub_category" component={ProductSubCategoryScreen} />
        {/* <Stack.Screen name="product_listing" component={ProductListingScreen} />
        <Stack.Screen name="product_details" component={ProductDetailsScreen} /> */}
    </Stack.Navigator>
)

export const MyAccountStack = () => (
    <Stack.Navigator
        screenOptions={{
            ...screenOptions
        }}
        initialRouteName="my_account_screen"
        
    >
        <Stack.Screen name="my_account_screen" component={MyAccountScreen}
            options={{
                headerLeft:(props)=> <LeftIcon/>,
            }}
        />
    </Stack.Navigator>
)
export const CartStack = () => (
    <Stack.Navigator
        screenOptions={{
            ...screenOptions
        }}
        initialRouteName="cart_screen"
        
    >
        <Stack.Screen name="cart_screen" component={CartScreen}
            options={{
                headerLeft:(props)=> <LeftIcon/>,
            }}
        />
    </Stack.Navigator>
)
