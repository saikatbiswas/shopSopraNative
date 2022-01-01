import React, { useEffect, useState } from "react";
import { View, Text, Platform, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import Autocomplete from 'react-native-autocomplete-input';
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../store/actions/category.action";


const SearchScreen = ()=>{
  const [autocomplete, setAutocomplete] = useState([]);
  // const [selectedValue, setSelectedValue] = useState({});

  const dispatch = useDispatch(); 
  const {allCategoryArrange, allCategoryList} = useSelector(state => state.categoryes);
  

  // Used to set Main JSON Data.
  const [MainJSON, setMainJSON] = useState([]);
 
  // Used to set Filter JSON Data.
  const [FilterData, setFilterData] = useState([]);
  
  // Used to set Selected Item in State.
  const [selectedItem, setselectedItem] = useState({});
 
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then((res) => res.json())
      .then((json) => {
        setMainJSON(json);
      })
      .catch((e) => {
        alert(e);
      });
  }, []);
 
  const SearchDataFromJSON = (query) => {
    if (query) {
      //Making the Search as Case Insensitive.
      const regex = new RegExp(`${query.trim()}`, 'i');
      console.log(MainJSON.filter((data) => data.title.search(regex) >= 0))
      setFilterData(
        MainJSON.filter((data) => data.title.search(regex) >= 0)
      );
    } else {
      setFilterData([]);
    }
  };

  useEffect(()=>{
    dispatch(getAllCategory({where:'byArrange'}));

    dispatch(getAllCategory({where:'byList'}))
  },[dispatch]);

  useEffect(()=>{
    if(allCategoryList && allCategoryList.length > 0){
        setAutocomplete(allCategoryList);
    }

},[allCategoryList])

// console.log(autocomplete)

const data = [
  { id: 1, name: 'Ruben von der Vein', gender: 'girl' },
  { id: 2, name: 'Pjotr Versjuurre', gender: 'boy' },
  { id: 3, name: 'Bjart von Klef', gender: 'boy' },
  { id: 4, name: 'Riesjard Lindhoe', gender: 'boy' }
]

console.log(FilterData)

    return(
        // <ScrollView>
        <View style={styles.mainContainer}>
          <View style={{
            height:50,
            backgroundColor:'red'
          }}>
            <Autocomplete
              autoCapitalize="none"
              autoCorrect={false}
              containerStyle={styles.AutocompleteStyle}
              data={FilterData}
              defaultValue={
                JSON.stringify(selectedItem) === '{}' ?
                '' :
                selectedItem.title
              }
              keyExtractor={(item, i) => i.toString()}
              onChangeText={(text) => SearchDataFromJSON(text)}
              placeholder="Type The Search Keyword..."
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() => {
                    setselectedItem(item);
                    setFilterData([]);
                  }}>
                  <Text style={styles.SearchBoxTextItem}>
                      {item.title}
                  </Text>
                </TouchableOpacity>
              )}
            />
    
            <View style={styles.selectedTextContainer}>
              {
                  <Text style={styles.selectedTextStyle}>
                    {JSON.stringify(selectedItem)}
                  </Text>
              }
            </View>
    
          </View>
        </View>
            // <Autocomplete
                // autoCapitalize="none"
                // autoCorrect={false}
                // containerStyle={styles.autocompleteContainer}
                // Data to show in suggestion
                // data={autocomplete}
                // Default value if you want to set something in input
                // onChangeText={(text) => setSelectedValue(text)}
                // placeholder="Search"
                // defaultValue="Products"
                // renderItem={({item}) => (
                //     // For the suggestion view
                //     <TouchableOpacity
                //     onPress={() => {
                //         alert('1');
                //         // setSelectedValue(item);
                //         // setFilteredFilms([]);
                //     }}>
                //         <Text style={styles.itemText}>
                //             {item}
                //         </Text>
                //     </TouchableOpacity>
                // )}
            // /> 
        
        // </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        marginTop: Platform.OS === 'ios'? 65:45
    },
    autocompleteContainer:{
        marginHorizontal: 20,
        backgroundColor: '#ffffff',
        borderWidth: 0,
        zIndex:2000,
        position:'relative',
        borderWidth:5,
        height:100,
        paddingVertical:10,
        top:0,
        flex: 1,
    },
    inputContainerStyle:{
      height:100,
      borderWidth:5
    },
    itemText:{

    },

    descriptionContainer: {
        flex: 1,
        justifyContent: 'center',
      },
      itemText: {
        fontSize: 15,
        paddingTop: 5,
        paddingBottom: 5,
        margin: 2,
      },
      infoText: {
        textAlign: 'center',
        fontSize: 16,
      },


      AutocompleteStyle: {
        flex: 1,
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0,
        zIndex: 1,
       borderWidth:1
      },
      SearchBoxTextItem: {
        margin: 5,
        fontSize: 16,
        paddingTop: 4,
      },
      selectedTextContainer: {
        flex: 1,
        justifyContent: 'center',
      },
      selectedTextStyle: {
        textAlign: 'center',
        fontSize: 18,
      },
});

export default SearchScreen;