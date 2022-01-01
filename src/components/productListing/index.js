import React,{useEffect, useState, useReducer} from 'react';
import { View, Text,ActivityIndicator, ScrollView, StyleSheet } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import { useRoute } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import CardBlock from '../../utils/products/card.block';
import { productsByPaginate } from '../../store/actions/products.action';
import { getAllBrands } from "../../store/actions/brands.action";
import HeaderComponent from '../layout/HeaderComponent';
import Colors from '../../utils/Colors';
// import ProductFooter from './ProductFooter';
import ProductFilter from '../../utils/products/productFilter';
import ProductSort from '../../utils/products/productSort';



const defaultValues = { keywords:'',brand:[],category:[], min:0,max:100000,fabric:[],color:[], page:1 }

const ProductListingScreen = (props)=>{
    const [loading, setLoading] = useState(true);
    const [filterNo, setFilterNo] = useState(false);
    const [resetData, setResetData] = useState(false);
    const [sortActive, setSortActive] = useState(0);
    const [searchValues, setSearchValues] = useReducer(
        (state, newState) => ({...state,...newState }),
        defaultValues
    );
    const {params} = useRoute();
    const dispatch = useDispatch();
    const { byPaginate } = useSelector(state=> state.products);
    const brands = useSelector(state => state.brands);

    const handleResetSearch = () => {
        setSearchValues(defaultValues);
        setResetData(true);
    }

    // Filter
    const handleFilters = (filters, category)=> {
        if(category === 'brands'){
            setSearchValues({ brand: filters, page: 1 })
        }
        if(category === 'fabric'){
            setSearchValues({ fabric: filters, page:1 })
        }
        if(category === 'color'){
            setSearchValues({ color: filters, page:1 })
        }

    }

    // Range
    const handleRange = (values) => {
        setSearchValues({ min:values[0],max:values[1], page:1 }) 
    }

    const sortByProduct = (index, value, order) =>{
        // console.log('Filter',index, value, order)
        setLoading(true);
        setSortActive(index);
        let sortParams = {value, order}
        // console.log('Filter2',sortParams)
        if(value && order){
            dispatch(productsByPaginate(searchValues, sortParams));
        }
        
    }

    useEffect(()=>{
        dispatch(getAllBrands())
    },[dispatch]);

    useEffect(()=>{

        if(searchValues !== defaultValues){
            // alert(searchValues.keywords)
            

            if(searchValues.brand.length > 0 || searchValues.category.length > 0 || searchValues.color.length > 0 || searchValues.fabric.length > 0 || searchValues.min > 1 || searchValues.max < 99999){
                // alert('1');
                setFilterNo(true);
            }

            setLoading(true);
            setSortActive(null);
            dispatch(productsByPaginate(searchValues));
        }
        
    },[searchValues,dispatch]);

    useEffect(()=>{
        setLoading(false);
    },[byPaginate]);

    useEffect(()=>{
        
        if(params.searchBy){
            // console.log('set',params.searchBy)
            setSearchValues({ keywords: params.searchBy, page: 1 });
            // dispatch(productsByPaginate({ keywords: params.searchBy, page: 1 }));
        }

    },[params.searchBy, dispatch]);
    useEffect(()=>{
        
        if(params.filterBy){
            console.log('Filter by',params.filterBy)
            setSearchValues(params.filterBy);
            // dispatch(productsByPaginate({ keywords: params.searchBy, page: 1 }));
        }

    },[params.filterBy]);

    useEffect(()=>{
        
        // dispatch(productsByPaginate(searchValues))
        if(params.shortBy){
            let sortValue = {
                'sortBy':params.shortBy, 
                'order':'desc'
            }
            setLoading(true);
            setResetData(false);
            dispatch(productsByPaginate(searchValues, sortValue));
            // setSearchValues(searchValues, props.match.params.sort, 'desc');
        }

    },[params.shortBy, searchValues, dispatch]);

    // useEffect(() => {
    //     if(byPaginate && byPaginate.docs){
    //         let productFabric = byPaginate.docs.filter((thing, index) => {
    //             const _thing = JSON.stringify(thing.fabric);
    //             return index === byPaginate.docs.findIndex(obj => {
    //                 return JSON.stringify(obj.fabric) === _thing;
    //             });
    //         });
    //         let productColor = byPaginate.docs.filter((thing, index) => {
    //             const _thing = JSON.stringify(thing.color);
    //             return index === byPaginate.docs.findIndex(obj => {
    //                 return JSON.stringify(obj.color) === _thing;
    //             });
    //         });
    //         setFabric(productFabric);
    //         setColor(productColor);
    //     }
    // }, []);

    const renderProductCards = ()=>(

        byPaginate && byPaginate.docs.length>0?
            byPaginate.docs.map((item, i)=>(
                // <Link to={`${cardSort && cardSort==='category'?'/products/'+item.subcategory.name:'/product_detail/'+item._id}/${item.category.maincategory}`} className="product-home-link" key={item._id}>
                <View style={styles.productBox} key={item._id}>
                    <CardBlock 
                        item={item}
                        imageStyle={styles.cardImageStyle}
                        showFavorite={true}
                    />
                </View>

            ))
        
        :
        
        <View>
            <Text>Oops! no product foud</Text>
        </View>
    )


    // console.log(useRoute())

    return(
        <>
        <ScrollView
            stickyHeaderIndices={[0]}
        >
            <HeaderComponent 
                type="inner"
                pageTitle={props.route.params.pageTitle}
            />
            <View  style={{elevation:0}}>
                {!loading?
                    <View  style={styles.productContainer}>
                        {renderProductCards()}
                    </View>
                :
                    <View style={{marginVertical:20}}>
                        <ActivityIndicator size="large" color={Colors.secondary[500]} />
                    </View>
                }
            </View>

        </ScrollView>

        <View style={styles.footerWrapper}>
            <ProductSort sortByProduct={(index, value, order)=> sortByProduct(index, value, order)} sortActive={sortActive} />
            <ProductFilter 
                pageTitle={props.route.params.pageTitle}
                searchValues={searchValues}
                filterNo={filterNo}
            />
        </View>

        {/* <ProductFooter 
        sortByProduct={(index, value, order)=> sortByProduct(index, value, order)} sortIndex={sortActive}

        
        /> */}
        </>
    )
}

const styles = StyleSheet.create({
    productContainer:{
        flexDirection:'row',
        flexWrap:'wrap',
    },
    productBox:{
        width:'50%',
        paddingHorizontal:10
    },
    cardImageStyle:{
        height:200,
    },
    footerWrapper:{
        flexDirection:'row',
        backgroundColor:Colors.primary[500],
        paddingHorizontal:5,

    }
});

export default ProductListingScreen;