import 'react-native-gesture-handler';
import React from 'react';
import { Icon } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Colors from './src/utils/Colors';
import SideDrawerNav from './src/routes/navDrawer';
import { useSelector } from 'react-redux';

// Routes
import LoginRegScreen from './src/components/auth';
import SearchScreen from './src/components/search'
import ProductListingScreen from './src/components/productListing';
import ProductDetailsScreen from './src/components/productDetails';
import ProductFilterScreen from './src/components/productFilter/ProductFilterScreen';
import HomeScreen from './src/components/home';
import MyAccountScreen from './src/components/myAccount';
import CartScreen from './src/components/cart';


const Drawer = createDrawerNavigator();

import { Stack, HomeStack, MyAccountStack, CartStack, ProductStack, screenOptions, LeftIcon } from './src/routes/stacks';

import {
  Text,
  View,
  StyleSheet
} from 'react-native';

const MainDrawer = ()=> (
  <Drawer.Navigator
    drawerContent={(props)=> <SideDrawerNav {...props}/>}
    screenOptions={{
      drawerStyle:{backgroundColor:Colors.dark[50]},
      drawerInactiveTintColor:Colors.dark[500],
      drawerActiveTintColor:Colors.primary[600],
      drawerActiveBackgroundColor:Colors.primary[50],
      drawerItemStyle:{marginHorizontal:0, marginEnd:20, borderTopRightRadius:50, borderBottomRightRadius:50},
      drawerLabelStyle:{ fontWeight:'400' }
      
    }}
    
  >
    <Drawer.Screen 
      name="TabNav" 
      component={TabNav} 
      initialParams={{ name:"home-outline", type:'ionicon' }}
      options={{
        headerShown: false ,
        title:"Home",
        drawerLabelStyle:{paddingStart:0, marginStart:0},
        drawerIcon: ({focused, size}) => (
           <Icon
              name="home-outline"
              size={size}
              color={focused ? Colors.primary[600] : Colors.dark[500]}
              type='ionicon'
           />
        ),
     }}
    />

    <Drawer.Screen 
      name="AllCategories" 
      component={ProductStack} 
      initialParams={{ name:"view-dashboard-outline", type:'material-community' }}
      options={{
        headerShown: false ,
        title: 'All Categories',
        drawerLabelStyle:{paddingStart:0, marginStart:0},
        drawerIcon: ({focused, size}) => (
           <Icon
              name="view-dashboard-outline"
              size={size}
              color={focused ? Colors.primary[600] : Colors.dark[500]}
              type='material-community'
           />
        ),
     }}
    />

    {/* <Drawer.Screen name="MyAccount" component={MyAccountStack} 
      options={{
        title: 'My Account',
        headerShown: false ,
        drawerIcon: ({focused, size}) => (
          <Icon
             name="user"
             size={size}
             color={focused ? Colors.primary[600] : Colors.dark[500]}
             type='antdesign'
          />
        ),
     }}
    /> 
    <Drawer.Screen name="Cart" component={CartStack} 
      options={{
        title: 'My Cart',
        headerShown: false ,
        drawerIcon: ({focused, size}) => (
          <Icon
             name="handbag"
             size={size}
             color={focused ? Colors.primary[600] : Colors.dark[500]}
             type='simple-line-icon'
          />
        ),
     }}
    />  */}
  </Drawer.Navigator>
)

// const Tab = createBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();

const TabNav = ()=>(
  <Tab.Navigator
    activeColor={Colors.primary[500]}
    inactiveColor={Colors.dark[400]}
    barStyle={styles.tabbar}
    
  >
    <Tab.Screen 
      name="Home" 
      component={HomeStack} 
      options={{ 
        headerShown: false,
        tabBarLabel:"Shop Sopra",
        tabBarIcon:({focused, size}) => (
          <Icon
             name="home-outline"
             size={size}
             color={focused ? Colors.primary[500] : Colors.dark[400]}
             type='ionicon'
          />
        )
      }}
      
    />
    <Tab.Screen name="My_account" component={MyAccountStack} options={{ headerShown: false }} 
      options={{ 
        headerShown: false,
        tabBarLabel:"Account",
        tabBarIcon:({focused, size}) => (
          <Icon
             name="user"
             size={size}
             color={focused ? Colors.primary[500] : Colors.dark[600]}
             type='antdesign'
          />
        )
      }}
    />
    <Tab.Screen name="Cart" component={CartStack} options={{ headerShown: false }}
      options={{ 
        headerShown: false,
        tabBarLabel:"Cart",
        tabBarIcon:({focused, size}) => (
          <Icon
             name="handbag"
             size={size}
             color={focused ? Colors.primary[500] : Colors.dark[600]}
             type='simple-line-icon'
          />
        )
      }}
    />
  </Tab.Navigator>
)



const App = ()=> {
  const auth = useSelector(state => state.user.auth);
  console.log('auth',auth)
  return(
    <>
    
    <NavigationContainer>
      <Stack.Navigator>
        {auth?(
          <>
            <Stack.Screen  
              name="Main" 
              component={MainDrawer} 
              options={{ headerShown: false }}
            />
            <Stack.Screen 
              name="Auth" 
              component={LoginRegScreen} 
              options={{ headerShown: false }}
            />
          </>
        ):(
          // loading?
          //   <Stack.Screen 
          //     name="AuthLoading" 
          //     component={AuthLoadingPage} 
          //     options={{ headerShown: false }}
          //   />
          // :
            <Stack.Screen 
              name="Auth" 
              component={LoginRegScreen} 
              options={{ headerShown: false }}
            />
          )
        }

        
        <Stack.Screen 
          name="SearchScreen" 
          component={SearchScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="product_listing" 
          component={ProductListingScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="product_details" 
          component={ProductDetailsScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="product_filter" 
          component={ProductFilterScreen} 
          options={{ 
            headerShown: false,
            presentation: 'modal',
            headerMode:'screen'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  )
}

const styles = StyleSheet.create({
  tabbar:{
    backgroundColor:Colors.white,
  }
});

export default App;
