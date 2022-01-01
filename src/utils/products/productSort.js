import React,{useState} from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { BottomSheet, Icon, ListItem } from 'react-native-elements';
import Colors from '../Colors';


const ProductSort = ({sortByProduct, sortActive})=> {
    const [isVisible, setIsVisible] = useState(false);
    const [sortValue, setSortValue] = useState('Popularity');
    

    const list = [
        { 
            title: 'Popularity',
            value:'itemsold',
            sortBy:'desc'
        },
        { 
            title: 'Price -- Low to High',
            value:'price',
            sortBy:'desc'
        },
        { 
            title: 'Price -- High to Low',
            value:'price',
            sortBy:'asc'
        },
        { 
            title: 'Newest First',
            value:'date',
            sortBy:'desc'
        },
        {
            title: 'Close' ,
            icon: 'close',
            value:'close',
            iconColor:Colors.error[600],
            iconType:'evilicon',
            containerStyle: { 
                backgroundColor:Colors.error[100]
            },
            titleStyle: { color: Colors.error[600] },
            onPress: () => setIsVisible(false),
        },
    ];

    const sortByProductFilter = (index, value, order, title) =>{
        // console.log(index, value, order)
        // setLoading(true);
        if(value === 'close'){
            setIsVisible(false);
        }else{
            // setSortActive(index);
            setIsVisible(false);
            sortByProduct(index, value, order);
            setSortValue(title)
            // let params = {value, order}
            // if(value && order){
            //     dispatch(productsByPaginate(searchValues, params));
            // }
        }
        
        

    }

    return(
        <View style={styles.sortWrapper}>
            <TouchableWithoutFeedback
                onPress={() => setIsVisible(true)}
            >
                <View style={styles.footerButton}>
                    <Icon name="sort" type="material-community" color={Colors.white} size={26} style={{marginRight:10}} /> 
                    <View>
                        <Text style={{color:Colors.white, textTransform:'uppercase', fontSize:14, marginBottom:-2}}>Sort</Text>
                        <Text style={{color:Colors.dark[50], fontSize:8}}>{sortValue}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
            <BottomSheet
                isVisible={isVisible}
                containerStyle={{ backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)' }}
                modalProps={{
                    onRequestClose: () => {alert('1')}
                }}
                
            >
                {list.map((item, i) => (
                    <ListItem key={i} containerStyle={[item.containerStyle, i=== sortActive?styles.activeStyle:null]} onPress={()=>sortByProductFilter(i, item.value,item.sortBy, item.title)}>
                        <Icon name={item.icon} type={item.iconType} color={item.iconColor} />
                        <ListItem.Content>
                            <ListItem.Title style={item.titleStyle}>{item.title}</ListItem.Title>
                        </ListItem.Content>
                    </ListItem>
                ))}
            </BottomSheet>
        </View>
    )
}

const styles = StyleSheet.create({
    sortWrapper:{
        flexBasis:'50%',
        borderRightWidth:1,
        borderRightColor:Colors.primary[300]
    },
    footerButton:{
        flexDirection:'row',
        paddingVertical:8,
        paddingHorizontal:20,
        color:Colors.white,
        justifyContent:'center',
        alignItems:'center'
    },
    activeStyle:{
        backgroundColor:Colors.primary[50]
    },
    closeStyle:{
        backgroundColor:'blue'
    }
});

export default ProductSort;