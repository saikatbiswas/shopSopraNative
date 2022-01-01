import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import { MenuBack, headerRightComponent } from '../../utils/tools';
import { LeftIcon } from '../../routes/stacks';
import Colors from '../../utils/Colors';
import { useNavigation } from '@react-navigation/native';

const HeaderComponent = (props)=>{
    // console.log('Header',props)
    const navigation = useNavigation();

    const centerComponent = () => (
        <View style={{margin:5}}>
            <Image
                source={require('../../assets/imgs/shop-sopra.png')}
                style={styles.logo}
            />
        </View>
    )

    let template = ''
    switch(props.type){
        case "home":
            template = <View style={{position:'relative', zIndex:1000, elevation:6}}>
                <Header
                    leftComponent={<LeftIcon/>}
                    centerComponent={centerComponent}
                    rightComponent={headerRightComponent('home')}

                    containerStyle={styles.headerContainer}
                    centerContainerStyle={styles.centerContainerStyle}
                    leftContainerStyle={{marginRight:0, paddingRight:0}}
                />
                <View style={styles.searchwrapper}>
                    <TouchableWithoutFeedback
                        onPress={()=> navigation.navigate('SearchScreen')}
                    >
                        <View 
                            style={styles.searchContainer}
                        >
                            <Icon name="search" type="evilIcons" color={Colors.dark[400]} />
                            <Text style={styles.searchText}>Search by Product, Brand, Size & more...</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        break;
        case "menu":
            template = <View style={{position:'relative', zIndex:500, elevation:6}}>
                <Header
                    leftComponent={<LeftIcon/>}
                    centerComponent={centerComponent}
                    rightComponent={headerRightComponent}

                    centerComponent={{ text: props.pageTitle, style: { color: '#fff' } }}
                    centerContainerStyle={styles.centerContainerStyle}
                    leftContainerStyle={{marginRight:0, paddingRight:0}}
                />
            </View>
        break;
        case "inner":
            template = <View style={{position:'relative', zIndex:500, elevation:7}}>
                <Header
                    leftComponent={<MenuBack/>}
                    centerComponent={{ text: props.pageTitle, style: { color: '#fff' } }}
                    rightComponent={props.headerType !== 'filter'?headerRightComponent:null}

                    containerStyle={styles.headerContainer}
                    centerContainerStyle={styles.centerContainerStyle}
                    leftContainerStyle={{marginRight:0, paddingRight:0}}
                />
            </View>
        break;
        default: template = "";

    }

    return template;
}

const styles = StyleSheet.create({
    headerContainer:{
        backgroundColor:Colors.primary[500],
        borderBottomWidth:0,
        borderColor:'red'
    },
    logo:{
        resizeMode: "contain",
        width:150,
        height:30,
        marginLeft:-20
    },
    centerContainerStyle:{
        justifyContent:'flex-start',
        alignItems:'flex-start',
        marginLeft:0,
        paddingLeft:0
    },
    searchwrapper:{
        backgroundColor: Colors.primary[500],
        paddingBottom:10,
        paddingHorizontal: 15,
    },
    searchContainer:{
        borderRadius: 5,
        backgroundColor:Colors.dark[100],
        paddingHorizontal:10,
        paddingVertical:6,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    searchText:{
        fontSize:14,
        color:Colors.dark[300],
        marginLeft:12
    },
    centerContainerStyle:{
        justifyContent:'flex-start',
        alignItems:'flex-start',
        marginLeft:0,
        paddingLeft:0
    },

});

export default HeaderComponent;