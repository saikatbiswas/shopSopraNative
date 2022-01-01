import React from "react";
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import { View, Text, Image, StyleSheet } from "react-native";
import { Button, Icon } from "react-native-elements";
import Colors from "../utils/Colors";
import { useDispatch } from "react-redux";
import { logoutUser } from "../store/actions";
import Logo from '../assets/imgs/shop-sopra.png';

const SideDrawerNav = (props) => {
    // console.log(props);
    const dispatch = useDispatch();
    // const mainNavOptions = [
    //     {title:'News', location:'Home', icon:'newspaper',iconType:'ionicon' },
    //     {title:'Videos', location:'Videos', icon:'video', iconType:'entypo'},
    //     {title:'Profile', location:'Profile', icon:'profile', iconType:'antdesign'},
    // ]


    return(
        <DrawerContentScrollView {...props}>
            <View style={styles.logoContainer}>
                <Image
                    source={require('../assets/imgs/shop-sopra.png')}
                    style={styles.logo}
                />
            </View>
            <DrawerItemList {...props} />
            <DrawerItem
                label="Logout"
                onPress={() => dispatch(logoutUser())}
                style={styles.logout}
                inactiveTintColor={Colors.dark[500]}
                activeTintColor={Colors.primary[600]}
                activeBackgroundColor={Colors.primary[400]}
                icon={({focused, size}) => <Icon name="logout" type='material-icons' size={size} color={focused ? Colors.primary[600] : Colors.dark[500]} />}
                style={{marginLeft:0, marginRight:0}}
                labelStyle={{marginLeft:0, marginRight:0}}
                
            />
            {/* {mainNavOptions.map((item, i)=>(
                <Button
                    type="clear"
                    key={item.location+i}
                    icon={ <Icon name={item.icon} type={item.iconType?item.iconType:''} iconStyle={styles.icon} /> }
                    title={item.title}
                    onPress={()=>props.navigation.navigate(item.location)}
                    buttonStyle={styles.button}
                    titleStyle={{fontWeight:'normal', color:Colors.white,}}
                />
            ))} */}
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    logoContainer:{
        marginTop:20,
        marginBottom:50,
    },
    logo:{
        resizeMode: "contain",
        width:'98%',
        height:42
    },
    button:{
        color:Colors.white,
        borderRadius:0,
        borderBottomWidth:1,
        borderBottomColor:Colors.primary[300],
        textAlign:'left',
        justifyContent:'flex-start',
        height:46

    },
    icon:{
        color: '#ffffff',
        marginEnd:10,
        fontSize: 20
    },
    logout:{
        marginHorizontal:0
    }
});

export default SideDrawerNav;