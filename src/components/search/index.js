import React, { useEffect, useState } from "react";
import { View, Dimensions, Platform, ScrollView, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from "react-native-elements";
import SearchableDropdown from 'react-native-searchable-dropdown';
import { useDispatch, useSelector } from "react-redux";
import Colors from "../../utils/Colors";
import { getAllCategory } from "../../store/actions/category.action";


const SearchScreen = ({navigation})=>{
  const [autocomplete, setAutocomplete] = useState([]);
  const [selectedValue, setSelectedValue] = useState({});
  const [searchText, setSearchText] = useState();

  const dispatch = useDispatch(); 
  const {allCategoryArrange, allCategoryList} = useSelector(state => state.categoryes); 


  const textChangeSearch = (text)=>{
    setSearchText(text);
  }
  const itemSelectSearch = (item)=>{
    setSelectedValue(item);
    navigation.navigate('product_listing',{
      searchBy:item.name
    })
  }

  const onSearchIconPress = ()=>{
    navigation.navigate('product_listing',{
      searchBy:searchText
    })
  }
  

  useEffect(()=>{
    dispatch(getAllCategory({where:'byArrange'}));

    dispatch(getAllCategory({where:'byList'}))
  },[dispatch]);

  useEffect(()=>{
    if(allCategoryList && allCategoryList.length > 0){
        setAutocomplete(allCategoryList);
    }

},[allCategoryList])

// console.log(selectedValue, searchText)


// console.log(FilterData)

  return(
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.searchWrapper}>
        
        <View style={styles.searchContainer}>
          <View style={{marginVertical:10, marginRight:10}}>
            <Icon
                name="arrow-back"
                type="material-icons"
                color={Colors.primary[500]}
                onPress={()=> navigation.goBack()}
            />
          </View>
          <SearchableDropdown
            onTextChange={(text) => textChangeSearch(text)}
            onItemSelect={(item) => itemSelectSearch(item)}
            
            items={autocomplete}
            defaultIndex={null}
            resetValue={false}
            selectedItems={selectedValue}
            textInputProps={
              {
                autoFocus:true,
                autoCorrect:false,
                placeholder: "Search",
                underlineColorAndroid: "transparent",
                onSubmitEditing:text => onSearchIconPress()
                // onTextChange: text => alert(text)
                
              }
            }
            listProps={
              {
                nestedScrollEnabled: true,
              }
            }
            
            containerStyle={styles.containerStyle}
            textInputStyle={styles.textInputStyle}
            itemStyle={styles.itemStyle}
            itemTextStyle={{
              color: Colors.dark[600],
            }}
            itemsContainerStyle={styles.itemsContainerStyle}
          />
          <Icon 
            name="search" type="evilIcons" color={Colors.dark[400]} containerStyle={styles.iconStyle} 
            onPress={()=> onSearchIconPress()}
          />
        </View>
      </View>
            
        
    </SafeAreaView>
  )
}

const { width } = Dimensions.get('window');

const widthFinal = width - 60

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: 'white',
  //   padding: 10,
  // },
  mainContainer:{
      marginTop: Platform.OS === 'ios'? 50:30,
  },
  searchWrapper:{
    flexDirection:'row',
    alignItems:'flex-start',
    justifyContent:'flex-start',
    paddingHorizontal:15,
    paddingVertical:10,
    // elevation:5,
    // backgroundColor:Colors.white
  },
  searchContainer:{
    borderRadius: 0,
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'flex-start',
    width:'100%',
    position:'relative'
  },
  containerStyle:{
    flex:1, 
    marginTop:0,
    paddingTop:0
  },
  textInputStyle:{
    fontSize:14,
    borderWidth:1,
    borderColor:Colors.dark[200],
    width:'100%',
    paddingLeft:20,
    paddingRight:50,
    paddingVertical:8,
    borderRadius:3
    // backgroundColor:Colors.white,
  },
  iconStyle:{
    position:'absolute',
    right:2,
    top:2,
    zIndex:200,
    zIndex:200,
    paddingVertical:10,
    paddingHorizontal:10
  },
  itemsContainerStyle:{
    maxHeight: '85%',
    backgroundColor:Colors.dark[50],
    // borderColor: Colors.dark[100],
    // borderWidth: 1,
    borderRadius:4,
    marginTop:5,
    borderColor:Colors.dark[200],
    left:-34,
    width:width - 30,
    elevation:2
  },
  itemStyle:{
    padding: 10,
    marginTop: 0,
    marginBottom:0,
    // backgroundColor: Colors.dark[50],
    borderBottomColor: Colors.dark[100],
    borderBottomWidth: 1,
    backgroundColor:'transparent',
    fontSize:12
  },
  menuBack:{
    color:Colors.primary[500]
  },
    
});

export default SearchScreen;