import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux';
import { Icon, Button, Input  } from 'react-native-elements';
import Colors from './Colors';
import { useNavigation } from '@react-navigation/native';
import { color } from 'react-native-reanimated';

export const TOKEN_KEY = 'token_key';

export const borderRadius = 12;
// export const boxShadow = 15;


export const TextTagReplact = (text) =>{
    // console.log(text)
    let replactText = text.replace(/<p>/g,"").replace(/<\/p>/g,"\n\n")
    // let replactText = text.replace(/(<p)/igm, '<Text').replace(/<\/p>/igm, '<\/Text>');
    // console.log(replactText)
    return replactText
}

export const InputBox = (props) => {
    return(
        <View>
            <Input
                keyboardType={props.keyboardType}
                leftIcon={
                    <Icon
                        type={props.leftIcon.type}
                        name={props.leftIcon.name}
                        size={props.leftIcon.size}
                        color={Colors.dark[300]}
                    />
                }
                leftIconContainerStyle={styles.inputIcon}
                placeholder={props.placeholder}
                // value={props.value}
                value={`${props.value}`}
                onChangeText={props.onChangeText(props.name)}
                onBlur={props.onBlur(props.name)}
                error={ props.errors && props.touched ? true : false}
                errorMessage={props.errors && props.touched ? props.errors : null}
            />
        </View>
    )
}


export const showToast = (type,text1,text2) => {
    // alert(text1)
    switch(type){
        case 'success':
            Toast.show({
                type,
                text1,
                text2,
                position: 'bottom',
                visibilityTime: 4000,
                autoHide: true,
                bottomOffset: 50
              });
        break;
        case 'error':
            Toast.show({
                type,
                text1,
                text2,
                position: 'bottom',
                visibilityTime: 4000,
                autoHide: true,
                bottomOffset: 50
              });
        break;
        default:
        null
    }
}

// Header Right component
export const headerRightComponent = (type)=>{
    const auth = useSelector(state => state.user.auth);
    const navigation = useNavigation();
    // console.log(navigation)
    return (
        <View
            style={{
                flexDirection:'row',
                alignItems:'center',
            }}
        >
            {type === 'home'?
                <>
                    <TouchableOpacity
                        style={{
                            position:'relative',
                            marginHorizontal: 6,
                            color:Colors.white
                        }}
                    >
                        <View 
                            style={{
                                backgroundColor:Colors.error[500],
                                width:15,
                                height:15,
                                borderRadius:50,
                                alignItems:'center',
                                justifyContent:'center',
                                position:'absolute',
                                top:-3,
                                right:-3,
                                zIndex:100
                            }}
                        >
                            <Text
                                style={{
                                    color:Colors.white,
                                    fontSize:10
                                }}
                            >9+</Text>
                        </View>
                        <Icon name="bell" type="evilicon" color={Colors.white} />
                    </TouchableOpacity>
                    {auth ?
                        <Button
                            title="Login"
                            type="clear"
                            titleStyle={{color:Colors.white}}
                            onPress={()=> navigation.navigate('Auth')}
                        />
                    : null}
                </>
            :
                <>
                    <TouchableOpacity
                        style={{
                            position:'relative',
                            marginHorizontal: 6,
                            color:Colors.white
                        }}
                        onPress={()=>auth ?navigation.navigate('SearchScreen'):navigation.navigate('Auth')}
                    >
                        
                        <Icon name="search" type="evilicon" color={Colors.white} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            position:'relative',
                            marginHorizontal: 6,
                            color:Colors.white
                        }}
                    >
                        
                        <Icon name="heart" type="evilicon" color={Colors.white} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            position:'relative',
                            marginHorizontal: 6,
                            color:Colors.white
                        }}
                    >
                        
                        <Icon name="handbag" type="simple-line-icon" color={Colors.white} size={18} />
                    </TouchableOpacity> 
                </>
            }

        </View>
    );
    // switch(type){
    //     case 'home'
    // }
}


// Error
export const errorHelper = (errors,touched, value)=>({
    error:errors[value] && touched[value] ? true : false,
    errorMessage: errors[value] && touched[value] ? errors[value] : null
}); 

// Cookie
// export const getTokenCookie = (value)=> cookie.load('x-access-token');
// export const removeTokenCookie = ()=> cookie.remove('x-access-token', {path:'/'});
// export const getAuthHeader = ()=>{
//     return { headers: {'Authorization': `Bearer ${getTokenCookie()}` }}
// }

export const MenuBack = ({backStyle}) => {

    const navigation = useNavigation()
    return(
        <View style={{margin:5}}>
            <Icon
                name="arrow-back"
                type="material-icons"
                color={Colors.white}
                onPress={()=> navigation.goBack()}
            />
        </View>
    )
}

export const RenderCardImage = (image)=>{
    if(image.length > 0){
        // return image[0];
        return (
            {uri:`${image[0]}`}
        );
    }else{
        return require('../assets/imgs/no-image.jpg')
    }
}

export const getTokenCookie = async()=> {
    try{
        await AsyncStorage.getItem(TOKEN_KEY)
    }catch(error){
        console.log(error)
    }
};
export const removeTokenCookie = async()=> {
    try{
        await AsyncStorage.removeItem(TOKEN_KEY);
    }catch(error){

    }
};
export const getAuthHeader = ()=>{
    return { headers: {'Authorization': `Bearer ${getTokenCookie()}` }}
}

const styles = StyleSheet.create({
    inputIcon:{
        color:Colors.dark[300]
    }
});