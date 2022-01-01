import React, { useEffect, useState, useReducer } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, ScrollView, TouchableWithoutFeedback, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Badge, Icon, withBadge } from 'react-native-elements'
import HeaderComponent from '../layout/HeaderComponent';
import { Button } from 'react-native-elements';
import Colors from '../../utils/Colors';
import FilterBox from './FilterBox';
import RangeSelect from './rangeSelect';
import { getAllBrands } from "../../store/actions/brands.action";



const ProductFilterScreen = (props) => {
    const defaultValues = { brand: [], category: [], min: 0, max: 100000, fabric: [], color: [], page: 1 }
    // console.log('Filter',props)
    const [initSearch, setInitSearch] = useState(defaultValues);
    
    const [selectedItem, setSelectedItem] = useState('1');
    const [resetData, setResetData] = useState(false);
    const [searchValues, setSearchValues] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        // initSearch
        defaultValues
        // props.route.params.searchValues
    );

    const [menuItems, setMenuItems] = useState([
        { 
            id: '1', 
            name: 'Price', 
        },
        { 
            id: '2', 
            name: 'Brands', 
            filterLength:searchValues.brand?searchValues.brand:0
        },
        { 
            id: '3', 
            name: 'Fabric', 
        },
        { 
            id: '4', 
            name: 'Color', 
        },
    ]);

    const dispatch = useDispatch();
    const brands = useSelector(state => state.brands);

    // Price
    const priceList = [
        {
            _id:500,
            name:'Below Rs.500'
        },{
            _id:501_1000,
            name:'Rs.501-1000'
        },{
            _id:1001_1500,
            name:'Rs.1001-1500'
        },{
            _id:1501_2000,
            name:'Rs.1501-2000'
        },{
            _id:2001_3000,
            name:'Rs.2001-3000'
        },{
            _id:3000,
            name:'Above Rs.3000'
        }
    ]

    // Filter
    const handleFilters = (filters, category) => {
        if (category === 'brands') {
            console.log('Brand', filters)
            setSearchValues({ brand: filters})
        }
        // if (category === 'price') {
        //     console.log('Price', filters);
        //     // setSearchValues({ min:filters[0],max:filters[1], })
        // }
        if (category === 'fabric') {
            setSearchValues({ fabric: filters })
        }
        if (category === 'color') {
            setSearchValues({ color: filters })
        }

    }
    const handleRange = (values) => {
        setSearchValues({ min:values[0],max:values[1]}) 
    }

    const handleResetSearch = () => {
        // console.log('defaultValues',defaultValues)
        setSearchValues(defaultValues);
        setInitSearch(defaultValues);
        setResetData(true);
    }


    useEffect(() => {
        dispatch(getAllBrands())
    }, [dispatch]);

    useEffect(() => {
        // setInitSearch(props.route.params.searchValues)
        setSearchValues(props.route.params.searchValues)
    }, []);

    useEffect(() => {
        // setInitSearch(props.route.params.searchValues)
        setMenuItems([
            { 
                id: '1', 
                name: 'Price', 
            },
            { 
                id: '2', 
                name: 'Brands', 
                filterLength:searchValues.brand?searchValues.brand:0
            },
            { 
                id: '3', 
                name: 'Fabric', 
            },
            { 
                id: '4', 
                name: 'Color', 
            },
        ]);
    }, [searchValues]);

    console.log('defaultValues 2', searchValues)
    // console.log('Search value', initSearch, props.route.params.searchValues)

    return (
        <>

            <HeaderComponent
                type="inner"
                pageTitle={props.route.params.pageTitle}
                headerType="filter"
            />

            <View style={styles.filterWrapper}>
                <View style={styles.menuColumn}>
                    {menuItems.map(
                        (item, index) => {
                            return (
                                <TouchableOpacity key={item.id} onPress={() => setSelectedItem(item.id)} style={[styles.menuItem, item.id === selectedItem ? styles.selectedMenuItem : null]}>
                                    <View style={styles.menuItemInner}>
                                        <Text 
                                            style={[styles.menuItemText, item.id === selectedItem ? styles.selectedMenuItemText : null]}
                                        >
                                            {item.name}
                                            
                                        </Text>
                                        {item.filterLength && item.filterLength.length > 0 &&
                                            <Badge
                                                status="primary"
                                                // containerStyle={{ position: 'absolute', top: -4, right: -4 }}
                                                value={item.filterLength.length}
                                            />
                                            
                                        }
                                    </View>
                                    
                                </TouchableOpacity>
                            )
                        }
                    )
                    }
                </View>
                <View style={styles.menuContainer}>
                    <ScrollView>
                        
                        {
                            selectedItem === '1' &&
                            // <RangeSelect 
                            //     title="Price range"
                            //     handleRange={(values)=> handleRange(values)}
                            //     priceMin={searchValues.min}
                            //     priceMax={searchValues.max}
                            // />
                            <FilterBox
                                title="Price"
                                list={priceList}
                                brandCheck={searchValues.min}
                                handleFilters={(filters) => handleFilters(filters, 'price')}
                                resetData={resetData}
                            />
                        }
                        {
                            selectedItem === '2' &&
                            <FilterBox
                                title="Brands"
                                list={brands.all}
                                brandCheck={searchValues.brand}
                                handleFilters={(filters) => handleFilters(filters, 'brands')}
                                resetData={resetData}
                            />
                        }
                    </ScrollView>
                </View>
            </View>

            <View style={styles.filterFooter}>
                <View style={{ paddingHorizontal: 10, width: '40%' }}>
                    <Button title="Reset" type="outline" titleStyle={{ color: Colors.dark[600] }} onPress={() => handleResetSearch()} />
                </View>
                <View style={{ paddingHorizontal: 10, width: '60%' }}>
                    <Button title="Apply Filter" onPress={() => props.navigation.navigate('product_listing', {
                        filterBy: searchValues,
                        pageTitle:props.route.params.pagePatentTitle
                    })} />
                </View>


            </View>


        </>
    )
}

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
    filterWrapper: {
        flexDirection: 'row',
        backgroundColor: Colors.white,
    },
    menuColumn: {
        backgroundColor: Colors.dark[100],
        height: height - 125,
        width: '33%'
    },
    menuItem: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 14,
        paddingVertical: 14,
    },
    menuItemInner:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    selectedMenuItem: {
        backgroundColor: Colors.white,

    },

    menuItemText: {
        alignSelf: 'flex-start',
        color: Colors.dark[600],
        fontSize: 15
    },
    selectedMenuItemText: {
        color: Colors.primary[500],
    },


    // settings column -right
    menuContainer: {
        width: '67%',
        padding: 10,
    },
    filterFooter: {
        backgroundColor: Colors.white,
        paddingHorizontal: 5,
        paddingVertical: 15,
        flexDirection: 'row'
    }
});

export default ProductFilterScreen;