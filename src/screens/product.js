import { View, Text, Image, ScrollView, StyleSheet, Pressable, StatusBar } from 'react-native'
import React from 'react'
import Divider from 'src/shared/divider';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { append, incrementCount, cartState, decrementCount } from 'src/slices/cart.slice';

const ProductScreen = ({ route }) =>
{
    const { product } = route.params;
    const dispatch = useDispatch();
    const state = useSelector(cartState);
    const currentCount = state.cartProducts?.find(item => item.id === product.id)?.count;


    const handleAddToCart = () =>
    {
        if (!currentCount) dispatch(append({ ...product, count: 1 }));
        else dispatch(incrementCount({ id: product.id, count: currentCount + 1 }));
    }


    return (
        <ScrollView contentContainerStyle={styles.content_container} style={{ flex: 1 }}>
            <StatusBar animated={true} 
                barStyle='dark-content'
                backgroundColor="#eee"
                showHideTransition='fade' hidden={false} />
            <Image source={{ uri: product.image }} style={styles.product_img} />
            <Divider />

            <Text style={styles.category}>{product.category}</Text>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.description}>{product.description}</Text>

            <View style={styles.prices_container}>
                <View style={{flexDirection:"row", alignItems:"center"}}>
                    <Text style={styles.newPrice}>${product.price}</Text>
                    <Text style={styles.discount}>50%</Text>
                </View>
                <Text style={styles.oldPrice}>${product.price * 2}</Text>
            </View>

            <View style={styles.productsCount_container}>
                <FontAwesome
                    name="minus"
                    size={24}
                    color="orange"
                    onPress={() => currentCount && currentCount > 0 ? dispatch(decrementCount({ id: product.id, count:  currentCount - 1})) : null} />
                <Text>{currentCount ? currentCount : 0}</Text>
                <FontAwesome name="plus" size={24} color="orange" onPress={handleAddToCart}/>
            </View>

            <Pressable style={styles.button} onPress={handleAddToCart}>
                <Text style={{color:"#fff", marginHorizontal:5,}}>Add to cart</Text>
                <MaterialIcons name="add-shopping-cart" size={24} color="white" />
            </Pressable>

        </ScrollView>
    );
}
const styles = StyleSheet.create({
    content_container: {
        backgroundColor: "#fff",
        width: "100%",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: 20,
    },
    product_img: {
        width: "100%",
        height: 300,
        resizeMode: "contain",
        marginBottom: 25
    },
    category: {
        marginTop: 20,
        marginBottom:10,
        color: "hsl(26, 100%, 55%)",
        textTransform: "uppercase",
        fontFamily:"font-bold"

    },
    title: {
        fontSize: 18,
        fontFamily: "font-bold",
        textAlign: "left",
        marginBottom:25,
        
    },
    description: {
        fontSize: 15,
        textAlign: "justify",
        color: "#999",
        lineHeight:22
    },
    prices_container: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 25,
        width: "100%",
        justifyContent: "space-between",
    },
    newPrice: {
        fontFamily: "font-bold",
        fontSize: 30,
    },
    discount:{
        backgroundColor:"hsl(25, 100%, 94%)",
        color:"hsl(26, 100%, 55%)",
        alignSelf:"flex-start",
        fontSize: 16,
        fontFamily:"font-bold",
        paddingHorizontal:12,
        paddingVertical:3,
        borderRadius: 5,
        marginHorizontal: 20,
        overflow: "hidden",
        marginTop:5
    },
    oldPrice: {
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
        fontSize: 15,
        letterSpacing: 1,
        color:"#888"
    },
    button: {
        flexDirection: "row",
        width: "100%",
        height: 45,
        backgroundColor: "hsl(26, 100%, 55%)",
        alignItems: "center",
        justifyContent: "center",
        marginTop:20,
        borderRadius: 5,
    },
    productsCount_container: {
        flexDirection: "row",
        width: "100%",
        backgroundColor: "#eee",
        height: 45,
        alignItems: 'center',
        justifyContent: "space-between",
        paddingHorizontal: 25,
        borderRadius:5
    }
})
export default ProductScreen
